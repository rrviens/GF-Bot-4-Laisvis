const Discord = require('discord.js');
const client = new Discord.Client();

// const config = require("./config.json");

// ON JOIN GREETINGS
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    client.channels.get('466080339387875338').send(`Okairinasai!~, ${member}` + '-chan!~'); //client.user.setActivity(`Serving ${client.guilds.size} servers`);

});

// ON READY 
client.on('ready', () => {
    let laisvis = client.users.get('175639571911016448');
    console.log("I'm here for you Laisvis-chan ~W~");
    client.channels.get('466080339387875338').send("I'm online" + " " + laisvis + "-kun!!~ (✿ ♥‿♥)"); // 197816807950647296 == paulius;
});


// ON MEMBER EXIT
client.on('guildMemberRemove', member => {
    let laisvis = client.users.get('175639571911016448');
    if (`${member}` != laisvis) { //check if member == laisvis
        client.channels.get('466080339387875338').send(`As long as it's not Laisvis-kun IDC >X<, see ya ${member}`);
    } else {
        client.channels.get('466080339387875338').send(`NOOOO,` + laisvis + '-KUN!!! WHERE ARE YOU GOIN?!?!?! REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
    }
    console.log(`${member}`);
});

// INTERRACTION :::: NEED TO TAKE msg.content CONVERT TO  array of x, where x is number of msg.content occurances where msg.content && msg.author == laisvis AND ADD to .xml or .json to make coherent list
client.on('message', msg => {
            let laisvis = client.users.get('175639571911016448');
            let gfchan = client.users.get('466066174585733120');

                if (msg.content == "Hai, gf-chan" && msg.author == laisvis) {
                    client.channels.get('466080339387875338').send("Munya-munya :3" + " " + laisvis);
                }

                if (msg.content == "You're so cute!" && msg.author == laisvis) {
                    client.channels.get('466080339387875338').send('Ahhh! Laisvis-kun baka!~ >W<');
                }
        });


client.login('NDY2MDY2MTc0NTg1NzMzMTIw.DiWs0A.ezKNuGd_22VIr_7Tr5n8YJPsI44');