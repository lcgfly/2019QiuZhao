    var a = [31, 400, 6, 78, 12, 9, 17, 24, 9, 3, 2, 101];

    function quickly(arr) {
        if (arr.length <= 1) return arr;

        let middle = arr.splice(0, 1);
        let left = [];
        let right = [];

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] < middle) {

                left.push(arr[i]);

            } else {

                right.push(arr[i]);
                
            }
        }

        return quickly(left).concat(middle, quickly(right));
    }
    
    let b = quickly(a);
    console.log(b);          //[2, 3, 6, 9, 9, 12, 17, 24, 31, 78, 101, 400]
    
    
