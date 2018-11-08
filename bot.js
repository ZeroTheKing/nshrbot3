const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`MarLE SHOP
فريق متخصص لخدمتكم
دائما نسعى لنكون نحن الافضل 
خدمات سريعة وعمل جاد 
خدماتنا
-تصاميم
-تاقات
-ماين كرافت 
-نيترو
-نتفلكس
-بوتات
-تجهيز سيرفرات
-يوتيوب
حياكم الله افضل شوب للشراء 
هدفنا هو التمييز
«المعرض الاسود يفتح يوم الجمعة» Soon
رابط
https://discord.gg/72w7Rv`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`MarLE SHOP
فريق متخصص لخدمتكم
دائما نسعى لنكون نحن الافضل 
خدمات سريعة وعمل جاد 
خدماتنا
-تصاميم
-تاقات
-ماين كرافت 
-نيترو
-نتفلكس
-بوتات
-تجهيز سيرفرات
-يوتيوب
حياكم الله افضل شوب للشراء 
هدفنا هو التمييز
«المعرض الاسود يفتح يوم الجمعة» Soon
رابط
https://discord.gg/72w7Rv`)
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء