/* login */
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* Congtrulations alert */

function congrats() {
    alert("We appreciate your effort! Thankyou! ");
  }

/* select unit for bmi */
var unitSelect = document.getElementById("unit");
    unitSelect.addEventListener("change", function() {
        var standardInput = document.getElementById("standard-input");
        var metricInput = document.getElementById("metric-input");
      
        if (unitSelect.value === "standard") {
            standardInput.style.display = "block";
            metricInput.style.display = "none";
        } else if (unitSelect.value === "metric") {
            standardInput.style.display = "none";
            metricInput.style.display = "block";
        }
    }
);

/* BMI function */
function calculateBMI() {
    var weight, height, bmi;
    var resultDiv = document.getElementById("result");
    var unit = document.getElementById("unit").value;

    if (unit === "standard") {
      weight = parseFloat(document.getElementById("weight-lbs").value);
      height = parseFloat(document.getElementById("height-ft").value) * 12 + parseFloat(document.getElementById("height-in").value);
    } else if (unit === "metric") {
      weight = parseFloat(document.getElementById("weight-kg").value);
      height = parseFloat(document.getElementById("height-cm").value) / 100;
    }

    bmi = weight / (height * height);
    

    resultDiv.innerHTML = "";
    resultDiv.className = "";

    if (bmi < 18.5) {
        resultDiv.className = "underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        resultDiv.className = "normal";
    } else if (bmi >= 25 && bmi < 30) {
        resultDiv.className = "overweight";
    } else if (bmi >= 30 && bmi < 40) {
        resultDiv.className = "obese";
    } else {
        resultDiv.className = "severelyobese";
    }
    
    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);
}

/* Pace calculator */
function calculatePace() {
    var distanceInput = document.getElementById("distance").value;
    var timeInput = document.getElementById("time").value;
    var sportInput = document.getElementById("sport").value;
    var resultDiv = document.getElementById("result");
    var paceResult= document.getElementById("pace-result");
    
    var distance = parseFloat(distanceInput);
    var time = parseFloat(timeInput);
    
    var paceKmHr = distance / (time / 60); 
    var paceKmMin = time !== 0 ? distance / time : 0; 
    var paceMMin = time !== 0 ? (distance * 1000) / time : 0;
    
    resultDiv.innerHTML = "Your Pace is " + paceKmHr.toFixed(2) + "km/hour <br>";
    resultDiv.innerHTML += "Pace: " + paceKmMin.toFixed(2) + "km/min<br>";
    resultDiv.innerHTML += "Pace: " + paceMMin.toFixed(2)+ "metres/min <br>";


    if (sportInput === "walking") {
        if (paceKmHr < 4) {
            resultDiv.className = "slow";
            resultDiv.innerHTML = "You are slow!"
        } else if (paceKmHr >=4 && paceKmHr < 6) {
            resultDiv.className = "moderate";
            resultDiv.innerHTML = "You pace is moderate!"
        } else {
            resultDiv.className = "fast";
            resultDiv.innerHTML = "You are fast!"
        }
    } 
    else if (sportInput === "jogging") {
        if (paceKmHr < 6) {
            resultDiv.className = "slow";
            resultDiv.innerHTML = "You are slow!"
        } else if (paceKmHr >= 6 && paceKmHr < 8) {
            resultDiv.className = "moderate";
            resultDiv.innerHTML = "You pace is moderate!"
        } else {
            resultDiv.className = "fast";
            resultDiv.innerHTML = "You are fast!"
        }
    } 
    else if (sportInput === "running") {
        if (paceKmHr < 6) {
            resultDiv.className = "slow";
            resultDiv.innerHTML = "You are slow!"
        } else if (paceKmHr >=6 && paceKmHr < 11) {
            resultDiv.className = "moderate";
            resultDiv.innerHTML = "You pace is moderate!"
        } else {
            resultDiv.className = "fast";
            resultDiv.innerHTML = "You are fast!"
        }
    }
    else if (sportInput === "cycling") {
        if (paceKmHr < 14) {
            resultDiv.className = "slow";
            resultDiv.innerHTML = "You are slow!"
        } else if (paceKmHr >= 14 && paceKmHr < 20) {
            resultDiv.className = "moderate";
            resultDiv.innerHTML = "You pace is moderate!"
        } else {
            resultDiv.className = "fast";
            resultDiv.innerHTML = "You are fast!"
        }
    }
    paceResult.innerHTML = "Your Pace is " + paceKmHr.toFixed(2) + "km/hour <br>";
    paceResult.innerHTML += "Pace: " + paceKmMin.toFixed(2) + "km/min<br>";
    paceResult.innerHTML += "Pace: " + paceMMin.toFixed(2)+ "metres/min <br>"; 
}

/*To-do */

function checkCompletion() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var allChecked = true;
    
    for (var i = 0; i < checkboxes.length; i++) {
        if (!checkboxes[i].checked) {
            allChecked = false;
            break;
        }
    }

    if (allChecked) {
        
        alert("You've completed your tasks for the day!");
        
    }
}


