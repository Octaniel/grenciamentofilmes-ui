import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ErrorHandlerService} from 'src/app/core/error-handler.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  displayAccountBlockingInfo = false;

  constructor(
    public auth: AuthService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    if (!this.auth.isAccessTokenInvalid()) {
      this.router.navigate(['/index']);
    }
  }

  login(user: string, password: string) {
    this.loading = true;
    this.auth.login(user, password)
      .then(response => {
        const isFirst: boolean = response.isFirst;

        localStorage.setItem('isFirst', JSON.stringify(isFirst));
        this.router.navigate(['/index']);
        this.messageService.add({
          severity: 'success',
          detail: 'Bem vindo!'
        });

      })
      .catch(erro => this.errorHandler.handle(erro))
      .finally(() => this.loading = false);
  }

  closeDialog(): void {
    this.displayAccountBlockingInfo = false;
  }
}
