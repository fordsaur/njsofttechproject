import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}

  getvalue() {
    return this.http.get(
      `http://shopping.regalbazar.com/Api/Api/getProductList?PROD_ID=${0}&TYPE&CAT_ID=${0}&SUB_CAT_ID=${0}&FROM=${0}&TO=${1000}&APIKEY=AKJBBFSD5588R41SDF`
    );
  }

  private apiKey: any = `AKJBBFSD5588R41SDF`;

  addToCart(body: any) {
    let httpParams = new HttpParams();
    for (const key in body) {
      if (body.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, body[key]);
      }
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    return this.http.post(
      `http://shopping.regalbazar.com/statistics/addToCart`,
      httpParams.toString(),
      { headers }
    );
  }

  cartProductDetails(ECODE: number) {
    return this.http.get(
      `http://shopping.regalbazar.com/Api/Api/getCartProductList?ECODE=${ECODE}&APIKEY=AKJBBFSD5588R41SDF`
    );
  }

  deleteCart(body: any) {
    let httpParams = new HttpParams();
    for (const key in body) {
      if (body.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, body[key]);
      }
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    return this.http.post(
      `http://shopping.regalbazar.com/statistics/deleteFromCart`,
      httpParams.toString(),
      { headers }
    );
  }


  clearCart(body:any){
    let httpParams = new HttpParams();
    for (const key in body) {
      if (body.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, body[key]);
      }
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
  return this.http.post(`http://shopping.regalbazar.com/statistics/clearCart`,httpParams.toString(),
  { headers })
  }
}
