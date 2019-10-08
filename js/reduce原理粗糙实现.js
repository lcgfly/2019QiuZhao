Array.prototype.reduce2=function(callback,start){
    var sum=null;
    if(start){
        sum=start;
    }
    else{
        sum=Number(this.splice(0,1));
    }

    this.forEach((val)=>{
        sum=callback.call(this,sum,val);
    })

    return sum;
}

var a=[1,2,3,4];
 console.log(a.reduce2((sum,val)=>sum+val));  //10
