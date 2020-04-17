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
    languages: ["Eng", "Ukr", "Rus"],
    phrasesEnglish: [
      "A beautiful, smart, and loving person will be coming into your life.",
      "A dubious friend may be an enemy in camouflage.",
      "A faithful friend is a strong defense.",
      "A feather in the hand is better than a bird in the air.",
      "A fresh start will put you on your way.",
      "A friend asks only for your time not your money.",
      "A friend is a present you give yourself.",
      "A gambler not only will lose what he has, but also will lose what he doesn’t have.",
      "A golden egg of opportunity falls into your lap this month.",
      "A good friendship is often more important than a passionate romance.",
      "A good time to finish up old tasks.",
      "Congratulations! You are on your way.",
      "Could I get some directions to your heart?",
      "Courtesy begins in the home.",
      "Courtesy is contagious.",
      "Curiosity kills boredom. Nothing can kill curiosity.",
      "Dedicate yourself with a calm mind to the task at hand.",
      "Depart not from the path which fate has you assigned.",
      "Determination is what you need now.",
      "Diligence and modesty can raise your social status.",
      "Disbelief destroys the magic.",
      "Distance yourself from the vain.",
      "Do not be intimidated by the eloquence of others.",
      "Do not demand for someone’s soul if you already got his heart.",
      "Do not let ambitions overshadow small success.",
      "Do not make extra work for yourself.",
      "Do not underestimate yourself. Human beings have unlimited potentials.",
      "Do you know that the busiest person has the largest amount of time?",
      "You have a deep appreciation of the arts and music.",
      "You have a deep interest in all that is artistic.",
      "You have a friendly heart and are well admired.",
      "You have a shrewd knack for spotting insincerity.",
      "You have a yearning for perfection.",
      "You have an active mind and a keen imagination.",
      "You have an ambitious nature and may make a name for yourself.",
      "You have an unusual equipment for success, use it properly.",
      "Your home is the center of great love.",
      "Your ideals are well within your reach.",
      "Your infinite capacity for patience will be rewarded sooner or later.",
      "Your leadership qualities will be tested and proven.",
      "Your life will be happy and peaceful.",
      "Your life will get more and more exciting.",
      "Your love life will be happy and harmonious.",
      "Your love of music will be an important part of your life.",
      "Your loyalty is a virtue, but not when it’s wedded with blind stubbornness.",
      "Your mentality is alert, practical, and analytical.",
      "Your mind is creative, original and alert.",
      "Your mind is your greatest asset.",
      "Your moods signal a period of change.",
      "Your quick wits will get you out of a tough situation.",
      "Your reputation is your wealth.",
      "Your success will astonish everyone.",
      "Your talents will be recognized and suitably rewarded.",
      "Your work interests can capture the highest status or prestige.",
      "One of the first things you should look for in a problem is its positive side.",
      "Others can help you now.",
      "Pennies from heaven find their way to your doorstep this year!",
      "People are attracted by your Delicate[sic] features.",
      "People find it difficult to resist your persuasive manner.",
      "Perhaps you’ve been focusing too much on saving.",
      "Physical activity will dramatically improve your outlook today.",
      "Pick battles big enough to matter, small enough to win.",
      "Place special emphasis on old friendship.",
      "Po Says: Pandas like eating bamboo, but I prefer mine dipped in chocolate.",
      "If a true sense of value is to be yours it must come through service.",
      "If certainty were truth, we would never be wrong.",
      "If you continually give, you will continually have.",
      "If you look in the right places, you can find some good offerings.",
      "If you think you can do a thing or think you can’t do a thing, you’re right.",
      "If you wish to see the best in others, show the best of yourself.",
      "If your desires are not extravagant, they will be granted.",
      "If your desires are not to extravagant they will be granted.",
      "If you’re feeling down, try throwing yourself into your work.",
      "Imagination rules the world.",
      "In order to take, one must first give."
    ],
    phrasesUkrainian: [
      "Красива, розумна і любляча людина ввійде у ваше життя.",
      "Сумнівний друг може бути ворогом у камуфляжі.",
      "Вірний друг - сильний захист.",
      "Перо в руці краще, ніж птах у повітрі.",
      "Новий старт покладе вас на ваш шлях.",
      "Други просить лише ваш час, не ваші гроші.",
      "Друг - це подарунок, який ви даруєте собі.",
      "Азартний гравець не тільки втратить те, що має, але й втратить те, чого не має.",
      "Ви отримаєте золоте яйце нагоди цього місяця.",
      "Гарна дружба часто важливіша за пристрасний роман.",
      "Гарний час для закінчення старих завдань.",
      "Вітаємо! Ви на правильному шляху.",
      "Чи можу я отримати якісь вказівки до вашого серця?",
      "Ввічливість починається вдома.",
      "Ввічливість заразна.",
      "Цікавість вбиває нудьгу. Ніщо не може вбити цікавість.",
      "Присвятіть себе зі спокійним розумом поточному завданню.",
      "Не відступайте від того шляху, який вам призначила доля.",
      "Визначенність - це те, що вам зараз потрібно.",
      "Працьовитість і скромність можуть підвищити ваш соціальний статус.",
      "Невіра знищує магію.",
      "Віддаліться від даремностей.",
      "Не лякайтеся красномовства інших.",
      "Не вимагайте чиєїсь душі, якщо у вас вже є його серце.",
      "Не дозволяйте амбіціям затьмарити невеликий успіх.",
      "Не починайте зайвих робіт для себе.",
      "Не варто недооцінювати себе. Людина має необмежений потенціал.",
      "Чи знаєте ви, що найзайнятіша людина має найбільше часу?",
      "Ви глибоко цінуєте мистецтво та музику.",
      "Ви глибоко цікавитесь усім, що є художнім.",
      "У вас доброзичливе серце і ви є бажаним.",
      "У вас є хороший нюх до виявлення нещирості.",
      "У вас є прагнення до досконалості.",
      "У вас активний розум і гостра уява.",
      "Ви маєте амбітний характер і можете отримати популярність.",
      "У вас є незвичне обладнання для успіху, використовуйте його належним чином.",
      "Ваш дім - центр великої любові.",
      "Ваші ідеали цілком досяжні.",
      "Ваша нескінченна здатність до терпіння рано чи пізно буде винагороджена.",
      "Ваші лідерські якості будуть перевірені та доведені.",
      "Ваше життя буде щасливим і мирним.",
      "Ваше життя стане все більш захоплюючим.",
      "Ваше любовне життя буде щасливим і гармонійним.",
      "Ваша любов до музики буде важливою частиною вашого життя.",
      "Ваша вірність - це чеснота, але не тоді, коли вона пов'язана зі сліпою впертістю.",
      "Ваш менталітет насторожений, практичний та аналітичний.",
      "Ваш розум творчий, оригінальний та насторожений.",
      "Ваш розум - це ваше найбільше надбання.",
      "Ваш настрій сигналізує про період змін.",
      "Ваші швидкі розуми позбавлять вас від важкої ситуації.",
      "Ваша репутація - ваше багатство.",
      "Ваш успіх здивує всіх.",
      "Ваші таланти будуть визнані та належними винагородами.",
      "Ваші трудові інтереси можуть здобути найвищий статус чи престиж.",
      "Одне з перших, на що слід звернути увагу, - це позитивна сторона.",
      "Інші можуть вам зараз допомогти.",
      "Цього року копійки з неба знаходять дорогу до вашого порогу!",
      "Людей приваблюють ваші делікатні риси.",
      "Людям важко протистояти вашій переконливій манері.",
      "Можливо, ви занадто багато зосереджувались на економії.",
      "Фізичні навантаження сьогодні значно покращать ваш світогляд.",
      "Вибирайте битви достатньо великі, щоб мати значення та достатньо малі, щоб виграти.",
      "Надайте особливий акцент старій дружбі.",
      "Пo каже: Панди люблять їсти бамбук, але я віддаю перевагу змоченим у шоколаді.",
      "Якщо справжнє почуття цінності має бути вашим, воно повинно пройти службу.",
      "Якби певність була правдою, ми ніколи не помилимось.",
      "Якщо ти будеш постійно віддавати, ти будеш постійно отримувати.",
      "Якщо ви шукаєте в потрібних місцях, ви можете знайти кілька хороших пропозицій..",
      "Якщо ви думаєте, що можете зробити щось, або думаєте, що не можете зробити щось, ви маєте рацію.",
      "Якщо ви хочете бачити найкраще в інших, покажіть найкраще в собі",
      "Якщо ваші бажання не є екстравагантними, вони будуть задоволені.",
      "Якщо ваші бажання не є занадто екстравагантними, вони будуть задоволені.",
      "Якщо ви почуваєтесь недобре, спробуйте кинутись в роботу.",
      "Уява править світом.",
      "Для того, щоб взяти, треба спочатку віддати."
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
      <div className="App container w-100">
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
