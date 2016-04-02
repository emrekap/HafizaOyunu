var GameObjects = window.GameObjects || {};

function shuffle(array) {
    var currentIndex = 8;
    console.log("array.length: " + array.length);
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        console.log("randomIndex: " + randomIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        console.log("Value: " + temporaryValue + " index: " + currentIndex + " temporary: " + temporaryValue );
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        console.log("current value: " + array[currentIndex] + " random value: " + array[randomIndex]);
    }

    return array;
}




var Card = function (TheCardType) {
    console.log("Called constructor with: " + TheCardType);
    this.sprite = game.add.sprite(100, 100, 'cards');
    this.cardsClosed = true;
    this.Type = TheCardType;
    this.sprite.animations.add('apple', [0,4]);
    this.sprite.animations.add('avakado', [1,4]);
    this.sprite.animations.add('banana', [2,4]);
    this.sprite.animations.add('pumpkin', [3,4]);
    this.sprite.animations.add('questionmark',[4]);

    //this.sprite.animations.play(TheCardType);
}   

Card.prototype.GetType = function()
{return this.Type;}
  
Card.prototype.GetSprite = function()
{return this.sprite;}

Card.prototype.GetType = function()
{return Type;}

Card.prototype.SetType= function (s) {
    thisType = s;
}

Card.prototype.PositionCard= function (x, y)
{
    this.sprite.x = x;
    this.sprite.y = y;
}
Card.prototype.ShowCard = function ()
{
    this.sprite.animations.play(this.Type);
  
}