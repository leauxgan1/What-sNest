import React,{Component} from "react";
import CardSheet from "./CardSheet";

class AddButton extends Component {
    constructor(props) {
        super(props);
        this.state = {cardCount: 0};
        this.createCard = this.createCard.bind(this);
        this.cardList = this.cardList.bind(this);
    }

    createCard() {
        this.setState({cardCount: this.state.cardCount + 1});
    }
    cardList() {
        const rowList = [];
        for (let i = 0; i < this.state.cardCount; i++) {
            rowList.push(<CardSheet initialText="Type Here..."/>);
        }
        return rowList;
    }

    render() {
        return (
            <div className="cardsheet">
                <button className = "makeDivsBtn" onClick = {this.createCard}> 
                    Add a card
                </button>
                <div className="Workspace">
                    {this.cardList()}
                </div>
            </div>
          )
    }
}
export default AddButton;