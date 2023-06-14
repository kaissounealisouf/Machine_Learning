// Instantiate the webcam
const webcamElement = document.getElementById('webcamElement');

const predictImg = async () => {
  // Instantiate the KNN classifier
  const classifier = knnClassifier.create();

  // Start the webcam stream
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  webcamElement.srcObject = stream;

  // Wait for the webcam video to load
  await new Promise((resolve) => {
    webcamElement.onloadedmetadata = () => {
      resolve();
    };
  });


  // Capture an image from the webcam
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = webcamElement.videoWidth;
  canvas.height = webcamElement.videoHeight;
  context.drawImage(
    webcamElement,
    0,
    0,
    webcamElement.videoWidth,
    webcamElement.videoHeight
  );
  const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

  // Load the MobileNet model
  const model = await mobilenet.load();

  // Perform classification with the captured image
  const activation = model.infer(imgData, 'conv_preds');

  // Get example class labels
  const classes = ['A', 'B', 'C'];

  // Add examples to the KNN classifier
  for (let i = 0; i < classes.length; i++) {
    classifier.addExample(activation, classes[i]);
    console.log(activation);
  }
  

  // Predict the class label
  const result = await classifier.predictClass(activation);
  const prediction = classes[result.label];

  console.log(prediction);
};

// Call predictImg function after the page loads
window.onload = () => {
  predictImg();
};
