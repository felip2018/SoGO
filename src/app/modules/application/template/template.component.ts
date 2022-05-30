import { Component, OnInit } from '@angular/core';
import { menu } from '../navigation/menu';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class ApplicationTemplateComponent implements OnInit {

  public navigationMenu:any = {};

  constructor() { }

  ngOnInit(): void {
    this.navigationMenu = menu[0];
    console.log('navigationMenu', this.navigationMenu);
  }

}
