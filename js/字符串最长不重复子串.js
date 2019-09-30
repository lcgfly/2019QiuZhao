
  function get(str){
    var arr=[];
    var length=0;
    var lastIndex=0;
    str=str.split('');
    str.forEach((element,index) => {
        if(arr.indexOf(element)==-1){
            arr.push(element);
            if(arr.length>=length){
                length=arr.length;
                lastIndex=index;
            }
        }
        else{
            arr.length=0;
            arr.push(element);
        }    
    });
   
    if(lastIndex!==0){
      
        return str.slice(lastIndex-length+1,length+(lastIndex-length+1)).join('');
    }
    else{
        return arr.join('');
    }
  }
  
  var str='abc123abc1234abc';
  console.log(get(str));          //abc1234
