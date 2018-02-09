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
    id: 0,
    checkedValue: [],
    correct: [],
    incorrect: [],
    show: 'test'
  },
  methods: {
    next: function() {   
      for (let i = 0; i < this.checkedValue.length; i++) {   
        if (this.checkedValue[i] === this.answers[this.id].answer) {
          this.correct.push(this.id);
        } else {
          this.incorrect.push(this.id);
        }
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




