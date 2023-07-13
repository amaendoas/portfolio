import { Header } from "../Header"
import { Footer } from "../Footer"
import * as C from "./styles"
import { SubHeader } from "../SubHeader"

export function Theme({children}) {
  return (
    <C.Container>
      <Header/>
      <SubHeader/>
      {children}
      <Footer/>
    </C.Container>
  )
}