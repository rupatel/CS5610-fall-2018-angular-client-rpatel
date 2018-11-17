import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-list-component',
  templateUrl: './module-list-component.component.html',
  styleUrls: ['./module-list-component.component.css']
})
export class ModuleListComponentComponent implements OnInit {
  modules = [{id : 1, title : 'Mod1'},
    {id : 2, title : 'Mod2'},
    {id : 3, title : 'Mod3'},
    {id : 4, title : 'Mod4'},
    {id : 5, title : 'Mod5'},
    {id : 6, title : 'Mod6'},
    {id : 7, title : 'Mod7'},
    {id : 8, title : 'Mod8'}];
  constructor() { }

  ngOnInit() {
  }

}
