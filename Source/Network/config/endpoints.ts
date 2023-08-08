// List all endpoints here
import { HTTP_METHODS, APIRouter, APIWithOfflineRouter, APICustomRouter } from "../core/httpHelper"
import { OFFLINE } from '../offline/index';

// ******************
// Endpoint class takes 3 params in constructor ==> "endpoint", "http-method", "API-version"
// By default, version is set to v1
// ******************
export const API = {
  AUTH: {
    // if you want to return offline json if api fails
    LOGIN: new APIWithOfflineRouter("/user/login/", HTTP_METHODS.POST, OFFLINE.LOGIN),
    SIGNUP: new APIWithOfflineRouter("/user/signup/", HTTP_METHODS.POST, OFFLINE.SIGNUP),
    REFRESH_TOKEN: new APIRouter("/user/token/refresh", HTTP_METHODS.POST)
  },
  USER: {
    PROFILE: new APIWithOfflineRouter("/user/profile/", HTTP_METHODS.GET, OFFLINE.PROFILE),
    LOGOUT: new APIWithOfflineRouter("/user/logout/", HTTP_METHODS.DEL, OFFLINE.LOGOUT)
  },
  MEDIA: {
    // if you want to upload a file with or without data
    UPLOAD: new APIRouter("/user/media/", HTTP_METHODS.POST)
  },
  THIRD_PARTY: {
    // If the base url is different from default
    CHECK: new APICustomRouter("https://example.com", "/test", HTTP_METHODS.GET)
  }
}
