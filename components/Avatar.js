import React from "react";
import { Image } from "react-native";

export default function Avatar({ source }) {
    return (
        <Image source={{ uri: source }} width={50} height={50} style={{marginHorizontal: 10}} />
    );
}

