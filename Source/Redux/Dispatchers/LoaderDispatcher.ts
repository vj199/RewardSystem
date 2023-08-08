// App wide dispatcher

import {Stores} from '../Stores/Store';
import {LoaderActions} from '@redux/Slices/LoaderSlice';

const LoaderDispatcher = {
  show: () => {
    Stores.dispatch(LoaderActions.SHOW());
  },
  hide: () => {
    Stores.dispatch(LoaderActions.HIDE());
  },
};

export default LoaderDispatcher;
