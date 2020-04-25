/*
Création de la constance «Discord» et lecture du module «discord.js»
*/
const Discord = require('discord.js');
/*
Création de la constance «client» et lecture de la fonction «Discord.Client», présent dans «discord.js»
*/
const client = new Discord.Client();
/*

*/
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity('!help')
});

client.login();

// «»