import axios from 'axios'

const baseURL = 'http://localhost:8090'
const multiFormContentType = 'multipart/form-data'
const jsonContentType = 'application/json'

const apiPostClient = axios.create({
    baseURL: baseURL,
    withCredentials: false,
    headers: {
        Accept: jsonContentType,
        'Content-Type': multiFormContentType
    }
})

const apiClient = axios.create({
    baseURL: 'http://localhost:8090',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getCustomerList () {
        return apiClient.get('/customers')
    },
    postCustomer (customer) {
        // Using PostClient, prevent 400 Bad Request from server.
        return apiPostClient.post('/customer/create', customer)
    }
}