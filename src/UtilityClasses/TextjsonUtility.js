//used to modify JSON. Trigger saving in localStoragehandler
//
import data from "../app_texts.json"

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

    getSpecificRow(){
        return this.proxyData.questionare_text
    }

    getARowNumbers(){
        return this.proxyData.number_of_questions
    }
}