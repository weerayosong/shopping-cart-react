function CartSummary({ cartItems }) {
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const formattedTotalPrice = new Intl.NumberFormat("th-TH").format(totalPrice);

  return (
    <section className="mt-6 rounded-3xl border border-amber-400/15 bg-linear-to-br from-amber-400/10 via-stone-900/90 to-stone-950 p-5 shadow-xl shadow-black/20">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <span className="text-sm uppercase tracking-[0.2em] text-stone-400">
            Total items
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white">
            {totalItems}
          </span>
        </div>
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-sm uppercase tracking-[0.2em] text-stone-400">
              Total price
            </span>
            <p className="mt-2 text-3xl font-bold text-amber-200">
              THB {formattedTotalPrice}
            </p>
          </div>
          <p className="text-right text-sm text-stone-400">
            Shipping and taxes
            <br />
            calculated at checkout
          </p>
        </div>
      </div>
      <button
        type="button"
        className="mt-5 w-full rounded-2xl bg-amber-400 px-4 py-3 font-semibold text-stone-950 transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-stone-950 disabled:cursor-not-allowed disabled:bg-stone-700 disabled:text-stone-400"
        disabled={cartItems.length === 0}
      >
        Checkout
      </button>
    </section>
  );
}

export default CartSummary;
