const{ readFile, writeFile }=require('fs')

readFile('./content/first.txt','utf8',(error,result)=>{
if(error){
    console.log(error)
    return
    
    }
   const read=(result)
    
    



readFile('./content/second.txt','utf8',(error,result)=>{
    if(error){
        console.log(error)
        return
        
        }
        const read2=(result)
        
        
    
    
    
   
  


writeFile('./content/asynesul.txt',`${read},${read2}`,(error,result)=>{

if(error){
console.log(error)
return

}
console.log(result)

})

})

})