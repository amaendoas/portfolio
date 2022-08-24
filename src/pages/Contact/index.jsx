import * as C from "./styles"
import { Theme } from "../../components/Theme"
import {Title} from "../../components/Title"
import { Screen } from "../../components/Screen"
import { Button } from "../../components/Button"
import send from "../../assets/send.svg"
import clouds from "../../assets/3-clouds.svg"
import balloon from "../../assets/say-hi.svg"
import React, { useRef } from "react"
import emailjs from '@emailjs/browser'

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('hotmailMessage', 'template_bjr3fv4', form.current, 'h-qEmow01mE_v9yMg')
      .then((result) => {
          alert('Obrigada pela mensagem! Em breve te respondo, fica de olho no e-mail!')
      }, (error) => {
          alert('Não foi possível enviar sua mensagem.')
      });
      e.target.reset();
  };
  return (
    <Theme>
    <C.Container>
      <Title title="Contact"/>
      <C.Content>
        <Screen>
          <img src={clouds} alt="clouds" className="clouds"/>
          <img src={balloon} alt="balloon" className="balloon"/>
          <C.Form ref={form} onSubmit={sendEmail}>
            <input
            type="text"
            placeholder="Name"
            name="name"
            />
            <input
            type="email"
            placeholder="E-mail"
            name="email"
            />
            <textarea
            name="message"
            id="message"
            cols="30"
            rows="10" placeholder="Message"></textarea>
            <Button icon={send} title="send" onCLick={sendEmail}/>
          </C.Form>
        </Screen>
      </C.Content>
    </C.Container>
    </Theme>
  )
}