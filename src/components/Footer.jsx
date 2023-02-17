import React from 'react';
import './Footer.scss'

const Footer = () => {
  return(
    <footer>
      <div className='links-de-servico'>
          <div>
          <p>Contato</p>
          <p>Termos de Serviço</p></div>
          
          <p>Newslatter</p>
        </div>
        <div className='links-de-gerenciamento'>
          <div>
              <p>Política de privacidade</p>
              <p>Cancelamento, troca e reembolso</p>
          </div>

          <div>
              <input placeholder='Digite seu melhor email' className='input'  type="text" />
              <button className='button' >Inscrever</button>
          </div>
      </div>
          
          <div className='inscrever'>
              
          </div>
        <hr />
        
       <div>
          <div id='redes-Sociais'>
              <img  src='../src/assets/Instagram.png '/>
              <img  src='../src/assets/Facebook.png '/>
          </div>
          <div id='pagamentos'>
          <img  src='../src/assets/MastercardM.png '/>
            <img  src='../src/assets/PayPalP.png '/>
            <img  src='../src/assets/Visa.png '/>
        </div>
          
      </div>
      
    </footer>      
  )
}
export default Footer