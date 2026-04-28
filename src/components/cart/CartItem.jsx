function CartItem({ item, removeFromCart, increaseQty, decreaseQty }) {
  const formattedLinePrice = new Intl.NumberFormat("th-TH").format(
    item.price * item.quantity,
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-stone-900/70 shadow-lg shadow-black/20 transition hover:border-amber-400/25 hover:bg-stone-900">
      <div className="flex flex-col gap-4 p-4 sm:flex-row">
        <img
          src={item.image}
          alt={item.name}
          className="h-32 w-full rounded-2xl object-cover sm:w-28"
        />
        <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-300">
                {item.category}
              </p>
              <h3 className="mt-1 truncate text-lg font-semibold text-white">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-stone-400">
                THB {new Intl.NumberFormat("th-TH").format(item.price)} / item
              </p>
            </div>
            <button
              type="button"
              onClick={() => removeFromCart(item.id)}
              className="self-start rounded-full border border-white/10 px-3 py-1 text-sm font-medium text-stone-300 transition hover:border-red-400/40 hover:bg-red-400/10 hover:text-red-200"
            >
              Remove
            </button>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 p-1">
              <button
                type="button"
                onClick={() => decreaseQty(item.id)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-lg font-semibold text-stone-200 transition hover:bg-white/10"
              >
                -
              </button>
              <span className="min-w-10 text-center text-sm font-semibold text-white">
                {item.quantity}
              </span>
              <button
                type="button"
                onClick={() => increaseQty(item.id)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-lg font-semibold text-stone-200 transition hover:bg-white/10"
              >
                +
              </button>
            </div>
            <p className="text-xl font-bold text-amber-200">
              THB {formattedLinePrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
