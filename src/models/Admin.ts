
import { User } from "./User";

export interface Admin extends User {
   name?: string;
}
export interface CustomerAdminResponseModel {
   adminCount: number;
   userCount: number;
   dealCount: number;
}