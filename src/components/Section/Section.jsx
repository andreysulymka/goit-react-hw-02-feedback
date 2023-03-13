import PropTypes from 'prop-types';
import { Block, Subtitle } from "./Section.styled"

export function Section({ title, children}) {
    return (<Block>
         {title && (<Subtitle>{title}</Subtitle>)}
            {children}
    </Block>)
    
}

Section.propTypes = {
    title: PropTypes.string, 
    children: PropTypes.node,
};