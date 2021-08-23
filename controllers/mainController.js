const fetch = require('node-fetch')

async function doStuff(){
    console.log("start timeout = " + new Date())
    const URLs = ["https://jsonplaceholder.typicode.com/todos/1", "https://jsonplaceholder.typicode.com/todos/2", "https://jsonplaceholder.typicode.com/todos/3"];

    for(url of URLs){
        await new Promise(resolve => {
            console.log("start promise")
            setTimeout(resolve, 1000)
        }).then(() => console.log("end promise"))
        console.log("exec: " + url + "at " + new Date());
       await getRequest(url);
    }
   
     

    console.log("end timeout = " + new Date())
}

async function getRequest(url){
   await fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}

module.exports = { doStuff };
