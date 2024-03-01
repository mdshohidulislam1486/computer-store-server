export interface TItems {
  _id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  image: string;
  availableItem: number;
}

export interface TOrder {
  buyerName: string;
  shippingAddress: string;
  quantity: number;
  shippingCost: number;
  items: TItems[];
  purchaseDate: Date;
}
