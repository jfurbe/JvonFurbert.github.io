    function binSort(arr, p1, p2){
        if (p2 <= p1)
        return (num > arr[p1]) ?
                       (p1 + 1) : p1;
        let mid = Math.floor((p2+p1)/2);
        
        //console.log(num, arr[mid], 'pop');
        if(num == arr[mid])
        return mid + 1;
        
        if(num > arr[mid])
        return binSort(arr, mid + 1, p2);
        
        return binSort(arr, p1, mid - 1);
    }