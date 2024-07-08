import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  sku?: string | null;
  quality?: number | null;
  name?: string | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
};
