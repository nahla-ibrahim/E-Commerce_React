import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

function App() {
  return (
    <>
      <Header cartCount={3} />
      {/* ///////////all products section/////////// */}
      <main>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
          <h1 className="text-3xl font-bold mb-6 ">All Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {products.map((p, index) => (
              <ProductCard key={p.id} product={p} index={index} />
            ))}
          </div>
        </div>
      </main>
      {/* ///////////////////////////////////////////////// */}
    </>
  );
}

export default App;
