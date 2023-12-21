import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {styled } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../slices/todo";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import EditOpt from "./Edit";
import "../App.css";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const EditIconMod = styled(EditIcon)`
    margin-right: 1rem;
    cursor: pointer;
`;

const DeleteIconMod = styled(DeleteIcon)`
    margin-right: 1rem;
    cursor: pointer;
`;

const ColorIcon = styled(ColorLensIcon)`
    margin-right: 1rem;
    cursor: pointer;
`;


const Card = ({id, title, text, setDummyFlag}) => {

    console.log("start id", id);

    const [open, setOpen] = React.useState(false);

    const [showColor, setShowColor] = useState(false);

    const [bgColor, setBgColor] = useState("transparent")


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  let todoArr = useSelector((state) => state.todo.todos);
  console.log("todoArr", todoArr);

  localStorage.setItem("todoArr", JSON.stringify(todoArr));

    function handleConfirm(id){
        console.log("delete id", id.toString());
        dispatch(deleteTodo(id));
        setDummyFlag((prev) => !prev);
    }

    function handleDisplay(){
        setShowColor((prev) => !prev);
    }

    return(
        <>
        <div className={`card-outline ${bgColor} `}>
            <div>  
                <p>{title}</p>
                <div style={{ whiteSpace: 'pre-line' }}>{text}</div>
            </div>
            <div className="hover-icons">
                <EditOpt id = {id} title={title} text = {text} setDummyFlag={setDummyFlag}/>

                <div>
                    <DeleteIconMod  onClick={handleOpen}/>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Please Confirm!
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Are you Sure you want to Delete this note?
                        </Typography>
                        <div className="modal-btn-cont">
                            <button className="modal-btn" onClick={() => handleConfirm(id)}>Yes</button>
                        </div>
                        
                        </Box>
                    </Modal>

                    

                </div>
                <ColorIcon onClick = {handleDisplay}/>
            </div>
            
        </div>

        <div>
            {
                showColor ? 

                <div className="color-cont">

                    <div className="each-color col-1" onClick = {() => setBgColor("col-1")}></div>
                    <div className="each-color col-2" onClick = {() => setBgColor("col-2")}></div>
                    <div className="each-color col-3" onClick = {() => setBgColor("col-3")}></div>
                    <div className="each-color col-4" onClick = {() => setBgColor("col-4")}></div>
                    <div className="each-color col-5" onClick = {() => setBgColor("col-5")}></div>
                    <div className="each-color col-6" onClick = {() => setBgColor("col-6")}></div>
                    <div className="each-color col-7" onClick = {() => setBgColor("col-7")}></div>
                </div> : ""
            }
        </div>
        </>
    )

}

export default Card;