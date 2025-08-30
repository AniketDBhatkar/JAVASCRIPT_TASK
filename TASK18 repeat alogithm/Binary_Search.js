// ====Binary Search========

function binarySearch(arr, search) {

    let ub = arr.length - 1
    let lb = 0

    let steps = 0

    while (lb <= ub) {

        steps++

        let midpoint = parseInt((ub + lb) / 2)

        if (arr[midpoint] === search) {
            return `element ${search} found at position ${midpoint + 1} in ${steps} steps`
        }

        if (arr[midpoint] < search) {
            lb = midpoint + 1
        } else {
            ub = midpoint - 1
        }

    }

    return `element ${search} not found any positon in ${steps} steps !`

}