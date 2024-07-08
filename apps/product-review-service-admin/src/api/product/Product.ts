import { Review } from "../review/Review";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  sku: string | null;
  quality: number | null;
  name: string | null;
  reviews?: Array<Review>;
};
