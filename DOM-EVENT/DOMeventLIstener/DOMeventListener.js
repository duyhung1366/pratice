/**
 *  1 . Event Listener 
 * 2. JSON
 * 3. Fetch
 * 4. DOM location 
 * 5. local storage 
 * 6. session storage 
 * 7. coding convention 
 * 8. best pratices 
 * 9. mistakes 
 * 10 . performance 
 */


// 1 : xử lý nhiều việc khi 1 event xảy ra 
//2 : lắng nghe / huy bỏ lắng nghe  

var btn = document.getElementById('btn');

// btn.onclick = function(){ 
//     // viec 1 
//     console.log('viec 1'); 

//     // viec 2 
//     console.log('viec 2'); 

//     //viec 3 
//     console.log('viec 3');
// }
// muốn hủy bỏ lắng nghhe sau 3 giây 
// setTimeout(function(){
//     btn.onclick = function(){}
// },3000);

// cách them event qua addEventlister

btn.addEventListener('click', function(e){
    console.log('add access!!'); 
    console.log(e.target)
})

function viec2(){
    console.log('viec 2 ')
}

btn.addEventListener('click', function(){
    console.log('add access 1!!')
})
btn.addEventListener('click', viec2)
btn.addEventListener('click', function(){
    console.log('add access 3!!')
})

// setTimeout(function(){
    // remove Event 
    btn.removeEventListener('click',viec2);
// },3000);

// tổng kết : 
// DOM event sử dụng khi có ít event 
// EVent listener sử dụng khi 1 sự kiện diễn ra nhưng lại muốn hủy bỏ việc lắng nghe trong trườn trường hợp nào đó
// xử lý với rất nhiều event cùng 1 lúc 


