export type User = {
  id: string;
  name: string;
  departmentId: string;
};

export type Message = {
  id: string;
  name: string;
  owner: string;
};

export type Product = {
  id: string;
  sku: string;
  price: number;
};

export type Country = {
  description: string;
  countryCode: string;
  states: string[];
};
