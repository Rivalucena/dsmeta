import icon from '../../assets/img/notificationicon.svg'

import '../styles.css'

function Notificationbutton() {
    return(
        <div className="dsmeta-red-btn">
        <img src={icon} alt="Notificar" />
      </div>
    )
  }
  
  export default Notificationbutton