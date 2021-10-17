
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



const stringReverse = (string) => {
    if (typeof string !== string){
        return -1
    }
    if (string.length-1 === 0){
        return string[0]
    }
   return  string[string.length-1] + stringReverse(string.substring(0,string.length-1))
}



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

const offset = (arr , index , offset) => {
    if (arr.length===0 ||index > arr.length-1 || index+offset < 0 ){
        return -1
    }
    selectedNum = arr.splice(index , 1 )
    newArr = arr.splice(index+offset , 0 , selectedNum[0])
    return arr

}

//// Sixth exercise

const duplicateOmmitter = (string) => {
    if (typeof string !== string) {
        return -1
    }
  let newString = ""
    for (let i =0 ; i < string.length ; i++){
        if (string[i] !== string[i+1]){
            newString += string[i]
        }
    }
    return newString
}







