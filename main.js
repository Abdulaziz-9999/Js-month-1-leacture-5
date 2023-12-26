// function task5(a){
//     let res1 = null
//     for(let i=0; i<a.length; i++){
//         if(a[i].at(-1) == 7){
//             continue
//         }
//         let res = (a[i] + "7")
//         console.log(res.split());
//     }
// }
// console.log(task5(["G", "F", "C"]));
// console.log(task5(["Dm7", "G7", "E7", "A7"]));




// function task3(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 !== i % 2) return false
//     }
//     return true;
// }
// console.log(task3([2,7,4,9,6,1,6,3])); 
// console.log(task3([2,7,9,1,6,1,6,3]));
// console.log(task3([2,7,8,8,6,1,6,3])); 




// function task2(a){
//     let res = ""
//     for(let i=0; i<a.length; i++){
//         if(a[i].endsWith("Woman")){
//             continue
//         }
//         if(a[i].endsWith("woman")){
//             continue
//         }
//         if(a[i].endsWith("man")){
//             res += a[i] + " "
//         }
//     }
//     return (res.split(" "));
// }
// console.log(task2(["Batman", "Superman", "Wonder-Woman"]));
// console.log(task2(["Catwoman", "Deadpool", "Dr.Strange", "CaptainAmerica",
// "Aquaman", "Hawkeye"]));
// console.log(task2(["Wonder-Woman", "Catwoman", "Invisible-Woman"]));






// function task4(a){
//      let res = a.sort((a, b) => b - a)
//      if(a.at(-1) < 0){
//         return (a.at(-3) + a.at(-2));
//      }
//      if(a.at(-1) > 0 && a.at(-2)>0){
//         return (a.at(-2) + a.at(-1));
//      }
// }
// console.log(task4([19,5,42,2,77]));
// console.log(task4([10, 343445353, 3453445, 3453545353453]));
// console.log(task4([2,9,6,-1]));






// function task1(a){
//     let res = a.join(" ").split(" ")
//     let empty = ""
//     for(let i=0; i<res.length; i++){
//         if(res[i].length > empty.length){
//                 empty = res[i]
//         }
//     }
//     return empty.split()
// }
// console.log(task1(["Hello", "darkness", "my", "old", "friend"]));
// console.log(task1(["Hello", "there", "mate"]));
// console.log(task1(["Kalya:s", "toy", "is", "plastic"]));





// function task(a){
//     let res1 = ""
//     let res2 = ""
//     let res3 = ""
//     let res = a.join(" ").split(" ")
//     for(let i=0; i<res.length; i++){
//        res1 =  (a[i].at(0).toUpperCase());
//        res2 = a[i].slice(1,-1)
//        res3 = a[i].at(-1).toUpperCase()
//     }
//     return res1.concat(res2,res3)
// }
// console.log(task(["ali", "bunyod"]));