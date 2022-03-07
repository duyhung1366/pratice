// Promise 

// sync : đồng bộ ( cái gì viết trước chạy trước , viết sau chạy sau )
// async : bất đồng bộ 

// ví dụ sync : 

// console.log(1);
// console.log(2);

// ví dụ async : 

// đoạn này sẽ bị ngủ 1 giây 
// sau 1 giây mơi console ra number 1

// setTimeout(function(){
//     console.log(1);
// }, 1000)

// 2 sẽ hiện ra trước 
// console.log(2); 

// setTimeout, setInterval , fetch, ... là những bất đồng bộ trong j js 
// tất cả se có callback để hỗ trợ cho những bất đồng bộ

//////////////////////////////////////
// promise sinh ra để làm gì ??

// nỗi đau khi sử dụng callback( callback hell ) là :
// ví du:

// setTimeout(function(){
//     console.log(1);
//     setTimeout(function(){
//         console.log(2);
//         setTimeout(function(){
//             console.log(3);
//             setTimeout(function(){
//                 console.log(4);
//             },1000)
//         },1000)
//     },1000)
// },1000)
// đây chính là callback hell , nỗi đau khi sử dụng callback 
// từ đó sinh ra promise 
// pyramid of doom là gì ?  

///////////////////////////////
// cách viết ra 1 promise , lý thuyết và cách hoạt động 

// b1 : 
// var promise = new Promise(
// b2 :  Executor 
// được thực thi khi gọi tới promise
// function(resolve, reject){
// code 
// thành công : resolve(); 
// thất bại : reject(); 

// }
// );

// promise có 3 trạng thái : 
// 1 : pendding (undefined)
// 2: fulfilled (result value)
// 3: rejected  (error)

// promise
//     .then(function(){

//         // resolve 
//     })
//     .catch(function(){
//         // reject 
//     })
//     .finally(function(){
//         // du thanh cong hay that bai thi van chay finally 
//     })

// promise chain 
// ví dụ 

// var myPromise = new Promise(
//     function(myresolve, myReject){
//         myresolve(); 
//     }
// )

// myPromise
// then thu nhat return giá trị gì thì then thứ 2 có thể nhận giá trị đó
// .then(function(){
// console.log(1); 
// return 1 ; 
// })
// .then(function(data){
//     console.log(data); 
//     return 2;
// })
// .then(function(data){
//     console.log(data);
// })

// giai quyet bai toan : moi giay in ra 1 so , va khong bi callback hell 
// ta su dung promise nhu sau 

// function sleep(ms){
//     return new Promise(
//         function(myResolve){
//             setTimeout(myResolve, ms);
//         }
//     )
// }

// sleep(1000)
//     .then(function(){
//         console.log(1);
//         return sleep(1000); // return ra 1 object promise va then thu 2 se .then lai promise nay
//     })
//     .then(function(){
//         console.log(2); 
//         return sleep(1000);
//     })
//     .then(function(){
//         console.log(3);
//     })

// bài trên thể hiện tính hứa hẹn của promise

// Promise.resolve
// Promise.reject
// Promise.all

// ví dụ Promise.all
// var promise1 = new Promise(
//     function(resolve){
//         setTimeout(function(){
//             resolve(1);
//         }, 2000);
//     }
// );

// var promise2 = new Promise(
//     function(resolve){
//         setTimeout(function(){
//             resolve(2);
//         }, 5000);
//     }
// );

// Promise.all([promise1,promise2])
//     .then(function(result){
//         var result1 = result[0];
//         var result2 = result[1];

//         console.log(result1 + result2)
//     })

// ví dụ về promise tạo ra các comment và user 

var users = [
    {
        id: 1,
        name: 'duy hung'
    },
    {
        id: 2,
        name: 'duy hung 2'
    },
    {
        id: 3,
        name: 'duy hung 3'
    }
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'helo ban'
    },
    {
        id: 2,
        user_id: 2,
        content: 'sao the ban'
    }
];

// 1. lấy comments 
// 2. từ comments lấy ra user_id, 
// 3. từ user_id lấy ra user tương ứng 

// fake API 

function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        }, 1000)
    })
}

function getUsersByIds(userIds) {
    return new Promise(function (myResolve) {
        setTimeout(function () {
            var result = users.filter(function (a) {
                return userIds.includes(a.id);
            })
            myResolve(result);
        }, 1000);
    })
}

getComments()
    .then(function (comments) {
        var User_ids = comments.map(function (a) {
            return a.user_id;
        })
       return getUsersByIds(User_ids)
            .then(function (users) {
                return {
                    users: users, 
                    comments: comments,
                }
            });
    })
    .then(function(data){

        var commentBlock = document.getElementById('comment-box');
        var html = ''; 
        
        data.comments.forEach(function(comment){
            var user = data.users.find(function(user){
                return user.id === comment.user_id; 
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });

        commentBlock.innerHTML = html ;

    })

