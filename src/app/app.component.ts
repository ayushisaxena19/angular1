import { Component } from '@angular/core';
import{  User } from './user';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
topic=['Angular','React','Vue'];
userModel = new User('ayushi','ayushi@gmail.com', 9756611688,'ayushi','');
}
