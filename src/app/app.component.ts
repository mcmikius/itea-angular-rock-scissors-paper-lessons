import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rock Paper Scissors Lizard Spock';
  desc = 'The Rock Paper Scissors Game plus Lizard Spock';

  constructor() { }

  ngOnInit() {
  }

}
