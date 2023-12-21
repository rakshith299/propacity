import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';

import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import {v4 as uuid} from "uuid";

import { setTodos } from '../slices/todo';
import EmptyNote from './EmptyNotes';
import Card from './Card';

import "../App.css";


const TextFieldMod = styled(TextField)`

  height: 10px;
  border-radius: 10px;
`;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

  const DrawerHeader = styled('div')(({ theme }) => ({
 
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

const drawerWidth = 240;

const SingleInput = ({open, filtered, filterActive}) => {

    const [inputFlag, setInputFlag] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const [text, setText] = React.useState("");
    const [dummyFlag, setDummyFlag] = useState(false);

    const [allTodos, setAllTodos] = useState([]);

    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todo.todos);
    

    localStorage.setItem("todoArr", JSON.stringify(todos));
   

    useEffect(() => {
        if(localStorage.getItem("todoArr")){
            let receivedArr = JSON.parse(localStorage.getItem("todoArr"));
            setAllTodos(receivedArr);       

            localStorage.setItem("todoArr", JSON.stringify(receivedArr));
        }


    }, [inputFlag, dummyFlag]);

    function changleInputFlag(){
        setInputFlag((prev) => !prev);       
    }

    function handleAddTodo(){

        let todoObj = {
            id: uuid(),
            title,
            text
        }

        if(todoObj.title === "" && todoObj.text === ""){
            todoObj.text = "Empty Note"
            
        }

        dispatch(setTodos(todoObj));

        setInputFlag(false);
        setTitle("");
        setText("");


    }

    function handleText(e){
        setText(e.target.value);
    }


    let reverseArr = [];

    if(filterActive){
        reverseArr = filtered.slice().reverse();
    }else{
        reverseArr = allTodos.slice().reverse();
    }

    return (
        <Main open={open}>
            <DrawerHeader/>
            {
                inputFlag ? 
                <ClickAwayListener onClickAway={changleInputFlag}>
                    <div className='input-cont' >
                        <input type = "text" placeholder='Title' 
                        autoFocus 
                        className='single-input-cont' 
                        onChange={(e) => setTitle(e.target.value)} name = "title-1"/>

                        <textarea placeholder='Take a note...'  
                        className='t-area-cont' rows={5} 
                        onChange = {handleText} style={{ height: `${Math.max(1, text.split('\n').length) * 1.5}em` }}/>

                        <div className='opt-cont'>
                            <button className='opt-add' onClick={handleAddTodo}>Add Note</button>
                        </div>
                    </div>
                </ClickAwayListener> : 

                <input type = "text" placeholder='Take a note' className='single-input' onClick={changleInputFlag} name = "title-2"/>

            }
            {
                allTodos.length > 0? 
                <div className='all-cards-cont'>
                    {
                        reverseArr.map((each) => (
                            <Card id = {each.id} title = {each.title} text = {each.text} key = {each.id} setDummyFlag = {setDummyFlag}/>
                        ))
                    }
                </div> : 

                <EmptyNote/>
            }
            
        </Main>
    )
}

export default SingleInput;