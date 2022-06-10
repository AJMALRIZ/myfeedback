import { FaTimes} from 'react-icons/fa'
import { useState } from "react"
import PropTypes from 'prop-types'
import Card from "./shared/Card"
import React from 'react'

function Feedbackitems({item, handleDelete}) {
  return (
    <>
 
    <Card>
       <div className="num-display">{item.rating}</div> 
       <button onClick={() => handleDelete(item.id)} className='close'>
         <FaTimes color="purple" /></button>
        <div className="text-display">{item.text}</div> 
        
    </Card>
    </>
  )
}
Feedbackitems.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Feedbackitems