import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Dashboard.css";
import "./form.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillSendFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { RiSmartphoneLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"

function App() {
  let navigate = useNavigate();
  const regexName = /^[a-z ,.'-]+$/i;
  const regexCompany = /^[a-z ,.'-]+$/i;
  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  const [isName, setIsName] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isPhone, setIsPhone] = useState("");
  const [isNameEmpresa, setIsNameEmpresa] = useState("");
  const [isMessage, setIsMessage] = useState("");

  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isEmpresaValid, setIsEmpresaValid] = useState(false);
  const [isValidMessage, setIsMessageValid] = useState(false)
  
  function validaEmail (event) {
    setIsEmail(event.target.value);
    let color = document.getElementById('label-email');
    if (regexEmail.test(isEmail)) {
      color.style = "color: purple"
      setIsEmailValid(true)
    } else {
      setIsEmailValid(false)
      color.style = "color: red"
    }
  }
  function validaNome(event) {
    setIsName(event.target.value);
  console.log(isNameValid)
  const textColor = document.getElementById('label-name');
    if (regexName.test(isName)) {
      textColor.style = "color: purple"
      setIsNameValid(true)
    } else {
      setIsNameValid(false)
      textColor.style = "color: red"
    }
  }

  function validaEmpresa(event) {
    setIsNameEmpresa(event.target.value);
    const textColor = document.getElementById('label-company');
    if (regexCompany.test(isNameEmpresa)) {
      textColor.style = "color: purple"
      setIsEmpresaValid(true)
    } else {
      setIsEmpresaValid(false)
      textColor.style = "color: red"
    }
  }

  function validaTelefone(event) {
    setIsPhone(event.target.value);
    const textColor = document.getElementById('label-phone');
    if (isPhone.length >= 14) {
      textColor.style = "color: purple"
      setIsPhoneValid(true)
    } else {
      setIsPhoneValid(false)
      textColor.style = "color: red"
    }
  }

  function validaMessagem (event) {
    setIsMessage(event.target.value);
    const textColor = document.getElementById('label-message');
    if(isMessage.length > 20) {
      setIsMessageValid(true)
      textColor.style = "color: purple"
    } else {
      setIsMessageValid(false)
      textColor.style = "color: red"
    }
  }

  function validaButton () {
    if(isEmailValid && isEmpresaValid && isNameValid && isValidMessage && isPhoneValid) {
      return false 
    } else {
      return true;
    }
  }
  function submitForm(event) {
    event.preventDefault();
    navigate("/success");
    console.log('clicou')
  }

  const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }
  return (
    <div className="App" id="App">
      <main>
        <form className="form" onSubmit={submitForm}>
          <h1>
            Envie-nos uma mensagem!
            <span>
              <HiOutlineMail size={40} />
            </span>
          </h1>
          <div className="form_inputs">
            <label id="label-name">
              Nome completo
              <input
                type="text"
                name="name"
                placeholder="Digite seu nome"
                value={isName}
                onChange={validaNome}
              />
            </label>

            <label id="label-email">
              Endereço de E-mail
              <input
                type="email" 
                name="email"
                value={isEmail}
                onChange={validaEmail} 
                placeholder="@email" />
            </label>

            <label id="label-phone">
              Telefone
              <input 
               type="text" 
               name="phone" 
               value={isPhone}
               onChange={validaTelefone}
               onKeyUp={handlePhone}
               placeholder="(99) 9999-9999" />
            </label>

            <label id="label-company">
              Nome da empresa
              <input
                type="text"
                name="company"
                value={isNameEmpresa}
                onChange={validaEmpresa}
                placeholder="Digite o nome da empresa"
              />
            </label>

            <label id="label-message">
              Mensagem
              <input
                type="text"
                name="message"
                value={isMessage}
                onChange={validaMessagem}
                placeholder="Digite sua mensagem"
              />
            </label>
          </div>
          <button type="submit" disabled={validaButton()}>
           Enviar <BsFillSendFill size={20} className="sendIcon"/>
          </button>
        </form>
        <div className="contact">
          <h1>Informações de contato</h1>
          <div className="contact-info">
            <div>
              <div  className="info"> 
                <ImLocation2 size={30} className="icon-info" />
              </div>
              <div  className="info">
                <p>Rua Fernando Machado</p>
                <p>Centro, chapecó -Sc</p>
                <p>39538-000</p>
              </div>
            </div>
            <div>
              <div className="info">
                <RiSmartphoneLine size={30} className="icon-info" />
              </div>
                <div className="info">
                  <p id="line"> .</p>
                  <p>WhatsApp (38) 99735-2319</p>
                  <p id="line">. </p>
                </div>
            </div>
          </div>
          <div className="contact-socials">
          <a href="#"> <FaFacebookF size={40} className="socials-icon" /></a>
          <a href="#"><FaTwitter size={40} className="socials-icon" /></a>
          <a href="https://www.linkedin.com/in/emanuel-hitallo-06690a16b/" target="black_"><FaLinkedinIn size={40} className="socials-icon" /></a>
          

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
