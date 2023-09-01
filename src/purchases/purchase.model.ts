import { Prisma } from '@prisma/client';

export class Purchase implements Prisma.PurchaseCreateInput {
  productId: number;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}
