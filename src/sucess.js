import React from 'react';
import './style/sucess.css'
import Video from './assets/successfully-send.mp4'
function Sucess () {
    return (
        <div className="page">
            <div className='mainSuccess'>
            <video src={Video} autoplay="autoplay">
            </video>
            <div className='message-success'>
            <h1>Mensagem enviada com sucesso! </h1>

            </div>
            </div>
        </div>
    )
}
export default Sucess;