var arr = [-2, 4, 2.5,-0.5, 1, -3.5];
var temp = 0

/*Displaying the original array */
console.log( "The numbers in the given array are ")
for(var i = 0; i< arr.length; i++){
    console.log(arr[i] + " ")
}

/*Sort the array in descending order */
for (var i = 0; i < arr.length; i ++){
    for (var j= i+1; j < arr.length; j ++){
        if(arr[i]< arr[j]){
            temp = arr[i]
            arr[i] = arr[j]
            arr[i] = temp
        }
    }
}
console.log(" The numbers in the array sorted in descending order are as follows ")

for (var i = 0; i < arr.length; i++ ){
    console.log(arr[i] + " ")
}



