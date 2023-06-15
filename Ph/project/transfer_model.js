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

        img.dispose();
        return predictions;
    };
}

app();
