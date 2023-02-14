import React from 'react';
import './Footer.scss'

const footer = () => {
  return(
    <footer>
      <p>Contato</p>
      <p>Termos de Serviço</p>
      <p>Política de privacidade</p>
      <p>Cancelamento, troca e reembolso</p>
    {/* ---------------------------------------------- */}
    <hr />

    <div className='divFooter'>
    <p>Newsletter</p>
      <input placeholder='Digite seu melhor email' className='input'  type="text" />
      <button className='button' >Inscrever</button>
    </div>
    
   <div id='IMG'>
   <img className='Img1' src='../src/assets/Instagram.png '/>
        <img className='Img2' src='../src/assets/Facebook.png '/>
  
  
       <img className='Img3' src='../src/assets/MastercardM.png '/>
       <img className='Img4' src='../src/assets/PayPalP.png '/>
       <img className='Img5' src='../src/assets/Visa.png '/>
   </div>
  
    </footer>      
  )
}
export default footer