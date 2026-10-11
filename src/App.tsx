import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

function App() {
  return (
    <main className=" min-h-screen bg-stone-50 p-8">
      <h1 className="text-3xl font-bold mb-6 ">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {products.map((p, index) => (
          <ProductCard key={p.id} product={p} index={index} />
        ))}
      </div>
    </main>
  );
}

export default App;
