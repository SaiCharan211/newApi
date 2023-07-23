const app=function(){
    fetch("http://localhost:312/")
    .then(res=>res.json())
    .then(json=>{
        json.map(data=>{
            console.log(data)
    })
  })
  
}
console.log("hi")

  module.exports =app