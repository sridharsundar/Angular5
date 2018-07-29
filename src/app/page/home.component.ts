import { Component } from '@angular/core';

@Component({
  selector: 'first-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'My First App';
  inputBox = "";
}
