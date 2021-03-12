import React from 'react'
import automotiva from './img/automotivamecanica.jpg'
import construcao from './img/construcaocivil.jpg'
import eletro from './img/eletroeletronica.jpg'

function HomePage(){
    return(
        <div>
         <div>
        <img src={automotiva}/>
        <p>Automotiva Mecanica - Gratuito - 14 Horas</p>
             </div>           


        <div>
        <img src={construcao}/>
        <p>Construção Civil - Gratuito - 20 Horas</p>
        </div>

        <div>

        <img src={eletro}/>
        <p>Eletro Eletronica - 6 parcelas de R$250,00 - 120horas</p>
        </div>


        </div>
    );
}

export default HomePage