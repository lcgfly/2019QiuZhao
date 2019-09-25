
       function get(str){
            var num=0;
            var ind=0;
            var arr=str.replace(/\D/g,' ').split(' ');
            arr.forEach((ele,index)=>{
                if(ele.length!==0){
                    if(ele.length>=num){
                        num=ele.length;
                        ind=index;
                    }
                }
            })
            return `最长连续数字串是${arr[ind]},长度为${num}`;
       }
       
       var str='kf123aga56789jp7';
       console.log(get(str));            //最长连续数字串是56789,长度为5
