import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/login-model';
import { TokenModel } from '../models/token-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http: HttpClient = inject(HttpClient)

  login(loginModel: LoginModel): void {
    this.http.post<TokenModel>(environment.apis.login, loginModel)
      .subscribe(res => {
        console.log(res)
				if (!res.accessToken) {
          console.error("Login response does not contain token.")
        } else {
					localStorage.setItem(environment.tokenKey, res.accessToken)
				}
      })
  }

  logout(): void {
    localStorage.removeItem(environment.tokenKey)
  }
}
