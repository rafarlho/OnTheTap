import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'OnTheTap';

  firebaseConfig = {
    apiKey: 'AIzaSyDw8Xbb4dF2qCKQ9C1FGpreqwRIJXZCI0g',
    authDomain: 'onthetap-1a7d9.firebaseapp.com',
    projectId: 'onthetap-1a7d9',
    storageBucket: 'onthetap-1a7d9.appspot.com',
    messagingSenderId: '842157517405',
    appId: '1:842157517405:web:38689c783e9e3aad6fbbb4',
    measurementId: 'G-RS9MBL69WT',
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);
}
