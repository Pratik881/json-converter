function convertToJSON(data){
    if(Array.isArray(data)){
        return "["+ data.map(convertToJSON) + "]"
    }
    
    if(typeof data==="number"||  data===null|| typeof data==="boolean") {
        return data

    }    
    if(typeof data==="string") {
      return  '"'+data+'"'
    }
   
    if(typeof data==='object'){
        return "{" + Object.entries(data).map(([key,val])=> `"${key}":${convertToJSON(val)} `).join(",") + "}"
          
      }


}
const data={
    name:"Pratik",
    age:10,
    truth:false,
    props:["Hello","hey"],
    also:{
        surname:"Neupane",
        friends:{
            name1:"Rmesh",
            name2:"Prashant"
        }
    }
}
console.log(convertToJSON(data))