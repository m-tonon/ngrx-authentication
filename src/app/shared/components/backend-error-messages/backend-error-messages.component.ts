import { Component, Input, OnInit } from '@angular/core';
import { IBackendErrors } from '../../interfaces/backend-errors.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-backend-error-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backend-error-messages.component.html',
  styles: ``,
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input() backendErrors: IBackendErrors = {};

  errorMessages: string[] = [];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join(', ');
      const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
      return `${capitalizedName} ${messages}`;
    });
  }
}
