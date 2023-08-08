export interface EndPoint {
    AUTH: NetworkAPIRouter;
    USER:string;
    MEDIA: string;
    THIRD_PARTY: string;
} 


export interface NetworkAPIRouter {
    baseURL:string | undefined;
    endpoint:string;
    method:string;
    version: string | null;
    offlineJsonPath?:string;
}


export interface ResponseParser {
    data: unknown;
    success?:boolean;
    code:Number;
    message:string;
    error:string | null;
}


export interface APIAbort {
    controller: AbortController,
    initiate:() => AbortController,
    abort:() => void
  }


  export type Router = {
    version: string;
    endpoint: string;
  }