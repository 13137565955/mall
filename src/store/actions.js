export default {
  addToCart(context, payload) {
    // console.log(produce);
    let produce = context.state.cartList.find(item => item.iid === payload.iid);

    if (produce) {
      context.commit('addCartCount', produce);
    } else {
      context.commit('addNewCart', payload);
    }
    // context.state.cartList.push(payload);
  }
}
