import { Component } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  title = 'Directives';
  numb: number;

  input_numb : number[] = [23, 24, 55, 88, 46, 41]
}
