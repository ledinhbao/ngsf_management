import Vue from "vue";
import Vuex from "vuex";
import services from "@/services/services.js"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        customers: []
    },
    mutations: {
        SET_CUSTOMERS (state, customers) {
            state.customers = customers
        }
    },
    actions: {
        fetchCustomerList ({ commit }) {
            services.getCustomerList()
                .then(response => {
                    commit('SET_CUSTOMERS', response.data)
                })
                .catch(error => {
                    console.log("error when fetching customer list " + error)
                })
        }
    },
    modules: {}
});
