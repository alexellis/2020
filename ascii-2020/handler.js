"use strict"
const querystring = require('querystring');

module.exports = async (event, context) => {

    let qs = queryString.parse(event.query)
    if(!qs["q"]) {
      return context.status(400).fail("Give a message with ?q=msg-here")
    }

    let msg = qs["q"].toUpper()

    let result = `┏━━┓┏━━┓┏━━┓┏━━┓
┗━┓┃┃┏┓┃┗━┓┃┃┏┓┃
┏━┛┃┃┃┃┃┏━┛┃┃┃┃┃
 ${msg}
┃┏━┛┃┃┃┃┃┏━┛┃┃┃┃
┃┗━┓┃┗┛┃┃┗━┓┃┗┛┃
┗━━┛┗━━┛┗━━┛┗━━┛`

    return context
        .status(200)
        .succeed(result);
}
