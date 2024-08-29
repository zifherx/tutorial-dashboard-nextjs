export interface iCompany {
  id: string;
  name: string;
  description: string;
  profileImage: string;
  ruc: string;
  phone: string;
  country: string;
  website: string;
  createdAt: Date;
}

export interface TableCompanyProps {
  companies: iCompany[];
}
