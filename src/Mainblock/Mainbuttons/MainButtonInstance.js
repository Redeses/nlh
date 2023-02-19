
import React from 'react';
import jsonUtility from '../../UtilityClasses/TextjsonUtility';
import "./Mainbuttons.css"

//An instance of the buttons in hte main columns. Holds within the text of the button
export default class MainButtonInstance extends React.Component{


    constructor(props){
        super(props);
        this.state={
            index:this.props.buttonIndex
        }
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick=(e)=>{
        e.preventDefault()
        console.log("Handling click")
        jsonUtility.getInstance().test()
    }


    render(){
        return (
            <div className='MBI_cont'>
                <button className='MBI_button' onClick={this.handleClick}>button nro: {this.state.index}</button>
            </div>
        )}

}