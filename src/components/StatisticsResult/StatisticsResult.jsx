import PropTypes from 'prop-types';
import { List, Item } from "./StatisticsResults.styled";

export function StatisticsResults({good, neutral, bad, total, positivePercentage}) {
    return(
        <>
            <List>
                <Item>Good: {good}</Item>
                <Item>Neutral: {neutral}</Item>
                <Item>Bad: {bad}</Item>
            </List>
            <li>
                <p>Total: {total}</p>
                <p>Positive feedback: {positivePercentage} %</p>
            </li>
            
        </>
    );
};

StatisticsResults.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
   positivePercentage: PropTypes.number
}