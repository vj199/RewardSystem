// Higher Order Class to make all network calls
import axios, {AxiosError} from 'axios';
import {APIWithOfflineRouter, HTTP_METHODS, urlBuilder} from './httpHelper';
import {APIConfig} from '../config/serverConfig';
import {APIError, APIResponse} from './responseParser';
import {refreshAuthToken} from './tokenRefresher';
import {APIAborter} from './abortController';
import offlineManager from './offlineManager';
import {HTTP_STATUS} from './statusCode';
import {apiError, offlineNotation} from './errorParser';
// import {UserState} from 'redux/dispatcher/UserState';
import {APIRouter} from './httpHelper';
import {AsyncStorageUtils} from '@helpers/AsyncStorage';
import {Stores} from '@redux/Stores/Store';
import {AppActions} from '@redux/Slices/AppSlice';

// ********************
// Create a new Instance of NetworkManager by passing APIRouter argument
// After creating instance, call `request` method to make network request
// Example:
// const payload = {email: "example@gmail.com", password: "123456"}
// const instance = NetworkManager(API.Auth.Login)
// const result = await instance.request(payload)
// --------------------
// You can also pass some id in the url as parameter
// If params are named params then pass an object, the key name must match the param name
// Eg. If the URL is like "https://example.com/login?type=regular", then request would look like below
// const result = await instance.request(payload, {type: "regular"})
// --------------------
// If the params are not named then pass an array of data
// Eg. If the URL is like "https://example.com/user/1/2", then request would look like below
// const result = await instance.request(payload, ["id1", "id2"])
// ********************

export default async function networkManager(
  router: APIRouter,
  withFile: boolean = false,
) {
  const {TIMEOUT, API_AUTH_HEADER, AUTH_TYPE, CONTENT_TYPE} = APIConfig;
  const REQ_CONTENT_TYPE = withFile
    ? CONTENT_TYPE.MULTIPART
    : CONTENT_TYPE.JSON;

  axios.defaults.baseURL = router.baseURL;
  axios.defaults.timeout = TIMEOUT;
  axios.defaults.headers.common['Content-Type'] = REQ_CONTENT_TYPE;
  axios.defaults.headers.common['Accept-Language'] = 'en';

  const authToken = await AsyncStorageUtils.getAuthToken();

  if (authToken && authToken !== 'undefined') {
    axios.defaults.headers.common[
      API_AUTH_HEADER
    ] = `${AUTH_TYPE} ${authToken}`;
  }

  const AppEnvIsDev = process.env.REACT_APP_APP_ENV === 'dev';
  let refreshCount = 0;

  async function request<T>(
    body = {},
    params = {} || [],
  ): Promise<APIResponse<T>> {
    const url = urlBuilder(router, params);
    const getHttpMethod = router.method !== HTTP_METHODS.GET;
    const getArrayParams = !Array.isArray(params) && Object.keys(params).length;
    const httpBody = httpBodyBuilder(body, withFile);

    try {
      const result = await axios.request({
        signal: APIAborter.initiate().signal,
        url: url,
        method: router.method,
        ...(getHttpMethod && {data: httpBody}),
        ...(getArrayParams && {params: params}),
      });
      // If token expired, get it refreshed
      const response = result.data;
      return new APIResponse(
        response.data,
        response.success,
        result.status,
        response.data?.message,
      );
    } catch (err: any) {
      // Catch all errors
      // const error = err as AxiosError<any, any>;
      apiError(err?.response?.data?.error?.message);
      const IsNetworkError = err.code === HTTP_STATUS.NETWORK_ERR;
      const IsOfflineRouter = router instanceof APIWithOfflineRouter;
      if (IsOfflineRouter && (IsNetworkError || AppEnvIsDev)) {
        offlineNotation();
        return offlineManager(router.offlineJson);
      }
      if (err.response?.status === 401) {
        if (refreshCount < APIConfig.MAX_REFRESH_ATTEMPTS) {
          const refreshToken = await AsyncStorageUtils.getRefreshToken();
          if (refreshToken && refreshToken !== 'undefined')
            await refreshAuthToken(refreshToken);
          refreshCount++;
          // pass the control back to network manager
          return await request(body, params);
        } else {
          Stores.dispatch(AppActions.LOGOUT());
          // UserState.observeLogout();
        }
      } else if (err.code === HTTP_STATUS.NETWORK_ERR) {
        apiError('Internal server error!');
      }
      return new APIError(err.message, err.code);
    }
  }
  return {
    request,
  };
}

// Prepare endpoint url with params

// Prepare endpoint body for no GET requests
function httpBodyBuilder(body: any, withFile: boolean) {
  if (withFile) {
    const formData = new FormData() as FormData;
    for (let key in body) {
      if (body[key] instanceof FileList) {
        for (let file of body[key]) {
          formData.append(key, file);
        }
      } else {
        formData.append(key, body[key]);
      }
    }
    return formData;
  } else {
    return body;
  }
}
