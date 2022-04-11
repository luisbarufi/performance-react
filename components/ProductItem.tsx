import { memo, useState } from 'react';
import { AddProductToWishlistProps } from './AddProductToWIshlist';

import dynamic from 'next/dynamic';
// import { AddProductWishlist } from './AddProductToWIshlist';

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
  return import('./AddProductToWIshlist').then(mod => mod.AddProductToWishlist)
}, {
  loading: () => <span>Carregando...</span>
});

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }
  onAddToWishlist: (id: number) => void;
}

function ProductItemCompoment({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingTowishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>

      { isAddingTowishlist && (
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}

    </div>
  );
}

export const ProductItem = memo (ProductItemCompoment, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});
