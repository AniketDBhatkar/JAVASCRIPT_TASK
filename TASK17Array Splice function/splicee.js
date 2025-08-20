function customSplice(arr, start, deleteCount, ...items) {
    let removed = [];
    let result = [];

    // 1. Copy elements before 'start'
    for (let i = 0; i < start; i++) {
        result.push(arr[i]);
    }

    // 2. Store deleted elements
    for (let i = start; i < start + deleteCount && i < arr.length; i++) {
        removed.push(arr[i]);
    }

    // 3. Insert new elements (if any)
    for (let i = 0; i < items.length; i++) {
        result.push(items[i]);
    }

    // 4. Copy remaining elements after deleted part
    for (let i = start + deleteCount; i < arr.length; i++) {
        result.push(arr[i]);
    }

    // 5. Update original array
    arr.length = 0; // clear array
    for (let i = 0; i < result.length; i++) {
        arr.push(result[i]);
    }

    return removed; // return deleted elements
}

// 🔹 Example
let numbers = [10, 20, 30, 40, 50];
let removed = customSplice(numbers, 1, 2, 99, 100);

console.log("Modified Array:", numbers);   // [10, 99, 100, 40, 50]
console.log("Removed Elements:", removed); // [20, 30]
