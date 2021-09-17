import React from 'react'

const Header = ({title, subtitle}) => {
    return (
        <div>
            <p className="p1">
                {title}
            </p>
        
            <p className="pmore">
            {subtitle} 
            </p>
        </div>
    )
}

export default Header
