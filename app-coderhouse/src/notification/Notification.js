import "./Notification.css"
import { useState, createContext } from 'react'


const Notification = ({ message, severity, classes }) => {

    const notificationCss  = {
        position: 'absolute',
        top: 100,
        right: 8,
        widht: 'auto',
        height: 'auto',
        padding: '10px 12px 10px 12px',
        color: "white",
        backgroundColor: severity === 'success' ? 'black' : 'black'
    }


    if( message === '' ) return 

    const config = true ? {
        className: `Class ${classes || ''}`,
        style: notificationCss
    } : {}

    return (
        <div {...config}> {message} </div>
    )
}


const NotificationContext = createContext ()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState ('')
    const [severity, setSeverity] = useState ('success')

    const setNotification = (sev, msg, time = 3) => {
        setMessage (msg)
        setSeverity (sev)
        setTimeout (() => {
            setMessage ('')
        }, time * 500)
    } 


    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification message={message} severity={severity} classes={'otherClass'}/>
            { children }
        </NotificationContext.Provider>
    )
}


export default NotificationContext