//a class that includes current button presses into localstorage and
//also saves xml_with data there as well
//data saved are as follows: answers to questions this session, currentquestion, form situation if that far 

export default class localstorageHandler{
    static myInstance = null;
    

    /**
     * @returns {localstorageHandler}
     */
    static getInstance() {
        if (localstorageHandler.myInstance == null) {
            localstorageHandler.myInstance = new localstorageHandler();
            
        }

        return this.myInstance;
    }
}