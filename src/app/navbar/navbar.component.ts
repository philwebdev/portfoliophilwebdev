import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends BaseComponent {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
