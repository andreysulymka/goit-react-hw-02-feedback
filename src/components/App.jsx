import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackButton } from "./FeedbackButtons/FeedBackButtons";
import { StatisticsResults } from "./StatisticsResult/StatisticsResult";
import { Notification } from "./Notification/Notification";
import { Container } from "./App.styled";



export default class App extends Component {

  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  }
  
  state = {
  good: this.props.initialGood,
  neutral: this.props.initialNeutral,
  bad: this.props.initialBad
  }
  
  HandleClick = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    })
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (good + neutral + bad);
  }
  
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <Container>
    <Section name="feedback" title="Please, leave feedback">
          <FeedbackButton
      options={Object.keys(this.state)} onHandle={this.HandleClick}></FeedbackButton>
    </Section>
        <Section name="statistics" title="Statistics">
          {total === 0 ? (<Notification/>) :
          (<StatisticsResults good={good} neutral={neutral} bad={bad}
          total = {this.countTotalFeedback()} positivePercentage= {this.countPositiveFeedbackPercentage()}></StatisticsResults>)}
        </Section>
        </Container>
    )
  }
}