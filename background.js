
fetch('https://xkcd.com/info.0.json')
    .then(r => {
        return r.json()
    })
    .then(result => {
        const random = Math.floor(Math.random() * result.num) + 1
        return fetch('https://xkcd.com/'+random+'/info.0.json')
    })
    .then(r =>{
        return r.json()
    })
    .then(res => {
        document.getElementById('ctitle').innerText = res.title;
        document.getElementById('image').src = res.img;
        document.getElementById('chover').innerText = res.alt;
    })