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
    show: 'none',
    button: 'Следующий'
  },
  methods: {
    start: function() {   
      this.id = 0;
      this.checkedValue = [];
      this.correct = [];
      this.incorrect = []; 
      this.show = 'test';  
      this.button = 'Следующий';  
    },
    next: function() { 
      if (this.id === this.questions.length - 1) {
        this.show = 'result';
      }
      let countCorrect = 0;  // 3 2 1
      for (let i = 0; i < this.checkedValue.length; i++) { // 0 1 2
        for (let k = 0; k < this.answers[this.id].answer.length; k++ ){ // 0 1 
          if (this.checkedValue[i] === (this.answers[this.id].answer[k] - 1)) {
            countCorrect++;
          } 
        }
      }
      if ((countCorrect === this.answers[this.id].answer.length) && (this.checkedValue.length === this.answers[this.id].answer.length)) {
        this.correct.push(this.id);
      } else {
        this.incorrect.push(this.id);
      }
      this.checkedValue = [];
      if (this.id < this.questions.length) {
        setTimeout(function() {app.id++}, 100);
      } 
      if(this.id === (this.questions.length - 2)) {
        this.button = 'Результаты';
      }      
    }
  }
});

window.onload = function() {
  const load = document.querySelector('.preload');
  load.style.display = 'none';
  app.show = 'start'; // плавное появление
}

// todo
// перемешивание вопросов (так же и ответов)
// после результатов просмотр ответов
// добавить ссылку на гитхаб на уголке
// добавить стили через vue



