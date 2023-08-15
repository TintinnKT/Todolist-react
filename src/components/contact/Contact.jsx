import React from 'react'
import './contact.css'

function Contact() {
  return (
    <>
    <div className="contact-con">
    <div className="contact">
        <h3 className="ct-h">Contact</h3>
        <img src="https://i.pinimg.com/564x/42/3e/93/423e934a1fc685a270072767f58ccc3f.jpg" className='picon'alt='profile' />
        <div className='username'>Tintinnkt</div>
        <div className='name'>Krittin Tragunejindarat </div>
        <div className="link">
        <img src="   https://cdn-icons-png.flaticon.com/512/2111/2111463.png " className='contacticon' onClick={()=>{ window.location.href = "https://www.instagram.com/tintinnkt/";}}/>
        <img src="https://cdn-icons-png.flaticon.com/512/2504/2504911.png " className='contacticon' onClick={()=>{ window.location.href = "https://github.com/TintinnKT";}}/>
            </div>
    </div>
    </div>
    </>
  )
}

export default Contact