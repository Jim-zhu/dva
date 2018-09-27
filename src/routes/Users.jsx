import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect } from 'dva'
import 'antd/dist/antd.css';
import UserList from '../components/Users/UserList'
import UserSearch from '../components/Users/UserSearch'
import UserModal from '../components/Users/UserModal'

import styles from './Users.less'

function Users({ location,dispatch,users}) { 
    const {
        list,
        loading,
        total,
        current,
        currentItem,
        modalVisible,
        modalType
    } = users;
    const userSearchProps = {}
    const userListProps = {
        total,
        current,
        loading,
        dataSource: list
    }
    const userModalProps = {}
    return (
        <div>
            {/* 用户筛选搜索框*/}
            <UserSearch {...userSearchProps} />
            <UserList {...userListProps} />
            <UserModal {...userModalProps} />
        </div>
    );
}

Users.prototype = {
    users: PropTypes.object
}

function mapStateToProps({ users }) { 
    return { users };
}

export default connect(mapStateToProps)(Users);