import { useState } from "react";
import Tweet from "../tweet";
import CreateTweet from "../createTweets";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";

const Home = ({loggedUser, setUser}) => {

    const [ tweet, setTweet ] = useState()
    const [ tweets, setTweets ] = useState( [] )
    const navigate = useNavigate()

    const [comment, setComment] = useState(false)
    const handleCommSec = () => {
        setComment( !comment )
    }
    
    const handleLogOut = () => {
        setUser( {} )
        navigate('/')
        
    }


    
    return ( 
        <div className="bg-[--bg-twitter] w-full md:w-[40%] md:h-[95%] h-full my-auto mx-auto flex flex-col">
            <div className="m-3 text-lg font-semibold flex w-[40%] items-baseline ">
                <Avatar className='mr-6'/>
                <p className='text-[24px]'>{ loggedUser.username }</p>
                <p className='ml-2 text-gray-400 text-center text-[14px] flex items-center'>@{ loggedUser.handle }</p>
            </div>
            <button
                onClick={()=>{handleLogOut()}}
                className='my-3 mr-6 border rounded-md px-3 bg-[--twitter-color] text-[20px] text-[#ffff] font-[500] self-end'>Log Out</button>
            <CreateTweet tweet={ tweet } setTweet={ setTweet } tweets={ tweets } setTweets={ setTweets } />
            <div className='overflow-auto h-[75%] space-y-2 flex-col-reverse flex '>
            { tweets &&
                tweets.map( ( twt, index ) => {
                return <Tweet key={ index } indx={index} twt={tweets} comment={comment}  handleCommSec={handleCommSec} displayName={ loggedUser.username } username={`@${loggedUser.handle}`} text={twt.text} />
                })
            }
            </div>
        </div>
     );
}
 
export default Home;