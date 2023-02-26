import React from 'react';
import './Footer.scss'

const Footer = () => {
  return(
    <footer>
      <div className='links-de-servico'>
          <div>
          <a href="#"><p>Contato</p></a>
          <a href=""><p>Termos de Serviço</p></a>
          </div>          

        </div>
        <div className='links-de-gerenciamento'>
          <div>
             <a href="#"><p>Política de privacidade</p></a> 
              <a href="#"><p>Cancelamento, troca e reembolso</p></a>
          </div>

          <div>
          <p>Newslatter</p>
              <input placeholder='Digite seu melhor email' className='input'  type="text" />
              <button className='button' >Inscrever</button>
          </div>
      </div>
          
          <div className='inscrever'>
              
          </div>
        <hr />
        
       <div id="imagens">
          <div id='redes-sociais'>
              <a href="#"><img  src='../src/assets/Instagram.png '/></a>
              <a href="#"><img  src='../src/assets/Facebook.png '/></a>
          </div>
          <div id='pagamentos'>
             <a href="#"><img  src='../src/assets/MastercardM.png '/></a>
             <a href="#"><img  src='../src/assets/PayPalP.png '/></a>
             <a href="#"><img  src='../src/assets/Visa.png '/></a>
        </div>
          
      </div>
      
    </footer>      
  )
}
export default Footer