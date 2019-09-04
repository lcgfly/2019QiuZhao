Array.prototype.diy = function (num = 1) {
  
          if (!Number(num) || num < 0) return this;
  
          let arr = [];
  
          this.forEach((item) => {
            
               if (Array.isArray(item)) {
                 
                    arr = arr.concat(item.diy(--num));
                 
               } else {
                 
                    arr.push(item);
               }
          })
  
          return arr;
     }



  //一行代码版
     Array.prototype.diy = function () {
          this.toString().split(',').map(item => +item);
     }
