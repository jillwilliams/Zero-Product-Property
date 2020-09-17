const myProblem = () => {
    var a = document.getElementById("in1").value;
    var b = document.getElementById("in2").value;
    if (a == -5 && b == -7) {
        return "Good Job!"
    }  else
    if (a == -7 && b == -5) {
        return "Good Job!"
    }   else 
        return "-5 and -7";
};
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
}

const myProblem2 = () => {
    var a1 = document.getElementById("in3").value;
    var b1 = document.getElementById("in4").value;
    if (a1 == 5 && b1 == -4) {
        return "Good Job!"
    }  else
    if (a1 == -4 && b1 == 5) {
        return "Good Job!"
    }   else 
        return "-4 and 5";
};
const myCalc2 = () => {
    document.getElementById("demo2").innerHTML = myProblem2();
}

const myProblem3 = () => {
    var a2 = document.getElementById("in5").value;
    var b2 = document.getElementById("in6").value;
    if (a2 == 3 && b2 == 6) {
        return "Good Job!"
    }  else
    if (a2 == 6 && b2 == 3) {
        return "Good Job!"
    }   else 
        return "3 and 6";
};
const myCalc3 = () => {
    document.getElementById("demo3").innerHTML = myProblem3();
}
