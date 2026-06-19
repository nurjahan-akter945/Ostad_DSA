
        // Function named countVowels , takes string , returns the number of vowels
        function countVowels (str){
            const vowels = ["a","e","i","o","u"]
            let count = 0;

            for (let char of str.toLowerCase()){
                if (vowels.includes(char)){
                    count ++;
                }
            }
            console.log(count)
        }
        countVowels("sadia")
        // function named sortNumbers, takes an array of numbers, returns the array sorted in ascending order
        function sortNumbers(arr){
            return arr.sort((a,b)=>a-b)
        }
        const result = sortNumbers([34, 52, 19, 4, 2])
        console.log(result)
        // function named reverseString, takes a string , returns the reversed version of the string
        function reverseString (str){

            return str.split('').reverse().join('')
        }
        const reversestr = reverseString("hello")
        console.log(reversestr)
        // last element function by taking an array
        function lastElement(arr3){
             return arr3[arr3.length - 1]
            
        }
        const arr4 = lastElement([2,3,4,5,6,7])
        console.log(arr4)
        // Write a function named mergeArrays that takes two arrays and returns a new array containing elements from both arrays.
        function mergeArrays(a, b){
            return [...a, ...b]
        } 
        const merge = mergeArrays([2,3,4], [4,5,6])
        console.log(merge)
        // a function named hasSpace that takes a string and returns true if it contains a space character.
        function hasSpace(s){
            if(s.includes(' ')){
                return true
            }else{
                return false
            }
        }
        const space = hasSpace("Nu sef")
        console.log(space)
        // a function named isEmptyString that takes a string and returns true if the string is empty, otherwise false.
        function isEmptyString(strng){
            if (strng === ("")){
                return true
            }else{
                return false
            }
        }
        const empty = isEmptyString(" ")
        console.log(empty)
        // a function removeNegativeNumbers(arr) that removes all negative numbers from the array.
        function removeNegativeNumbers(arra){
            return arra.filter((arra) => arra >= 0)
        }
        console.log(removeNegativeNumbers([-5, -2, 1,5]))

   