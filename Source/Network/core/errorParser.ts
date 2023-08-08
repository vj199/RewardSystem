export const apiError = (error: Error): void => {
  if (Array.isArray(error)) {
    error?.map(msg => {
      console.log(msg);
    });
    console.log(error);
  } else if (typeof error === 'object') {
    console.log(error?.message);
  } else {
    console.log(error);
  }
};

export const offlineNotation = ():void => {
  console.log(
    'The network seems to be not working, proceeding with offline data',
  );
};

export type Error = Array<string> | {message: string} | string;
