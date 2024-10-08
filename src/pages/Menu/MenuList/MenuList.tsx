import ProductCard from '../../../components/molecules/ProductCard/ProductCard';
import { v4 as uuidv4 } from 'uuid';
import { MenuListProps } from './MenuList.props';

export function MenuList({ products }: MenuListProps) {
  return products.map((productItem) => {
    const { id, name, price, ingredients, image, rating } = productItem;
    return (
      <ProductCard
        key={uuidv4()}
        id={id}
        title={name}
        price={price}
        description={ingredients.join(', ')}
        image={image}
        rating={rating}
      />
    );
  });
}
