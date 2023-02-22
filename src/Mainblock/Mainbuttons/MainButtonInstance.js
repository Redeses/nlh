
import React from 'react';
import jsonUtility from '../../UtilityClasses/TextjsonUtility';
import "./Mainbuttons.css"

//An instance of the buttons in hte main columns. Holds within the text of the button
export default class MainButtonInstance extends React.Component{


    constructor(props){
        super(props);
        this.state={
            index:this.props.buttonIndex,
            values:jsonUtility.getInstance().getButtonValues(this.props.buttonIndex)
        }
        this.handleClick=this.handleClick.bind(this)
    }

    componentDidUpdate(){
        console.log(this.props.QNro)
    }

    handleClick=(e)=>{
        e.preventDefault()
        
        console.log(this.props.QNro)
        console.log(jsonUtility.getInstance().getSpecificRow(this.props.QNro));
    }


    render(){
        return (
            <div className='MBI_cont'>
                <button className='MBI_button' onClick={this.handleClick}>button value: {this.state.values[this.props.QNro]}</button>
            </div>
        )}

}