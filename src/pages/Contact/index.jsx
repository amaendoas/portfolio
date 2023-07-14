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
import { Alert } from "../../components/Alert"
import { useEffect } from "react"
import ClipLoader from "react-spinners/ClipLoader";

export function Contact() {
  const { t } = useTranslation()
  const form = useRef();
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [alertText, setAlertText] = useState("")
  const [alertSuccess, setAlertSuccess] = useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const [disabledField, setDisabledField] = useState(false)

  function showAlert(text, success = false) {
    setAlertText(text)
    setAlertSuccess(success)
  }

  function resetFormFields(e) {
    setName('')
    setEmail('')
    setMessage('')
    e.target.reset()
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if(!name | !email | !message) {
      console.log(name)
      showAlert(t("contactAlertMissing"))
    }
    else {
      setShowLoading(true)
      setDisabledField(true)
      emailjs.sendForm('hotmailMessage', 'template_bjr3fv4', form.current, 'h-qEmow01mE_v9yMg')
        .then((result) => {
          setShowLoading(false)
          resetFormFields(e)
          showAlert(t("contactAlertSuccess"), true)
        }, (error) => {
          setShowLoading(false)
          showAlert(t("contactAlertError"))
        })
        .finally(() => {
          setDisabledField(false)
        })
    }

  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertText('')
    }, 4000)

    return () => clearTimeout(timer)
  }, [alertText])
  
  return (
    <Theme>
    <C.Container>
      {
        alertText && <Alert text={alertText} isSuccess={alertSuccess} onClick={() => setAlertText("")}/>
      }
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
            disabled={disabledField}
            />
            <input
            type="email"
            placeholder={t("contactEmail")}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            disabled={disabledField}
            />
            <textarea
            name="message"
            id="message"
            cols="30"
            rows="10" placeholder={t("contactMessage")}
            onChange={(e) => setMessage(e.target.value)}
            disabled={disabledField}
            ></textarea>
            {
              showLoading
              ?
              <Button title={t("sending")} className="sending" disabled>
                <ClipLoader color={({theme}) => theme.COLORS.TEXT} size={20}/>
              </Button>
              : <Button icon={send} title={t("contactSend")} onCLick={sendEmail}/>
            }
          </C.Form>
        </Screen>
      </C.Content>
    </C.Container>
    </Theme>
  )
}