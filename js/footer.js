const codingLanguages = ["HTML", "CSS", "JavaScript"]

function writeFooterSentence () {
    document.getElementById("lang").innerHTML = "This website has been created with: "
    if (codingLanguages.length === 1) {
      document.getElementById("lang").innerHTML += codingLanguages[0] + ".";
    } else {
      for (let i = 0; i < codingLanguages.length-2; i++) {
        document.getElementById("lang").innerHTML += codingLanguages[i] + ", ";
      }
      document.getElementById("lang").innerHTML += codingLanguages[codingLanguages.length - 2] + " and " + codingLanguages[codingLanguages.length - 1] + ".";
    }
  }
  
  writeFooterSentence();