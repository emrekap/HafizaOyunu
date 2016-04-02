var showLogs = true;
if (showLogs) {
    console.log("Inside ScreenManager");
}
var gameWidth = 800;
var gameHeight = 450;
var backgroundColor = "#000000";
var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'KulturGameDev', {
    preload: preload, create: create, update: update
});


var Cards = [];

var CardTypes =[];
CardTypes.push('apple','banana', 'avakado', 'pumpkin' );


function preload() {
    if (showLogs) {
        console.log("ScreenManager-preload");
    }
   game.load.image('background', 'Pictures/background.png');

  game.load.atlas('cards', 'Sprites/fruits.png', 'Sprites/fruits.json', Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY);
}

function create() {
    if (showLogs)
        console.log("ScreenManager ­ create");

   var Background = game.add.sprite(game.world.centerX, game.world.centerY, 'background');
   Background.anchor.setTo(0.5, 0.5);

   for (var i = 0; i < (CardTypes.length); i++) {           //kartları arrayın içine atıyoruz
       for (var j = 0; j < 2; j++) {
           var NewCard = new Card(CardTypes[i]);
           Cards.push(NewCard);
       }

       console.log("card " + i + " " + Cards[i]);
   }

   console.log("Shuffling");
   shuffle(Cards);             //kartları karıştırıyoruz
    
   for (var row = 0; row < 2;row++) {
       for (var iCurrentCard = 0; iCurrentCard < 4; iCurrentCard++)
       {
           Cards[iCurrentCard + (4 * row)].PositionCard((iCurrentCard + 1) * 150, (row + 1) * 150);
           Cards[iCurrentCard + (4 * row)].ShowCard();
       }
   }

}

function update() {


}