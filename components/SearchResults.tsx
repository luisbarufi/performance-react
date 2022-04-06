import { ProductItem } from "./ProductItem";

interface SearchResultsPrpos {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>
}


export function SearchResults({ results }: SearchResultsPrpos) {
  return (
    <div>
      {results.map((product) =>{
        return (
          <ProductItem product={product} key={product.id}/>
        );
      })}
    </div>
  );
}
