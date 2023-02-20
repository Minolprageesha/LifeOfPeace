import axios from "axios";
import { AppResponse } from "../models/Response";
import { Util } from "../Util";
import { User, UserDetails } from "../models/User";
import { Admin} from "../models/Admin";

export interface UserLoginData {
  email: string;
  password: string;
}

export interface UserUpdateData {
  email: string;
}

export interface UserReset {
  userId: string;
  token: string
  password: string;
}

export class AuthService {
  private static readonly TOKEN_KEY = "token";

  public static async getMe(): Promise<AppResponse<User>> {
    const ep = Util.apiAuthUrl("me");

    const res = await axios.get<void, AppResponse< Admin >>(ep);

    if (res.error) {
      localStorage.removeItem(AuthService.TOKEN_KEY);
    }

    return res;
  }

  public static async userLogin(userLoginData: UserLoginData): Promise<AppResponse<string>> {
    const ep = Util.apiPublicUrl("login");

    const res = await axios.post<UserLoginData, AppResponse<string>>(ep, userLoginData);

    if (res.success) {
      localStorage.setItem(AuthService.TOKEN_KEY, res.data); //TODO read token from cookie and remove this implementation
    }

    return res;
  }

  
  public static async fogotPassword(userLoginData: UserUpdateData): Promise<AppResponse<string>> {
    const ep = Util.apiPublicUrl("forgot-password");

    const res = await axios.post<UserUpdateData, AppResponse<string>>(ep, userLoginData);
    return res;
  }

  public static async resetPassword(userLoginData: UserReset): Promise<AppResponse<string>> {
    const ep = Util.apiPublicUrl("receive-new-password");

    const res = await axios.post<UserReset, AppResponse<string>>(ep, userLoginData);
    return res;
  }


  public static async signUpWithEmail(userLoginData: UserLoginData): Promise<AppResponse<string>> {
    const ep = Util.apiPublicUrl("sign-up-with-email");

    const res = await axios.post<UserLoginData, AppResponse<string>>(ep, userLoginData);

    if (res.success) {
      localStorage.setItem(AuthService.TOKEN_KEY, res.data); //TODO read token from cookie and remove this implementation
    }

    return res;
  }

  public static async signUpWithGoogle(tokenId: string, userData: unknown): Promise<AppResponse<string>> {
    const ep = Util.apiPublicUrl("sign-up-with-google");

    const res = await axios.post<unknown, AppResponse<string>>(ep, { tokenId: tokenId, userData: userData });

    if (res.success) {
      localStorage.setItem(AuthService.TOKEN_KEY, res.data); //TODO read token from cookie and remove this implementation
    }

    return res;
  }

  public static async signUpWithFacebook(
    accessToken: string,
    userID: string,
    userData: unknown
  ): Promise<AppResponse<string>> {
    const ep = Util.apiPublicUrl("sign-up-with-facebook");

    const res = await axios.post<unknown, AppResponse<string>>(ep, {
      accessToken: accessToken,
      userID: userID,
      userData: userData,
    });

    if (res.success) {
      localStorage.setItem(AuthService.TOKEN_KEY, res.data); //TODO read token from cookie and remove this implementation
    }

    return res;
  }

  public static async userGoogleLogin(tokenId: string): Promise<AppResponse<string>> {
    const ep = Util.apiPublicUrl("google-login");

    const res = await axios.post<unknown, AppResponse<string>>(ep, { tokenId: tokenId });

    if (res.success) {
      localStorage.setItem(AuthService.TOKEN_KEY, res.data); //TODO read token from cookie and remove this implementation
    }

    return res;
  }

  public static async userFacebookLogin(accessToken: string, userId: string): Promise<AppResponse<string>> {
    const ep = Util.apiPublicUrl("facebook-login");

    const res = await axios.post<unknown, AppResponse<string>>(ep, { accessToken: accessToken, userID: userId });

    if (res.success) {
      localStorage.setItem(AuthService.TOKEN_KEY, res.data); //TODO read token from cookie and remove this implementation
    }

    return res;
  }

  public static async updateCustomer(data: UserDetails | undefined): Promise<AppResponse<User>> {
    const ep = Util.apiAuthUrl("update-user");

    const res = await axios.post<User, AppResponse<User>>(ep, data);

    return res;
  }

  public static userLogout(): void {
    localStorage.removeItem(AuthService.TOKEN_KEY); //TODO read token from cookie and remove this implementation
  }

  public static getToken(): string | null {
    return localStorage.getItem(AuthService.TOKEN_KEY); //TODO read token from cookie and remove this implementation
  }

  public static setToken(token: string): void {
    localStorage.setItem(AuthService.TOKEN_KEY, token); //TODO read token from cookie and remove this implementation
  }
}
