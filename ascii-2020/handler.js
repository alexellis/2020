"use strict"
//const querystring = require('querystring');

module.exports = async (event, context) => {

//   if(event.query && event.query.indexOf("?")==0) {
//      event.query = event.query.substr(1)
//    }
//    let qs = querystring.parse(event.query)
//    if(!qs["q"]) {
//      return context.status(400).fail("Give a message with ?q=msg-here")
//    }

    let msg = event.query["q"].toUpper()

    let result = `┏━━┓┏━━┓┏━━┓┏━━┓
┗━┓┃┃┏┓┃┗━┓┃┃┏┓┃
┏━┛┃┃┃┃┃┏━┛┃┃┃┃┃
 ${msg}
┃┏━┛┃┃┃┃┃┏━┛┃┃┃┃
┃┗━┓┃┗┛┃┃┗━┓┃┗┛┃
┗━━┛┗━━┛┗━━┛┗━━┛`

    return context
        .headers({"Content-type": "text/plain"})
        .status(200)
        .succeed(result);
}
