
//a class to keep a element in DisplayINteractive element that is used to add and remove questions from
// the json
import React from 'react';
import "./MainDisplay.css"
export default class DisplayInteractiveQelement extends React.Component{

    constructor(props){
        super(props);
        this.state={
            inxed:this.props.qNro-1,
            helpText:[],
            url:"",
            values:[]
        }

    }

    componentDidMount(){
    }

    
    changePropIndex(){}

    //for now only testing purposes, but in future the text are gotten in a separate way, or by proxyClass
    makeJsonElementFromData(){}


    /*"index":1,
            "question":"Kysymys numero 1",
            "help_text":"Tämä kysymys referoi kysymyksessä 1 mainittuu potilastilaan",
            "url_to_guide":"https://'kysymysnumero1URL'.com",
            "values":[0,1,2,3,4,5] */
    

    render(){
    return (
        <div className='question_change_container'>
            
                <div className='question_change'>
                <label className='interactiveElement'>Change question NRO: {this.props.qNro} Text</label>
                    <input className='interactiveElement' type={"text"}></input>
                <label className='interactiveElement'>Change help text</label>
                    <input className='interactiveElement' type={"text"}></input>
                <label className='interactiveElement'>Change Url </label>
                    <input className='interactiveElement' type={"text"}></input>
                </div>
                <div className='change_question_values'>
                    <h4>Values given: {this.state.values}</h4>
                    <input className='interactiveElement' type={"number"}></input>
                    <button  className='add_value_interactive interactiveElement'>Add value</button>
                    <button className='clear_values_interactive interactiveElement'>Clear value</button>
                </div>
            
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