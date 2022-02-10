import React, { useState, useEffect } from 'react'
import SingleColor from './SingleColor'
import logo from "./logo2.png"
import Values from 'values.js'
import {Div} from "./StyledComponents";

export const ShowColors = ()=> {
    var randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  const [color, setColor] = useState(randomColor)
  const [error, setError] = useState(false)
  const [frequency, setFrequency] = useState(10);
  const [list, setList] = useState(new Values(randomColor).all(frequency))

  const handleSubmit = () => {
     
      let colors = new Values(color).all(frequency)
      console.log(colors);
      setList(colors)
  }
  function freq(val)
  {
    setFrequency(val+0);
    console.log(val, frequency);
  }

  useEffect(()=>{

    // setFrequency(frequency);
    handleSubmit();
    
  }, [frequency])

  return (
    <Div>
      <div className='container'>
        <img src={logo} width="200px" />
        <input type='number' value={frequency} onChange={(e) => {
          freq(+e.target.value)
          }} className="frequency" />
        <form onSubmit={(e)=>{
          e.preventDefault()
          handleSubmit()
        }}>
          <input type='text' value={color} onChange={(e) => {setColor(e.target.value)}} placeholder='#94002c' className={`${error ? 'error' : null}`} />
          <button className='btn' type='submit'> submit </button>
        </form>
      </div>
      <div className='colors'>
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
        })}
      </div>
    </Div>
  )
}
