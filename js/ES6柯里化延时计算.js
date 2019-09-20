    //ES6柯里化实现延时累加/累减
        
        let fn = (arr)=>arr.reduce((sum,num)=>sum+num,0);

        function accumulate(FN){
            var arr = [];
            return function result(){              
                if(arguments.length==0){
                    return FN(arr);       //已经没有参数了，一次执行完
                }else{
                    arr.push(...arguments);
                    return result;            //还有参数则不计算，将参数推入数组 
                }
            }
        }

        var demo = accumulate(fn);
        demo(1);
        demo(2,3);
        console.log(demo(4)());  //10
