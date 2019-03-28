export default {
  modules: {
    sidebar: {
      isActive: true,
    },
    header: {
      isActive: true,
    },
    footer: {
      isActive: true,
    },
    race: {
      isActive: true,
    },
    quotes: {
      isActive: true,
    },
    news: {
      isActive: true,
    },
  },
  modalWindow: {
    balanceModalIsActive: false,
    settingsModalIsActive: false,
  },
  questions: {
    1: {
      text: 'Какую проблему решает redux?',
      answers: [
        'Красивой верстки',
        'Помогает реакут рендерить компоненты',
        'Управление состоянием (данными) всего вашего приложения.',
        'Удобный инструмент стилизации компонентов',
      ],
      correctAnswer: 2,
    },
    2: {
      text: 'Что такое редьюсер?',
      answers: [
        'Это функция, которая принимает прошлое состояние и возвращает следующее',
        'Препроцессор',
        'Тип данных в js',
        'Либа',
      ],
      correctAnswer: 0,
    },
    3: {
      text: 'Зачем нужны propTypes?',
      answers: [
        'Что бы уменьшить количество рендеров',
        'Что бы понимать какие свойства и какого типа ожидает компонент',
        'Что бы поменять state компонента',
        'Такого не существует',
      ],
      correctAnswer: 1,
    },
  },
}
