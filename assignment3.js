let score = 85;

if (score >= 90) {
    console.log("Excellent performance!");
} else if (score >= 80) {
    console.log("Good performance!");
} else if (score >= 60) {
    console.log("Average performance!");
} else {
    console.log("Needs improvement!");
}

let grade;

switch (true) {
    case (score >= 90):
        grade = "A";
        break;

    case (score >= 80):
        grade = "B";
        break;

    case (score >= 70):
        grade = "C";
        break;

    case (score >= 60):
        grade = "D";
        break;

    default:
        grade = "F";
}

let status = score >= 40 ? "Passed" : "Failed";

console.log("Score: " + score);
console.log("Grade: " + grade);
console.log("Status: " + status);
