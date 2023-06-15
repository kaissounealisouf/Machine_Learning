async function predictImage() {
    const img = document.getElementById("img");
    const predict = document.getElementsByClassName("prediction")[0];
    console.log(img);
    
    // Loading the model
    const model = await mobilenet.load();
    console.log(model);
    
    // Predict the model
    const predictions = await model.classify(img);
    
    predict.innerText = `Prediction: ${predictions[0].className}`;
    
    console.log(predictions);
    predict.innerText += `\nClassList: ${Array.from(predict.classList).join(', ')}`; // Display the classList
    
    // Add the class "prediction-result" to the predict element
    predict.classList.add("prediction-result");
  }
  
  // Call the async function 
  predictImage();
  