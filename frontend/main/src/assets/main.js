var mainState = {
	preload: function() {
		game.load.image('paddle', 'paddle.png');
	},
	create: function() {
		game.stage.backgroundColor = '#006534';
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.world.enableBody = true;

		this.player = game.add.sprite(game.width/2, game.height-40, 'paddle');
		this.player.anchor.setTo(0.5);
		this.player.body.collideWorldBounds = true;

		this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

	},
	update: function() {
		if(this.left.isDown) {
			this.player.body.velocity.x = -300;
		}
		else if(this.right.isDown) {
			this.player.body.velocity.x = 300;
		}
		else {
			this.player.body.velocity.x = 0;
		}
	}
};

var game = new Phaser.Game(360, 640);
game.state.add('main', mainState);
game.state.start('main');
