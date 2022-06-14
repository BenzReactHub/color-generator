import React, { useState, useEffect } from 'react'

const SingleColor = ({ color: { rgb, weight, hex }, index }) => {
    const bcg = rgb.join(',')
    const [alert, setAlert] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(`#${hex}`)
        setAlert(!alert)
    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 2000)
        return () => clearTimeout(timeout)
        // setTimeout(() => {
        //     setAlert(false)
        // }, 2000)
    })
    return (
        <article className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }} onClick={(e) => { handleClick(e) }}>
            <p className='percent-value'>{weight}%</p>
            <p>#{hex}</p>
            {alert ? <p className='alert'>已經複製</p> : null}
        </article >
    )
}

export default SingleColor