import { memo } from 'react';
interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  }
}

function ProductItemCompoment({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}

export const ProductItem = memo (ProductItemCompoment, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});
