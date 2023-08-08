/**
 * @description Manager for local API json call
 */

import {APIResponse} from './responseParser';

export default async function offlineManager<T>(path: {
  data: any;
  code: number;
  message: string;
}): Promise<APIResponse<T>> {
  const {data, code, message} = path;
  return new APIResponse(data, true, code, message);
}
