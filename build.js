const os =require('os')
const ver=os.version()
console.log(ver)
const user=os.userInfo()
console.log(user)
const bs={

 a:os.networkInterfaces(),
 b:os.platform(),
 c:os.version()

}
console.log(bs)