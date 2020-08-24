import { Component, OnInit, Output, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
 quotes: Quotes[]=[
  new Quotes(1,'Spread love everywhere you go. Let no one ever come to you without leaving happier', 'Mother Teresa', new Date(1990,3,14)),
  new Quotes (2,'When you reach the end of your rope, tie a knot in it and hang on','Franklin D. Roosevelt', new Date(1993,2,15)),
  new Quotes (3, 'We cannot solve our problems with the same thinking we used when we created them','Albert Einstein', new Date(1900,1,20)),
  new Quotes (4, 'If you can dream it, you can do it','Walt Disney', new Date(2000,5,10)),
 ]
 toggleDetails(index: string | number ){
   this.quotes[index].showDescription = !this.quotes[index].showDescription;
 }
 completeQuotes(isComplete: any, index: number){
   if (isComplete){
     this.quotes.splice(index,1);
    }
 }
 deleteQuotes(isComplete: any, index: number){
   if (isComplete){
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

    if (toDelete){
      this.quotes.splice(index,1);
    }
   }
 }
 addNewQuote(quote){
  let QuotesLength = this.quotes.length;
  quote.id = QuotesLength+1;
  quote.completeDate = new Date(quote.completeDate);
  let quoteObject = new Quotes(quote.id,quote.description,quote.name,quote.completeDate);
  this.quotes.push(quoteObject);
}
  constructor() { }

  ngOnInit(): void {
  }

}
