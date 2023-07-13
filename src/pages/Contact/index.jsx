import * as C from "./styles"
import { Theme } from "../../components/Theme"
import {Title} from "../../components/Title"
import { Screen } from "../../components/Screen"
import { Button } from "../../components/Button"
import send from "../../assets/send.svg"
import clouds from "../../assets/3-clouds.svg"
import balloon from "../../assets/say-hi.svg"
import React, { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import { useTranslation } from "react-i18next"

export function Contact() {
  const { t } = useTranslation()
  const form = useRef();
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  const sendEmail = (e) => {
    e.preventDefault();
    if(!name | !email | !message) {
      alert(t("contactAlertMissing"))
    }
    else {
      emailjs.sendForm('hotmailMessage', 'template_bjr3fv4', form.current, 'h-qEmow01mE_v9yMg')
        .then((result) => {
            alert(t("contactAlertSuccess"))
        }, (error) => {
            alert(t("contactAlertError"))
        });
        e.target.reset();
    }

  };
  return (
    <Theme>
    <C.Container>
      <Title title={t("titleContact")}/>
      <C.Content>
        <Screen>
          <img src={clouds} alt="clouds" className="clouds"/>
          <img src={balloon} alt="balloon" className="balloon"/>
          <C.Form ref={form} onSubmit={sendEmail}>
            <input
            type="text"
            placeholder={t("contactName")}
            name="name"
            onChange={(e) => setName(e.target.value)}
            />
            <input
            type="email"
            placeholder={t("contactEmail")}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
            name="message"
            id="message"
            cols="30"
            rows="10" placeholder={t("contactMessage")}
            onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <Button icon={send} title={t("contactSend")} onCLick={sendEmail}/>
          </C.Form>
        </Screen>
      </C.Content>
    </C.Container>
    </Theme>
  )
}