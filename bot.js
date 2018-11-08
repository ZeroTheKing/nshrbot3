const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`!!
حياك ربي اعرف ما تقصر

ممكن تصوتلي رقم 25

وشكرا لك ي بعدي :heart_exclamation:

https://discord.gg/NPZFQgN`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`!!
حياك ربي اعرف ما تقصر

ممكن تصوتلي رقم 25

وشكرا لك ي بعدي :heart_exclamation:

https://discord.gg/NPZFQgN`)
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
