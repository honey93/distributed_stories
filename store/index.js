import Vue from 'vue'
import Vuex from 'vuex'

import {
  contractAddress,
  nebPay,
  result,
  NebPay
} from './neb_init';

Vue.use(Vuex)


// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 5,
  all_data: [],
  favourite_data: [],
  mystory_data: [],
  color_codes: ["#CDDC39", "#C2185B", "#5D4037", "#E64A19", "#9E9E9E", "#607D8B", "#1976D2", "#00796B"],
  extension: true,
  nodata_flag: false,
  nodata_flag_my: false,
  account_data: {},
  language: {
    english: true,
    chinese: false
  }

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
    //alert(JSON.stringify(payload));
    state.all_data = payload.reverse();
  },
  favourite_data(state, payload) {
    state.favourite_data = payload.result;
    state.nodata_flag = payload.status;
  },
  mystory_data(state, payload) {
    state.mystory_data = payload.result;
    state.nodata_flag_my = payload.status;
  },
  account_data(state, payload) {
    //alert(JSON.stringify(payload));
    state.account_data = payload;
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  increment: ({
    commit
  }) => commit('increment'),
  call: (store) => {
    var args = "[]";
    nebPay.simulateCall(contractAddress, 0, "get_stories", args, {
      listener: function (data) {
        // commit(all_data,)
        // alert(data.result);
        //alert(typeof (JSON.parse(data.result)));
        if (data.result != null) {
          // alert(data.result);
          store.commit("all_data", JSON.parse(data.result));
        }

      }
    });
  },
  add_story: ({
    commit
  }, payload) => {
    // alert(payload);
    var args = "[\"" + payload.name + "\",\"" + payload.image_url + "\"]";
    nebPay.call(contractAddress, 0, "save_story", args, {
      listener: function (data) {

      }
    });

  },
  add_line: ({
    commit,
    store
  }, payload) => {

    var serialNumber;
    var intervalQuery;
    // return new Promise((resolve, reject) => {
    var payload_temp = payload.name;
    var hash = payload.hash;
    var address = payload.address;
    // alert(JSON.stringify(payload));
    var args = "[\"" + payload_temp + "\",\"" + address + "\",\"" + hash + "\"]";
    serialNumber = nebPay.call(contractAddress, 0, "add_line", args, {
      listener: function (data) {
        // alert(JSON.stringify(data));
        //resolve();
      }
    });



    function funcIntervalQuery() {
      nebPay.queryPayInfo(serialNumber) //search transaction result from server (result upload to server by app)
        .then(function (resp) {
          //resp is a JSON string
          //console.log("data didn't come");
          var respObject = JSON.parse(resp)
          if (respObject.code === 0) {
            console.log("tx result: " + resp);


          }
          if ((respObject.code === 1)) {
            //alert(JSON.stringify(respObject));
            //clearInterval(intervalQuery)
          }
        })
        .catch(function (err) {
          // alert(err);
        });
    }







    //Set a periodically query
    intervalQuery = setInterval(function () {
      funcIntervalQuery();
      console.log("calling");
    }, 4000);



    // });

  },
  vote: ({
    commit
  }, payload) => {

    var args = "[\"" + payload.hash + "\",\"" + payload.address + "\"]";
    nebPay.call(contractAddress, 0, "vote", args, {
      listener: result
    });

  },
  favourite_call: ({
    commit,
    state
  }) => {
    var args = "[]";
    nebPay.simulateCall(contractAddress, 0, "favourite", args, {
      listener: function (data) {

        var result = JSON.parse(data.result);

        if (result.length) {

          commit("favourite_data", {
            "result": result,
            "status": false
          });
        } else {

          state.nodata_flag = true;

        }

      }
    });
  },
  mystory_call: ({
    commit
  }) => {
    var args = "[]";
    nebPay.simulateCall(contractAddress, 0, "my_stories_data", args, {
      listener: function (data) {

        var result = JSON.parse(data.result);


        if (result.length) {

          commit("mystory_data", {
            "result": result,
            "status": false
          });
        } else {

          state.nodata_flag_my = true;

        }

      }
    });
  },
  account_call: ({
    commit
  }) => {

    //alert("came in");
    var args = "[]";
    nebPay.simulateCall(contractAddress, 0, "account_data", args, {
      listener: function (data) {

        var result = JSON.parse(data.result);

        commit("account_data", result);


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
