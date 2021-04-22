<template>
    <div>
      <cart-item v-for="item in cartList" :key="item.iid" :item-info="item"></cart-item>
    </div>
</template>

<script>
  import cartItem from './cartItem.vue'

	export default {
		name: "cartList1",
    components: {cartItem},
    props: {
		  cartList: {
		    type: Array,
        default() {
		      return []
        }
      }
    }
	}
</script>

<style scoped>

</style>
