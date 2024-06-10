import Invoice from "../models/invoice";

export const createInvoice = async (data: any) => {
  return await Invoice.create(data);
};

export const getInvoices = async () => {
  return await Invoice.findAll();
};

export const getInvoiceById = async (id: string) => {
  return await Invoice.findByPk(id);
};

export const updateInvoice = async (id: string, data: any) => {
  const invoice = await Invoice.findByPk(id);
  if (invoice) {
    return await invoice.update(data);
  }
  throw new Error("Invoice not found");
};

export const deleteInvoice = async (id: string) => {
  const invoice = await Invoice.findByPk(id);
  if (invoice) {
    return await invoice.destroy();
  }
  throw new Error("Invoice not found");
};
