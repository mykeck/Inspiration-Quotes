import { Component } from '@angular/core';
import {Quotes} from './quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quotes[] =[
    new Quotes(1,'Spread love everywhere you go. Let no one ever come to you without leaving happier', 'Mother Teresa', new Date(1990,3,14)),
    new Quotes (2,'When you reach the end of your rope, tie a knot in it and hang on','Franklin D. Roosevelt', new Date(1993,2,15)),
    new Quotes (3, 'We cannot solve our problems with the same thinking we used when we created them','Albert Einstein', new Date(1900,1,20)),
    new Quotes (4, 'If you can dream it, you can do it','Walt Disney', new Date(2000,5,10)),
  ]
}
