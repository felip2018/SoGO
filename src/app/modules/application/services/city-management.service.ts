import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import ISelectRequestModel from "../models/SelectRequestModel";
import { ACTIONS } from "../../../../environments/environment";
import IInsertRequestModel from "../models/InsertRequestModel";

@Injectable({
  providedIn: 'root'
})
export class CityManagementService {

  constructor(public http: HttpClient) {
  }

  public getCountriesList() {
    const body: ISelectRequestModel = {
      table: 'country',
      fields: [ 'id', 'name' ],
      order: {
        field: 'name',
        sort: 'ASC'
      }
    };
    return this.http.post(ACTIONS.GET_DATA, body);
  }

  public getRegionsList(countryId: number) {
    const body: ISelectRequestModel = {
      table: 'region',
      fields: [ 'id', 'country_id', 'name' ],
      conditions: [
        {
          field: 'country_id',
          value: countryId
        }
      ],
      order: {
        field: 'name',
        sort: 'ASC'
      }
    };
    return this.http.post(ACTIONS.GET_DATA, body);
  }

  public getCitiesList(regionId: number) {
    const body: ISelectRequestModel = {
      table: 'city',
      fields: [ 'id', 'region_id', 'name' ],
      conditions: [
        {
          field: 'region_id',
          value: regionId
        }
      ],
      order: {
        field: 'name',
        sort: 'ASC'
      }
    };
    return this.http.post(ACTIONS.GET_DATA, body);
  }

  public saveCountry(data: {countryName: string}) {
    const body: IInsertRequestModel = {
      table: 'country',
      data: {
        'name': data.countryName
      }
    };
    return this.http.post(ACTIONS.SAVE_DATA, body);
  }

  public saveRegion(data: {countryId: number, regionName: string}) {
    const body: IInsertRequestModel = {
      table: 'region',
      data: {
        'country_id': data.countryId,
        'name': data.regionName
      }
    };
    return this.http.post(ACTIONS.SAVE_DATA, body);
  }

  public saveCity(data: {regionId: number, cityName: string}) {
    const body: IInsertRequestModel = {
      table: 'city',
      data: {
        'region_id': data.regionId,
        'name': data.cityName
      }
    };
    return this.http.post(ACTIONS.SAVE_DATA, body);
  }
}
