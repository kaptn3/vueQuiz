var app = new Vue({
  el: '#app',
  data: {
    questions: [
      { question: 'Сколько будет 2 * 2?'/*, correct: 'Хорошо', options: ['Нормально', 'Хорошо', 'Отлично']*/ },
      { question: 'Какая фамилия у Насти?' }
    ],
    answers: [
      { answer: '4' },
      { answer: 'Жаранова' }
    ],
    options: [
      { option: [ '5', '2', '4', '8' ] },
      { option: ['Жаранова', 'Иванова', 'Соколова'] }
    ],
    show: 0,
    checkedValue: [],
    correct: [],
    incorrect: []
  },
  methods: {
    next: function() {   
      for (let i = 0; i < this.checkedValue.length; i++) {   
        if (this.checkedValue[i] === this.answers[this.show].answer) {
          this.correct.push(this.show);
        } else {
          this.incorrect.push(this.show);
        }
      }
      this.checkedValue = [];
      if (this.show < this.questions.length) {
        this.show++;
      } else {
        this.show = 0;
      }
    }
  }
});




