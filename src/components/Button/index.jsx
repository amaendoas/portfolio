import * as C from "./styles"

export function Button({title, icon, children, className, disabled}) {
  return (
    <C.Container className={className} disabled={disabled}>
     {children}
     { icon && <img src={icon}/>}
     <p>
     {title}
     </p>
    </C.Container>
  )
}