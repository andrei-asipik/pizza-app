import { Await, useLoaderData } from 'react-router-dom';
import type { Product as ProductType } from '../../intefaces/product.interface';
import { Suspense } from 'react';

export default function Product() {
  const data = useLoaderData() as { data: ProductType };

  return (
    <>
      <Suspense fallback={'Загружаю...'}>
        <Await resolve={data.data}>
          {({ data }: { data: ProductType }) => <>Product - {data.name}</>}
        </Await>
      </Suspense>
    </>
  );
}
