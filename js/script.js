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
    checkedValue: []
  }
});




