//used to modify JSON. Trigger saving in localStoragehandler
//used also to get data from the json
import data from "../app_texts.json"
import DataHandler from "./Datakeeper";

export default class jsonUtility{
    static myInstance = null;
    

    proxyData=data;

    /**
     * @returns {jsonUtility}
     */
    static getInstance() {
        if (jsonUtility.myInstance == null) {
            jsonUtility.myInstance = new jsonUtility();
            
        }

        return this.myInstance;
    }

    test(){
        console.log(data)
    }

    getSpecificRow(qNro){
        var questionareRow=data[0].questionare_texts.find(function(item, i){
           
            if(item.index=== qNro+1){
              return item;
            }
          });
        return questionareRow
    }


    
    getValueForAnswer(questionNumber,buttonIndex){

    }

    getARowNumbers(){
        return data[0].number_of_questions
    }

    getHelpText(){
        var qNro=DataHandler.getInstance().getCurrentQNumber()
        //console.log(qNro)
        //console.log(this.getSpecificRow(qNro))
        return this.getSpecificRow(qNro).help_text
    }

    getQuestionHeader(){
        var qNro=DataHandler.getInstance().getCurrentQNumber()
        //console.log(qNro)
        //console.log(this.getSpecificRow(qNro))
        return this.getSpecificRow(qNro).question
    }

    //gets an array of buttons values at the beginnings
    getButtonValues(buttonNumber){
        var proxyArray=[]
        data[0].questionare_texts.forEach(element=>{
            proxyArray.push(element.values[buttonNumber])
        })
        console.log(proxyArray)
        return proxyArray
    }

    //allows the changing on json data based on the admin view
    //gets a ready made json
    saveJsonData(){
        
    }

    getJsonData(){
        return this.proxyData
    }


}