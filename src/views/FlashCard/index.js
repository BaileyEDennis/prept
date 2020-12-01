import React from 'react';
import QuestionCard from '../../components/Cards/QuestionCard';
import AnswerCard from '../../components/Cards/AnswerCard';
import QuestionData from '../../helpers/data/questionData';

export default class FlashCard extends React.Component {
  state = {
    flashCards: [],
    currentCard: {},
    answer: false,
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    QuestionData.getQuestions().then((response) => {
      this.setState({
        flashCards: response,
        currentCard: response[0],
      });
    });
  }

  render() {
    const { answer, currentCard } = this.state;
    const showQuestion = () => <QuestionCard key={currentCard.firebaseKey} card={currentCard} />;
    const showAnswer = () => <AnswerCard key={currentCard.firebaseKey} card={currentCard}/>;
    return (
        <div className="flash-card d-flex flex-wrap justify-content-center">
          { answer === false ? showQuestion() : showAnswer()}
        </div>
    );
  }
}
