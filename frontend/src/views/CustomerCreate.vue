<template>
    <div class='customer-create'>
        <form @submit.prevent="onSubmit">
            <div class="input-block">
                <label for="customerName">Họ & Tên</label>
                <input type='text' />
            </div>
            <input type="submit" value="Thêm nhà đầu tư" />
            
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        onSubmit: function() {
            console.log("Submit worked")
        }
    }
}
</script>

<style scoped>

</style>