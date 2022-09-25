function bubble_shake_sort(arr) {
  let is_sorted;

  while(true) {
    is_sorted = true;

    for(let i = 0; i < arr.length-1; i++) {
      if(arr[i] > arr[i+1]) {
        is_sorted = false;
        min = arr[i+1];
        max = arr[i];
        arr[i] = min;
        arr[i+1] = max;
      }
    }

    for(let i = arr.length-1; i > 1; i--) {
      if(arr[i] < arr[i-1]) {
        is_sorted = false;
        min = arr[i-1];
        max = arr[i];
        arr[i-1] = min;
        arr[i] = max;
      }
    }

    if(is_sorted == true) return arr;
  }

}