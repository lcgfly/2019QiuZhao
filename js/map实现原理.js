//数组map方法实现
    Array.prototype.myMap=function(fn,context){
        if(typeof fn !=='function'){
            throw new Error(`${fn} not a function`);
        }
           var arr=this;
           var tmp=[];
           for(var i=0;i<arr.length;i++){
               var result = fn.call(context,arr[i],i,arr);
                tmp.push(result);
           }
           return tmp;
       }

       var demo=[1,2,3,4,5];
       var ret = demo.myMap((value,index)=>{
           return value=value+index;
       })
       console.log(ret);       //[1, 3, 5, 7, 9]
