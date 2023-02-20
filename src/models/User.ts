import { Upload } from "./Upload";

export interface User {
  _id?: string;
  email?: string;
  password?: string;
  role?: string;
  verificationCode?: string;
  validationCode?: string;
  stripeCustomerId?: string;
  profileImageId?: Upload;
  subscriptionId?: string;
  subscriptionStatus?: string;
  verifiedStatus?: string
}
export interface UserDetails {
  _id?: string;
  customerAdminId?: string;
  email?: string;
  password?: string;
  role?: string;
  customerBusinessName?: string;
  primaryContactName?: string;
  firstName?: string;
  name?: string;
  lastName?: string;
  verificationCode?: string;
  validationCode?: string;
  stripeCustomerId?: string;
  profileImageId?: Upload;
  subscriptionId?: string;
  subscriptionStatus?: string;
  verifiedStatus?: string
  
}
