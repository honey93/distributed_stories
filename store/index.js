
import Vue from 'vue'
import Vuex from 'vuex'

import { contractAddress, nebPay, result } from './neb_init';

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    count: 5,
    all_data: [],
    favourite_data:[],
    mystory_data:[]
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    increment(state) {
        state.count++
    },
    all_data(state, payload) {
        state.all_data = payload;
    },
    favourite_data(state, payload) {
        state.favourite_data = payload;
    },
    mystory_data(state, payload) {
        state.mystory_data = payload;
    }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
    increment: ({ commit }) => commit('increment'),
    call: ({ commit }) => {
        var args = "[]";
        nebPay.simulateCall(contractAddress, 0, "get_stories", args, {
            listener: function (data) {
                // commit(all_data,)
                if (JSON.parse(data.result) != null) {
                    // alert(data.result);
                    commit("all_data", JSON.parse(JSON.parse(data.result)));
                }

            }
        });
    },
    add_story: ({ commit }, payload) => {
        // alert(payload);
        var args = "[\"" + payload + "\"]";
        nebPay.call(contractAddress, 0, "save_story", args, {
            listener: result
        });

    },
    add_line: ({ commit }, payload) => {
        var payload_temp = payload.name;
        var hash = payload.hash;
        var args = "[\"" + payload_temp + "\",\"" + hash + "\"]";
        nebPay.call(contractAddress, 0, "add_line", args, {
            listener: result
        });
    },
    vote: ({ commit }, payload) => {
        
        var args = "[\"" + payload + "\"]";
        nebPay.call(contractAddress, 0, "vote", args, {
            listener: result
        });

    },
    favourite_call: ({ commit }) => {
        var args = "[]";
        nebPay.simulateCall(contractAddress, 0, "favourite", args, {
            listener: function (data) {
                // commit(all_data,)
                if (JSON.parse(data.result) != null) {
                    // alert(data.result);
                    commit("favourite_data", JSON.parse(JSON.parse(data.result)));
                }

            }
        });
    },
    mystory_call: ({ commit }) => {
        var args = "[]";
        nebPay.simulateCall(contractAddress, 0, "my_stories", args, {
            listener: function (data) {
                // commit(all_data,)
                if (JSON.parse(data.result) != null) {
                    // alert(data.result);
                    commit("mystory_data", JSON.parse(JSON.parse(data.result)));
                }

            }
        });
    }
}

// getters are functions
const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.


const createStore = () => {
    return new Vuex.Store({
        state,
        getters,
        actions,
        mutations
    });
};


export default createStore

