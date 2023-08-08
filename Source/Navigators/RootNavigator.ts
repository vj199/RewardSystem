import {createNavigationContainerRef} from '@react-navigation/native';
import * as React from 'react';

export const navigationRef = createNavigationContainerRef();

const RootNavigation = {
  navigate: (name: string, params = {}) => {
    if (navigationRef.isReady())
      navigationRef.navigate(name as never, params as never);
  },
  reset: (index: number, name: string, params = {}) => {
    if (navigationRef.isReady())
      navigationRef.reset({index, routes: [{name, params}]});
  },
};

export default RootNavigation;
