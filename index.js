const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  let tutorials = window.tutorials;
  let titleCasedTutorials = [];
  for (let i = 0; i < tutorials.length; i++) {
    let words = tutorials[i].split(" ");
    let titleCasedWords = [];
    for (let j = 0; j < words.length; j++) {
      let word = words[j];
      titleCasedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    let titleCasedTutorial = titleCasedWords.join(" ");
    titleCasedTutorials.push(titleCasedTutorial);
  }
  return titleCasedTutorials;
}
