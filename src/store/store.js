import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    barContent: [],
    type: 1,
    classification: 0,
    routerPath: "",
    goBackUrl: ""

};

const getters = {
    barContent: state => state.barContent,
    type: state => state.type,
    classification: state => state.classification,
    routerPath: state => state.routerPath,
    goBackUrl: state => state.goBackUrl
};

const mutations = {
    changeSideBar(state, data) {

        var barContentDefault = [];
        if (state.type == 1) {
            barContentDefault.push({
                "classificationId": "-1",
                "classification": "所有文章"
            });
        } else if (state.type == 2) {
            barContentDefault.push({
                "classificationId": "-2",
                "classification": "所有作品"
            })
        }
        for (let d of data) {
            barContentDefault.push(d);
        }
        state.barContent = barContentDefault
    },

    changeType(state, data) {
        state.type = data
    },

    changeClassification(state, data) {
        var params = {};
        params[""]
        state.classification = data
    },

    setRouterPath(state, data) {
        state.routerPath = data
    },

    setGoBackUrl(state, data) {
        state.goBackUrl = data
    }

};

export default new Vuex.Store({
    state,
    getters,
    mutations
})