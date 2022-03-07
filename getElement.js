
// get Element : id, className, tagName, css celector, html collection

// by id 
console.log('--------------')
console.log('get element by id')
var getElementbyid = document.getElementById('idName'); 

console.log(getElementbyid); 

//by class name 
console.log('--------------')
console.log('get element by class Name')
var getElementbyClassName = document.getElementsByClassName('box')
console.log(getElementbyClassName)

// by tag Name
console.log('--------------')
console.log('get element by tag Name')
var getElementbytagName = document.getElementsByTagName('h2')
console.log(getElementbytagName)

// get CSS colection 
console.log('--------------')
console.log('get element by css collection')
var getElementByCSSs = document.querySelectorAll('.box .heading-2')
var getElementByCSS = document.querySelector('.box .heading-2:nth-child(2)')

console.log(getElementByCSSs)
console.log(getElementByCSS)

// get HTML collection ->> chủ động tìm hiểu thêm 
console.log('--------------')
console.log('get element by HTML collection')
var getHTMLcollection = document.forms; 
console.log(getHTMLcollection['form-1'])
console.log(getHTMLcollection)

// kiến thức mở rộng 
console.log('------------------\n kien thuc mo rong')

        // vis dụ ta có công việc 1 : sử dụng tới boxNode
        // công việc 2 : sử dụng tới cacs element li trong boxNode 

var boxNode = document.querySelector('.box-1')

var listItemsNodes = boxNode.querySelectorAll('.heading-3')
console.log(listItemsNodes)

// 
