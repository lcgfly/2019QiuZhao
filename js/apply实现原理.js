//apply方法实现原理
        Function.prototype.myCall=function(context,arr){
            context = context?Object(context):window;
            context.fn=this;
            
            if(arr){
                return context.fn(...arr);
            }else{
                return context.fn();
            }
        }

        function demo(n1,n2){
            console.log(this.name);
            console.log(n1,n2);
        }
        var a={};
        a.name='lyj';
        demo.myCall(a,[1,2]);  //lyj 1 2
