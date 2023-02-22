import logo from './logo.svg';
import './App.css';
import React from 'react';
import MainButtonContainer from './Mainblock/Mainbuttons/MainButtonContainer';
import MaindisplayBox from './Mainblock/Maindisplay/MaindisplayBox';
import UtlityButtonContainer from './UtilityButtons/UtilitybuttonContainer';
import DataHandler from './UtilityClasses/Datakeeper';

class App extends React.Component {
  dataArray=[];
  constructor(props){
      super();
      this.state={
        dInteractive:false,
        dText:false
      };
      
  }
  componentDidMount(){

  }

  showDisplay=(e, params)=>{
    e.preventDefault();
    if(params[0]==="interactive" && (!this.state.dInteractive)){
      
    console.log("swithcing interactive")
      this.setState({dInteractive:true, dText:false})
    }else if(params[0]==="text"  && (!this.state.dText)){
      console.log("swithcing text")
      this.setState({dInteractive:false, dText:true})
    }else{
      console.log("swithcing Off")
      
      this.setState({dInteractive:false, dText:false})
    }
  }

  //gets data if any to datakeeper from local storage
  getDataToDatakeeper(){

  }

  render()
{  return (
    <div className="App">
    <UtlityButtonContainer showDisplay={this.showDisplay}/>
      <MaindisplayBox showDisplay={this.showDisplay} openInteractivePopup={this.state.dInteractive} openTextPopup={this.state.dText}/>
      <MainButtonContainer/>
    </div>
  );
}}

export default App;
