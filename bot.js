var HTTPS = require('https');

var botID = process.env.BOT_ID;
var zalla = 37863686;
var pepper = 27286451;
var lawler = 33010513;
var azula = 42848688;
var ward = 18762178;
var manchio = 41186997;
var zazzaro = 52768087;
var lee = 56671056;
var missan = 18146675;
var wallace = 27162323;
var weeks = 86863593;
var eugenio = 73331175;
var faircloth = 86306706;
var obrien = 29647539;
var cain = 73883564;
var graham = 44788980;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/shiny$/;

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage() {
  var shinyLimit, options, body, botReq;

  shinyLimit = "Message limits for shinies are as follows:\n\nZalla: " + zalla + 
  "\nPepper: " + "12" + 
  "\nLawler: " + "12" + 
  "\nAzula: " + "12" + 
  "\nWard: " + "12" + 
  "\nManchio: " + "12" + 
  "\nZazzaro: " + "12" + 
  "\nLee: " + "12" + 
  "\nMissan: " + "12" + 
  "\nWallace: " + "12" + 
  "\nWeeks: " + "12" + 
  "\nEugenio: " + "12" + 
  "\nFaircloth: " + "12" + 
  "\nO'Brien: " + "12" + 
  "\nCain: " + "12" + 
  "\nGraham: " + "12";

  limitReached = "Message limit for this shiny has been reached. Please try again later.";

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : shinyLimit
  };

  console.log('sending ' + shinyLimit + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;