//Importo react desde su dependencia que instale
import React from 'react';

//Importo la imagen de MYtinerary para embeberla en la cabecera 
import MYtinerary from '../img/MYtinerary.png';
import '../estilos/estilo.css';
import Nav from './Nav';

class Header extends React.Component {
    render() {
        return (
            //Utilizo JSX para armar la interfaz de usuario del componente header

            <div>
                <Nav />
                <img src={MYtinerary} alt='Imagen header' className="App-title" />
            </div>
        );
    }
}
export default Header;