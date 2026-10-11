import { Heart, ShoppingBag, Star } from "lucide-react";
import type { Product } from "../types/product";

type Props = {
  product: Product;
  index?: number;
};

function ProductCard(props: Props) {
  const {
    title,
    price,
    category,
    discountPercentage,
    rating,
    stock,
    brand,
    thumbnail,
  } = props.product;

  const index = props.index ?? 0;

  const discountValue = discountPercentage || 0;
  const finalPrice = price - (price * discountValue) / 100;

  return (
    <article
      style={{ animationDelay: `${index * 80}ms` }}
      className="w-full rounded-xl  motion-safe:animate-fade-up border border-stone-200 bg-white p-4 shadow-sm transition hover:shadow-lg group flex flex-col  duration-300 ease-out hover:-translate-y-1 cursor-pointer"
    >
      <div className="aspect-square w-full relative bg-stone-100 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className={`w-full h-full object-contain p-٤ transition duration-700 group-hover:scale-110 ease-out  ${stock <= 0 ? "opacity-40 grayscale" : ""}`}
        />
        {discountValue > 0 && (
          <span className="rounded-full text-white px-2.5 py-1 text-xs font-semibold bg-rose-500 absolute top-3 left-3">
            -{Math.round(discountValue)}%
          </span>
        )}
        <button
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 rounded-full bg-white/90 p-2 text-stone-600 shadow-sm transition hover:text-rose-500 cursor-pointer hover:shadow-md active:scale-95"
        >
          <Heart />
        </button>
        {stock <= 0 && (
          <span className="absolute bottom-0 w-full bg-stone-900/80  text-white text-center text-xs px-2.5 py-2  font-semibold uppercase  ">
            sold out
          </span>
        )}
      </div>
      <p className="text-xs font-medium uppercase text-stone-400 mt-3">
        {brand ?? category}
      </p>
      <h3 className="mt-1 font-semibold text-stone-800 line-clamp-1">
        {title}
      </h3>
      <div className="mt-2 flex items-center gap-1 text-sm">
        <Star className="size-4 fill-amber-400 text-amber-400" />
        <span className="font-medium text-stone-700">{rating?.toFixed(1)}</span>
        {stock < 10 && stock > 0 && (
          <span className="ml-auto text-xs font-medium text-amber-600">
            Only {stock} left
          </span>
        )}
      </div>

      <div className="flex justify-between items-end mt-auto pt-4">
        <div>
          <p className="text-xl font-bold text-stone-900">
            ${finalPrice.toFixed(2)}
          </p>
          {discountValue > 0 && (
            <span className="line-through text-sm text-stone-400">
              ${price.toFixed(2)}
            </span>
          )}
        </div>
        <button
          aria-label="Add to cart"
          disabled={stock <= 0}
          className=" grid size-11 place-items-center rounded-full bg-stone-900 text-white transition enabled:hover:bg-rose-600 disabled:cursor-not-allowed disabled:bg-stone-200 disabled:text-stone-400 enabled:cursor-pointer enabled:hover:scale-110 enabled:active:scale-90"
        >
          <ShoppingBag />
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
