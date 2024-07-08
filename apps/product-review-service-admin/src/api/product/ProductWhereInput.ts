import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  sku?: StringNullableFilter;
  quality?: IntNullableFilter;
  name?: StringNullableFilter;
  reviews?: ReviewListRelationFilter;
};
