import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menu } from '../navigation/menu';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class ApplicationTemplateComponent implements OnInit {

  public navigationMenu:any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.navigationMenu = menu[0];
    console.log('navigationMenu', this.navigationMenu);
  }

  closeSession() {
    Swal.fire({
      title: 'Desea cerrar sesión?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Si, cerrar sesión',
      cancelButtonText: 'No',
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['login']);
      }
    })
  }

}
