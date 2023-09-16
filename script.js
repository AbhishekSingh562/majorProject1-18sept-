document.addEventListener("DOMContentLoaded", function () {
  const ruleButton = document.querySelector(".rule-btn");
  const ruleBox = document.querySelector(".rule-box");
  const crossButton = document.querySelector(".cross-btn");

  // Initially, hide the rule box
  ruleBox.style.display = "none";

  // Function to show the rule box
  function showRuleBox() {
    ruleBox.style.display = "block";
  }

  // Function to hide the rule box
  function hideRuleBox() {
    ruleBox.style.display = "none";
  }

  // Toggle rule box visibility when the "RULES" button is clicked
  ruleButton.addEventListener("click", showRuleBox);

  // Hide the rule box when the "X" (cross) button is clicked
  crossButton.addEventListener("click", hideRuleBox);
});
