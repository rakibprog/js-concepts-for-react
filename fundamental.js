//How to declare variable let and const 
const fatherName ="Sohel Rana";
let id = "zg-001";

// 2. condition 
//basic condition  < > , ===,  !==, <=, >=,
// Multiple condition : && || 


if ( fatherName === "sohel"  || sonName === "rocky"){
      console.log('done');
} else {

   console.log('done');
}


//3. Array 
// index 
//length, push , pop

const Products = [1000, 2000, 300, 400]

Products[1] = 100;


//4. for loop 

for(let i = 0; i <Products.length; i++){
   const Product = Products[i];
   console.log(Product);
}

// 5. function 

function multipliy (num1,num2) {

   const result = num1* num2;
   return result;
}

const output = multipliy(10,20);


// 6. object 

const name  = {name:'rokcy',id:'10',roll:10, age:25};
const myvariable = 'age';
console.log(age);

console.log(name.age); // direct access by property 
console.log(name['age']); // access by property name string
console.log(name[myvariable]); // access by property name in variable
