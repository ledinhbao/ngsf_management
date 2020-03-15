import Vue from "vue";
import VueRouter from "vue-router";
import CustomerList from "../views/CustomerList.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "customer-list",
        component: CustomerList
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
