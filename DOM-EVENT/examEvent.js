// 1 vài ví dụ vè event DOM 

// input type TEXT
var inputElement = document.querySelector('input[type= "text"]'); 

// onchange : thay đổi và blur ra ngoài thì sẽ bắt sự kiện của element \

inputElement.onchange = function(e){
    console.log(e.target.value)
}

// oninput : gõ là sẽ bắt sự kiện 

inputElement.oninput = function(e){
    console.log(e.target.value)
}

// input checkbox 

var inputElement1 = document.querySelector('input[type= "checkbox"]');

inputElement1.onchange = function(e){
    console.log(e.target.checked)  
}



// select 

var id = 1 ; 

var inputElement2 = document.querySelector('select');

inputElement2.onchange = function(e){
    id = e.target.value; 
    console.log(id) ;      
}
console.log(id) ;

// keyup vs keydown 

// e.which : mã só trên từng phím  

inputElement.onkeydown = function(e){
    // console.log(e.which); 

    switch(e.which){
        case 27:
            console.log('exit'); 
    // tương tự với các phím khác 
    }
}

