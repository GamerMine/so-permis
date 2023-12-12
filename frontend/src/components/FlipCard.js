import React from "react";
import ReactCardFlip from 'react-card-flip';
import {Card} from "@chakra-ui/react";

class FlipCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <Card backgroundColor="#1EC6B1">
                    <button onClick={this.handleClick}>This is the front of the card.</button>
                </Card>

                <Card backgroundColor="#000000">
                    <button onClick={this.handleClick}>This is the back of the card.</button>
                </Card>
            </ReactCardFlip>
        )
    }
}

export default FlipCard ;