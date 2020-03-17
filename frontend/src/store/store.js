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
        createCustomer ({ commit }) {
            // TODO passing data with post request
            services.postCustomer()
                .then(response => {
                    // TODO handle response from server.
                })
                .catch(error => {
                    console.log('Error when http.post creating customer: ' + error.response)
                })
        },
        fetchCustomerList ({ commit }) {
            services.getCustomerList()
                .then(response => {
                    commit('SET_CUSTOMERS', response.data.customers)
                })
                .catch(error => {
                    console.log("error when fetching customer list " + error)
                })
        }
    },
    modules: {}
});
