import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react'
import rgbToHex from './rgbToHex'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  var tempRGB = rgb;
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])
  return (
    <article
      className={`color ${index >= 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'> <Icon icon="teenyicons:tick-circle-solid" color="green" /> {hexValue} copied to clipboard</p>}
    </article>
  )
}

export default SingleColor