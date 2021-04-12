const generateRandomNumber = (number) => {
    return Math.floor(Math.random() * number);
}

const adviceForNewDevelopers = {
    adviceOutput: ['It never gets better, you just get better at it.', 'Don’t Be Afraid to Ask for Help.', 'The learning process will never end.', 'Don’t Be Afraid to Fail. If you are afraid to fail, you will never try new things.', 'Techniques, libraries and frameworks com and go. Be a flexible learner.'],
    adviceRecommend: ['https://adewusi.medium.com/failing-as-a-junior-developer-f2190dd3891e', 'https://towardsdatascience.com/coding-mistakes-i-made-as-a-junior-developer-e151dd3b3c7d', 'https://medium.com/free-code-camp/ace-your-first-year-as-a-junior-developer-with-this-advice-bbc68b6fe2d9']
}

  // Store the 'advice' in an array
  let advice = [];

  // Iterate over the object
  for(let prop in adviceForNewDevelopers) {
    let optionIdx = generateRandomNumber(adviceForNewDevelopers[prop].length)
  
    // Use the object's properties to customize the message being added to advice 
    switch(prop) {
      case 'adviceOutput':
        advice.push(`\nOur advice: "${adviceForNewDevelopers[prop][optionIdx]}".\n`)
        break;
      case 'adviceRecommend':
        advice.push(`And here's and article we think you'd enjoy: ${adviceForNewDevelopers[prop][optionIdx]}. \nLet us know what you think.\n`)  
        break;
      default:
        advice.push('Oops, something went wrong. Try and run node script.js again.')
    }
  }

  function formatWisdom(adviceMessage) {
    const formatted = advice.join('\n')
    console.log('\nAre you feeling a little overwhelmed on your journey to become a DEVELOPER?\nHere is a random piece of advice:')
    console.log(formatted)
  }
  
  formatWisdom(advice);
