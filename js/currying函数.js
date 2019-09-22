//当参数满足函数执行条件时执行

function add(a,b,c){
            console.log(a+b+c);
        }
       function curry(fn,length){
        length= length||fn.length;
        return function(...args){    
            return args.length>=length?fn.apply(this,args):curry(fn.bind(this,...args),length-args.length);
        }
       }
       
       var demo = curry(add);
       console.log(demo(1)(2)(3));    //6
       
       
       
       
       
       
       //es6写法
    let currying = (fn)=>
        resolve=(...args)=>args.length>=fn.length?fn(...args):(...arg)=>resolve(...args,...arg);

        var fn = currying(function add(a,b,c){
                console.log(a+b+c);
            });
            
        console.log(fn(1)(2)(3));    //6
