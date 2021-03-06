import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Game } from '../../game/game';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  /**
   * Game instance
   * @private
   * @type {Game}
   * @memberof HomePage
   */
  private gameInstance: Game;

  /**
   * Creates an instance of HomePage.
   * @param {NavController} navCtrl 
   * @memberof HomePage
   */
  constructor( public navCtrl: NavController ) {
    this.gameInstance = new Game();
  }
}
