import { Component, OnInit } from '@angular/core';

@Component({
template:''
})
export abstract class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(id:string) {
    let el = document.getElementById(id);
    el?.scrollIntoView();
  }

}
