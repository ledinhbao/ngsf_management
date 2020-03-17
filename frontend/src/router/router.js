import Vue from "vue";
import VueRouter from "vue-router";
import CustomerList from "../views/CustomerList.vue";
import CustomerCreate from "@/views/CustomerCreate.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "customer-list",
        component: CustomerList
    },
    {
        path: "/customer/create",
        name: "customer-create",
        component: CustomerCreate
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
