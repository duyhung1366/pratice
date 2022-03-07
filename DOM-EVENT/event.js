// DOM EVENT 

// 1 . attribute event 
// 2. gán sự kiện qua element node 

// cách 1 : thêm trực tiếp vào attribute 
/** tài liệu trên w3school 
 * vd : 
 * <h1 onclick = "//code chạy khi người dùng click vào thẻ h1">xxx</h1>
 * 
 */

// cách 2 : get ra element 

var boxNode = document.querySelector('.box'); 

boxNode.onclick = function(){
    // code chay khi ng dung click 
}

boxNode.onclick = function(e){
    // e : lay ra doi tuong hien tai
    console.log(e); 
    console.log(e.target); 
    console.log(e.target);
}

// tuong tu voi cac event khac 
// tai lieu tren w3s 

// su kien nổi bọt: 

