import React from "react";
import Box from "./box";

const Header = ()=>{
    return(
        <div className="w-full h-[30%] bg-[red] flex justify-between">
            <Box />
            <div className="w-1/2 gap-[20px] flex justify-between">
                <Box />
                <Box />
            </div>
        </div>
    )
}
export default Header;