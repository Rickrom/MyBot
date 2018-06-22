var socket = io();

socket.emit('getQueue', result => {
    let data;
    for (let res in result) { data = result[res]; }
    if (!data) return;
    data.songs.forEach(song => {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(song.title);
        node.appendChild(textnode);
        document.getElementById("queue").appendChild(node);
    });
})

socket.on('songAdded', song => {
    console.log('a song is added', song)
    var node = document.createElement("LI");
    var textnode = document.createTextNode(song.title);
    node.appendChild(textnode);
    document.getElementById("queue").appendChild(node);
})

//  add song
document.querySelector('#addSong').onsubmit = function (e) {
    e.preventDefault();
    let song = JSON.stringify(e.target.song.value);

    socket.emit('addSong', {song})

    e.target.reset();
}
function skip(){
    console.log('Siegheil');
}
function playSong() {
    socket.emit('playSong')
}