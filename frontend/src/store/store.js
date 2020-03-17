import Vue from 'vue'
import Vuex from 'vuex'
import services from '@/services/services.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        customers: []
    },
    mutations: {
        SET_CUSTOMERS(state, customers) {
            state.customers = customers
        },
        CREATE_CUSTOMER() {}
    },
    actions: {
        createCustomer({ commit }, customer) {
            // FIXME create separated apiClient, which contains header for application/form
            //  instead of application/json
            services
                .postCustomer(customer)
                .then(response => {
                    // TODO handle response from server.
                    commit.CREATE_CUSTOMER()
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(
                        'Error when http.post creating customer: ' +
                            error.response
                    )
                })
        },
        fetchCustomerList({ commit }) {
            services
                .getCustomerList()
                .then(response => {
                    commit('SET_CUSTOMERS', response.data.customers)
                })
                .catch(error => {
                    console.log('error when fetching customer list ' + error)
                })
        }
    },
    modules: {}
})
