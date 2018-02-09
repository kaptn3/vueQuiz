var app = new Vue({
  el: '#app',
  data: {
    questions: [
      { question: 'Сколько будет 2 * 2?'},
      { question: 'Какая фамилия у Насти?' }
    ],
    answers: [
      { answer: [ 3 ] },
      { answer: [ 1, 3 ] }
    ],
    options: [
      { option: [ '5', '2', '4', '8' ] },
      { option: ['Жаранова', 'Иванова', 'Соколова'] }
    ],
    id: 0,
    checkedValue: [],
    correct: [],
    incorrect: [],
    show: 'test'
  },
  methods: {
    next: function() { 
      let countCorrect = 0;  
      for (let i = 0; i < this.checkedValue.length; i++) { 
        for (let k = 0; k < this.answers[this.id].answer.length; k++ ){  
          if (this.checkedValue[i] === (this.answers[this.id].answer[k] - 1)) {
            countCorrect++;
          } 
        }
      }
      if (countCorrect === this.answers[this.id].answer.length) {
        this.correct.push(this.id);
      } else {
        this.incorrect.push(this.id);
      }
      this.checkedValue = [];
      if (this.id < this.questions.length) {
        this.id++;
      } else {
        this.show = 'result';
      }
    }
  }
});




