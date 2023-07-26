import * as C from "./styles"

export function Button({title, icon, children, className, disabled, btnColor}) {
  return (
    <C.Container className={className} disabled={disabled} btnColor={btnColor}>
     {children}
     { icon && <img src={icon}/>}
     <p>
     {title}
     </p>
    </C.Container>
  )
}