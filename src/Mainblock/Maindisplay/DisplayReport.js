//React class used to show interactive elements in the help display
// react class used to show text only data to user

//The idea will be able to create a new Json that is save to text_json
import React from 'react';
import DataHandler from '../../UtilityClasses/Datakeeper';
import jsonUtility from '../../UtilityClasses/TextjsonUtility';
import "./MainDisplay.css"
export default class DisplayReport extends React.Component{

    constructor(props){
        super(props);
        this.state={
            answerArray:DataHandler.getInstance().getAnswerArray()

        }
    }

    componentDidMount(){

    }

    //makes a report based on the answer array held in DataHandler
    makeAReport=()=>{
        
    }

    

    handleButtonClick(){}

    render(){
    return (
        <div className='display_container'>
            
        </div>

    )}

}