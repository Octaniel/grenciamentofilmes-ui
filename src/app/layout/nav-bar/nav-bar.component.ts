import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

  hasSession(): boolean {
    const hasSession: boolean = this.auth.hasSession();
    return hasSession;
  }
}
