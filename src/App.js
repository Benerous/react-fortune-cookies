import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookie from './Components/Cookie';
import Language from './Components/Language';

class App extends Component {
  state = {
    message: "Click to receive an advice",
    language: "Eng",
    phraseVisibility: false,
    languages: ["Eng", "Ukr"],
    phrasesEnglish: [
      "Avoid conflicts today. Lucky numbers: 12, 15, 23, 28, 37.",
      "Ask your mom instead of a cookie.",
      "This cookie contains 117 calories.",
      "If you have something good in your life, don't let it go!",
      "A friend asks only for your time not your money.",
      "The gambler will not only lose what he has, but also lose what he does not have.",
      "A good time to finish up old tasks.",
      "Disbelief destroys the magic.",
      "Do not make extra work for yourself.",
      "Your life will be happy and peaceful.",
      "Your life will get more and more exciting.",
      "One of the first things you should look for in a problem is its positive side.",
      "Others can help you now.",
      "Perhaps you’ve been focusing too much on saving.",
      "A dream you have will come true.",
      "Ignore previous cookie.",
      "Try to get another cookie.",
      "The answer is just behind you.",
      "Try to roll the dice. If you get even number - yes, do it; if odd - don't do it.",
      "Sometimes you get, sometimes you lose.",
      "Look at the time right now. Add all numbers separatly. Even number - think about it, odd number - your on the right way",
      "If cookie can't help you to decide, you should try another method."
    ],
    phrasesUkrainian: [
      "Сьогодні варто уникати конфлікти. Щасливі цифри: 12, 15, 23, 28, 39.",
      "Краще запитай у мами, ніж у печива.",
      "Кількість калорій в даному печиві - 117.",
      "Якщо у твому житті є щось хороше - не відпускай це.",
      "Други просить лише ваш час, не ваші гроші.",
      "Азартний гравець не тільки втратить те, що має, але й втратить те, чого не має.",
      "Хороший час для завершення старих справ.",
      "Невіра знищує магію.",
      "Не нагружайте себе зайвою роботою.",
      "Ваше життя буде щасливе і мирне.",
      "Ваше життя стане ще цікавішим.",
      "Перше, що ви повинні шукати в проблемі - це її позитивні сторони.",
      "Варто дослухатись до думки інших, вона може допомогти.",
      "Можливо, варто менше концентруватись на економії.",
      "Скоро здійснеться одна із ваших мрій.",
      "Не бери до уваги попереднє передбачення.",
      "Спробуй наступне печиво.",
      "Відповідь відразу за твоєю спиною.",
      "Спробуй кинути кубик. Якщо випало парне число - відповідь: так; якщо непарне - ні.",
      "Інколи ти отримуєш, інколи - втрачаєш.",
      "Подивись на час в даний момент. Добав кожну цифру окремо. Якщо результат парне число - обдумай ще раз відповідь, непарне - ти на правильному шляху думок.",
      "Якщо печиво не допомагає тобі із вирішенням, тобі слід спробувати інший метод"
    ]
  };

  handleChange = e => {
    e.preventDefault();
    const { phrasesEnglish, phrasesUkrainian, language } = this.state;
    let random = Math.floor(Math.random() * this.state.phrasesEnglish.length);
    this.setState({
      message: language === "Eng" ? phrasesEnglish[random] : phrasesUkrainian[random],
      phraseVisibility: true,
    });
  };

  handleReset = e => {
    e.preventDefault();
    this.setState({
      phraseVisibility: false
    });
  };

  handleSubmit = e => {
    const { languages } = this.state;
    e.preventDefault();
    let index = e.target.value;
    this.setState({
      phraseVisibility: false,
      language: languages[index],
    });
  }

  render() {
    return (
      <div className="container h-100">
        <Language 
          phraseVisibility={this.state.phraseVisibility}
          languages={this.state.languages}
          language={this.state.language}
          handleSubmit={this.handleSubmit}
        />
        <Cookie
          phraseVisibility={this.state.phraseVisibility}
          language={this.state.language}
          message={this.state.message}
          handleChange={this.handleChange}
          handleReset={this.handleReset}
        />
      </div>
    );
  }
};

export default App;
