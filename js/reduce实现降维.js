//reduce实现数组降维
        let fn = (arr)=>arr.reduce((total,item)=>{
        
          Array.isArray(item)?total.push(...fn(item)):total.push(item);
          
          return total;
          
        },[])

        var a=[1,[2,3,[4,5]],6,7];
        console.log(fn(a));
