import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

function Cart({ cartItems, removeFromCart, increaseQty, decreaseQty }) {
  return (
    <aside>
      <div>
        <div>
          <p>Your shopping Cart</p>
          <h2>Order sammary</h2>
        </div>
        <div>{cartItems.length} items</div>
      </div>

      {cartItems.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          ))}
        </div>
      )}

      <CartSummary cartItems={cartItems} />
    </aside>
  );
}

export default Cart;
