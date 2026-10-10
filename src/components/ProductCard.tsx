import type { Product } from "../types/product";

type Props = {
  product: Product;
};

function ProductCard(props: Props) {
  const {
    title,
    price,
    description,
    category,
    discountPercentage,
    rating,
    stock,
    tags,
    brand,
    thumbnail,
  } = props.product;
  const discountValue = discountPercentage || 0;
  const finalPrice = price - (price * discountValue) / 100;

  return (
    <div className="w-64 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-lg">
      <div className=" h-40 w-full relative bg-gray-100">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-40 object-contain"
        />
        {discountValue > 0 && (
          <span className="rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-600 absolute top-2 right-2">
            -{Math.round(discountValue)}%
          </span>
        )}
      </div>
      <h3 className="mt-3 font-semibold text-gray-800 line-clamp-1">{title}</h3>
      <div className="mt-2 text-gray-600 ">
        <span className="text-lg font-bold text-gray-900">
          ${finalPrice.toFixed(2)}
        </span>
      </div>

      {stock === 0 || stock < 0 ? (
        <p className="mt-1 text-sm text-red-500">Out of stock</p>
      ) : null}
      <button
        disabled={stock === 0 || stock < 0}
        className="mt-3 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
