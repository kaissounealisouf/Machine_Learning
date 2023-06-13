// 2.1.1 creating Tensors
// Simple  of 2D array 

const data =[
     [ 0.1,89,80],
     [6,7,77,6],
     [86 ,78,90 ]
];
console.log(data);

// Transform this data into a tensors  so it can be used with tensorsflow.js
// is to wrap it with the built  in tf.tensor

// Create a tensor out an array 

const tensorData=tf.tensor(data);


