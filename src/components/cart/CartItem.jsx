function CartItem({ item, removeFromCart, increaseQty, decreaseQty }) {
  return (
    <div>
      <div>
        <img src={item.image} alt={item.name} />
        <div>
          <div>
            <div>
              <h3>{item.name}</h3>
              <p>{item.category}</p>
            </div>
            <button type="button" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
          <div>
            <div>
              <button type="button" onClick={() => decreaseQty(item.id)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button type="button" onClick={() => increaseQty(item.id)}>
                +
              </button>
            </div>
            <p>THB{item.price * item.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
