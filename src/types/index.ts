export interface ServiceProvider {
  id: number;
  email: string;
  phoneNumber: string;
  postcode: string;
  registrationStatus: "Active" | "Inactive";
  vendorType: string;
  serviceOffering: string;
  createdAt: string;
  status: string;
}
