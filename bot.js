const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`!!
الحق نظام انفايت رهيب مرا :money_mouth: 
6 Invites= 15K
:heart_exclamation:  https://discord.gg/WRUUc42 :heart_exclamation:`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`!!
الحق نظام انفايت رهيب مرا :money_mouth: 
6 Invites= 15K
:heart_exclamation:  https://discord.gg/WRUUc42 :heart_exclamation:`)
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
