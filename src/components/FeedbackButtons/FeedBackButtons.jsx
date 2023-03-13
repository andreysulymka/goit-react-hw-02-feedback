import PropTypes from 'prop-types';
import { List, Button } from "./FeedbackButtons.styled";

export function FeedbackButton({ options, onHandle }) {
    return (
        <List>
             {options.map(option => {
                return (
                    <li key={option}>
                        <Button type="button" name={option} onClick={() => {onHandle(option);}}>
                            {option}
                        </Button>
                    </li>
                );
            })}
        </List>
    )
}

FeedbackButton.propTypes = {
    options: PropTypes.array,
    onHandle: PropTypes.func
};
