import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  sku?: string | null;
  quality?: number | null;
  name?: string | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
};
