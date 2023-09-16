document.addEventListener("DOMContentLoaded", function () {
  const ruleButton = document.querySelector(".rule-btn");
  const ruleBox = document.querySelector(".rule-box");
  const crossButton = document.querySelector(".cross-btn");

  ruleBox.style.display = "none";

  function hideRuleBox() {
    ruleBox.style.display = "none";
  }
  function showRuleBox() {
    ruleBox.style.display = "block";
  }
  ruleButton.addEventListener("click", showRuleBox);
  crossButton.addEventListener("click", hideRuleBox);
});
