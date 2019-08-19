

function binarySearch(arr,target,low = 0,high = arr.length-1){

    let n = parseInt((low + high)/2);

    let current = arr[n];

    if(current === target){

        return `${target}在数组中的下标为${n}`;

    }else if(current < target){

        return binarySearch(arr,target,n+1,high);

    }else if(current > target){

        return binarySearch(arr,target,low,n-1);
}

        return -1;  
}
