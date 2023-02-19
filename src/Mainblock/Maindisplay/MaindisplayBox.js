//an info box, with also a possibility to have some other interactable data
import React from 'react';
import jsonUtility from '../../UtilityClasses/TextjsonUtility';

export default class MaindisplayBox extends React.Component{


    constructor(props){
        super(props);
        this.state={
            Innertype:"D",
            inner:"text"//this will most likely go to under components. Maybe add functional react? 

        }
    }

    componentDidMount(){
        this.createButtons()
    }

    getAppropriateData(){

    }

    handleButtonClick(){}

    render(){
    return (
        <div className='mainubuttoncontainer'>
            <div className='MainButtonHeader'>
                <h1>Testing header</h1>
            </div>
        </div>

    )}

}