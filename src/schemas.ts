import z from "zod"

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.coerce.number(),
  inventory: z.number(),
  image: z.string(),
  categoryId: z.number(),
})

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
})

export const CategoryWithProductsSchema = CategorySchema.extend({
  products: z.array(ProductSchema),
})

export type Product = z.infer<typeof ProductSchema>
