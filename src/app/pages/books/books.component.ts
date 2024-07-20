import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { CardModel } from '../../models/card.model';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {

  books: CardModel[] = [
    {
      title: "The Great Gatsby",
      id: 1,
      author: "Alice",
    },
    {
      title: "The Catcher in the Rye",
      id: 2,
      author: "Eldor"
    }
  ];
}
