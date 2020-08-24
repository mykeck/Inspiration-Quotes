import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quotes} from '../quotes'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newQuote = new Quotes(0,"","",new Date());
  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote(form: NgForm){
    this.addQuote.emit(this.newQuote);
    form.resetForm();
      }

  constructor() { }

  ngOnInit(): void {
  }

}
