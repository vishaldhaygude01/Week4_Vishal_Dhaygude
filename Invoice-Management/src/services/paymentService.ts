import Payment from "../models/payment";

export const createPayment = async (data: any) => {
  return await Payment.create(data);
};

export const getPayments = async () => {
  return await Payment.findAll();
};

export const getPaymentById = async (id: string) => {
  return await Payment.findByPk(id);
};

export const updatePayment = async (id: string, data: any) => {
  const payment = await Payment.findByPk(id);
  if (payment) {
    return await payment.update(data);
  }
  throw new Error("Payment not found");
};

export const deletePayment = async (id: string) => {
  const payment = await Payment.findByPk(id);
  if (payment) {
    return await payment.destroy();
  }
  throw new Error("Payment not found");
};
