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

// let arr = [1,2,3,4,5]
// let res = arr.filter((e,i,arr)=>{
//  if(e%2==0){
// return e * 2;
//  }
// })
// console.log(res);


///////////////////////CLASS---TASK\\\\\\\\\\\\\\\\\\\

    // task 1
// function task1(a){
//     return a.at(0)
// }
// console.log(task1([1,2,3]));
// console.log(task1([80,10,20]));
// console.log(task1([-500,200,100]));
  
//    task2 
    //      function get(a){
    //     let  b=[...a];
    //        return b;
    // }
    // console.log(get([1,2,3]));
    // console.log(get([80,10,20]));
    // console.log(get([-500,200,100]));


            // task 3
    //         function get(n){
    //     return n.toReversed()
    // }
    // console.log(get([4,3,2,1]));
    // console.log(get([5,6,7]));
    // console.log(get([30,20,10]));
    
    // task 4

    //        function get(a){
    //     return a.map((e)=>{
    //         return e+1
    //     })
    // }
    // console.log(get([0,1,2,3]));
    // console.log(get([2,4,6,8]));
    // console.log(get([-1,-2,-3,-4]));
    

    // task 5
 
    // function get(n){
    //     return n.at(-1)
    // }
    // console.log(get([1,2,3]));
    // console.log(get(["dog","cat","duck"]));
    // console.log(get(["true","false","true"]));



    // task 6

    // function get(n){
    //     return n.join("")
    // }
    // console.log(get([1,2,3,4,5,6]));
    // console.log(get(["a","b","c","d","e","f",]));
    // console.log(get([1,2,3,"a","b","c","ddd"]));
    
    // task 7

    //      function get(n,b){
    //     return n.includes(b)
    // }
    // console.log(get([1,2,3,4,5],3));
    // console.log(get([1,1,2,1,1,2,2],3));
    // console.log(get([5,5,6,5],5));  

    // task 8

    //      function get(n,b){
    //     if(n.includes(b)){
    //         return n.indexOf(b)
    //     }
    // }
    // console.log(get(["hi", "edabit", "fgh", "abc"], "fgh"));
    // console.log(get(["a", "g", "y", "d"], "d"));
    // console.log(get(["Red", "blue", "Blue", "Green"], "blue"));

    // task 9

    //      function get(a,b){
    //         return a.concat(b)
    // }   
    // console.log(get([1, 3, 5], [2, 6, 8]));  
    // console.log(get([7, 8], [10, 9, 1, 1, 2])); 
    // console.log(get([4, 5, 1], [3, 3, 3, 3, 3])); 

    // task 10
    
    // function get(a){
    // let cnt=a.map((ele)=>{
    //     return Number(ele)
    // })
    // return cnt;
    // } 
    // console.log(get(["9.4", "4.2"]));
    // console.log(get(["91", "44"]));
    // console.log(get(["9.5", "8.8"]));
    


    /////////////////////HOME---TASK\\\\\\\\\\\\\\\\\\


    // task1
 
    //      function get(a,b){
    //         return a.concat(b)
    // }   
    // console.log(get([1, 2], [3, 4]));  
    // console.log(get([5, 6], [7, 8, 9])); 

    // task2
//      function task1(n,b){
//     return n.indexOf(b)
// }
// console.log(task1([1, 2, 3], 2));
// console.log(task1([3,4,5,3,1,5,5,5,7,6], 5));
        
       // task 3
    
    
     
    // task 4

    // function task4(a){
    //     return a.filter((v)=>{
    //             return v > 0
    //         })
    //     }
    //     console.log(task4([-1,2,-3,4,-5]));
    //     console.log(task4([-1,-2,-3,-4,-5]));

        // task 5

    //     function task5(a){
    //     return a.reduce((a,b)=> a + b) / a.length    
    // }
    // console.log(task5([2,4,6,8,10]));
    // console.log(task5([1,2,3,4,5]));

    // task 6

    // function get(arr) {
    //     for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    //       if (arr[i] !== arr[arr.length - 1 - i]) {
    //         return false;
    //       }
    //     }
    //     return true;
    //   }
      
    //   // Example usage:
    //   console.log(get([1, 2, 3, 2, 1]));
    //   console.log(get([1, 2, 3, 4, 5])); 
      
// task 6

// function get(a){
//   if(a.reverse(a)==a)
//   {
//     return true;
//   }
//   else{
//     return false
//   }
// }
// console.log(get([1,2,3,4,1]));


    // task7

    // function task7(a,b,c){
    //     let x =  c.filter((v,i,arr)=>{
    //         return a < v &&  b > v
    //     })
    //     return x
    // }
    // console.log(task7(3,8,[1,5,95,0,4,7]));
    // console.log(task7(1,10,[1,10,25,8,11,6]));
    // console.log(task7(7,32,[1,2,3,75]));


    // dublicate task

    // function get(arr) {
    //     let dub = [];
    //     arr.forEach((num, index) => {
    //       if (arr.indexOf(num, index + 1) > -1 && dub.indexOf(num) === -1) {
    //         dub.push(num);
    //       }
    //     });
        
    //     return dub;
    //   }
    //   let numbers = [1, 2, 3, 4,3, 5, 6, 3, 7, 5, 8, 4];
    //   console.log(get(numbers));
      

    // function task8(a){
//     let cnt = 0;    
//     return a.reduce((a,b)=>{
//         return a+b    
//     })
// }
// console.log(task8([1,2,3,4,5]));
// console.log(task8([-1,0,1]));
// console.log(task8([0,4,,8,12]));





// function task9(a){
//     let b = a.map((v,i,a)=>{
//           console.log(typeof v);
//     })
//     return ""
// }
// console.log(task9([1,2,"null",[]]));
// console.log(task9(["214", true, false, 2.15, [], null]));
// console.log(task9([21.1,"float","array", ["i'm array"],true, 215]));




// function task10(a){
//     let b = a.map((v,i,ar)=>{
//         return v.length
//     })
//     return b
// }
// console.log(task10(["hello", "world"]));
// console.log(task10(["Halloween", "Thanksgiving", "Chrismas"]));
// console.log(task10(["She", "sells", "seashells", "down", "by", "the"]));


// task 11

// function get(arr) {
//     let a = arr[0];
//     let b = arr[1];
    
//     let sum = Math.sqrt(a);
//     let cnt = Math.cbrt(b);
    
//     return sum === cnt;
//   }
//   console.log(get([4, 64]));
//   console.log(get([9, 27]));
//   console.log(get([16, 8]));
  

// function task12(a){
    //     let b = a.map((v,i,arr)=>{
        //         if(v>0){
            //             return v*(-1)
            //         }
            //         else{
                //             return v*(-1)
//         }
//     })
//     return b
// }
// console.log(task12([1,2,3,4,5]));
// console.log(task12([1,-2,3,-4,5]));


// function task13(a){
//     let res = a.map((value, index, array) => {
//         return value * 2
//     })
//     return res
// }
// console.log(task13([2,5,3]));
// console.log(task13([1,86,-5]));
// console.log(task13([5,382,0]));




// function task14(a){
//     return a.reduce((num1, num2)=> num2 > 5? num1 + num2: num1, 0)
// }
// console.log(task14([1,5,20,30,4,9,18]));



// function task15(a){
//     return a.filter((value, index, array) => {
//         if(typeof value == "number"){
//             return Number(value)
//         }
//     })
// }
// console.log(task15([1,2,3,"a","b",4]));
// console.log(task15(["A", 0, "Edabit", 1729, "Python", "1729"]));
// console.log(task15(["Nothing", "here"]));