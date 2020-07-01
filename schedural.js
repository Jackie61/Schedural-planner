

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Page Loaded');
  });

  function enterinfo()
  {
      var config= {
        apiKey:"AIzaSyBgT2k8cuzyQt8LD79nanXAVGHYoZu7zLc",
        authDomain: "schplanner-43974.firebaseapp.com",
        projectId:"schplanner-43974"
      }
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
        }  
      var db = firebase.firestore();
      var inpdate = document.getElementById("Date");
      var inpevent = document.getElementById("Event");
      var datainput = {
          Date: inpdate,
          Event: inpevent
      };
        db.collection("Jackie").doc("Planner").set(datainput).then(function() {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
  }