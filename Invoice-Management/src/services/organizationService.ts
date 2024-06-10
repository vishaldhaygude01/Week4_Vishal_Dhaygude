import Organization from "../models/organization";

export const createOrganization = async (data: any) => {
  return await Organization.create(data);
};

export const getOrganizations = async () => {
  return await Organization.findAll();
};

export const getOrganizationById = async (id: string) => {
  return await Organization.findByPk(id);
};

export const updateOrganization = async (id: string, data: any) => {
  const organization = await Organization.findByPk(id);
  if (organization) {
    return await organization.update(data);
  }
  throw new Error("Organization not found");
};

export const deleteOrganization = async (id: string) => {
  const organization = await Organization.findByPk(id);
  if (organization) {
    return await organization.destroy();
  }
  throw new Error("Organization not found");
};
