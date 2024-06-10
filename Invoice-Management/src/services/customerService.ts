import Customer from "../models/customer";

export const createCustomer = async (data: any) => {
  return await Customer.create(data);
};

export const getCustomers = async () => {
  return await Customer.findAll();
};

export const getCustomerById = async (id: string) => {
  return await Customer.findByPk(id);
};

export const updateCustomer = async (id: string, data: any) => {
  const customer = await Customer.findByPk(id);
  if (customer) {
    return await customer.update(data);
  }
  throw new Error("Customer not found");
};

export const deleteCustomer = async (id: string) => {
  const customer = await Customer.findByPk(id);
  if (customer) {
    return await customer.destroy();
  }
  throw new Error("Customer not found");
};
