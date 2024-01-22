const mongoose = require('mongoose');

async function validate(uri){
    try {
        const connection = mongoose.createConnection(uri)
        connection.on('connected',()=>{console.log('connected success')})
        connection.on('error',(err)=>{console.log(err.message)})
        
    } catch (error) {
        console.log(`err occured: ${err}`)
    } 
}

(async function(){
    await validate('mongodb+srv://rai:rai@vxyz.anz0bip.mongodb.net/?retryWrites=true&w=majority') //valid url
    const crashing = await validate('mongodb+srv://rai:ri@vxyz.anz0bip.mongodb.net/?retryWrites=true&w=majority') //non valid url
    if(crashing){
        console.log('didnt crash')
    }
})()
