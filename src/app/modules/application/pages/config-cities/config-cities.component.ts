import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { CityManagementService } from "../../services/city-management.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-config-cities',
  templateUrl: './config-cities.component.html',
  styleUrls: ['./config-cities.component.scss']
})
export class ConfigCitiesComponent implements OnInit {

  formCountry: FormGroup;
  formRegion: FormGroup;
  formCity: FormGroup;
  countriesList: [];
  regionsList: [];
  citiesList: [];
  showFormCountry: boolean;
  showFormRegion: boolean;
  showFormCity: boolean;
  selectedCountry: any;
  selectedRegion: any;

  constructor(private fctrl: FormBuilder, private cityMngr: CityManagementService) {
    this.countriesList = [];
    this.regionsList = [];
    this.citiesList = [];

    this.showFormCountry = false;
    this.showFormRegion = false;
    this.showFormCity = false;

    this.formCountry = fctrl.group({
      countryName: ['', Validators.required]
    });

    this.formRegion = fctrl.group({
      countryId: ['', Validators.required],
      regionName: ['', Validators.required]
    });

    this.formCity = fctrl.group({
      regionId: ['', Validators.required],
      cityName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getCountriesList();
  }

  getCountriesList() {
    this.cityMngr.getCountriesList().subscribe({next: (res: any) => {
        this.countriesList = res.data;
      }, error: (err) => {
        console.log('getCountriesList[Error]', err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error?.message || 'Se ha presentado un error al consultar el listado de paises',
          footer: ''
        })
    }})
  }

  getRegionsList(countryId: number) {
    this.selectedCountry = this.countriesList.filter((item)=>{return item['id'] === countryId})[0];
    this.formRegion.controls['countryId'].setValue(this.selectedCountry['id']);
    this.cityMngr.getRegionsList(countryId).subscribe({next: (res: any) => {
        this.regionsList = res.data;
      }, error: (err) => {
        console.log('getRegionsList[Error]', err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error?.message || 'Se ha presentado un error al consultar el listado de regiones',
          footer: ''
        })
    }})
  }

  getCitiesList(regionId: number) {
    this.selectedRegion = this.regionsList.filter((item)=>{return item['id'] === regionId})[0];
    this.formCity.controls['regionId'].setValue(this.selectedRegion['id']);
    this.cityMngr.getCitiesList(regionId).subscribe({next: (res: any) => {
        this.citiesList = res.data;
      }, error: (err) => {
        console.log('getRegionsList[Error]', err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error?.message || 'Se ha presentado un error al consultar el listado de ciudades',
          footer: ''
        })
    }})
  }

  saveUpdateCountry() {
    console.log('SAVE UPDATE COUNTRY', this.formCountry.value);
    this.cityMngr.saveCountry(this.formCountry.value).subscribe({next:(res: any)=>{
        console.log('saveUpdateCountry[saveCountry][success]', res);
        this.getCountriesList();
      }, error: (err) => {
        console.log('saveUpdateCountry[saveCountry][error]', err);
      }});
  }

  saveUpdateRegion() {
    console.log('SAVE UPDATE REGION', this.formRegion.value);
    this.cityMngr.saveRegion(this.formRegion.value).subscribe({next:(res: any)=>{
        console.log('saveUpdateRegion[saveRegion][success]', res);
        this.getRegionsList(this.formRegion.controls['countryId'].value);
      }, error: (err) => {
        console.log('saveUpdateRegion[saveRegion][error]', err);
      }});
  }

  saveUpdateCity() {
    console.log('SAVE UPDATE CITY', this.formCity.value);
    this.cityMngr.saveCity(this.formCity.value).subscribe({next:(res: any)=>{
        console.log('saveUpdateCity[saveCity][success]', res);
        this.getCitiesList(this.formCity.controls['regionId'].value);
      }, error: (err) => {
        console.log('saveUpdateCity[saveCity][error]', err);
      }});
  }

  showHideForm(formName: string) {
    switch (formName) {
      case 'country':
        this.showFormCountry = !this.showFormCountry;
        break;
      case 'region':
        if (this.selectedCountry) {
          this.showFormRegion = !this.showFormRegion;
        }
        break;
      case 'city':
        if (this.selectedRegion) {
          this.showFormCity = !this.showFormCity;
        }
        break;
    }
  }
}
