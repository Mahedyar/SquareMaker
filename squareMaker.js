
// Zero exercise :

const squareMaker = (n) => {

    for (let i =0 ; i < n ; i++){
        if (i === 0 || i === n-1) {
            console.log("*".repeat(n))
        } else {
            console.log("*" + " ".repeat(n-2) + "*")
        }
    }
}


// First exercise :

const oneMaker = (m) => {
    let store = 0
    for (i=0 ; i<m ; i++){
        store = store + 10**i
    }
    return store
}

const finalResult = (n) => {
    let i
    let newArr = n.toString().split('');
    for (i=0 ; i<newArr.length ; i++) {
        let result = newArr[i]*oneMaker(newArr[i])
        console.log("%s : " ,newArr[i] ,result)
    }
}

// Second exercise :














// Third Exercise :

const stringIndex = (string1 , string2) => {
    if (typeof string1 !== "string" || typeof string2 !== "string"){
        // console.log("both inputs should be string")
        return false
    }
    if (string1.length < string2.length) {
        // console.log("second string should be shorter")
        return false
    }
    for (let i=0 ; i<string1.length - string2.length + 1; i++){
        for (let j=0 ; j<string2.length ; j++){
            if (string1[i+j] !== string2[j]) {
                break
            } else if (j=== string2.length-1 ){

                return i
            }
        }
    }

    return -1
}

/// Forth exercise

const arraySubstract = (arr1 , arr2) => {
    let result = arr1.filter(num => !arr2.includes(num))
    return result
}

////// fifth Exercise



