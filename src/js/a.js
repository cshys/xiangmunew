function a(){
    let str = "hello"
    console.log(str)
}
a();

class Fn{
    constructor(){
        this.name = "admin"
    }
    show(){
        console.log(this.name)
    }
}
var f = new Fn()
f.show()