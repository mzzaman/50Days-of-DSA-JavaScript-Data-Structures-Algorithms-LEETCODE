/**
 *
 * K-th Symbol in Grammar;
 * We build a table of n rows (1-indexed). We start by writing 0 in the 1st row. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.
 */

const kthGrammar = function (n, k) {
  // Base Case
  if (n === 1) return 0;
  // Recursive Case
  let length = Math.pow(2, n - 1);
  let mid = length / 2;
  if (k <= mid) {
    return kthGrammar(n - 1, k);
  } else {
    return 1 - kthGrammar(n - 1, k - mid);
  }
};

console.log(kthGrammar(2, 2));
