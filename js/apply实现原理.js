//apply方法实现原理
        Function.prototype.myApply=function(context,arr){
            context = context?Object(context):window;
            var fn=Symbol();
            context[fn]=this;
            
            if(arr){
                return context[fn](...arr);
            }else{
                return context[fn]();
            }
        }

        function demo(n1,n2){
            console.log(this.name);
            console.log(n1,n2);
        }
        var a={};
        a.name='lyj';
        demo.myApply(a,[1,2]);  //lyj 1 2
