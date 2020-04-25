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
client.on('ready', () => {
/*
Envoie d'une log avec le pseudo discord du bot et la confirmation de sa connection au client.
*/
	console.log(`Logged in as ${client.user.tag}!`);
/*
Affiche un status de jeu personnalisé
*/
	client.user.setActivity('!help')
});
/*
Connection du client à l'aide du token
*/
client.login('NzAzMTM5MTA1NDY2MzUxNjQ3.XqOiIg.F3D3h5p0H2t-BLvgB73uZ0J0pLQ');

// «»

// { }