export type order = {
  id: Number;
  user_id: Number;
  active: boolean;
};

export type orderProduct = {
  product_id: number;
  product_name: string;
  price: number;
  quantity: number;
  total: number;
  supplier: string;
  department: string;
};

export type product = orderProduct & { order_id: number };

export type supplier = {
  id: number;
  name: string;
  phone: number;
  purchases: number;
};

export type departmentAvg = {
  id: number;
  name: string;
  average_price: number;
};

export type departmentPurch = {
  id: number;
  name: string;
  average_price: number;
};
