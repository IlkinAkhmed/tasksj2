

// 46 verilmiş elementin bir ölçülü massivdə neçə dəfə təkrarlandığını tapan proqram tərtib edin.

// const arr = [10,20,4,2,2,2,2,5,2,7,8,9,2,5,2]
// let count = 0
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1 ; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             count++
//             break
//         }
//     }
// }
// console.log(count);








// 47 arrayda max ve min ededi nezere almadan diger elementlerin cemini tapn algoritm

// const arr = [10, 4, 22, 1, 10, 30, 6, 45, 3, 400, 4, 9]
// let max = -Infinity
// let min = Infinity
// let maxIndex = 0
// let minIndex = 0
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//         maxIndex = i
//     }else if (arr[i] < min) {
//         min = arr[i]
//         minIndex = i
//     }
// }
// arr.splice(maxIndex, 1)
// arr.splice(minIndex, 1)
// arr.forEach(i => {
//     sum+=i
// });
// console.log(sum);






// 48 arrayda max ededle birinci ededin arasindaki ededlerin cemini tapan proqram

// const arr = [10, 4, 22, 10, 30, 6, 45, 3, 400, 3, 5]
// let max = -Infinity
// let a;
// let cem = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//         a = arr.slice(2, i)
//     }

// }
// a.forEach(i => {
//     cem+=i;

// });
// console.log(cem);





// 49. arrayda min ve max ededin ededi ortasini tapan program

// const arr = [10, 4, 23, 45, 10, 30, 6, 3, 4, 3, 5]
// let max = -Infinity
// let min = Infinity
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
//     if (arr[i]<min) {
//         min = arr[i]
//     }
// }
// console.log((max+min)/2);