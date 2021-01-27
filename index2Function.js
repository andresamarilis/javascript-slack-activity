

pluralNoun = (num, noun) => {
    let number = num;
    let nouns = noun;
    if (number > 1){
      return number + ' '+ noun +'s';
    } else {
      return number + ' '+ noun;
    }
  }
  console.log(pluralNoun(2, 'cat'))