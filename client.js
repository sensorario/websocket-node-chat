const connection = new WebSocket('ws://localhost:12345'),
    msg = document.getElementById('msg');

connection.addEventListener('open', () => {
    console.log('connected');
})

function send (data) {
    if (connection.readyState === WebSocket.OPEN) {
        connection.send(data);
    } else {
        console.error('not connected');
    }
}

connection.addEventListener('message', e => {
    const json = JSON.parse(e.data);
    console.log(json);
    console.log(json.data);
})

msg.addEventListener('keydown', e => {
    let kc = e.which || e.keyCode;
    if (kc === 13) {
        send(msg.value);
        msg.value = '';
    }
})
