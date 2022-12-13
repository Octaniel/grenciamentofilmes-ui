import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  refreshToke() {
    this.auth.getNewAccessToken();
  }

}
