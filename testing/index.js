const webcamElement = document.getElementsByClassName("webcam")[0];
const buttons = document.getElementsByTagName("button");
const predictButton = document.getElementsByClassName("predict")[0];
const classes = ["left", "right"];
const predictionParagraph = document.getElementsByClassName("prediction")[0];

// Set the confidence threshold for prediction
const confidenceThreshold = 0.7;

async function app() {
  const classifier = knnClassifier.create();
  const net = await mobilenet.load();
  const webcam = await tf.data.webcam(webcamElement);

  const addExample = async classId => {
    const img = await webcam.capture();
    const activation = net.infer(img, "conv_preds");
    classifier.addExample(activation, classId);
    img.dispose();
  };

  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] !== predictButton) {
      let index = i;
      buttons[i].onclick = () => addExample(index);
    }
  }

  predictButton.onclick = () => runPredictions();

  async function runPredictions() {
    while (true) {
      if (classifier.getNumClasses() > 0) {
        const img = await webcam.capture();
        const activation = net.infer(img, "conv_preds");
        const result = await classifier.predictClass(activation);
        predictionParagraph.innerText = `
          Prediction: ${classes[result.label]}
          Probability: ${result.confidences[result.label]}
        `;
        img.dispose();

        // Check if the predicted class meets the confidence threshold
        if (result.confidences[result.label] >= confidenceThreshold) {
          // Perform actions based on the predicted label
          if (classes[result.label] === "left") {
            // Add code for left movement
            console.log("Left movement");
          } else if (classes[result.label] === "right") {
            // Add code for right movement
            console.log("Right movement");
          }
        }
      }
      await tf.nextFrame();
    }
  }
}

app();
