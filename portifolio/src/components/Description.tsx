import React from "react"
import '../css/Description.css'

type BoxProps = {
children: React.ReactNode;
}


const Description  = ({children}: BoxProps) =>{
    return(
        <div className='descBox'>
            {children}
        </div>

    )}

export default Description