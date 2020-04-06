"use strict"
const wordwrap = require('wordwrap')

module.exports = async (event, context) => {
    if(!event.query['q']) {
        return context.headers({'Content-type': 'text/plain', "Access-Control-Allow-Origin": "http://localhost:8000"})
                .status(400)
                .fail('Give a message with ?q=msg-here')
    }

    let msg = event.query['q']
        .toUpperCase()

    let wrapped = wordwrap
        .soft(17)(msg)

    let result = `┏━━┓┏━━┓┏━━┓┏━━┓
┗━┓┃┃┏┓┃┗━┓┃┃┏┓┃
┏━┛┃┃┃┃┃┏━┛┃┃┃┃┃
 ${wrapped}
┃┏━┛┃┃┃┃┃┏━┛┃┃┃┃
┃┗━┓┃┗┛┃┃┗━┓┃┗┛┃
┗━━┛┗━━┛┗━━┛┗━━┛
`

  return context
    .headers({'Content-type': 'text/plain'})
    .status(200)
    .succeed(result)
}
