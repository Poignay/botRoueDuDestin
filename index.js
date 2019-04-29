// JavaScript source code
const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", () => (
    console.log('Bot ready !')
));

bot.login('NTYzNDYzMjYyOTk4NjI2MzU3.XKZsMg.YkrIvKdgJ8OabZEYFRe55EW7uco');
var jeu = []
jeu = ["Overwatch", "Cs Go", "Apex",  "portal knight"];
var listejeu = "Overwatch Cs Go Apex portal knight";
var compteur = 0;
bot.on('message', message => {
    if (message.content === "!help") {
        message.channel.send("Le bot roue du destin permet de choisir a votre place votre jeu");
        message.channel.send("- !run pour lancer la roue");
        message.channel.send("- !change{nom1,nom2,nom3,...} pour changer les jeux de la roue");
        message.channel.send("- !voir pour connaitre les jeux de la roue");
        message.channel.send("- !help pour l'aide");
    }
    if (message.content === "!run") {
        var nbAlea = Math.floor(Math.random() * jeu.length);
        console.log(jeu[nbAlea]);
        message.channel.send(jeu[nbAlea]);
        
    }
   
    
    if (message.content === "!voir") {
        var str=""
        for (var i = 0; i < jeu.length; i++) {
            if (str != "") {
                str = str + " | " + jeu[i];
            } else {
                str = jeu[i];
            }
        } 
        message.channel.send(str);
    }

    if (message.content.substring(0,7) === "!change") {
        var lesJeux = message.content.substring(8, message.content.length - 1);
        jeu = lesJeux.split(',');
        var str = ""
        for (var i = 0; i < jeu.length; i++) {
            if (str != "") {
                str = str + " " + jeu[i];
            } else {
                str = jeu[i];
            }
        } 
        listejeu = str;
    }
});
