(function () {
//1 COMPLETE

    function isArrayLengthEqual(array1, array2) {
        return array1.length === array2.length;
    }
    console.log(isArrayLengthEqual(['sad', 'asd'] , ['sfgh' , 'wqe' , 'wesda']));

//2 COMPLETE

    var arrayHasElement = function (array, val) {
        /*return arr.some(function(arrayVal) {
            return val === arrayVal;
        });*/

        for (var i = 0; i < array.length; i++){
            if (array[i] === val){
                return true;
            }
        }
        return false
    }

    var result2 = arrayHasElement([1, 'true', 'asdasdasgf', 5], 'true'); // true
    console.log(result2);

//3 COMPLETE

    var getLetterAmountInString= function (array, letter) {
        //return (string.split(letter).length-1);
        var count = 0;
        for(var i=0; i<array.length; i++){
            if(array[i] === letter){
                count++;
            }
        }
        return count;
    }
    var result3 = getLetterAmountInString('aaasadaaaa', 'a');
    console.log(result3);

//4 COMPLETE

    var getBiggestNumber = function (number0, number1) {
        if (number0 > number1){
            return number0;
        }
        else{
            return number1;
        }
    }
    var result4 = getBiggestNumber(12 , 15);
    console.log(result4);

//5 COMPLETE

    var createMultiplier = function () {
        var multiplier = function (number) {
            return number*number;
        }
        return multiplier;
    }

    var multiplier = createMultiplier();
    console.log(multiplier(8));

//6 COMPLETE

    var result = function isFunctionNamesEqual (func1, func2) {
        return func1.name === func2.name;
    }

    console.log(result(function createMan(){}, function createMan(){}));

//7 COMPLETE

    var substituteElement = function (array, change, whatToChange) {
        for (var i = 0; i < array.length; i++){
             if (array[i] === change){
                 array[i] = whatToChange;
             }
        }
        return array;
    }

    var result7 = substituteElement([123, 1, 153, 51, 1], 1, true )
    console.log(result7); // undefined

//8 COMPLETE

    var arraysHasElement = function (array0, array1, val) {
        /*return array.some(function(arrVal) {
            return val === arrVal;
        });*/
        var arrayBoolean1;
        var arrayBoolean2;
        for (var i = 0; i < array0.length; i++){
            if(array0[i]=== val){
                arrayBoolean1 = true;
            }
        }

        for (var a = 0; a < array1.length; a++){
            if(array1[a] === val){
                arrayBoolean2 = true;
            }
        }

        if (arrayBoolean1 === true && arrayBoolean2 === true){
            return true;
        }
        return false;
    }
    var result8 = arraysHasElement([1, 123, 513, 2312], [228, 2, 513, 1], 1);
    console.log(result8);






    //1 COMPLETE

        function filterFalsyValues(array) {
        var check = [];
        for(var i=0; i < array.length; i++){
            if(array[i] !== 0 && array[i] !== null && array[i] !== false && array[i] !== undefined){
                check.push(array[i])
            }
        }
       return check;
    }
    var result11 = filterFalsyValues([5, 'asd', false, true, undefined, NaN, null, 'true']);
    console.log(result11);


    //2 COMPLETE

    function getMultipliedBigNumbers(array){
        var check = [];
        var num = [];
        for (var i = 0; i < array.length; i++) {
            num.push(array[i]*array[i]);
            if (num[i] >= 1000) {
                check.push(num[i]);
            }
        }
        return check;
    }
    var result12 = getMultipliedBigNumbers([32, 42, 55, 2, 12, 51]);
    console.log(result12);



    //3 COMPLETE
    function getArrayValuesSum(array) {
        var sum = 0;
        for(var i=0; i < array.length; i++){
            if(typeof array[i] === 'number'){
                sum += array[i];
            }
            else{
                return array[i].length;
            }
        }
        return sum;
    }
    var result13 = getArrayValuesSum([5, 12, 24]);
    console.log(result13);



    //4 COMPLETE
    function reverseArray(array) {
        var myArr = [];
        if(array.length >= 5){
            for (var i = 0; i < array.length; i++){
                myArr[i] = array[(array.length - 1) - i];
            }
            return myArr;
        }
        else{
            return array;
        }
        /*if(array.length >= 5){
            for(var i=0; i < array.length; i++){
                myArr[i] = array[i];
            }
            return myArr.reverse();
        }
        else{
            return array;
        }*/
    }
    var result14 = reverseArray([5, 2, 6, 8]);
    console.log(result14);



    //1 COMPLETE

    function getArraysEqualElementsCount(array1, array2) {
        var count = 0;
        for (let i=0; i<array1.length; i++) {
            if (array1[i] === array2[i]) {
                count++;
            }
        }
        return count;
    }

    var result21 = getArraysEqualElementsCount([1, 2, 3] , ['ASD', 5, 8]);
    console.log(result21);

    //2 COMPLETE

    function getArraysNotEqualElementsCount(array1 , array2) {
        var count = 0;
        for(var i = 0; i < array1.length; i++){
            if(array1[i] !== array2[i]){
                count++;
            }
        }
        return count;
    }

    var result22 = getArraysNotEqualElementsCount([5, 6, 7, 8], [5, 6, 7, 8]);
    console.log(result22);

    //3 COMPLETE

    function getArrayEqualElementCountHard(array1 ,array2) {
        var count = 0;
        for (var i = 0; i < array1.length; i++) {
            for(var u = 0; u < array2.length; u++) {
                if (array1[i] === array2[u]) {
                    delete array1[i];
                    delete array2[u];
                    count++;
                    break;
                }
            }
        }
        return count;
    }
    var result23 = getArrayEqualElementCountHard(['a', 'b', 'c', 'd', 'e'], ['w', 'z', 'r', 'b', 'f', 'e']);
    console.log(result23);

    //4 COMPLETE

    function getArrayElementsInARowAmount(array) {
        var count = 0;
        for(var i = 0; i < array.length; i++){
            if(array[i] === array[i + 1]){
                count++;
            }
        }
        return count;
    }

    var result24 = getArrayElementsInARowAmount([true, true, 1, 2, 1, 1, 2, 2]);
    console.log(result24);

    //5 COMPLETE

    function getArrayElementByType(array, typeoff) {
        var check = [];
        for(var i = 0; i < array.length; i++){
            if (typeof array[i] === typeoff){
                check.push(array[i])
            }
        }
        return check;
    }

    var result25 = getArrayElementByType([1, 'asd', 2, true, false, true, 3], 'number');
    console.log(result25);

})();
