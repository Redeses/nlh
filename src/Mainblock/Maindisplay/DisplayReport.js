//element used to show report of the answers
import React from 'react';
import DataHandler from '../../UtilityClasses/Datakeeper';
import jsonUtility from '../../UtilityClasses/TextjsonUtility';
import "./MainDisplay.css"
export default class DisplayReport extends React.Component{

    constructor(props){
        super(props);
        this.state={
            answerArray:DataHandler.getInstance().getAnswerArray(),
            reportArray:[]

        }
    }

    componentDidMount(){
        this.makeAReport()
    }

    //makes a report based on the answer array held in DataHandler
    makeAReport=()=>{
        var proxyArray=[]
        var x=1;
        this.state.answerArray.forEach(element => {
            if(element.length>1){
                proxyArray.push(<div className='reportElement'>
                    <h2 className='reportEleText'>For question {x}: answered = {element[0]}: which equalled {element[1]} points </h2>
                </div>)
                x++;
            }
            
        });
        this.setState({reportArray:proxyArray})
    }

    

    handleButtonClick(){}

    render(){
    return (
        <div className='display_container'>
            {this.state.reportArray}
        </div>

    )}

}