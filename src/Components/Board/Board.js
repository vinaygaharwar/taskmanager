import React, { useEffect, useState } from "react";
import { MoreHorizontal } from "react-feather";
import {Alert, Button, Stack, TextField } from '@mui/material'
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Editable from "../Editabled/Editable";

import "./Board.css";

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const[cards,setCards]=useState(props.board.cards.filter(item=>item.assignee
    =="👨"))
    const[assignee1,setAssignee1]=useState(props.board.cards.filter(item=>item.assignee
      =="👨" ))
    const[assignee2,setAssignee2]=useState(props.board.cards.filter(item=>item.assignee
      =="👤" ))
    const[assignee3,setAssignee3]=useState(props.board.cards.filter(item=>item.assignee
      =="👾"))
  const[name,setName]=useState(localStorage.getItem("isName"))
  const[taskcompleted,setTaskCompleted]=useState(name=="leela"&& assignee3.filter(item =>item.status
    ==
    "Completed"))
  const[taskcompleted2,setTaskCompleted2]=useState(name=="altamas"&& assignee1.filter(item =>item.status
    ==
    "Completed"))
    const[showAlert,setShowAlert]=useState(true)
    const[showAlert2,setShowAlert2]=useState(true)
    const[deadAlert,setDeadAlert]=useState(true)
    const[deadAlert2,setDeadAlert2]=useState(true)
    const[deadline,setDeadline]=useState([])
  console.log("board >",taskcompleted2)
    console.log("task>>",taskcompleted)
  console.log("carsd??",assignee1.filter(item =>item.assignee
  == 
  "👾"))
  // const Alerty=()=>{
  //   if(taskcompleted.length>0)
  //   {alert(<Stack sx={{ width: '100%' }} spacing={2}>
  //     <Alert severity="success">This is a success alert — check it out!
  //     <li>mailto:vinayygaharwar@gmail.com</li>
  //     </Alert>
  //   </Stack>)}
  //   // alert("completed")
  //   // setShowAlert(!showAlert)
  // }
  useEffect(()=>{
    // Alerty()
    if(name=="leela")
    {
      console.log("hello leela")
      setTimeout(() => {
      setShowAlert(false);
    }, 5000);}
     if(name=="altamas")
    {
      console.log("hello altams")
      setTimeout(() => {
      setShowAlert2(false);
    }, 5000);}
  },[])
  useEffect(()=>{
  //  const leelastatus=()=> { if (name=="leela")
  //  {return props.board.cards.filter(items=>items.assignee
  //     =="👾").filter(item =>item.status
  //       ==
  //       "Completed")}}
  //       setTaskCompleted(leelastatus)
 if(name=="leela" || name=="vinay")
  { const enddead=props.board.cards.filter(items=>items.assignee
    =="👾").filter(item =>(item.endDate!=undefined)).map(item=>item.endDate)
  const startdead=props.board.cards.filter(items=>items.assignee
    =="👾").map(item =>item.date)
    var first_date = new Date("03/4/2023");
    var sec_date = new Date("03/2/2023");
    var dif1= Math.abs(sec_date-first_date);
    var d1 = dif1/(1000 * 3600 * 24)
console.log(d1)
    // var date1 = new Date(startdead)
    var date2 = new Date(enddead[0])
    var date3 = new Date()
    var dif;
    if(date3>date2) dif= date3-date2
    else  dif= date2-date3
    var d = dif/(1000 * 3600 * 24)
    // console.log("end>>",date1,date2)
    // console.log("start>>",d)
    if(d<1 && d!=NaN){
      console.log("start>>",Math.ceil(d))
    }
    if(date2.getDate()<date3.getDate() )
    {setTimeout(() => {
      setDeadAlert(false);
    }, 1000)}
    // setTimeout(() => {
    //   if(d<date3.getDate() && d!=NaN){
    //     console.log("start>>",d,date2,date3,enddead)
    //     setDeadAlert(false);
    //   }
    //   else{
    //     setDeadAlert(true);
    //   }
    // }, 1000);
  }
  if(name=="altamas"||name=="vinay")
  { const enddead=props.board.cards.filter(items=>items.assignee
    =="👨").filter(item =>(item.endDate!=undefined)).map(item=>item.endDate)
  const startdead=props.board.cards.filter(items=>items.assignee
    =="👨").map(item =>item.date)
    var first_date = new Date("03/4/2023");
    var sec_date = new Date("03/2/2023");
    var dif1= Math.abs(sec_date-first_date);
    var d1 = dif1/(1000 * 3600 * 24)
console.log(d1)
    // var date1 = new Date(startdead)
    var date2 = new Date(enddead[0])
    var date3 = new Date()
    var dif;
    if(date3>date2) dif= date3-date2
    else  dif= date2-date3
    var d = dif/(1000 * 3600 * 24)
    // console.log("end>>",date1,date2)
    console.log("start>>",d)
    if(d<1 && d!=NaN){
      console.log("altamas start>>",d)
    }
    console.log("altamas start>>",date3.getDate())
    if(date2.getDate()<date3.getDate() )
    {setTimeout(() => {
      setDeadAlert2(false);
    }, 1000)}
    // setTimeout(() => {
    //   if(d<date3.getDate() && d!=NaN){
    //     console.log("start>>",d,date2,date3,enddead)
    //     setDeadAlert2(false);
    //   }
    //   else{
    //     setDeadAlert2(true)
    //   }
    // }, 1000);
  }
//   if(name=="vinay")
//   { const enddead=props.board.cards.filter(items=>items.assignee
//     =="👨" || items.assignee
//     =="👾").filter(item =>(item.endDate!=undefined)).map(item=>item.endDate)
//   const startdead=props.board.cards.filter(items=>items.assignee
//     =="👨").map(item =>item.date)
//     var first_date = new Date("03/4/2023");
//     var sec_date = new Date("03/2/2023");
//     var dif1= Math.abs(sec_date-first_date);
//     var d1 = dif1/(1000 * 3600 * 24)
// console.log(d1)
//     // var date1 = new Date(startdead)
//     var date2 = new Date(enddead[0])
//     var date3 = new Date()
//     var dif;
//     if(date3>date2) dif= date3-date2
//     else  dif= date2-date3
//     var d = dif/(1000 * 3600 * 24)
//     // console.log("end>>",date1,date2)
//     console.log("start>>",d)
//     if(d<1 && d!=NaN){
//       console.log("altamas start>>",d)
//     }
//     console.log("altamas start>>",date3.getDate())
//     setTimeout(() => {
//       if(d<date3.getDate() && d!=NaN){
//         console.log("start>>",d,date2,date3,enddead)
//         setDeadAlert2(false);
//       }
//       else{
//         setDeadAlert2(true)
//       }
//     }, 1000);
//   }
  },[])
  return (
    <div>
      <div >
      { name =="leela" &&    showAlert && taskcompleted.length>0&&   <Stack className="board-modal-complete" sx={{ width: '100%',}} spacing={2}>
      <Alert severity="success">
      <a href="mailto:vinay.gaharwar@accenture.com">Send Completion Mail To Manager</a></Alert>
    </Stack>}
    </div>
      <div >
      { name =="altamas" &&    showAlert2==true && taskcompleted2.length>0&&   <Stack className="board-modal-complete" sx={{ width: '100%',}} spacing={2}>
      <Alert severity="success">
      <a href="mailto:vinay.gaharwar@accenture.com">Send Completion Mail To Manager</a></Alert>
    </Stack>}
    </div>
      <div >
      { name =="leela"  && deadAlert==false &&   <Stack className="board-modal" sx={{ width: '100%',}} spacing={2}>
      <Alert severity="error">
      <a href="mailto:vinay.gaharwar@accenture.com">Task has not been completed within the deadline , click here to contact Manager to extend the date</a></Alert>
    </Stack>}
    </div>
      <div >
      { name =="vinay"  && deadAlert==false &&   <Stack className="board-modal" sx={{ width: '100%',}} spacing={2}>
      <Alert severity="error">
      <a href="mailto:leela@accenture.com">Task has not been completed by leela within the deadline, Notify Leela to complete task</a></Alert>
    </Stack>}
    </div>
      <div >
      { name =="altamas" && deadAlert2==false &&   <Stack className="board-modal" sx={{ width: '100%',}} spacing={2}>
      <Alert severity="error">
      <a href="mailto:vinay.gaharwar@accenture.com">Task has not been completed within the deadline , click here contact Manager to extend the date</a></Alert>
    </Stack>}
    </div>
      <div >
      { name =="vinay" && deadAlert2==false &&   <Stack className="board-modal-altamas" sx={{ width: '100%',}} spacing={2}>
      <Alert severity="error">
      <a href="mailto:altamas@accenture.com">Task has not been completed by altamas within the deadline, Notify Altamas to complete task</a></Alert>
    </Stack>}
    </div>
    <div className="board">
      <div className="board_header">
        <p className="board_header_title">

          {props.board?.title}
          {name=="vinay"&&<span>{props.board?.cards?.length || 0}</span>}
        </p>
        <div
          className="board_header_title_more"
          onClick={(event) => {
            event.stopPropagation();
            setShowDropdown(true);
          }}
        >
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown
              class="board_dropdown"
              onClose={() => setShowDropdown(false)}
            >
              <p onClick={() => props.removeBoard()}>Delete Board</p>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="board_cards custom-scroll">
        {
    //     name=="leela"? assignee.filter(item =>item.assignee
    // == 
    // "👾"):name=="altamas"? assignee.filter(item =>item.assignee
    //   == 
    //   "👾"):
    name=="leela"?props.board.cards.filter(items=>items.assignee
      =="👾").map((item) => (
      <Card
        key={item.id}
        card={item}
        boardId={props.board.id}
        removeCard={props.removeCard}
        dragEntered={props.dragEntered}
        dragEnded={props.dragEnded}
        updateCard={props.updateCard}
      />
    )):
    name=="altamas"?props.board.cards.filter(items=>items.assignee
      =="👨").map((item) => (
      <Card
        key={item.id}
        card={item}
        boardId={props.board.id}
        removeCard={props.removeCard}
        dragEntered={props.dragEntered}
        dragEnded={props.dragEnded}
        updateCard={props.updateCard}
      />
    )):
      props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            boardId={props.board.id}
            removeCard={props.removeCard}
            dragEntered={props.dragEntered}
            dragEnded={props.dragEnded}
            updateCard={props.updateCard}
          />
        ))}

        {name=="vinay" &&<Editable
          text="+ Create Issue"
          placeholder="Enter Issue"
          displayClass="board_add-card"
          editClass="board_add-card_edit"
          onSubmit={(value) => props.addCard(props.board?.id, value)}
        />}
      </div>
    </div>
    </div>
  );
}

export default Board;
