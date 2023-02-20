import jsonUtility from "./TextjsonUtility";

//holds current data shown or selected
//mostly used to skip the need for props in situation where the data is not needed, or not needed
//keeps a copy of answwers, anwers nro and of the ending form
export default class DataHandler {

    static myInstance = null;
    answersNro=0;
    answers=[];
    currentForm="";

    //proxytext is used to tet the display elements tet change
    proxyTextArray=[["A proxy"],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""]]
        


    /**
     * @returns {DataHandler}
     */
    static getInstance() {
        if (DataHandler.myInstance == null) {
            DataHandler.myInstance = new DataHandler();
            
        }

        return this.myInstance;
    }

    getProxyText(){}

  

}