//bind方法实现原理
        Function.prototype.myBind=function(context){
            
            context.fn=this;
            var arr=([...arguments].slice(1));
            return function(){
                arr.push(...arguments);
                return context.fn(...arr);
            }
        }

        function demo(n1,n2){
            console.log(this.name);
            console.log(n1,n2);
        }
        var a={};
        a.name='lyj';
        var b=demo.myBind(a,1);  
        b(2);                                //lyj 1 2
