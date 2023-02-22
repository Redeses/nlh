//an info box, with also a possibility to have some other interactable data
import React from 'react';
import "./Utility.css"


//used the keep extra buttons. Will most likely made into an openable popup menu later on
export default class ExtraButton extends React.Component{


    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
    }

   

    render(){
    return (
        
        <div className='ExtraButtonContainer'>
            <button className='ExtraButton' onClick={event=>this.props.showDisplay(event,["interactive"])}>EXTRA</button>
        </div>

    )}

}