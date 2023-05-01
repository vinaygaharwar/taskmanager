import React, { useEffect, useState } from "react";

import Board from "./Components/Board/Board";

import "./App.css";
import Editable from "./Components/Editabled/Editable";
import Sidebar from "./Components/Sidebar";

function App({name}) {
  const [boards, setBoards] = useState(
    JSON.parse(localStorage.getItem("taskmanager")) || []
  );
    const[projectName,setProjectName]=useState(localStorage.getItem("pName") ||'Discovery OTT')
    // const[pDesc,setPDesc]=useState(localStorage.getItem("pDesc")|| 'This is a PPES Discovery project')
    const[showSidebar,setShowSidebar]=useState(false)
  const [targetCard, setTargetCard] = useState({
    bid: "",
    cid: "",
  });

  const addboardHandler = (name) => {
    const tempBoards = [...boards];
    tempBoards.push({
      id: Date.now() + Math.random() * 2,
      title: name,
      cards: [],
    });
    setBoards(tempBoards);
  };

  const removeBoard = (id) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards.splice(index, 1);
    setBoards(tempBoards);
  };

  const addCardHandler = (id, title) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards[index].cards.push({
      id: Date.now() + Math.random() * 2,
      title,
      labels: [],
      date: "",
      tasks: [],
    });
    setBoards(tempBoards);
  };

  const removeCard = (bid, cid) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setBoards(tempBoards);
  };

  const dragEnded = (bid, cid) => {
    let s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex;
    s_boardIndex = boards.findIndex((item) => item.id === bid);
    console.log("board start drag index>>",s_boardIndex)
    if (s_boardIndex < 0) return;

    s_cardIndex = boards[s_boardIndex]?.cards?.findIndex(
      (item) => item.id === cid
      );
      console.log("card start drag index >>",s_cardIndex)
    if (s_cardIndex < 0) return;

    t_boardIndex = boards.findIndex((item) => item.id === targetCard.bid);
    console.log("board end drag index>>",t_boardIndex)
    // console.log("testing >>", boards.findIndex((item) => item.id != bid))
    if (t_boardIndex < 0) return;

    t_cardIndex = boards[t_boardIndex]?.cards?.findIndex(
      (item) => item.id === targetCard.cid
      );
      console.log("card end drag",t_cardIndex)
    if (t_cardIndex < 0) return;
      
    const tempBoards = [...boards];
    const sourceCard = tempBoards[s_boardIndex].cards[s_cardIndex];
    console.log("source card >>",sourceCard)
    // const medPriority=boards.map(item=>item.cards.findIndex(items=>items.priority=='med'))
    // const[a,b,c]=medPriority
    // if(a>=0||b>=0||c>=0){
    //   console.log("running")
    //   // if(a>=0)
    //   tempBoards[1].cards.splice(b, 1);
    //   tempBoards[2].cards.splice(a, 0, sourceCard);
    //   // setBoards(tempBoards)
    // }
    tempBoards[s_boardIndex].cards.splice(s_cardIndex, 1);
    console.log(" >>",tempBoards)
    tempBoards[t_boardIndex].cards.splice(t_cardIndex, 0, sourceCard);
    console.log("updating tempboard>> ",tempBoards)
    setBoards(tempBoards);
    
    setTargetCard({
      bid: "",
      cid: "",
    });
  };

  const dragEntered = (bid, cid) => {
    if (targetCard.cid === cid) return;
    setTargetCard({
      bid,
      cid,
    });
  };

  const updateCard = (bid, cid, card) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    tempBoards[index].cards[cardIndex] = card;
    const medPriority=boards.map(item=>item.cards.findIndex(items=>items.status=='Completed'))
    const inProgressPriroity=boards.map(item=>item.cards.findIndex(items=>items.status=='InProgress'))
    const[a,b,c]=medPriority
    const toDoPriority=boards.map(item=>item.cards.findIndex(items=>items.status=='ToDo'))
    const[g,h,i]=toDoPriority
    const[d,e,f]=inProgressPriroity
    if(a>=0||b>=0||c>=0){
      console.log("running")
      console.log("med>>",medPriority)
      if(a>=0)
      {tempBoards[2].cards.splice(a, 0, tempBoards[index].cards[cardIndex]);
      tempBoards[0].cards.splice(a, 1);}
      if(b>=0)
      {tempBoards[2].cards.splice(a, 0, tempBoards[index].cards[cardIndex]);
      tempBoards[1].cards.splice(b, 1);}
      // setBoards(tempBoards)
    }
    if(d>=0||e>=0||f>=0){
      console.log("running")
      console.log("med>>",inProgressPriroity)
      if(d>=0)
      {tempBoards[1].cards.splice(1, 0, tempBoards[index].cards[cardIndex]);
      tempBoards[0].cards.splice(d, 1);}
      if(f>=0)
      {tempBoards[1].cards.splice(1, 0, tempBoards[index].cards[cardIndex]);
      tempBoards[2].cards.splice(f, 1);}
      // setBoards(tempBoards)
    }
    if(g>=0||h>=0||i>=0){
      console.log("running")
      console.log("med>>",toDoPriority)
      if(h>=0)
      {tempBoards[0].cards.splice(1, 0, tempBoards[index].cards[cardIndex]);
      tempBoards[1].cards.splice(h, 1);}
      if(i>=0)
      {tempBoards[0].cards.splice(1, 0, tempBoards[index].cards[cardIndex]);
      tempBoards[2].cards.splice(i, 1);}
      // setBoards(tempBoards)
    }
    
    setBoards(tempBoards);
    
  };

  useEffect(() => {
    localStorage.setItem("taskmanager", JSON.stringify(boards));
  }, [boards]);
  // const medPriority=boards.map(item=>item.cards.findIndex(items=>items.priority=='med'))
  // const medCard=boards.map(item=>item.cards.filter(items=>items.priority=='med'))
  // const[d,e,f]=medCard
  // const[a,b,c]=medPriority
  // console.log("med>>",medPriority)
  const updateProject=()=>{
    setShowSidebar(true)
  }
  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-content">
        {/* <h3 className="sidebar-header">Project</h3> */}
        <h3 style={{color:'gray'}}>{projectName}</h3>
        <h5>Software Project</h5>
        <div className="setting">
          <h3 onClick={updateProject}>Project Settings</h3>
          </div>
        </div>
        <div>
          {showSidebar && 
          <Sidebar 
          onClose={() => setShowSidebar(false)} 
          onsetProject={(val)=> setProjectName(val)}
          // onSetPDesc={(val)=>setPDesc(val)}
          projectName={localStorage.getItem("pName")}
          // projectDesc={pDesc}
          />
          }
        </div>
      </div>
      <div>
      <div className="app_nav">
        <h1 style={{color:'white'}}>Task Management System</h1>
      </div>
      <div className="app_boards_container">
        <div className="app_boards">
          {boards.map((item) => (
            <Board
              key={item.id}
              board={ item}
              addCard={addCardHandler}
              removeBoard={() => removeBoard(item.id)}
              removeCard={removeCard}
              dragEnded={dragEnded}
              dragEntered={dragEntered}
              updateCard={updateCard}
              name={name}
            />
          ))}
          {boards.length<3&& <div className="app_boards_last">
            <Editable
              displayClass="app_boards_add-board"
              editClass="app_boards_add-board_edit"
              placeholder="Enter Board Name"
              text="Add Board"
              buttonText="Add Board"
              onSubmit={addboardHandler}
            />
          </div>}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
