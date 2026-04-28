function CartSummary({ cartItems }) {
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  return (
    <section>
      <div>
        <span>Total items</span>
        <span>{totalItems}</span>
      </div>
      <div>
        <span>Total price</span>
        <span>THB{totalPrice}</span>
      </div>
      <button type="button">Checkout</button>
    </section>
  );
}

export default CartSummary;
