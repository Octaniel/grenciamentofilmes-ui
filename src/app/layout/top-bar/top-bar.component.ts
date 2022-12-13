import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/auth/auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  constructor(
    public auth: AuthService,
    public errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    public router: Router,
  ) { }

  ngOnInit(): void { }

  logout() {
    this.auth.logout()
      .then(() => {
        this.router.navigate(['/login']);
        this.messageService.add({ severity: 'info', detail: 'Sessão terminada.' });
      }).catch(erro => this.errorHandler.handle(erro));
  }

  refreshToken() {
    this.auth.getNewAccessToken()
      .then(response => response)
      .catch(erro => this.errorHandler.handle(erro));
  }

}
