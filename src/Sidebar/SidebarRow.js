import { Avatar, Icon } from '@material-ui/core'
import React from 'react'

function SidebarRow({ title, src, Icon }) {
  return (
    <div className='sidebarRow'>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
        <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow