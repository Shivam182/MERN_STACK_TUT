import React from 'react'
import './SidebarChat.css'

import { Avatar, IconButton } from "@material-ui/core";


function SidebarChat() {
    return (
        <div className='sidebarChat'>
            <Avatar/>
            <div className="info">
                <h2>Any Person</h2>
                <p>Hey !</p>
            </div>
        </div>
    )
}

export default SidebarChat
