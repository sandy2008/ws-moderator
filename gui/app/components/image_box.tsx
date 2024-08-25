"use client";

import "./messagebox.css";
import React, { useEffect, useState, useRef } from "react";
import { Message, ModRequest } from "./types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import RobotIcon from "@mui/icons-material/SmartToy";
import UserIcon from "@mui/icons-material/Person";

interface MessageProps {
    msg: ModRequest;
}

const ImageBox: React.FC<MessageProps> = ({ msg }) => {
    const imageUrl = msg.message.data;

    return (
        <>
            <div className="zoom">
                <p>{msg.message.data}</p>
                <div className="zoom">
                    <img
                        src={imageUrl}
                        alt="image"
                        style={{
                            objectFit: "contain",
                            transition: "all 0.3s ease",
                        }}
                    />
                </div>
            </div>
            <br />
        </>
    );
};

export default ImageBox;
