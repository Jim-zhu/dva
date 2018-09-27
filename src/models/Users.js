export default {
    namespace: 'users',
    state: {
        list: [],
        total: null,
        loading: false,//控制器加载状态
        current: null,//当前分页信息
        modalVisible: false,//弹出窗的显示状态
        modalType:'create',//弹出窗的类型(添加用户,编辑用户)
    },
    subscriptions: {
        setup
    }
    effects: {
        *querey() { },
        *create() { },
        *'delete'() { },//delete是关键字
        *update() { },
    },
    reducers: {
        showLoading() { },//控制器加载状态的reducer
        showModal() { },//控制Modal显示状态的reducer
        hideModal() { },
        querySuccess() {
            const mock = {
                total: 3,
                current: 1,
                loading: false,
                list: [
                    {
                        id: 1,
                        name: '张三',
                        age: 23,
                        address: '成都'
                    }, {
                        id: 2,
                        name: '李四',
                        age: 24,
                        address: '杭州'
                    }, {
                        id: 3,
                        name: '王五',
                        age: 25,
                        address: '上海',
                    }
                ]
            };
            return {...state,...mock,loading:false} 
        },
        createSuccess() { },
        deleteSuccess() { },
        updateSuccess() { },
    }
}