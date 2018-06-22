fetch('/api').then(res => {
    return res.json();
}).then(result => {
    let data;
    for (let res in result) { data = result[res]; }
    var queueDiv = document.querySelector(queue)
    data.songs.forEach(song => {        
    console.log(queue)
    });
})