//React class used to show interactive elements in the help display
// react class used to show text only data to user

//The idea will be able to create a new Json that is save to text_json
import React from 'react';
import jsonUtility from '../../UtilityClasses/TextjsonUtility';
import DataHandler from '../../UtilityClasses/Datakeeper';
import DisplayInteractiveQelement from './DisplayInteractiveQelement';
import "./MainDisplay.css"
export default class DisplayInteractive extends React.Component{

    constructor(props){
        super(props);
        this.state={
            copyJson:jsonUtility.getInstance().getJsonData(),
            questionareElementArray:[],
            testNro:4,
            currentNumberOfQuestions:8
        }
        this.makeQuestionareElement=this.makeQuestionareElement.bind(this)
        this.addQuestionare=this.addQuestionare.bind(this)
        this.handleButtonClick=this.handleButtonClick.bind(this)
    }

    componentDidMount(){
        this.test_makeQuestionares()
    }

    test_makeQuestionares(){
        var proxyArray=[]
        for(var i=0;i<8;i++){
            this.addQuestionare(i, proxyArray)
        }
    }

    addQuestionare(index, proxyArray){
        
        //proxyArray=this.state.questionareElementArray
        proxyArray.push(<DisplayInteractiveQelement key={index} qNro={index} removeThis={this.removeQuestionare}/>)
        console.log(proxyArray)
        this.setState({questionareElementArray:proxyArray})
    }

    //used to remove the question from the Json. 
    //NOTE! Has to change indexes from the given index on
    //IDEA! Maybe add a function to the element that updates it's index while leaving the key intact
    removeQuestionare(e){}

    /* Example of removal from array
    removePeople(e) {
    this.setState({people: this.state.people.filter(function(person) { 
        return person !== e.target.value 
    })});
} */


    //makes the part of the form that allows the change of questionare questions and
    //remove and add them
    //has to be dynamic!!
    makeQuestionareElement(){

    }

    

    handleButtonClick(e){
        e.preventDefault()
        this.setState({testNro:this.state.testNro+1})
        this.test_makeQuestionares()
    }

    //save new json as the defacto json, NOTE! should be salted
    saveNewJson(){
        var jsonPorxy=this.state.copyJson

    }

    

    render(){
    return (
        <div className='display_container'>
            <form className='interactive_form'>
                <div>
                <label className='interactiveElement'>Change welcome text</label>
                    <input type={"text"}></input>
                <label className='interactiveElement'>Change button text</label>
                    <input type={"text"}></input>
                <label className='interactiveElement'>change ending text</label>
                    <input type={"text"}></input>
                </div>
                <button onClick={this.handleButtonClick}>test</button>
                <div className='changeQCont'>
                    <h2>tet {this.state.testNro}</h2>
                    {this.state.questionareElementArray}

                </div>
                <button type='submit'>Submit all</button>
            </form>
        </div>

    )}

}

/*
[{
    "name":"apptexts",
    "number_of_questions":8,
    "main_texts":{
        "welcome_text":"Tervetuloa käyttämään appia",
        "button_simple_text":"Arviolta %d pistettä",
        "finish_text":"Loppupistemäärä: "
    },
    "other_text":{
        "error_text":"Unkown error has occurred",
        "app-eplanation_text":"Tätä aplikaatiota käytetään potilaan tilan arvioimiseen. Vastaan potilan tilasta kysymyksiin"
    },
    "questionare_texts":[
        {
            "index":1,
            "question":"Kysymys numero 1",
            "help_text":"Tämä kysymys referoi kysymyksessä 1 mainittuu potilastilaan",
            "url_to_guide":"https://'kysymysnumero1URL'.com",
            "values":[0,1,2,3,4,5]
        },
        {
            "index":2,
            "question":"Kysymys numero 2",
            "help_text":"Tämä kysymys referoi kysymyksessä 2 mainittuu potilastilaan",
            "url_to_guide":"https://'kysymysnumero2URL'.com",
            "values":[2,4,6,8,10,12]
        },
        {
            "index":3,
            "question":"Kysymys numero 3",
            "help_text":"Tämä kysymys referoi kysymyksessä 3 mainittuu potilastilaan",
            "url_to_guide":"https://'kysymysnumero3URL'.com",
            "values":[0,1,2,3,4,5]
        },
        {
            "index":4,
            "question":"Kysymys numero 4",
            "help_text":"Tämä kysymys referoi kysymyksessä 4 mainittuu potilastilaan",
            "url_to_guide":"https://'kysymysnumero4URL'.com",
            "values":[0,1,2,3,4,5]
        },
        {
            "index":5,
            "question":"Kysymys numero 5",
            "help_text":"Tämä kysymys referoi kysymyksessä 5 mainittuu potilastilaan",
            "url_to_guide":"https://'kysymysnumero5URL'.com",
            "values":[0,1,2,3,4,5]
        },
        {
            "index":6,
            "question":"Kysymys numero 6",
            "help_text":"Tämä kysymys referoi kysymyksessä 6 mainittuu potilastilaan",
            "url_to_guide":"https://'kysymysnumero6URL'.com",
            "values":[0,1,2,3,4,5]
        },
        {
            "index":7 ,
            "question":"Kysymys numero 7",
            "help_text":"Tämä kysymys referoi kysymyksessä 7 mainittuu potilastilaan",
            "url_to_guide":"https://'kysymysnumero7URL'.com",
            "values":[0,1,2,3,4,5]
        },
        {
            "index":8,
            "question":"Kysymys numero 8",
            "help_text":"Tämä kysymys referoi kysymyksessä 8 mainittuu potilastilaan",
            "url_to_guide":"https://'kysymysnumero8URL'.com",
            "values":[0,1,2,3,4,5]
        }

    ]
    
    
}] */