import { ChatBubbleOutline, FavoriteOutlined, Repeat, UploadOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useState } from "react";

const Tweet = ( { handleCommSec, displayName, username, text } ) => {
    
    const [ love, setLove ] = useState( false )
    const handleLove = () => {
        setLove(!love)
    }

    return ( 
        <div className="w-full h-ffit my-3 px-4">
            {/* 
            displayName,
            username,
            Verified,
            text,
            image,
            avator
            */}
            <div className="flex flex-r items-center ">
                <Avatar />
                <h2 className='text-[20px] font-[800] ml-2 flex items-center'>{displayName}</h2>
                <p className=' text-gray-400 text-center m-1 flex items-center'>{username} </p>
                {/* <p className='text-gray-400 text-center m-1 flex items-center'>. 3h</p> */}
            </div>
            <div className="w-full my-1 min-h-fit  flex items-center py-3 text-[18px] overflow-y-auto">
                {text}
            </div>
            <div className="w-full flex items-center justify-evenly my-1">
                <button onClick={()=>handleCommSec()}><ChatBubbleOutline  /></button>
                <button><Repeat /></button>
                <button onClick={()=>handleLove}><FavoriteOutlined /></button>
                <button><UploadOutlined /></button>
            </div>
  
                
        </div>
     );
}
 
export default Tweet;