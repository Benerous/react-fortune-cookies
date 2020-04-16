import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookie from './Components/Cookie';
import Language from './Components/Language';

class App extends Component {
  state = {
    message: "Click to receive an advice",
    phraseVisibility: false,
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
    languages: []
  };

  handleChange = e => {
    e.preventDefault();
    const { phrasesEnglish } = this.state;
    let random = Math.floor(Math.random() * this.state.phrasesEnglish.length);
    this.setState({
      message: phrasesEnglish[random],
      phraseVisibility: true
    });
  };

  handleReset = e => {
    e.preventDefault();
    this.setState({
      phraseVisibility: false
    });
  };

  render() {
    return (
      <div className="App container">
        {/* <Language /> */}
        <Cookie
          phraseVisibility={this.state.phraseVisibility}
          message={this.state.message}
          handleChange={this.handleChange}
          handleReset={this.handleReset}
        />
      </div>
    );
  }
};

export default App;
