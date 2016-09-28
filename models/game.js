module.exports = 

function Game (){

    this.name = '';
    this.category = '';

    this.init = function(name, category){
        this.name = name;
        this.category = category;
    };

    this.initFromParams = function(game){
        this.name = game.name;
        this.category = game.category;
    };
    
}