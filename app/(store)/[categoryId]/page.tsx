import ProductsCar from "@/components/products/productsCar";
import { CategoryWithProductsSchema } from "@/src/schemas";

type  Params = Promise<{categoryId:string}>


async function getProducts(categoryId:string) {
  const url = `${process.env.API_URL}/categories/${categoryId}?products=true`;
  const req =await fetch(url);
  const json = await req.json();
  const products = CategoryWithProductsSchema.parse(json);
  return products;
}


export default async function StorePage({params}:{params:Params}) {
  const {categoryId} =  await params;
  const category = await getProducts(categoryId);
  console.log(category);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {category.products.map((product) => (
        <ProductsCar key={product.id} />

      ))}
    </div>
  )
}