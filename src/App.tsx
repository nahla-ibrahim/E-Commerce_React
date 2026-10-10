import ProductCard from "./components/ProductCard";
import type { Product } from "./types/product";

function App() {
  const product: Product = {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description: "Popular mascara",
    price: 9.99,
    discountPercentage: 10.48,
    rating: 2.56,
    stock: -4554,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  };
  return (
    <main className=" min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 ">ALL Products</h1>
      <ProductCard product={product} />
    </main>
  );
}

export default App;
