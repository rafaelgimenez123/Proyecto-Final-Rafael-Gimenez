export const getCartQuantity = (cart) => {
    let count = 0
    cart.forEach((item) => {
        count += item.quantity
    })
    return count
}

  