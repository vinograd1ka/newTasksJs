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
})()