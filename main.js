/*
Création de la constance «Discord» et lecture du module «discord.js».
*/
const Discord = require('discord.js');
/*
Création de la constance «client» et lecture de la fonction «Discord.Client», présent dans «discord.js».
*/
const client = new Discord.Client();
/*
Déclenchement de l'évenement «ready».
*/
/*
Création de la constance «config» qui effectue la lecture du fichier config.json
*/
const config = require('./config.json');

client.on('ready', () => {
/*
Envoie d'une log avec le pseudo discord du bot et la confirmation de sa connection au client.
*/
	console.log(`Connection en tant que ${client.user.tag}!`);
/*
Affiche un status de jeu personnalisé
*/
	client.user.setActivity('!help')
});
/*
Connection du client à l'aide du token présent dans la config
*/
client.login(config.token);

// «»

// { }

// 1gpjd2