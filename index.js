const websocket = require('ws'),
    server = new websocket.Server({
        port: 12345,
    })

function broadcast(data) {
    server.clients.forEach(ws => {
        ws.send(data)
    })
}

server.on('connection', ws => {
    ws.on('message', data => {
        broadcast(JSON.stringify({
            type: 'broadcast',
            data: data,
        }));
    })
})
