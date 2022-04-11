import { ProductItem } from "./ProductItem";

interface SearchResultsPrpos {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>

  onAddToWishlist: (id: number) => void;
}

export function SearchResults({totalPrice, results, onAddToWishlist }: SearchResultsPrpos) {

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) =>{
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishlist={onAddToWishlist}
          />
        );
      })}
    </div>
  );
}
