let consonants = "bcdfghjklmnpqrstvwxz".split("");

const translator = {
  translate: function(word) {
    if (consonants.includes(word.charAt(0))) {
      return word.substr(1) + word.charAt(0) + "ay";
    }
    return word + "ay";
  }
}


export { translator }
