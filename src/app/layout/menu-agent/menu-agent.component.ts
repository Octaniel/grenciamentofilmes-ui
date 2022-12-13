import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-agent',
  templateUrl: './menu-agent.component.html',
  styleUrls: ['./menu-agent.component.scss']
})
export class MenuAgentComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {

  }
}
