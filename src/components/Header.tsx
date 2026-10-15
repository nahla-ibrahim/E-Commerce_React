import { ShoppingBag, ShoppingCart } from "lucide-react";

type Props = {
  cartCount: number;
};

function Header({ cartCount }: Props) {
  return (
    <header className="sticky top-0 border-b border-border/60 z-10 py-3  bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <div className="bg-primary rounded-xl w-9 h-9 flex items-center justify-center text-primary-foreground ">
            <ShoppingBag />
          </div>
          <a href="#home" className="font-extrabold text-lg">
            My Store
          </a>
        </div>
        <button
          aria-label="open cart"
          className="relative grid size-10 place-items-center rounded-full transition hover:bg-muted cursor-pointer"
        >
          <ShoppingCart />
          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-accent  text-[10px] font-semibold text-accent-foreground">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
