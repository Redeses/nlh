//an info box, with also a possibility to have some other interactable data
import React from 'react';
import jsonUtility from '../../UtilityClasses/TextjsonUtility';
import "./MainDisplay.css"
import Popup from 'reactjs-popup';
import DisplayInteractive from './DisplayInteractive';
import DisplayText from './DisplayText';
import Proptypes from "prop-types"
import OutsideAlerter from './Popuohook';



//The boxes are opened by clicking other buttons like ExtraButton and HelpButton
 const MaindisplayBox =({showDisplay,openInteractivePopup,openTextPopup})=>{
    // trigger on component mount
    var bool1=React.useRef(false);
    React.useEffect(() => {
        //console.log(openInteractivePopup)
    }, [showDisplay,openInteractivePopup,openTextPopup]);


    /*
    var [showText, showInteractive] = React.useState(openInteractivePopup,openTextPopup);
    

    React.useEffect(() => {
      if (openInteractivePopup) {
        
      }
    }, [openInteractivePopup,openTextPopup]);
    */

    
    
    return (
        
        <div className='maindisplayContainer'>
            
            <Popup  open={openInteractivePopup} onClose={event=>showDisplay(event, "null")} modal position="center center">
                
                {close =>(<div><DisplayInteractive close={close}/>
            <button className='closeButton' onClick={close}>close</button></div>)}
                       
            </Popup>

            <Popup  open={openTextPopup} onOpen={console.log("opening")} onClose={event=>showDisplay(event, "null")} modal position="center center">
                {close =>(<div><DisplayText close={close}/>
            <button className='closeButton' onClick={close}>close</button></div>)}
            </Popup>
        
        </div>

    )
}



/*MaindisplayBox.propTypes = {
    children: Proptypes.element.isRequired
  };
*/
  export default MaindisplayBox