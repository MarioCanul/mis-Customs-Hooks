import React, { useState, useRef } from "react";
import { shape } from "prop-types";
import "./tooltip.scss";

export const Tooltipbasic = ({
  action, //accion
  children, //contenido que se mostrara cuando se ejecute la accion
}) => {
  const Action = action; //componente que muestra el tooltip
  const [active, setActive] = useState(false); //para mostrar y cerrar el toottip
  const ref = useRef(null); //Rereferencia al tooltip
  const tooltip = useRef(null);
  const handleClick = () => {
     if (tooltip.current != null && ref.current != null) {
    //mostrar y posicionar el tooltip en el accion;
    let getBound = ref.current.getBoundingClientRect();
    let tool = tooltip.current;
    tool.style.top = getBound.y + getBound.height + 5 + "px";
    tool.style.left = getBound.x + getBound.width / 2 + "px";
    setActive(!active);      
     }
     console.log(active)
  };
  if(tooltip.current != null && active==true){
   window.addEventListener('scroll',()=>{
      if (active) {
         setActive(false);
      }
   })
  }
  const Icon = React.forwardRef((props, ref) => {
    return (
      <div className="tooltip_action" ref={ref} {...props}>
        <Action />
      </div>
    );
  });
  Icon.displayName = "Accion";
  return (
    <>
      <Icon ref={ref} onClick={handleClick} />
      <div className={`Tooltip-Tip ${active && "active"} `} onMouseLeave={handleClick} ref={tooltip}>
        {children}
      </div>
    </>
  );
};
Tooltipbasic.propTypes = {
  action: shape({}),
  children: shape({}),
};