import React from "react";
import { Avatar, Badge, Space } from 'antd';

const Cartwidget = () => {
    return (
        <Badge className='cartwidget' count={99}>
            <Avatar shape="square" size="large">
            🛒 
            </Avatar>
        </Badge>
    )
}
export default Cartwidget