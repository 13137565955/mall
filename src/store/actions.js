export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      // console.log(produce);
      let produce = context.state.cartList.find(item => item.iid === payload.iid);

      if (produce) {
        context.commit('addCartCount', produce);
        resolve('商品数量加1');
      } else {
        context.commit('addNewCart', payload);
        resolve('成功加入商品');
      }
      // context.state.cartList.push(payload);
    })

  }
}
