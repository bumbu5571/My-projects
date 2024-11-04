function binarySearch(target, array) {
  function search(target, array, start, end) {
    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);

    if (target === array[mid]) return mid;

    if (target < array[mid]) {
      return search(target, array, start, mid - 1);
    }

    return search(target, array, mid + 1, end);
  }

  return search(target, array, 0, array.length - 1);
}

console.log(binarySearch("C", ["A", "B", "C", "D", "E", "F", "G", "H"]));
