function BMICalc() {
    // Retrieve values from the input fields using their IDs and convert them to numbers
    var w = document.getElementById("weight").value;
    var h = document.getElementById("height").value;

    // Validate that inputs are valid numbers
    if (!w || !h || h <= 0 || w <= 0) {
        console.error("Please enter valid weight and height values.");
        return;
    }

    h = h / 100;
    var bmi = w / (h * h);

    console.log("Your BMI is: " + bmi);

    if (bmi >= 40) {
        console.log("Severe Obesity");
    }
    else if (bmi >= 35) {
        console.log("Obesity Class II");
    }
    else if (bmi >= 30) {
        console.log("Obesity Class I");
    }
    else if (bmi >= 25) {
        console.log("Overweight");
    }
    else if (bmi >= 18.5) {
        console.log("Healthy Weight");
    }
    else {
        console.log("Underweight");
    }
}
