import { Component, Input } from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  title = 'Pipes';

  bookName: string = 'Angular 5 Training';
  bookAuthor: string = 'Sridhar';
  bookPrice: number = '28';
  discount: number = '0.259';
  publishedOn: Date = new Date();
  inStock: string = 'yes';
}