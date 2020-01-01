"use strict"
//const querystring = require('querystring');

module.exports = async (event, context) => {

    if(!event.query["q"]) {
      return context.headers({"Content-type": "text/plain"}).
               status(400).
               fail("Give a message with ?q=msg-here")
    }

    let msg = event.query["q"].toUpperCase()

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
