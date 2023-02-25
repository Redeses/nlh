import jsonUtility from "./TextjsonUtility";

//holds current data shown or selected
//mostly used to skip the need for props in situation where the data is not needed, or not needed
//keeps a copy of answwers, anwers nro and of the ending form
export default class DataHandler {

    static myInstance = null;
    answersNro=0;
    answers=[8,[1,1],[2,4],[1,1],[4,4],[2,2],[1,1],[3,7],[2,3]];
    currentForm="";
    currentHelpText=""

    //proxytext is used to tet the display elements tet change
    proxyTextArray=[["A proxy text used to test the display element"],
    ["this lines really mean nothing and most likely later on will"],
    ["be made so that a long form text is cut by the program in"],
    ["to suitably small pieces. However it is important to remember"],
    ["that the text might be quite long, so a scrolling method might "],
    ["have to be included. Lets see if we can make this long enough"],
    ["with a variety of lenght of sentences to test"],
    ["if the display"],
    ["works like it should, in most circumnstances. Remember that this is meant for"],
    ["mobile"]]

    
        


    /**
     * @returns {DataHandler}
     */
    static getInstance() {
        if (DataHandler.myInstance == null) {
            DataHandler.myInstance = new DataHandler();
            
        }

        return this.myInstance;
    }

    saveAnswerArray(arraySaveable){
        this.answers=arraySaveable
    }
    
    getAnswerArray(){
        return this.answers
    }

    currentQNumber(qNumber){
        this.answersNro=qNumber
        console.log("at number: "+ qNumber)
    }

    getCurrentQNumber(){
        return this.answersNro
    }

    getProxyText(){
        var string=""
        this.proxyTextArray.forEach(element=>{
            string+=element
        })
        return string
    }


    getDataFromLocalStorage(){

    }

  

}