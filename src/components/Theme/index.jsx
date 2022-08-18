import { Header } from "../Header"
import { Footer } from "../Footer"
import * as C from "./styles"

export function Theme({children}) {
  return (
    <C.Container>
      <Header/>
      {children}
      <Footer/>
    </C.Container>
  )
}