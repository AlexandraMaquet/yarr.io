import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
import * as firebase from 'firebase/app';


declare var Phaser: any;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  player1PositionX: number;
  player2PositionX: number;

  constructor(private db: AngularFireDatabase) {
    this.buildPhaserRenderer(this);
    this.buildPhaserRenderer2(this);
  }

  public buildPhaserRenderer(parent) {

    var poly, graphics, game = new Phaser.Game(360, 640, Phaser.CANVAS, 'phaser-example', { create: create, preload: preload, update: update });

    var isGameStarted = false;

    function preload() {
      game.load.image('paddle', 'assets/paddle.png');
      game.load.image('ball', 'assets/ball.png');

      parent.db.object("/J1PositionX").valueChanges().subscribe((data) => {
        parent.player1PositionX = data.x;
      });
    }

    function create() {

      game.stage.backgroundColor = '#006534';
      game.physics.startSystem(Phaser.Physics.ARCADE);
      game.world.enableBody = true;


      //P1
      this.player = game.add.sprite(game.width / 2, game.height - 40, 'paddle');
      this.player.anchor.setTo(0.5);
      this.player.body.collideWorldBounds = true;
      this.player.body.immovable = true;

      this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
      this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
      this.start = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


      //P2
      this.player2 = game.add.sprite(game.width / 2, 40, 'paddle');
      this.player2.anchor.setTo(0.5);
      this.player2.body.collideWorldBounds = true;
      this.player2.body.immovable = true;

      //Ball
      this.ball = game.add.sprite(game.width / 2, game.height / 2, 'ball');
      this.ball.anchor.setTo(0.5);
      this.ball.body.collideWorldBounds = true;
      this.ball.body.velocity.x = 0;
      this.ball.body.velocity.y = 0;
      this.ball.body.bounce.setTo(1);
    }

    function update() {
      game.physics.arcade.collide([this.player, this.player2], this.ball);


      if (this.ball.y > this.player.y + 20) {
        game.state.restart();
      }

      if (this.ball.y < this.player2.y - 20) {
        game.state.restart();
      }


      if (this.left.isDown) {
        this.player.body.velocity.x = -300;
        parent.db.object("/J1PositionX").update({ x: this.player.body.position.x });
      }
      else if (this.right.isDown) {
        this.player.body.velocity.x = 300;
        parent.db.object("/J1PositionX").update({ x: this.player.body.position.x });
      }
      else {
        this.player.body.velocity.x = 0;
      }

      if (this.start.isDown && this.ball.body.velocity.x == 0 && this.ball.body.velocity.y == 0) {
        this.ball.body.velocity.x = 300;
        this.ball.body.velocity.y = 300;
      }

      this.player2.body.position.x = parent.player2PositionX;
      
    }
  }

  public buildPhaserRenderer2(parent) {

    var poly, graphics, game = new Phaser.Game(360, 640, Phaser.CANVAS, 'phaser-example2', { create: create, preload: preload, update: update });

    function preload() {
      game.load.image('paddle', 'assets/paddle.png');
      game.load.image('ball', 'assets/ball.png');

      parent.db.object("/J2PositionX").valueChanges().subscribe((data) => {
        parent.player2PositionX = data.x;
      });
    }

    function create() {

      game.stage.backgroundColor = '#006534';
      game.physics.startSystem(Phaser.Physics.ARCADE);
      game.world.enableBody = true;


      //P1
      this.player = game.add.sprite(game.width / 2, game.height - 40, 'paddle');
      this.player.anchor.setTo(0.5);
      this.player.body.collideWorldBounds = true;
      this.player.body.immovable = true;

      this.left = game.input.keyboard.addKey(Phaser.Keyboard.Q);
      this.right = game.input.keyboard.addKey(Phaser.Keyboard.S);

      //P2
      this.player2 = game.add.sprite(game.width / 2, 40, 'paddle');
      this.player2.anchor.setTo(0.5);
      this.player2.body.collideWorldBounds = true;
      this.player2.body.immovable = true;

      //Ball
      this.ball = game.add.sprite(game.width / 2, game.height / 2, 'ball');
      this.ball.anchor.setTo(0.5);
      this.ball.body.collideWorldBounds = true;
      this.ball.body.velocity.x = -300;
      this.ball.body.velocity.y = -300;
      this.ball.body.bounce.setTo(1);
    }

    function update() {
      game.physics.arcade.collide([this.player, this.player2], this.ball);


      if (this.ball.y > this.player.y + 20) {
        game.state.restart();
      }

      if (this.ball.y < this.player2.y - 20) {
        game.state.restart();
      }


      if (this.left.isDown) {
        this.player.body.velocity.x = -300;
        parent.db.object("/J2PositionX").update({ x: this.player.body.position.x });
      }
      else if (this.right.isDown) {
        this.player.body.velocity.x = 300;
        parent.db.object("/J2PositionX").update({ x: this.player.body.position.x });
      }
      else {
        this.player.body.velocity.x = 0;
      }

      this.player2.body.position.x = parent.player1PositionX;

    }
  }


  ngOnInit() {
  }
}