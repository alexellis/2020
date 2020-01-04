"use strict"

module.exports = async (event, context) => {
    if (!event.query['q']) {
        return context.headers({ 'Content-type': 'text/plain' })
            .status(400)
            .fail('Give a message with ?q=msg-here')
    }

    let sep = "",
        msg = event.query['q']
            .toUpperCase()

    if (msg.length > 16) {
        sep = " ".repeat(msg.length / 2 - 8);
    } else {
        msg = " ".repeat(8 - msg.length / 2) + msg
    }

    let result = `${sep}┏━━┓┏━━┓┏━━┓┏━━┓
${sep}┗━┓┃┃┏┓┃┗━┓┃┃┏┓┃
${sep}┏━┛┃┃┃┃┃┏━┛┃┃┃┃┃
${msg}
${sep}┃┏━┛┃┃┃┃┃┏━┛┃┃┃┃
${sep}┃┗━┓┃┗┛┃┃┗━┓┃┗┛┃
${sep}┗━━┛┗━━┛┗━━┛┗━━┛`

    return context
        .headers({ 'Content-type': 'text/plain' })
        .status(200)
        .succeed(result)
}
