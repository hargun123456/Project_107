function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.startClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json',modleReady);
}

function modleReady() {
    classifier.classify(gotResults);
}