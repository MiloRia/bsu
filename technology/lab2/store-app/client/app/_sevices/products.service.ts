/**
 * Created by Drapegnik on 5/16/17.
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/map';
import 'rxjs/add/operator/catch';

import SettingsService from '../settings.servise';
import Product from '../_models/product';
import Catalog from '../_models/catalog';

@Injectable()
export class ProductsService {

  constructor(private http: Http) {};

  getActiveCatalog() {
    return this.http.get(`${SettingsService.apiUrl}/products/catalogs/active`)
      .map((response: Response) => {
        if (response.status === 200) {
          const catalog = JSON.parse(response['_body']);
          catalog.products = catalog.products.map(o => new Product(o));
          return new Catalog(catalog);
        }

        return response;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getAll() {
    return this.http.get(`${SettingsService.apiUrl}/products/`)
      .map((response: Response) => {
        if (response.status === 200) {
          const rawProducts = JSON.parse(response['_body']);
          return rawProducts.map(o => new Product(o));
        }
        return response;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
}
