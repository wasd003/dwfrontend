import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// getters 可根据需要使用
const getters = {};

// actions 跟 mutations 作用相同，不过是异步操作
const actions = {};

/**
 * 需要全组件共享的变量
 */
const state = {
    str: 'test vuex'
};

/**
 * 修改全组件共享变量
 * @type {{toggleUserListUnitReload(*): void}}
 */
const mutations = {
    setStr (state, str) {
        state.str = str
    }
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
