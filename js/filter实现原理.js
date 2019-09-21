//数组filter方法实现
    Array.prototype.myFilter=function(fn,context){
        if(typeof fn !=='function'){
            throw new Error(`${fn} not a function`);
        }
           var arr=this;
           var tmp=[];
           for(var i=0;i<arr.length;i++){
               var result = fn.call(context,arr[i],i,arr);
                if(result) tmp.push(arr[i]);
           }
           return tmp;
       }

       var demo=[1,2,3,4,5];
       var ret = demo.myFilter((value,index)=>{
           return value<4;
       })
       console.log(ret);       //[1, 2, 3]
