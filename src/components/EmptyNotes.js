import React  from "react";
import "../App.css";
import {styled } from "@mui/material";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

const BoxMod = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
`;

const TupoMod = styled(Typography)`
    color: #80898b;
    font-size: 22px;
`;

const Bulb = styled(LightbulbOutlinedIcon)`
    font-size: 120px;
    color: #f5f5f5;
`;



const EmptyNote = () => {
    return(
        <BoxMod>
            <Bulb/>
            <TupoMod>
                Notes appear Here...
            </TupoMod>
        </BoxMod>
    )
}

export default EmptyNote;