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
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg motion-safe:animate-fade-up"
    >
      <div className="aspect-square relative bg-muted overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className={`w-full h-full object-contain p-4 transition duration-700 group-hover:scale-110 ease-out  ${stock <= 0 ? "opacity-40 grayscale" : ""}`}
        />
        {discountValue > 0 && (
          <span className="rounded-full text-accent-foreground px-2.5 py-1 text-xs font-semibold bg-accent absolute top-3 left-3">
            -{Math.round(discountValue)}%
          </span>
        )}
        <button
          aria-label="Add to wishlist"
          onClick={() => console.log("added to wishlist", title)}
          className="absolute top-3 right-3 rounded-full bg-card/90 p-2 text-foreground shadow-sm transition cursor-pointer hover:shadow-md active:scale-95 group/heart"
        >
          <Heart className="group-hover/heart:text-accent group-hover/heart:fill-accent" />
        </button>
        {stock <= 0 && (
          <span className="absolute bottom-0 w-full bg-foreground/90 text-background text-center text-xs px-2.5 py-2  font-semibold uppercase  ">
            sold out
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium uppercase text-muted-foreground">
          {brand ?? category}
        </p>
        <h3 className="mt-1 font-semibold text-foreground line-clamp-1">
          {title}
        </h3>
        <div className="mt-2 flex items-center gap-1 text-sm">
          <Star className="size-4 fill-rating text-rating" />
          <span className="font-medium text-foreground">
            {rating?.toFixed(1)}
          </span>
          {stock < 10 && stock > 0 && (
            <span className="ml-auto text-xs font-medium text-rating">
              Only {stock} left
            </span>
          )}
        </div>

        <div className="flex justify-between items-end mt-auto pt-4">
          <div>
            <p className="text-xl font-bold text-foreground">
              ${finalPrice.toFixed(2)}
            </p>
            {discountValue > 0 && (
              <span className="line-through text-sm text-muted-foreground">
                ${price.toFixed(2)}
              </span>
            )}
          </div>
          <button
            aria-label="Add to cart"
            onClick={() => {
              console.log("add to cart", title);
            }}
            disabled={stock <= 0}
            className=" grid size-11 place-items-center rounded-full bg-primary text-primary-foreground transition enabled:hover:bg-accent disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground enabled:cursor-pointer enabled:hover:scale-110 enabled:active:scale-90"
          >
            <ShoppingBag />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
