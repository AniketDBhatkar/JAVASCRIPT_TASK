
// ====== LInear Search ========

function linearSerach(arr, search) {

    let flag = false

    let steps = 0

    for (let index = 0; index < arr.length; index++) {

        steps++

        if (arr[index] === search) {
            flag = true
        }

        if (flag) {
            return `element ${search} found at position ${index + 1} in ${steps} steps`
        }

    }

    return `element ${search} not found at any position in ${steps} steps`

}