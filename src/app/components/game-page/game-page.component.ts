import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export default class GamePageComponent implements OnInit {

  @Input() userName: string;

  ngOnInit(): void {
  }

  constructor() { }

}
