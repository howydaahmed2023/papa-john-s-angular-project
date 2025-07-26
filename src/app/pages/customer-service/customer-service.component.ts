import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-service',
  imports: [FormsModule, CommonModule],
  templateUrl: './customer-service.component.html',
  styleUrl: './customer-service.component.css',
})
export class CustomerServiceComponent {
  complaint = {
    name: '',
    phone: '',
    email: '',
    address: '',
    complaintType: '',
    orderType: '',
    message: '',
  };
  notRobot = false;
  submitted = false;
  success = false;
  message = '';
  onSubmit() {}
}
