<template>
    <div class='customer-create'>
        <h1>Thêm nhà đầu tư</h1>
        <form @submit.prevent="onSubmit">
            <div class="input-block">
                <label for="customerName">Họ & Tên</label>
                <input type='text' id="customerName" v-model="customer.name" />
            </div>
            <H3>Giao dịch khởi tạo</H3>
            <div class="input-block">
               <label for="ngcholding">NGC mua vào</label>
                <input type='text' id="ngcholding" v-model="customer.ngcholding" /> 
            </div>
            <div class="input-block">
               <label for="money">Giá mua NGC</label>
                <input type='text' id="money" v-model="customer.money" /> 
            </div>
            <input type="submit" value="Thêm nhà đầu tư" />
            
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            customer: {
                name: "",
                ngcholding: 10000,
                money: 100
            }
        }
    },
    methods: {
        onSubmit: function() {
            this.$store.dispatch('createCustomer', this.customer)
                .then(() => {
                    this.$router.push({
                        name: 'customer-list'
                    })
                })
        }
    }
}
</script>

<style scoped>

</style>