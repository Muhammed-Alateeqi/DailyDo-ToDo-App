//  Daily Do JS Code

//     document.addEventListener("DOMContentLoaded", function () {
//     document.querySelector("#AddButton").disabled = true;

//     document.querySelector("#PutTask").onkeyup = function(){
//         if(document.querySelector("#PutTask").value.length >5 ){
//         document.querySelector("#AddButton").disabled = false;
//     } else {
//         document.querySelector("#AddButton").disabled = true;
//     } 
// }
//         document.querySelector("form").onsubmit = function(){
//         const Goal = document.querySelector("#PutTask").value;
//         const li = document.createElement("li");
//         li.innerHTML = Goal ;
//         document.querySelector("#Goals").appendChild(li);
//         document.querySelector("#PutTask").value ='';
//         document.querySelector("#AddButton").disabled = true;
//             return false;
//     }
//     })

// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector("#AddButton").disabled = true;

//   document.querySelector("#PutTask").onkeyup = function () {
//     if (document.querySelector("#PutTask").value.length > 5) {
//       document.querySelector("#AddButton").disabled = false;
//     } else {
//       document.querySelector("#AddButton").disabled = true;
//     }
//   };

//   document.querySelector("form").onsubmit = function () {
//     const Goal = document.querySelector("#PutTask").value;
//     const li = document.createElement("li");
//     li.innerHTML = Goal;
//     li.addEventListener("click", function () {
//       li.parentNode.removeChild(li);
//       const completeLi = document.createElement("li");
//       completeLi.innerHTML = li.innerHTML;
//       document.querySelector("#CompletedGoals").appendChild(completeLi);
//     });
//     document.querySelector("#Goals").appendChild(li);
//     document.querySelector("#PutTask").value = "";
//     document.querySelector("#AddButton").disabled = true;
//     return false;
//   };
// });


document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#AddButton").disabled = true;

  document.querySelector("#PutTask").onkeyup = function () {
    if (document.querySelector("#PutTask").value.length > 3) {
      document.querySelector("#AddButton").disabled = false;
    } else {
      document.querySelector("#AddButton").disabled = true;
    }
  };

  document.querySelector("form").onsubmit = function () {
    const Goal = document.querySelector("#PutTask").value;
    const li = document.createElement("li");
    const taskContainer = document.createElement("div"); // new div to wrap task and buttons
    const taskText = document.createElement("span"); // span to contain task text
    taskContainer.style.display = "flex";
    taskContainer.style.justifyContent = "space-between";
    taskText.style.flex = "5";
    taskContainer.style.marginBottom = "10px";

    taskText.innerHTML = Goal;
 // add margin to task text
    taskContainer.appendChild(taskText); // add task text to task container

    // create button to move task to completed list
    const completeBtn = document.createElement("button");
    completeBtn.setAttribute("class","DoneStyle btn btn-dark");
    completeBtn.innerHTML = "Done";
    completeBtn.style.marginRight = "5px"; // add margin to complete button
    completeBtn.addEventListener("click", function() {
      li.parentNode.removeChild(li);
      taskContainer.removeChild(completeBtn);
      taskContainer.removeChild(deleteBtn);
      const completeLi = document.createElement("del");
      completeLi.innerHTML = taskText.innerHTML;
      document.querySelector("#CompletedGoals").appendChild(completeLi);
    });
    
    taskContainer.appendChild(completeBtn); // add complete button to task container

    // create button to delete task
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class","DeleteStyle btn btn-dark");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", function() {
      li.parentNode.removeChild(li);
    });
    taskContainer.appendChild(deleteBtn); // add delete button to task container
    

    li.appendChild(taskContainer); // add task container to list item
    document.querySelector("#Goals").appendChild(li);
    document.querySelector("#PutTask").value = "";
    document.querySelector("#AddButton").disabled = true;
    return false;
  };
  const resetBtn =  document.querySelector("#reset")
  resetBtn.addEventListener("click", function () {
    document.querySelector("#Goals").innerHTML = "";
  document.querySelector("#CompletedGoals").innerHTML = "";
  });
  });


  window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
      seconds = "00";
      appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }