import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  sku?: SortOrder;
  quality?: SortOrder;
  name?: SortOrder;
};
