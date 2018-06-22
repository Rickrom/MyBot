const commands = require('../app');

const socket = {
    connection: (io, socket) => {
        socket.on('getQueue', callback => {
            const queue = commands.queue
            callback(queue)
        })
        socket.on('addSong', data => {
            const song = data.song;
            commands.add({content: ' ' + song, guild: {id: '423783614057283584' }, author: {username: 'website'}})
        })

        socket.on('playSong', () => {
            commands.play({guild: {id: '423783614057283584'}})
        })
    }
}

module.exports = socket;