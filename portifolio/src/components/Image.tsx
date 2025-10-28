import React from "react"
import '../css/Image.css'

type BoxProps = {
children: React.ReactNode;
}


const Image  = ({children}: BoxProps) =>{
    return(
        <div className='descBox'>
            {children}
        </div>

    )}

export default Image