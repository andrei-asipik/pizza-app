import { useLoaderData } from 'react-router-dom';
import { Product } from '../../components/intefaces/product.interface';

function ProductItem() {
  const data = useLoaderData() as Product;
  return (
    <>
      <div> Product - {data.id}</div>
    </>
  );
}

export default ProductItem;
