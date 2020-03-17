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
        // FIXME this mutation must do something or an error will be thrown.
        CREATE_CUSTOMER() {
            console.log("Customer created")
        }
    },
    actions: {
        createCustomer({ commit }, customer) {
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
                            error
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
