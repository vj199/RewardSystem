
import { APIAbort } from '../data-access/network.interface';

/**
 * @description API Abort Controller
 */

export const APIAborter: APIAbort = {
  controller: new AbortController(),
  initiate: function () {
    this.controller = new AbortController()
    return this.controller
  },
  abort: function () {
    this.controller.abort()
  }
}



