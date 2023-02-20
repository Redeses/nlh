
import React from 'react';
import jsonUtility from '../../UtilityClasses/TextjsonUtility';
import MainButtonInstance from './MainButtonInstance';
import "./Mainbuttons.css"



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
            buttonArray:[],
            currentQuestionareNro:0,
            totalQuestions:jsonUtility.getInstance().getARowNumbers()

        }
        this.createButtons=this.createButtons.bind(this)
    }

    componentDidMount(){
        this.createButtons()
    }


    questionareBackwards(){
        this.setState({currentQuestionareNro:this.state.currentQuestionareNro-1})
    }

    questionareForwards(){
        this.setState({currentQuestionareNro:this.state.currentQuestionareNro+1})
    }


    //handles when backbutton is clicked on the device
    backButtonHandler=(e)=>{
        e.prevenDefault()
    }

    createButtons(){
        var proyArray=[]
        var lenght=5//
        var x=0;
        for(x;x<lenght;x++){
            proyArray.push(<MainButtonInstance key={x} buttonIndex={x}/>)
        }
        
        console.log(proyArray)
        this.setState({buttonArray:proyArray})
    }

    handleButtonClick(){}

    render(){
    return (
        <div className='mainubuttoncontainer'>
            <div className='MainButtonHeader'>
                <button className='backButton' onClick={this.questionareBackwards}>back</button>
                <h1 className='backButton'>Testing header</h1>
                <button className='forwardButton' onClick={this.questionareForwards}>forward</button>
            </div>
            {this.state.buttonArray}
        </div>

    )}

}