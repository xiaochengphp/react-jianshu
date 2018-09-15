import React from 'react';
import Loadable from 'react-loadable';

const LoadableHome = Loadable ({
  loader: () => import ('./'),
  loading () {
    return <div>Loading...</div>;
  },
});

export default () => <LoadableHome />;
