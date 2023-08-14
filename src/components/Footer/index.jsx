import * as C from "./styles"
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"
import { HiOutlineMail } from "react-icons/hi"
import { useState } from "react"



export function Footer() {
  return (
    <C.Container>
        <a href="https://github.com/amaendoas" target='_blank'>
        <span>&lsaquo;</span>
          <SiGithub className="showIcon" size={15}/>
          <p className="showName">github</p>
        <span>/&rsaquo;</span>
          </a>
        <a href="https://www.instagram.com/amaendoas" target='_blank'>
        <span>&lsaquo;</span>
          <SiInstagram className="showIcon" size={15}/>
          <p className="showName">instagram</p>
        <span>/&rsaquo;</span>
          </a>
        <a href="https://www.linkedin.com/in/amandaguerraa/" target='_blank'>
        <span>&lsaquo;</span>
          <SiLinkedin className="showIcon" size={15}/>
          <p className="showName">linkedin</p>
        <span>/&rsaquo;</span>
          </a>
        <a href="mailto:guerraamanda1@hotmail.com" target='_blank'>
        <span>&lsaquo;</span>
        <HiOutlineMail className="showIcon" size={20}/>
        <p className="showName">email</p>
          <span>/&rsaquo;</span>
          </a>
    </C.Container>
  )
}