import React from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {searchFocus, searchBlur, getList} from './store//action';
import {Link} from 'react-router-dom';

import './index.scss';

const Header = props => {
  const {logo, focused, hanleSearchFocus, hanleSearchBlur, list} = props;

  return (
    <div className="header">
      <Link to={`/text/${'logo'}`} className="logo" style={logo}>LOGO</Link>
      <div className="nav">
        <Link to={`/text/${'home'}`} className="nav-item left">首页</Link>
        <Link to="/detail" className="nav-item left">下载App</Link>
        <CSSTransition in={focused} timeout={200} classNames="searchTransition">
          <input
            type="text"
            className="search left"
            onFocus={() => hanleSearchFocus (list)}
            onBlur={hanleSearchBlur}
          />
        </CSSTransition>
        <Link to="login" className="nav-item right">登录</Link>
        <div className="nav-item right">注册</div>
        <div className="nav-item right">写文章</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    focused: state.header.focused,
    list: state.header.list,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // 搜索框获得焦点
    hanleSearchFocus (list) {
      list.length === 0 && dispatch (getList ());
      dispatch (searchFocus (true));
    },
    // 搜索框失去焦点
    hanleSearchBlur () {
      dispatch (searchBlur (false));
    },
  };
};
export default connect (mapStateToProps, mapDispatchToProps) (Header);
