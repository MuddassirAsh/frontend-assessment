import React, { useState, useEffect } from 'react';
import axios from 'axios';

const activties = 'https://aircall-job.herokuapp.com/activities'

const Main = () => {
    const [text, setText] = useState([])

    useEffect(() => { 
        axios.get(activties).then(response => {
            setText(response.data)
        })
    }, [])


    return(
        <React.Fragment> 
           {text.map(text =>  
           <div className='main-container'> 
                <p className='date'> <span>{new Date(text.created_at).toLocaleString('default',{month:'long'})} </span> 
                                     <span> {new Date(text.created_at).getDate()}, </span>
                                     <span> {new Date(text.created_at).getFullYear()} </span>
                </p>   
           <div className='airCall-data'>
                <i  style={ {color: (text.call_type == 'missed' ? 'red': 'bluesteel')}} className="fas fa-phone-volume icon"></i>
                <p style={ {color: (text.call_type == 'missed' ? 'red': 'bluesteel')}} className='caller'>{text.from} </p> 
                <p className='time'> {new Date(text.created_at).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")} </p>
                <div className='new-line'> </div>
                <p className='location'>tried to call on {text.via}</p>
            </div>
            </div>)}
        </React.Fragment>
        
    )
}

export default Main;
