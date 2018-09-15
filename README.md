# react-jianshu
react-jianshu


# 异步组件 react-loadable

import React from 'react';
import Loadable from 'react-loadable';

const LoadableHome = Loadable ({
  loader: () => import ('./'),
  loading () {
    return <div>Loading...</div>;
  },
});

export default () => <LoadableHome />;

import {withRouter} from 'react-router-dom';
export default withRouter (Home);

