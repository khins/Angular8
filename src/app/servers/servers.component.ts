import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `<app-server></app-server>
              testing using back tics
            <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
