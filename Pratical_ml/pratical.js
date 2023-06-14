// // 2.2.1 Using the pre-trained model
// //E.g 1:

// async function predictImage(){
// //   
// //  Instantiate the model
//     const img=document.getElementById("img");
//     console.log(img);
//     //Loading the model
//      const model =await mobilenet.load(); //https://www.tensorflow.org/api_docs/python/tf/keras/models
//     console.log(model);
//     // Predict the model
//     const predictions= await model.classify(img);
    
//     console.log(predictions);

// }
// // call the async function 
// predictImage();

//2.2.2 Transfer learning 

 // Instantiate the webcam
const webcam = new Webcam(element); // Replace 'element' with the DOM element where you want to display the webcam feed

const predictImg = async () => {
  // Instantiate the KNN classifier
  const classifier = knnClassifier.create();

  // Start the webcam
  await webcam.setup(); // Ensure the webcam is properly set up before capturing

  // Capture an image from the webcam
  const img = await webcam.capture();

  // Inference the model as fit the model
  const activation = model.infer(img, 'conv_preds');

  // Predict the model
  const result = await classifier.predictClass(activation);

  // Create some labels
  const classes = ["A", "B", "C"];

  // Predict the class label
  const prediction = classes[result.label];

  console.log(prediction);
};

// Call predictImg function after webcam setup
webcam.on("start", () => {
  predictImg();
});

// Call the start method to initialize the webcam
webcam.start();






