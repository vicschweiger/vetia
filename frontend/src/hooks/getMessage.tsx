import { useState } from "react";
import { CustomText } from "../components/CustomText";

interface MessageProps {
    message: any;
}

export default function sendMessage({ message }: MessageProps) {
    return (
        <CustomText 
            value={message}
        />
    )
}