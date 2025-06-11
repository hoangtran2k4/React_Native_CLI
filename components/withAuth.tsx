/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {navigationRef} from '../navigation/navigationRef';
import { getValidAccessToken } from '../shared/common/token-validity';

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const check = async () => {
        const token = await getValidAccessToken();
        if (!token) {
          const timeout = setTimeout(() => {
            if (navigationRef.isReady()) {
              navigationRef.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{name: 'login'}],
                }),
              );
            }
          }, 100);
          return () => clearTimeout(timeout);
        } else {
          setLoading(false);
        }
      };

      check();
    }, []);

    if (loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
