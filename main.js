prediction1 = " ";

Webcam.set({

    width:300,
    height:300,
    image_format:'png',
    png_quality:100
});

Webcam.attach('#camera');
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jL6ZyrAoI/model.json',Model_loaded);
function Model_loaded()
{
    console.log("Model is loaded.")
}

function take(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src = "'+data_uri+'">'
     });
}
console.log(ml5.version);

function gotresult(error, result)
            {
                if(error)
                {
                    console.log(error);
                }

                else{
                    console.log(result);
                    prediction1 = result[0].label;

                    if(result[0].label == "best")
                    {
                       document.getElementById("gesture").innerHTML = "All the Best"
                    }
                    if(result[0].label == "amazing")
                    {
                        document.getElementById("gesture").innerHTML = "It is Amazing"
                    }
                    if(result[0].label == "victory")
                    {
                        document.getElementById("gesture").innerHTML = "You Won"
                    }
}
                }

function check(){

            img = document.getElementById('captured_image');
            classifier.classify(img, gotresult);
        }

        
    function speak()
        {
            var synth = window.speechSynthesis;
            speak_data1 = "The first prediction is " + prediction1;
            var utterThis = new SpeechSynthesisUtterance(speak_data1);
            synth.speak(utterThis);
        }
    