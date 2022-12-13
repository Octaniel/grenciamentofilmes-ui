import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent implements OnInit {
  total = 0;
  showDocumentsWithIssues = false;
  nif = this.auth.jwtPayload.nif;

  displayTransportSerie = false;

  constructor(
    // private documentEmitterService: DocumentEmitterService,
    public auth: AuthService,
    // private errorHandler: ErrorHandlerService,
  ) { }

  ngOnInit(): void {
    // this.read();
  }

  // read() {
  //   this.documentEmitterService.readIssues(this.filter)
  //     .then((response) => {
  //       this.total = response.total;

  //       if (this.total) {
  //         this.showDocumentsWithIssues = true;
  //       }
  //     })
  //     .catch((error) => this.errorHandler.handle(error))
  // }
}
