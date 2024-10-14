import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { BehaviorSubject, Subject } from 'rxjs';
import { CustomerModel } from '../../interfaces/customer.model';
import { AsyncPipe } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-charging-dialog',
  standalone: true,
  imports: [
    MatDialogTitle, 
    MatDialogContent,
    AsyncPipe,
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    MatButtonModule, 
    MatIconModule,QRCodeModule
  ],
  templateUrl: './charging-dialog.component.html',
  styleUrl: './charging-dialog.component.scss'
})
export class ChargingDialogComponent {
  customer = inject(MAT_DIALOG_DATA);
  customer$ = new BehaviorSubject<CustomerModel|null>(null)
  valueToCharge:number|null = null


  qrCodeString : string = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  constructor() {
    this.customer$.next(this.customer.customer)
  }

  generateQrCode() {

  }

  closeDialog() {
    
  }
}
