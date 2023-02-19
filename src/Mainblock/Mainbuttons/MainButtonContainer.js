
import React from 'react';


//Used to house man column of buttons for the app. There are alway4/5 buttons but their display is triggered depending on 
//this components current state
//display types range from 1-x based on question, and E(editing), M(mainmenu), D(default),as well as F(finished)
//there is also a extra div box that has the question for the current page
//TODO get functional components into this project
export default class MainButtonContainer extends React.Component{


    constructor(props){
        super(props);
        this.state={
            displayType:"D",

        }
    }

    componentDidMount(){}

    createButtons(){}

    handleButtonClick(){}


    return (){
        <div className='mainubuttoncontainer'>

        </div>

    }

}