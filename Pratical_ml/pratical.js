// 2.2.1 Using the pre-trained model
//E.g 1:

async function predictImage(){
//  Instantiate the model
    const img=document.getElementById("img");
    console.log(img);
    //Loading the model
     const model =await mobilenet.load(); //https://www.tensorflow.org/api_docs/python/tf/keras/models
    console.log(model);
    // Predict the model
    const predictions= await model.classify(img);
    
    console.log(predictions);

}
// call the async function 
predictImage();







