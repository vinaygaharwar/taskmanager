import React, { useEffect, useState } from "react";
import {
  Calendar,
  CheckSquare,
  List,
  Tag,
  Trash,
  Type,
  X,arrowDown
} from "react-feather";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Modal from "../../Modal/Modal";
import Editable from "../../Editabled/Editable";

import "./CardInfo.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
function CardInfo(props) {
  const colors = [
    "#a8193d",
    "#4fcc25",
    "#1ebffa",
    "#8da377",
    "#9975bd",
    "#cf61a1",
    "#240959",
  ];
  console.log("props",props.card.endDate)
  const [selectedColor, setSelectedColor] = useState();
  const[status,setStatus]=useState('')
  const [values, setValues] = useState({
    ...props.card,
  });
// console.log("props>>",props)
// console.log("values>>",values)
const statusHandler=(e)=>{
  setStatus(e.target.value)
}
  const updateTitle = (value) => {
    setValues({ ...values, title: value });
  };
  // const updatePriority = (value) => {
  //   setValues({ ...values, priority: value });
  // };
  const updatePriority = (priority) => {
    if (!priority) return;

    setValues({
      ...values,
      priority,
    });
  };
  const updateStatus = (status) => {
    if (!status) return;

    setValues({
      ...values,
      status,
    });
  };
  const updateAssignee = (assignee) => {
    if (!assignee) return;

    setValues({
      ...values,
      assignee,
    });
  };
  const updateDesc = (value) => {
    setValues({ ...values, desc: value });
  };

  const addLabel = (label) => {
    const index = values.labels.findIndex((item) => item.text === label.text);
    if (index > -1) return;

    setSelectedColor("");
    setValues({
      ...values,
      labels: [...values.labels, label],
    });
  };

  const removeLabel = (label) => {
    const tempLabels = values.labels.filter((item) => item.text !== label.text);

    setValues({
      ...values,
      labels: tempLabels,
    });
  };

  const addTask = (value) => {
    const task = {
      id: Date.now() + Math.random() * 2,
      completed: false,
      text: value,
    };
    setValues({
      ...values,
      tasks: [...values.tasks, task],
    });
  };

  const removeTask = (id) => {
    const tasks = [...values.tasks];

    const tempTasks = tasks.filter((item) => item.id !== id);
    setValues({
      ...values,
      tasks: tempTasks,
    });
  };

  const updateTask = (id, value) => {
    const tasks = [...values.tasks];

    const index = tasks.findIndex((item) => item.id === id);
    if (index < 0) return;

    tasks[index].completed = value;

    setValues({
      ...values,
      tasks,
    });
  };

  const calculatePercent = () => {
    if (!values.tasks?.length) return 0;
    const completed = values.tasks?.filter((item) => item.completed)?.length;
    return (completed / values.tasks?.length) * 100;
  };

  const updateDate = (date) => {
    if (!date) return;

    setValues({
      ...values,
      date,
    });
  };
  const updateEndDate = (endDate) => {
    if (!endDate) return '';
    // console.log("endDate",endDate)
    var newDate=new Date(endDate)
    // newDate=newDate.getDate()+1
    var curr_date = newDate.getDate()+1
    var curr_month = newDate.getMonth() + 1; //Months are zero based
    // console.log("endDate",curr_date+1)
var curr_year = newDate.getFullYear();
const updatedDate=curr_year + "-" + curr_month + "-" + curr_date
// console.log(curr_year + "-" + curr_month + "-" + curr_date);
    console.log("endDate",updatedDate)
    setValues({
      ...values,
      endDate,
    });
    // setValues({
    //   ...values,
    //   updatedDate,
    // });
  };
const scheduleDate=()=>{
  const date=props.card.endDate
  console.log("date:",date)
  var date2 = new Date(date)
    var date3 = new Date()
    var newDate=new Date(date)
    // newDate=newDate.getDate()+1
    var curr_date = newDate.getDate()+1
    var curr_month = newDate.getMonth() + 1; //Months are zero based
    // console.log("endDate",curr_date+1)
var curr_year = newDate.getFullYear();
const updatedDate=curr_year + "-" + curr_month + "-" + curr_date
    if(date2.getDate()<date3.getDate() ){
      setValues({
      ...values,
      updatedDate,
    });
    }
}
// useEffect(()=>{
//   scheduleDate()
// },[])
  useEffect(() => {
    if (props.updateCard) props.updateCard(props.boardId, values.id, values);
  }, [values]);

  return (
    <Modal onClose={props.onClose}>
      <div className="cardinfo">
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Type />
            <p>Title</p>
          </div>
          <Editable
            defaultValue={values.title}
            text={values.title}
            placeholder="Enter Title"
            onSubmit={updateTitle}
          />
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <List />
            <p>Description</p>
          </div>
          <Editable
            defaultValue={values.desc}
            text={values.desc || "Add a Description"}
            placeholder="Enter description"
            onSubmit={updateDesc}
          />
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Calendar />
            <p>Date</p>
          </div>
          <input
            type="date"
            defaultValue={values.date}
            // min={new Date().toISOString().substr(0, 10)}
            onChange={(event) => updateDate(event.target.value)}
          />
        </div>
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            {/* <Calendar /> */}
            <p> End Date</p>
          </div>
          <input
            type="date"
            defaultValue={values.endDate}
            // min={new Date().toISOString().substr(0, 10)}
            onChange={(event) => updateEndDate(event.target.value)}
          />
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Tag />
            <p>Labels</p>
          </div>
          <div className="cardinfo_box_labels">
            {values.labels?.map((item, index) => (
              <label
                key={index}
                style={{ backgroundColor: item.color, color: "#fff" }}
              >
                {item.text}
                <X onClick={() => removeLabel(item)} />
              </label>
            ))}
          </div>
          <ul>
            {colors.map((item, index) => (
              <li
                key={index + item}
                style={{ backgroundColor: item }}
                className={selectedColor === item ? "li_active" : ""}
                onClick={() => setSelectedColor(item)}
              />
            ))}
          </ul>
          <Editable
            text="Add Label"
            placeholder="Enter label text"
            onSubmit={(value) =>
              addLabel({ color: selectedColor, text: value })
            }
          />
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <CheckSquare />
            <p>Tasks</p>
          </div>
          <div className="cardinfo_box_progress-bar">
            <div
              className="cardinfo_box_progress"
              style={{
                width: `${calculatePercent()}%`,
                backgroundColor: calculatePercent() === 100 ? "limegreen" : "",
              }}
            />
          </div>
          <div className="cardinfo_box_task_list">
            {values.tasks?.map((item) => (
              <div key={item.id} className="cardinfo_box_task_checkbox">
                <input
                  type="checkbox"
                  defaultChecked={item.completed}
                  onChange={(event) =>
                    updateTask(item.id, event.target.checked)
                  }
                />
                <p className={item.completed ? "completed" : ""}>{item.text}</p>
                <Trash onClick={() => removeTask(item.id)} />
              </div>
            ))}
            <Editable
            text={"Add a Task"}
            placeholder="Enter task"
            onSubmit={addTask}
          />
            {/* <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Type />
            <p>Priority</p>
          </div>
          <Editable
            defaultValue={values.priority}
            text={values.priority}
            placeholder="Enter Priority"
            onSubmit={updatePriority}
          />
        </div> */}
            <div className="cardinfo_box">
          <div className="cardinfo_box_title">
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={values.status}
          // value={values.priority}
          // label="Age"
          // onSelect={updatePriority}
          // onChange={statusHandler}
          // onChange={(event) => updateStatus(event.target.value)}
          onChange={(event) => updateStatus(event.target.value)}
        >
          <MenuItem value={'ToDo'}>ToDo</MenuItem>
          <MenuItem value={'InProgress'}>InProgress</MenuItem>
          <MenuItem value={'Completed'}>Completed</MenuItem>
        </Select>
      </FormControl>
    </Box>
          </div>
            
        </div>
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={values.priority}
          onChange={(event) => updatePriority(event.target.value)}
        >
          <MenuItem  value={'High ↑'}>High</MenuItem>
          <MenuItem value={'Medium ↑'}>Medium</MenuItem>
          <MenuItem value={'Low ↓'}>Low</MenuItem>
        </Select>
      </FormControl>
    </Box>
          </div>
          </div>
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Assignees</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={values.assignee}
          onChange={(event) => updateAssignee(event.target.value)}
        >
          <MenuItem  value={'👨'}>👨altamas</MenuItem>
          <MenuItem value={'👾'}>👾leela</MenuItem>
          <MenuItem value={'👤'}>👤vinay</MenuItem>
        </Select>
      </FormControl>
    </Box>
          </div>
          </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CardInfo;
