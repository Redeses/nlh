//an info box, with also a possibility to have some other interactable data
import React from 'react';
import "./Utility.css"
import HelpButton from './HelpButton';
import ExtraButton from './ExtraButton';

//used the keep extra buttons. Will most likely made into an openable popup menu later on
export default class UtlityButtonContainer extends React.Component{


    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
    }

   

    render(){
    return (
        
        <div className='UtilityContainer'>
            <HelpButton showDisplay={this.props.showDisplay}/>
            <ExtraButton showDisplay={this.props.showDisplay}/>
        </div>

    )}

}