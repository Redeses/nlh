
import React from 'react';
import jsonUtility from '../../UtilityClasses/TextjsonUtility';
import DataHandler from '../../UtilityClasses/Datakeeper';
import MainButtonInstance from './MainButtonInstance';
import "./Mainbuttons.css"



//Used to house man column of buttons for the app. There are alway4/5 buttons but their display is triggered depending on 
//this components current state
//display types range from 1-x based on question, and E(editing), M(mainmenu), D(default),as well as F(finished)
//there is also a extra div box that has the question for the current page
//TODO get functional components into this project
export default class MainButtonContainer extends React.Component{

    clickedArray=[];//array of questions clicked and nro of question the user was on. save into localStorage

    constructor(props){
        super(props);
        this.state={
            displayType:"D",
            buttonArray:[],
            currentQuestionareNro:0,
            totalQuestions:jsonUtility.getInstance().getARowNumbers()

        }
        this.createButtons=this.createButtons.bind(this)
        this.questionareBackwards=this.questionareBackwards.bind(this)
        this.questionareForwards=this.questionareForwards.bind(this)
    }

    componentDidMount(){
        this.createButtons()
        this.clickedArray=[this.state.totalQuestions]
    }


    questionareBackwards(){
        if(this.state.currentQuestionareNro===0) {
            //add back to "Main menu"
            return;
        }else{
            this.setState({currentQuestionareNro:this.state.currentQuestionareNro-1})
            DataHandler.getInstance().currentQNumber(this.state.currentQuestionareNro)
            this.createButtons()
        }}

    questionareForwards(){
        if(this.state.currentQuestionareNro===this.state.totalQuestions-1) {
            //add go to end
            
        }else{
            this.setState({currentQuestionareNro:this.state.currentQuestionareNro+1})
            DataHandler.getInstance().currentQNumber(this.state.currentQuestionareNro)
           this.createButtons()
        }
    }

    //gets local storage data for 
    getDataArrayFromStorage(){

    }

    //this handlebuttonWillEventually add the buttons value and the clicked key, into an array save to local storage
    saveButtonPressData=(e, params)=>{
        this.clickedArray[0].push(this.state.currentQuestionareNro)
        this.clickedArray[this.state.currentQuestionareNro+1].push([params.index,params.value])
        //add to localstorage
    }

    //handles when backbutton is clicked on the device
    backButtonHandler=(e)=>{
        e.prevenDefault()
    }

    //shows startmenu
    startMenu(){}


    //shows eneding menu
    endingMenu(){}


    createButtons(){
        //add a function that will get data from datakeeper about button cliks
        var proyArray=[]
        var lenght=5//
        var x=0;
        for(x;x<lenght;x++){
            proyArray.push(<MainButtonInstance key={x} saveButtonPress={this.saveButtonPressData} QNro={this.state.currentQuestionareNro} buttonIndex={x}/>)
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