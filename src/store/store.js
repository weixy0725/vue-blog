import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    barContent: [],
    type: 1,
    classification: 0,
    routerPath:""
    
};

const getters = {
    barContent: state => state.barContent,
    type: state => state.type,
    classification: state => state.classification,
    routerPath: state=>state.routerPath
};

const mutations = {
    changeSideBar(state, data) {

        var barContentDefault=[{
            "classificationId":"0",
            "classification":"所有内容"
        }];
        for(let d of data){
            barContentDefault.push(d);
        }
        state.barContent = barContentDefault
    },

    changeType(state, data) {
        state.type = data
    },

    changeClassification(state, data) {
        var params={};
        params[""]
        state.classification = data
    },

    setRouterPath(state,data){
       state.routerPath=data
    }

};

export default new Vuex.Store({
    state,
    getters,
    mutations
})