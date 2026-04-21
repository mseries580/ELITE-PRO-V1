require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"UCAlSpaleR2gwVGzFQvINv9WmPFvZVDqjLSEaPvcvmk="},"public":{"type":"Buffer","data":"eDLRaPipQmRmIKDp4gfOOxFZdLwkUgbvvvYy2bxP92U="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"AKqxFUK4UNC1l+4ZIDDmWmSwgYxVx0/3RQs+sgMlJ1g="},"public":{"type":"Buffer","data":"QOSiDmOYpx2ZQi+uXpO1dl4UOSTCE/mgxXZ6G0HfR20="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"mKiDAFmxdpaCGWyMOcp/G5q/dtGxeVJjjAqdITDSQGQ="},"public":{"type":"Buffer","data":"1aR+cC9zUe9UJkHQ1BrKcPzBDHwWsD/LuqTWwgFaeWc="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"IPZeG7TWsdEbPvdIZlSp0yTj1IAM8K/6zCa5ixBCrHQ="},"public":{"type":"Buffer","data":"4vkIR/AEWRRgFPlaXVbIPN2Vf62kGVzjud43gW4/BQU="}},"signature":{"type":"Buffer","data":"Zlz670ow6xbRScKhVUYda8GF3zhgvaM1J1Llydakfej1uJyYQBKFWc1pURYk6Jm+4/S3rmSTkNX8euVf83l5AQ=="},"keyId":1},"registrationId":128,"advSecretKey":"EIh97mqN6s8zzweBGfvjiiMaKuuva5G5HV2t8U9eZjE=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"E67P4Q48","me":{"id":"923284905821:42@s.whatsapp.net","lid":"109294636785708:42@lid"},"account":{"details":"CInm7KYDEMSwn88GGBggACgA","accountSignatureKey":"CpcDcpond1afNntXeag6yNCg7HgHiOx1Avaps+3g8Tc=","accountSignature":"7nlg8rTYN6aksOq83bd6rAB6CcCFQQm5akMQ2qioZ7E6vu3x9Ly6vwTx8K9ZOSOSYBzQgfwopO4GKuCt+o8rBQ==","deviceSignature":"hbwhbLeRUC+DN/ye//M1T70uYfemBRsVNdYz7vqI3Rz0vN701dfS/jTLGMvNs130UF+0skqO6vTzXOSDWWB3Bw=="},"signalIdentities":[{"identifier":{"name":"923284905821:42@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BQqXA3KaJ3dWnzZ7V3moOsjQoOx4B4jsdQL2qbPt4PE3"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAsIDQgS"},"lastAccountSyncTimestamp":1776801871,"myAppStateKeyId":"AAAAAP21"}';
global.ytname = process.env.YT_NAME || "YT: @EliteProTechs";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '2347047504860';
global.ownername = process.env.OWNER_NAME || 'ElitePro';
global.botname = process.env.BOT_NAME || 'ELITE-PRO-V1';

// Default settings 
global.prefix = process.env.PREFIX || '.';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'false';
global.anti92 = process.env.ANTI_92 === 'true';
global.autoviewstatus = process.env.AUTO_VIEW_STATUS !== 'false';
global.welcome = process.env.WELCOME !== 'false';
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';

// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'EliteProTech\n\nContact: +2347047504860';
// Default settings 2
global.wm = process.env.WM || "Youtube @EliteProTechs";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Reply messages
global.mess = {
    done: '✅ Task completed successfully!',
    prem: '⚠️ Access denied. This feature is for premium users only.',
    admin: '⚠️ Admin privileges required to perform this action.',
    botAdmin: '⚠️ I need to be an admin in this chat to execute this command.',
    owner: '⛔ Command restricted to the bot owner.',
    group: 'ℹ️ This command can only be used in group chats.',
    private: 'ℹ️ This command can only be used in private chats.',
    wait: '⏳ Processing your request... Please wait a moment.',
    error: '❌ An unexpected error occurred. Please try again later.',
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
