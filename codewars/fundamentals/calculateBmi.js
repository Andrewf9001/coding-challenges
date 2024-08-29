const bmi = (weight, height) => {
  const bodyMass = weight / Math.pow(height, 2);

  if (bodyMass <= 18.5) return "Underweight";
  else if (bodyMass <= 25) return "Normal";
  else if (bodyMass <= 30) return "Overweight";
  else return "Obese";
};

// Instructions:
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// Tests:
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(bmi(80, 1.80), "Normal");
//   });
// });

// Submission:
function bmiSubmission(weight, height) {
  let b = weight / height ** 2;
  return b <= 18.5
    ? "Underweight"
    : b <= 25.0
    ? "Normal"
    : b <= 30.0
    ? "Overweight"
    : "Obese";
}
