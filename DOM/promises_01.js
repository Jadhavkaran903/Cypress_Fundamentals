let mass23 = new Promise((resolve,reject)=>{
    let rc = 99
    if (rc == 99){
        resolve('promise is fullfilled')
    }
    else{
        reject('promise is not fullfilled')
    }
})
mass23.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})
function add(x,y){
    console.log()
}
 add(33,67)

 let mass25 = new Promise((resolve,reject)=>{
     let info = {
         firstName : "karan",
         age : 25
     }
     let noinfo = {
         error : 123,
         message : 'Check the connection'
     }
     if(info.hasOwnProperty('firstName')){
         resolve(info)
     }
     else{
         reject(notinfo)
     }
 })
 mass25.then((info)=>{
     console.log(info)
     if(info.hasOwnProperty('firstName') && info.hasOwnProperty('age')){
         add(33,67)
     }
 }).catch((notinfo)=>{
     console.log(`The error code is${notinfo} and message is ${notinfo.message}`)
 })

















