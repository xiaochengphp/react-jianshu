import React from 'react';
import Loadable from 'react-loadable';

const LoadableLogin = Loadable ({
  loader: () => import ('./'),
  loading () {
    return <div>Loading...</div>;
  },
});

export default () => <LoadableLogin />;
