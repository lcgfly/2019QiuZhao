

function shellSort(arr) {
    //第一层循环算出步长
    for(let gap = parseInt(arr.length/2);gap>0;gap = parseInt(gap/2)){ 
        //第二层循环开始和插入排序基本一致
        for(let i = gap;i<arr.length;i++){

            for(let j = i;j>0;j -= gap){

                if(arr[j]<arr[j-gap]){

                    [arr[j],arr[j-gap]] =[arr[j-gap],arr[j]];

                }else{
                    
                    break;
                }
            }
        }
    }
    return arr;
}

// example
let arr = [2,5,10,7,10,32,90,9,11,1,0,10];
console.log(shellSort(arr));
//[0, 1, 2, 5, 7, 9, 10, 10, 10, 11, 32, 90]

