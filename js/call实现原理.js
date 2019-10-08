//call方法实现原理
        Function.prototype.myCall=function(context){
            context = context?Object(context):window;  //null或undefined则指向window
            var fn=Symbol();
            context[fn]=this;
            var arr = [...arguments].slice(1);
            if(arr.length>0){
                return context[fn](...arr);
            }
             else{
                return context[fn]();           
            }
        }

        function demo(n1,n2){
            console.log(this.name);
            console.log(n1,n2);
        }
        var a={};
        a.name='lyj';
        demo.myCall(a,1,2);  //lyj 1 2
