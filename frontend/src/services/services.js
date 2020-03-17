import axios from 'axios'

const baseURL = 'http://localhost:8090'
// const multiFormContentType = 'multipart/form-data'
const formContentType = 'application/x-www-form-urlencoded'
const jsonContentType = 'application/json'

const apiClient = axios.create({
    baseURL: baseURL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        post: {
            'Content-Type': formContentType
        },
        common: {
            'Content-Type': jsonContentType
        }
    }
})

export default {
    getCustomerList () {
        return apiClient.get('/customers')
    },
    postCustomer (customer) {
        // Using PostClient, prevent 400 Bad Request from server.
        return apiClient.post('/customer/create', customer)
    }
}