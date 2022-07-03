import { SenderEmailConfig } from 'src/app/models/email.modle';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class EmailSenderService {

  constructor(private readonly http: HttpClient) { }

  public sendMail(emailConfig: SenderEmailConfig): Observable<any> {
    return (this.http.post<any>(`https://formspree.io/f/xwkydegw`, { email: emailConfig.senderEmail, message: emailConfig.message }));
  }
}
