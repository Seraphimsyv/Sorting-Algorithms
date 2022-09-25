function selection_sort(arr) {
  let range_sorted = arr.length-1;
  let last_big;
  let last_big_inx;
  let sorted_arr = [];

  while(range_sorted >= 1) {
    last_big = arr[0];
    last_big_inx = 0;

    for(let i = 0; i < arr.length-1; i++) {
      if(arr[i] > last_big) {
        last_big = arr[i];
        last_big_inx = i;
      }
    }
    
    sorted_arr.unshift(last_big);
    delete arr[last_big_inx];
    range_sorted -= 1;
  }

  return sorted_arr;
}