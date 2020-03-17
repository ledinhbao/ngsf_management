<template>
    <div class="customer-card">
        <span class="customer-name">{{ customer.name }}</span>
        <span class="customer-ngc">{{ customer.ngcholding }}</span>
        <span class="customer-capital">{{ customer.money }}</span>
    </div>
</template>

<script>
export default {
    props: ['customer'],
    name: "CustomerListCard",
}
</script>

<style scoped>
.customer-card {
    width: 75%;
    padding-top: 3px;
    padding-bottom: 3px;
}
.customer-name {
    display: inline-block;
    width: 50%;
}
.customer-ngc {
    display: inline-block;
    width: 30%;
}
.customer-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
}
</style>