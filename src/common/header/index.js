import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { searchFocus, searchBlur } from './../../store/action';
import './index.scss';

const Header = (props) => {
	return (
		<div className="header">
			<div className="logo" style={props.logo}>LOGO</div>
			<div className="nav">
				<div className="nav-item left">首页</div>
				<div className="nav-item left">下载App</div>
				<CSSTransition
					in={props.focused}
					timeout={200}
					classNames="searchTransition"
				>
					<input
						type="text"
						className="search left"
						onFocus={props.hanleSearchFocus}
						onBlur={props.hanleSearchBlur}
					/>
				</CSSTransition>
				<div className="nav-item right">登录</div>
				<div className="nav-item right">注册</div>
				<div className="nav-item right">写文章</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		focused: state.header.focused
	}
}

const mapDispatchProps = (dispatch) => {
	return {
		// 搜索框获得焦点
		hanleSearchFocus() {
			dispatch(searchFocus(true));
		},

		// 搜索框失去焦点
		hanleSearchBlur() {
			dispatch(searchBlur(false));
		}
	}
}

export default connect(mapStateToProps, mapDispatchProps)(Header);
