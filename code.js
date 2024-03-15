function swap(arr, first, second) 
{
  let tmp = arr[first];
  arr[first] = arr[second];
  arr[second] = tmp;
  return arr;
}

// Partition is still from the slides
function partition(arr, low, hi) 
{
  let pivot = low;
  for (let i = low + 1; i <= hi; i++) 
  {
    if (arr[i] < arr[low]) 
    {
      swap(arr, ++pivot, i);
    }
  }
  swap(arr, low, pivot);
  return pivot;
}

// I did have to use geeks for geeks for some help on the code below!

function quicksort(arr)
{
  if (arr.length <= 1) 
  {
    return arr;
  }
  let top = 0;
  let low = 0;
  let hi = arr.length - 1;
  let stack = [];
  stack[top] = low;
  stack[++top] = hi;

  while (top >= 0) 
  {
    hi = stack[top--];
    low = stack[top--];

    let pivot = partition(arr, low, hi);
    if (pivot - 1 > low) 
    {
      stack[++top] = low;
      stack[++top] = pivot - 1;
    }

    if (pivot + 1 < hi) 
    {
      stack[++top] = pivot + 1;
      stack[++top] = hi;
    }
  }
  return arr;
}
