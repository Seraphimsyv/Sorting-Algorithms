function selection_shake_sort(arr) {
  let next_small_to_swap = 0;
  let next_big_to_swap = arr.length-1;
  let last_small;
  let last_small_inx;
  let last_big;
  let last_big_inx;

  while(true) {
    last_small = arr[next_small_to_swap];
    last_small_inx = next_small_to_swap;
    last_big = arr[next_big_to_swap];
    last_big_inx = next_big_to_swap;

    if(next_small_to_swap == next_big_to_swap) break;

    for(let i = next_small_to_swap; i < next_big_to_swap; i++) {
      if(arr[i] < last_small) {
        last_small = arr[i];
        last_small_inx = i;
      }

      if(arr[i] > last_big) {
        last_big = arr[i];
        last_big_inx = i;
      }
    }

    if(next_small_to_swap != last_small_inx) {
      swap_f = arr[last_small_inx];
      swap_s = arr[next_small_to_swap];
      arr[last_small_inx] = swap_s;
      arr[next_small_to_swap] = swap_f;
    }

    if(next_big_to_swap != last_big_inx) {
      swap_f = arr[last_big_inx];
      swap_s = arr[next_big_to_swap];
      arr[last_big_inx] = swap_s;
      arr[next_big_to_swap] = swap_f;
    }

    next_small_to_swap += 1;
    next_big_to_swap -= 1;
  }

  return arr;
}