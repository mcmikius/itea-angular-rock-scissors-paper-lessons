import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-game-page',
    templateUrl: './game-page.component.html',
    styleUrls: ['./game-page.component.css']
})
export default class GamePageComponent implements OnInit {

    @Input() userName: string;
    weapons = [
        'rock',
        'paper',
        'scissors',
        'spock'
    ]
    playerSelected = -1;
    enemySelected = -1;

    isResultShow = false;
    scores = [0, 0];
    theResult = 0

    ngOnInit(): void {
    }

    choose(weapon: number): void {
        this.playerSelected = weapon;

        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 4);
            this.enemySelected = randomNum;
            this.checkResult();
            this.isResultShow = true;
        }, Math.floor(Math.random() * 500) + 200);
    }

    checkResult(): void {
        const playerPick = this.playerSelected;
        const enemyPick = this.enemySelected;
        if (playerPick == enemyPick) {
            this.theResult = 2;
        } else if ((playerPick - enemyPick + 3) % 3 == 1) {
            this.theResult = 0;
            this.scores[0] = this.scores[0] + 1;
        } else if ((playerPick - enemyPick + 4) % 4 == 1){
            this.theResult = 1;
            this.scores[1] = this.scores[1] + 1;
        }
    }

    constructor() {
    }

}
