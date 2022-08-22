import * as C from "./styles.js"

export function Screen({children}) {
  return (
    <C.Container className="screen">
       <C.Header>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </C.Header>
      <div className="line"></div>
      <C.Content className="content">
        {children}
      </C.Content>
    </C.Container>
  )
}