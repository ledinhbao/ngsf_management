import axios from 'axios'

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
    }
}