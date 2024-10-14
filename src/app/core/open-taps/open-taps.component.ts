import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomerModel } from '../interfaces/customer.model';
import { MatDialog } from '@angular/material/dialog';
import { ChargingDialogComponent } from './charging-dialog/charging-dialog.component';

@Component({
  selector: 'app-open-taps',
  standalone: true,
  imports: [
    MatCardModule, 
    MatChipsModule, 
    MatProgressBarModule,
    AsyncPipe,
    MatButtonModule,
    MatIconModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './open-taps.component.html',
  styleUrl: './open-taps.component.scss'
})
export class OpenTapsComponent {

  dialog = inject(MatDialog);

  chargeCustomer(customer:CustomerModel) {
    this.dialog.open(ChargingDialogComponent, {
      data: {
        customer: customer,
      },
      hasBackdrop: true,
      disableClose:true,
      backdropClass: "backDropClass",
    });
  }
customers$: Observable<CustomerModel[]> = of([
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    table: 3,
    avatar: 'https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_jakesully_16x9_1098_02_b13c4171.jpeg?region=340%2C0%2C1081%2C1081'
  },
  {
    id: 2,
    firstName: 'Alice',
    lastName: 'Smith',
    table: 5,
    avatar: 'https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70.jpg'
  },
  {
    id: 3,
    firstName: 'Michael',
    lastName: 'Johnson',
    table: 2,
    avatar: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'
  },
  {
    id: 4,
    firstName: 'Emily',
    lastName: 'Brown',
    table: 1,
    avatar: 'https://img.freepik.com/premium-vector/avatar-profile-vector-illustrations-website-social-networks-user-profile-icon_495897-224.jpg'
  },
  {
    id: 5,
    firstName: 'David',
    lastName: 'Williams',
    table: 4,
  },
  {
    id: 6,
    firstName: 'Sarah',
    lastName: 'Miller',
    table: 6,
  },
  {
    id: 7,
    firstName: 'James',
    lastName: 'Wilson',
    table: 8,
  },
  {
    id: 8,
    firstName: 'Emma',
    lastName: 'Taylor',
    table: 7,
  },
  {
    id: 9,
    firstName: 'Daniel',
    lastName: 'Anderson',
    table: 9,
  },
  {
    id: 10,
    firstName: 'Olivia',
    lastName: 'Moore',
    table: 10,
  },
  {
    id: 11,
    firstName: 'Matthew',
    lastName: 'Martinez',
    table: 12,
  },
  {
    id: 12,
    firstName: 'Sophia',
    lastName: 'Garcia',
    table: 11,
  },
  {
    id: 13,
    firstName: 'Christopher',
    lastName: 'Lopez',
    table: 14,
  },
  {
    id: 14,
    firstName: 'Ava',
    lastName: 'Hernandez',
    table: 13,
  },
  {
    id: 15,
    firstName: 'Andrew',
    lastName: 'Young',
    table: 16,
  }
]);

}
