module.exports = arrayObj=> arrayObj.filter(({message})=>(message.length<50)).map(({message})=>message)