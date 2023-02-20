//an info box, with also a possibility to have some other interactable data
import React from 'react';
import jsonUtility from '../../UtilityClasses/TextjsonUtility';
import "./MainDisplay.css"
import Popup from 'reactjs-popup';
import DisplayInteractive from './DisplayInteractive';
import DisplayText from './DisplayText';


//The boxes are opened by clicking other buttons like ExtraButton and HelpButton
export default class MaindisplayBox extends React.Component{


    constructor(props){
        super(props);
        this.state={
            Innertype:"D",
            inner:"text"//this will most likely go to under components. Maybe add functional react? 

        }
    }

    componentDidMount(){
    }

    getAppropriateData(){

    }

    handleButtonClick(){}

    render(){
    return (
        
        <div className='maindisplayContainer'>
            <Popup  open={this.props.openInteractivePopup} position="center center">
                    {close =>(<DisplayInteractive closed={close}/>)}
                    
            </Popup>

            <Popup  pen={this.props.openTextPopup}  position="center center">
                {close =>(<DisplayText closed={close} buttons={this.props.buttons} addToButtons={this.props.addToButtons} neutral={this.props.neutra}/>)}
                    
            </Popup>
        
        </div>

    )}

}