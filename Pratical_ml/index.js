// 2.1.1 creating Tensors::Learning about the tensorflow
// Simple  of 2D array 

const data =[
     [ 0.180],[86 ,90,49,59,69 ], [78,4,5,9]
];
console.log(data);

// Transform this data into a tensors  so it can be used with tensorsflow.js
// is to wrap it with the built  in tf.tensor

// Create a tensor out an array 

const tensorData=tf.tensor([[data]]);

console.log(tensorData);


// Rank Indicates how many dimensions the tensor contains.
// Check the dimensions of the array

Rank=tensorData.rank;

console.log(Rank);



// shape  defines  the sizes of  each dimension of the data 
const Shape=tensorData.shape;
console.log(Shape);
// The dtype defines the  data type of the tensor

// Create the multidimensional tensors ,6 and 2;

const multidimensional_tensors=tf.tensor6d([

[[[
     [[ 1],[6]],
     [[5],[6]],

],
[[87],[23]],
[[32],[8]]

]]


]);


console.log(multidimensional_tensors);


// If we use tf.tensor we are going to get the same result but it is not in readable format

const Multiple_tensors=tf.tensor([
       [[[
          [[1],[6]],
          [[5],[6]],
          
       ],
       [[85],[23]],
       [[32],[8]]
     ]]


])

console.log(Multiple_tensors);

// Creating the tensors from flat arrays 
const tensor=tf.tensor2d([
     [23,4,3],
     [4,3,6]
]);

//Get the value of your tensors use tf.array() or tf.array();

//Accessing data in tensors;

const tnsr=tensor.array().then(values=>console.log("array:",tnsr));
// Accessing data  in synchronously
let  tns=tf.tensor2d([
     [23,4,3],
     [4,3,6]
]);
console.log(tns, "2D");
const value=tns.arraySync();
console.log(value);

//Operations on tensors https://js.tensorflow.org/api/latest/#Operations

//  example A=4 and B=6,A+B=10; normal 


const tensorA = tf.tensor([1, 2, 3, 4]);
const tensorB = tf.tensor([5, 6, 7, 8]);
const tnsor = tf.add(tensorA, tensorB); // [6, 8, 10, 12]
console.log(tnsor);
// const tnsor = tensorA.add(tensorB);

// Finally when we work with tensor we need to explicitly clear up memory 
// using dispose() or tf.dispose();


//E.g

let Tensor = tf.tensor([[4,5,3,5,56]]);
console.log("Values:",Tensor);
//Clear up the memory;
tf.dispose();
Tensor.dispose()

// The tensors are immutable , the result of each operator is new tensor .
// To avoid having to call dispose on all the tensors you generate , using tf.tidy()
// tidy()  built mehtod allow to clear up the last one generated from all the tensor operations and dispose of all the others 
//  so then , let's use the tidy method
 const TENSOR=tf.tensor([3,4,56]);
 const Tnsr=tf.tidy(()=>{
   return tensorA.square().neg();
 });
 console.log(Tnsr.dataSync()); 

 

