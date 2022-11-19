import icon from '../../assets/img/notificationicon.svg';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';

import './styles.css';

type Props = {
  saleId: number;
}

function handleClick(id :number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(response => {
    console.log("SUCESSO KARALHO")
  })
}

function Notificationbutton({saleId} : Props) {
    return(
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
        <img src={icon} alt="Notificar" />
      </div>
    )
  }
  
  export default Notificationbutton;