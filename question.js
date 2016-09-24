function Question (text,choice,answer){
  this.text = text;
  this.choices = choice;
  this.answer = answer
}

Question.prototype.isCorrectAnswer = function(choice){
  return this.answer === choice;
}
