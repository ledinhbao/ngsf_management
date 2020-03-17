<template>
    <div class="home">
        <h1>Danh sách nhà đầu tư</h1>
        <div class="nav">
            <router-link :to="{ name: 'customer-create' }">Thêm nhà đầu tư</router-link>
        </div>
        <div class="customer-card header">
            <span class="customer-name">Nhà đầu tư</span>
            <span class="customer-ngc">NGC nắm giữ</span>
            <span class="customer-capital">Vốn</span>
        </div>
        <CustomerListCard
            v-for="customer in customers"
            :key="customer.id"
            :customer="customer"
        />
    </div>
</template>

<script>
// @ is an alias to /src
import CustomerListCard from "@/components/CustomerListCard.vue";
import { mapState } from "vuex";

export default {
    name: "CustomerList",
    components: {
        CustomerListCard
    },
    created() {
        this.$store.dispatch("fetchCustomerList");
    },
    computed: {
        ...mapState(["customers"])
    }
};
</script>

<style scoped>
.header {
    font-weight: bold;
    text-transform: uppercase;
}
.customer-card {
    width: 75%;
}
.customer-name {
    display: inline-block;
    width: 50%;
}
.customer-ngc {
    display: inline-block;
    width: 30%;
}
</style>
