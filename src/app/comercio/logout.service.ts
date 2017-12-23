import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class LogoutService {

  private baseUrl:string='http://localhost:8080';
  tokensRenokeUrl: string;

  constructor(
    private http: AuthHttp,
    private auth: AuthService
  ) {
    this.tokensRenokeUrl = `${this.baseUrl}/tokens/revoke`;
  }

  logout() {
    return this.http.delete(this.tokensRenokeUrl, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.auth.limparAccessToken();
      });
  }

}
