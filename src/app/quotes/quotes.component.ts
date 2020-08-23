import { Component, OnInit, Output, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
@Input() quotes: Quotes
  constructor() { }

  ngOnInit(): void {
  }

}
