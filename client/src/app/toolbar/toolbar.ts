import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'inv-toolbar',
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.scss']
})
export class Toolbar implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}

@NgModule({
  declarations: [
    Toolbar
  ],
  imports: [
    MatToolbarModule,
  ],
  exports: [
    Toolbar,
  ]
})
export class ToolbarModule { }
