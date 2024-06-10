import SOW from "../models/sow";

export const createSOW = async (data: any) => {
  return await SOW.create(data);
};

export const getSOWs = async () => {
  return await SOW.findAll();
};

export const getSOWById = async (id: string) => {
  return await SOW.findByPk(id);
};

export const updateSOW = async (id: string, data: any) => {
  const sow = await SOW.findByPk(id);
  if (sow) {
    return await sow.update(data);
  }
  throw new Error("SOW not found");
};

export const deleteSOW = async (id: string) => {
  const sow = await SOW.findByPk(id);
  if (sow) {
    return await sow.destroy();
  }
  throw new Error("SOW not found");
};
