# TooltipBasic Componente 
-tener react 



Ejemplo de uso:
```
   <Tooltipbasic
            action={()=><i  className="fa fa-info-circle" aria-hidden="true"></i>}//objeto que sera de accion
          >
             {/* componente que rederizara cunado se ejecute la accion */}
            <div className="tooltip_container">
               <div className="tooltip_details">
                     <span>Pesos</span> <span>$845,135 MXN</span>
               </div>
               <div className="tooltip_details">
               <span>Pesos</span> <span>$845,135 MXN</span>
               </div>
               <div className="tooltip_details">
               <span className="total">Total*</span> <span className="total">$1,028,908 MXN</span>
               </div>
               <span>Total apróximado basado en el tipo de cambio del dia</span>
            </div>
    </Tooltipbasic>
```

TooltipBasic // tiene que recibir 1 valor por defecto el action(el componente) que mostrara como triger para que salga la informacion escrita dentro del cuerpo del tooltip (en el ejemplo se muestra como action un icono far fa-info-circle) y lo que quiero mistrar esta en el cuerpo del TooltipBasic.