# react-jianshu
react-jianshu


# 异步组件 react-loadable
```
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
```

# React Build打包路径问题
直接在package.json里加 "homepage":"." 会在路径前加homepage的值

# 去除打包生成的.map文件
webpack.config.prod.js 57行 devtool 改成 false
