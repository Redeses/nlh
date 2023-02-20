import logo from './logo.svg';
import './App.css';
import React from 'react';
import MainButtonContainer from './Mainblock/Mainbuttons/MainButtonContainer';
import MaindisplayBox from './Mainblock/Maindisplay/MaindisplayBox';

class App extends React.Component {
  dataArray=[];
  constructor(props){
      super();
      this.state={
        dInteractive:false,
        dText:false
      };
      
  }

  showDisplay=(e)=>{
    e.preventDefault();
    if(e.params[0]==="interactive"){
      this.setState({dInteractive:true, dText:false})
    }else if(e.params[0]==="text"){
      this.setState({dInteractive:false, dText:true})
    }else{
      
      this.setState({dInteractive:false, dText:false})
    }
  }

  render()
{  return (
    <div className="App">
      <MaindisplayBox/>
      <MainButtonContainer/>
    </div>
  );
}}

export default App;
