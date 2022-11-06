import React from 'react'
import Alert from './Alert'

export default function Alerts({ alerts }) {
    

    return (
        <>
            <div className="alerts">
                {alerts && alerts.map((item)=>(
                    <Alert message={item.message} />
                ))}
            </div>
        </>
    )
}
