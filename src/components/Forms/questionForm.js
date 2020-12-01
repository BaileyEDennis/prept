import { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import QuestionData from '../../helpers/data/questionData';

export default class QuestionForm extends Component {
    state = {
      answer: this.props.board?.answer || '',
      firebaseKey: this.props.board?.firebaseKey || '',
      question: this.props.board?.question || '',
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.firebaseKey === '') {
      QuestionData.createQuestion(this.state).then(() => {
        this.props.onUpdate?.();
        this.setState({ success: true });
      });
    }
  };

  render() {
    const { success } = this.state;
    return (
      <>
        {success && (
          <div className="alert alert-success" role="alert">
            Your card was created
          </div>
        )}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="Question">Question</Label>
            <Input
              type="text"
              name="question"
              id="newQuestion"
              value={this.state.question}
              onChange={this.handleChange}
              placeholder="What's your question?"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="answer">Answer</Label>
            <Input
              type="text"
              name="answer"
              id="newAnswer"
              value={this.state.answer}
              onChange={this.handleChange}
              placeholder="What's the answer?"
              required
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </>
    );
  }
}
