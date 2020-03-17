<template>
    <div class='customer-create'>
        <form @submit.prevent="onSubmit">
            <div class="input-block">
                <label for="customerName">Họ & Tên</label>
                <input type='text' v-model="customer.name" />
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
                name: ""
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