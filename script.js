(function () {
//1

    function isArrayLengthEqual(array1, array2) {
        return array1.length === array2.length;
    }
    console.log(isArrayLengthEqual(['sad', 'asd'] , ['sfgh' , 'wqe' , 'wesda']));

//2

    var arrayHasElement = function () {

    }
    console.log(arrayHasElement(['true', 'false', 5], 5))

//3

    var getLetterAmountInString= function (string, letter) {

    }
    console.log(getLetterAmountInString('asgdsgsdghefgdcvzx', 'a'));

//4

    var getBiggestNumber = function (number0, number1) {
        //return Math.max.apply( Math, array);
        var result = '';
        if (number0 > number1){
            result = number0;
            return result;
        }
        else{
            result = number1;
            return result;
        }
    }
    console.log(getBiggestNumber(12 , 6));

//5

    var createMultiplier = function (number) {
        console.log(number*number);
    }

    createMultiplier(12);


//6

    function isFunctionNamesEqual() {
    }

//7

    function substituteElement() {
    }

//8

    function arraysHasElement() {
    }

})()