
var question1 = new Question ("Where is Manchester?",["In UK","In Africa"],"In UK");
var question2 = new Question ("Who is the pope?",["Benedict XVI","Pius V"],"Benedict XVI");

questions = [question1,question2];

//create quiz
var quiz = new Quiz(questions);

//display quiz
QuizUI.displayNext();
