function isPalindrome(str) {
    // lowercase the incoming string, split spaces and remove any non alphanumeric characters
    // create a fwd and rev pointers
    // loop thru str
    // check if fwd char is the same as rev char
    // if true move fwd by 1 and rev back by 1
    // else return false
    // once for loop is complete return true
    let char = str.toLowerCase().replace(/[^a-z0-9]/g, '')

    console.log('formatted: ', char)
    let fcount = 0
    let rcount = char.length - 1

    // console.log('fwd:', fwd, 'rev', rev)
    console.log('start: ', fcount, rcount)

    for (let i = 0; i < str.length; i++) {
        let fwd = char[fcount]
        let rev = char[rcount]
        if (fwd === rev) {
            fcount++
            rcount--
            console.log(fcount, rcount)
            console.log('true', fwd, rev)
        } else {
            console.log('false: ', fwd, rev)
            return false
        }
    }

    return true
}

function isPalindromeEZ(str) {
    const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    const reversedStr = formattedStr.split('').reverse().join('')
    return formattedStr === reversedStr
}

console.log('is a palindrome? ', isPalindromeEZ('madam'))

module.exports = isPalindrome;
