
import React from 'react';



export default class EndView extends React.Component{

    clickedArray=[];//array of questions clicked and nro of question the user was on. save into localStorage

    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
    }

    //displayhandler for making a report
    handleReport=(e,params)=>{
        e.preventDefault()
        this.props.showDisplay(e, params)
    }


    //restarts the whole quiz
    reDO(){}

    //most likely will use display element
    checkResultHandler=(e, params)=>{
        e.preventDefault()
        this.props.showDisplay(e, params)
    }

    //to this there mus be made its own utility.js that allows the sharing of the data with pre-defined path
    shareHandler(){}

//showDisplay={this.props.showDisplay}
    render(){
    return (
        <div className='endViewContainer'>
            <div className='scoreBoard'>

            </div>
            <div className='extraOptions'>
                <div className='firstRow extraRow'>
                <button className='reportButton extraButton' onClick={event=>this.handleReport(event,["report"])}>Report button</button>
                <button className='checkResultButton extraButton' onClick={event=>this.checkResultHandler(event,["check"])}>Check button</button>
                </div>
                <div className='secondRow extraRow'>
                <button className='shareButton extraButton' onClick={this.shareHandler}>Share</button>
                <button className='mysteryButton extraButton'>??</button>
                </div>
            </div>
            <button className='reDoQButton' onClick={this.reDO}></button>
           
        </div>

    )}

}