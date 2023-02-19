
import React from 'react';


//An instance of the buttons in hte main columns. Holds within the text of the button
export default class MainButtonInstance extends React.Component{


    constructor(props){
        super(props);
        this.state={
            index:this.props.buttonIndex
        }
    }


    return (){
        <div className='MBI_cont'>
            <button className='MBI_button'>button nro: {this.state.index}</button>
        </div>
    }

}