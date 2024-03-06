// I was stuck on what the if/else check was supposed to be after the while loop, 
because I wasn't sure how it would repeat the iteration, so I got help from the
repo of the ClaytonBrown4741 because I noticed our code was similar!

function swap(arr, first, second)
{
    let tmp = arr[first];
    arr[first] = arr[second];
    arr[second] = tmp;
    return arr;
}

function quicksortIterative(arr, lo, hi)
{
    if(lo>=hi)
    {
        return arr;
    }
    let p;
    let iteration = lo;
    while(iteration < hi)
    {
        p = iteration;
        if(arr[iteration] < arr[iteration + 1])
        {
            //From Jon Bentley's quicksort algorithm from the slides
            for(let i = lo + 1; i <= hi; i++)
            {
                if(arr[i] < arr[lo])
                { swap(arr, ++p, i); }
            }
            swap(arr, lo, p);
            iteration = 0;
        }
        else
        { iteration++; }
    }

    return arr;
}

function quicksort(array) {
    return quicksortIterative(arr, 0, arr.length-1);
}
