// JSON 


// là 1 định dạng dữ liệu ( chuỗi )
// viết tắt của : javascript Object Notation
// thể hiện kiểu dữ liệu : Number . boolean, Null, Array, Object 

// Mã Hóa / Giải Mã 
// Encode / decode 
// Stringify / parse 
// chuyển đổi sang JSON / trả lại kiểu dữ liệu ban đầu 

// var json = 'true'; // json thể hiện boolean  
// var json = '1'; // json thể hiện number   
// var json = 'null'; // json thể hiện null  
var json = '["Javascript", "PHP"]'; // json theer hieejn kieu array 
var jsonObject = '{"name": "nguyen hung", "age" : 18}'; 

var a = '1'; 
var b = '"hung"'; 

// parse : chuyển từ json sang kiểu dữ liệu chuẩn
console.log(typeof JSON.parse(b));

console.log(typeof JSON.parse(a));
console.log(JSON.parse(a));
console.log(JSON.parse(json));
console.log(JSON.parse(jsonObject));

// stringify : chuyển từ kiểu dữ liệu js sang json \

console.log(typeof JSON.stringify(["js","html"])); 
console.log(typeof JSON.stringify(2)); 
console.log(typeof JSON.stringify("hung")); 
console.log(typeof JSON.stringify(true)); 