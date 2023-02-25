
import React from 'react';
import "./SE.css"


export default class StartView extends React.Component{

    clickedArray=[];//array of questions clicked and nro of question the user was on. save into localStorage

    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        
    }

    handleStartClick=()=>{
        this.props.goToQuestionare()
    }




    render(){
    return (
        <div className='startViewContainer'>
            <button className='startQuestionareButton' onClick={this.handleStartClick}>Start questioanre</button>
           
        </div>

    )}

}