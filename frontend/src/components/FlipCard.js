import React from "react";
import ReactCardFlip from "react-card-flip";
import { Card } from "@chakra-ui/react";

class FlipCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
        this.setState({ isFlipped: true });
    }

    handleMouseLeave() {
        this.setState({ isFlipped: false });
    }

    render() {
        return (
            <ReactCardFlip
                isFlipped={this.state.isFlipped}
                flipDirection="horizontal"
                containerStyle={{
                    width: "200px", // Ajustez la largeur selon vos besoins
                    height: "300px", // Ajustez la hauteur selon vos besoins
                }}
            >
                <Card height="250px"
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                >
                    This is the front of the card.
                </Card>

                <Card height="250px"
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                >
                    This is the back of the card.
                </Card>
            </ReactCardFlip>
        );
    }
}

export default FlipCard;
