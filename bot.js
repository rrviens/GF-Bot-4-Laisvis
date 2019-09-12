const Discord = require('discord.js');
const client = new Discord.Client();
var strings = require('./strings.js');
const config = require('./config.json');
//118421151121670147
//message.content.slice(prefix.length).trim().split(/ +/g);


function embed() {
    let gfchanServer = client.channels.get('302536333480689665');
    let laisvis = client.users.get('175639571911016448');
    gfchanServer.send({
        embed: {
            color: 3447003,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: `I'm online Laisvis-kun!!~ (✿ ♥‿♥) \n Type GF Help (GF as prefix) to know what you can tell me!`,
            description: `I am the perfect anime gf for ${laisvis}-kun`,

            timestamp: new Date()
        }
    });
}

function interval() {
    (function () {
        let laisvis = client.users.get('175639571911016448');
        let presenceL = laisvis.presence.status;
        if (presenceL === 'online') {
            laisvis.send('I rabu you!~ >.<');
            console.log('Sent ' + presenceL);
        } else {
            console.log('Rabu send failed, presence offline ' + new Date());
        }
    }, 360 * 60 * 1000);
}


// ON READY 
client.on('ready', () => {
    console.log("Running...");
    let laisvis = client.users.get('175639571911016448');
    let gfchanServer = client.channels.get('302536333480689665');
    let presenceL = laisvis.presence.status;
    embed();
    // 197816807950647296 == paulius; sweats.467357577919987713
    if (presenceL === 'online') {
        gfchanServer.send(`Currently there are ${client.users.size - 1}** *bakas* ** in the server and ${laisvis}-kun is online（＾ｖ＾)`);
    } 
    else {
        gfchanServer.send(`Currently there are ${client.users.size}** *bakas* ** in the server and ${laisvis}-kun is not online (・ω・｀)………..`);
    }
    interval();
});

// ON MEMBER JOIN
client.on('guildMemberAdd', member => {
    let gfchanServer = client.channels.get('302536333480689665');
    let laisvis = client.users.get('175639571911016448');
    if (`${member}` != laisvis) {
        gfchanServer.send(`Was that Laisvis-kun? No? Siiigh... Hey, I guess, ${member} (；一ω一||)`);
    } else {
        gfchanServer.send('KYAAA~, LAISVIS-KUN!!~ Okairinasaiii :3  （＾ω＾)');
    }
});

// ON MEMBER EXIT
client.on('guildMemberRemove', member => {
    let laisvis = client.users.get('175639571911016448');
    let gfchanServer = client.channels.get('302536333480689665');;
    if (`${member}` != laisvis) {
        gfchanServer.send(`As long as it's not Laisvis-kun IDC >X<, see ya ${member}`);
    } else {
        gfchanServer.send(`NOOOO,` + laisvis + '-KUN!!! WHERE ARE YOU GOIN?!?!?! REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
    }
    console.log(`${member}`);
});
// if (message.author.bot) return;
// INTERRACTION :::: NEED TO TAKE msg.content CONVERT TO  array of x, where x is number of msg.content occurances where msg.content && msg.author == laisvis AND ADD to .xml or .json to make coherent list


client.on('message', msg => {
    const prefix = 'GF';
    const laisvis = client.users.get('175639571911016448');
    const gfchanServer = client.channels.get('302536333480689665');;
    const gfchan = client.users.get('466066174585733120');

    // msg.react REACTS if defined 
    // client.emojis.find("name", "emojiname")
    // let me = client.users.get('118421151121670147');
    if (msg.author === laisvis) {
        msg.react("❤");
    }
    if (msg.author != gfchan && client.channel === gfchanServer) {
        msg.delete(10000);
    }
    if (msg.content.startsWith(prefix) && msg.content === prefix + " Help") {
        const sweat = client.emojis.find("name", "sweats");
        const vidasup = client.emojis.find("name", "vidasup");
        const vidasEmojis = [sweat, vidasup];
        vidasLen = vidasEmojis.length;
        for (let i = 0; i < vidasLen; i++) {
            msg.react(vidasEmojis[i]);
        }
        gfchanServer.send("What's on the menu today: Who has the smallest dick on the server? | What's for dinner?");
        gfchanServer.send("Laisvis-kun exclusive: Hai, gf-chan | You're so cute!");
    }
    //ALL USE
    if (msg.content.toUpperCase() == "Who has the smallest dick on the server?".toUpperCase()) {
        const sweat = client.emojis.find("name", "sweats");
        gfchanServer.send(`${sweat}`);
    }
    if (msg.content.toUpperCase() == "What's for dinner?".toUpperCase()) {
        gfchanServer.send("Pasta!");
        let len = strings.stringArray.length;
        gfchanServer.send(strings.stringArray[Math.floor(Math.random() * len)]);
    }
    if (msg.content.toUpperCase() == 'A cursed image'.toUpperCase()) {
        gfchanServer.send({
            "embed": {
                "image": {
                    url: 'https://i.imgur.com/V1zXvGG.jpg'
                }
            }
        });
        msg.react('😰');
        msg.react('😱');
    }
    if (msg.content.toUpperCase() == "Speidas".toUpperCase()){
        gfchanServer.delete();
    }

    // LAISVIS EXCLUSIVE
    if (msg.author == laisvis) {
        if (msg.content.toUpperCase() == "Hai, gf-chan".toUpperCase()) { //msg.author == laisvis
            gfchanServer.send("Munya-munya :3" + " " + laisvis);
        }
        if (msg.content.toUpperCase() == "You're so cute!".toUpperCase()) {
            gfchanServer.send('Ahhh! Laisvis-kun baka!~ >W<');
        }
    }
});


// STORE [] of CRINGE use math.rand to select client.channels.get('').send(cringeArr[rand]), where cringeArr is stored as string 


client.login(config.token);