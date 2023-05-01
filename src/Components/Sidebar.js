import { Button, Modal, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SidebarModal from './Modal/SiderbarModal'
import './sidebar.css'
const Sidebar = (props) => {
    console.log(props)
    const[name,setName]=useState(localStorage.getItem("pName")||'Discovery ')
    const[desc,setDesc]=useState(localStorage.getItem("pDesc")||'PPES')
    console.log("name,desc",name,desc)
    const nameHandler=(e)=>{
        setName(e.target.value)
    }
    const descHandler=(e)=>{
        setDesc(e.target.value)
    }
    // useEffect(()=>{
    //     // localStorage.setItem("pName",name);
    //     projDesc()
    //     projName()
    // },[])
    // const projDesc=()=>(localStorage.getItem("pDesc"));
    // const projName=()=>(localStorage.getItem("pName"));
    // console.log(projDesc())
    const saveHandler=()=>{
        // props.onsetProject(name)
        // props.onSetPDesc(desc)
        localStorage.setItem("pName",name);
        localStorage.setItem("pDesc",desc);
        alert("Changes Saved Successfully")
        window.location.reload()
    }
  return (
    <div>
         <SidebarModal onClose={props.onClose}>
            <div className='sidebarcontainer'>
                <h2>Project Details</h2>
                <TextField  onChange={nameHandler} id="outlined-basic" label="Name" variant="outlined" defaultValue={name}/>
                
                <TextField
                onChange={descHandler}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue={desc}
        />
                <Button onClick={saveHandler} variant="contained">Save Changes</Button>
            </div>
      
      </SidebarModal>
    </div>
  )
}

export default Sidebar
