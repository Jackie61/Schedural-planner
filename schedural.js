document.addEventListener('DOMContentLoaded', (event) => {
  console.log('Page Loaded');
});

//(function(){
  var config = {
    apiKey: "AIzaSyBgT2k8cuzyQt8LD79nanXAVGHYoZu7zLc",
    authDomain: "schplanner-43974.firebaseapp.com",
    databaseURL: "https://schplanner-43974.firebaseio.com",
    projectId: "schplanner-43974",
    storageBucket: "schplanner-43974.appspot.com",
    messagingSenderId: "453265108925",
  }
  firebase.initializeApp(config);
  var firestore = firebase.firestore();
  
  const docRef = firestore.collection("Jackie").doc("Planner");
  const outputHeader = document.querySelector("#hotDogOutput");
  const inputTextField = document.querySelector("#latestHotDogStatus");
  const saveBtn = document.getElementById("saveButton");

  saveBbtn.addEventListener('click', function(){
    const textToSave = inputTextField.value;
    console.log("Save" + textToSave + "firestore");
    docRef.set({
      hotDogStatus: textToSave
    }).then(function(){
      console.log("Saved");
    }).catch(function (error){
      console.log("Error: ",error);
    });
  });
//})();

function create(){
  var word = document.createElement("h1");
  word.innerText ="This";
  document.body.append(word);
}