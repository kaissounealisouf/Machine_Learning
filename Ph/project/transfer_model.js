// Transfer learning model
async function app() {
    const webcamElement = document.querySelector(".webcam");
    const captureButton = document.querySelector(".capture-button");
    const predictionElement = document.querySelector(".prediction");

    const model = await mobilenet.load();

    const webcam = await tf.data.webcam(webcamElement);

    captureButton.onclick = async () => {
        const img = await webcam.capture();
        const predictions = await model.classify(img);
        console.log(predictions);

        predictionElement.innerText = `Prediction: ${predictions[0].className}`;
        predictionElement.classList.add("prediction-result");
  
          // Clear the memories
        const Tidy=tf.tidy(()=>{
            return img.square().neg();
          });
          console.log(Tidy.dataSync());
        // or img.dispose(); Clear the memories 
        return predictions;
    };
}

app();
