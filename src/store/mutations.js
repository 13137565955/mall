export default {
  addNewCart(state, payload) {
    payload.count = 1;
    payload.checked = true;
    state.cartList.push(payload);
  },
  addCartCount(state, payload) {
    // console.log(payload);
    payload.count++;
  }
}
