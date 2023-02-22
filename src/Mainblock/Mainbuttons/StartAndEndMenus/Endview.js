
import React from 'react';
import jsonUtility from '../../UtilityClasses/TextjsonUtility';


export default class EndView extends React.Component{

    clickedArray=[];//array of questions clicked and nro of question the user was on. save into localStorage

    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        this.createButtons()
    }




    render(){
    return (
        <div className='startviewcontainer'>
            
           
        </div>

    )}

}