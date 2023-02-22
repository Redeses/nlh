// react class used to show text only data to user
import React from 'react';
import jsonUtility from '../../UtilityClasses/TextjsonUtility';
import DataHandler from '../../UtilityClasses/Datakeeper';
import "./MainDisplay.css"
//todo what is this React.cloneElement
export default class DisplayText extends React.Component{

    constructor(props){
        super(props);
        this.state={
            shortText:DataHandler.getInstance().getProxyText(),
            qNumber:0
        }
    }

    componentDidMount(){
        console.log(DataHandler.getInstance().getCurrentQNumber())
        this.setState({qNumber:DataHandler.getInstance().getCurrentQNumber()})
    }

    getAppropriateData(){

    }

    handleButtonClick(){}

    //<button className='closeButton' onClick={this.props.close}>close</button>
    render(){
    return (
        <div className='display_container'>
            <p className='displaytext'>{jsonUtility.getInstance().getHelpText(this.qNumber)}</p>
        </div>

    )}

}