import { Avatar } from "@mui/material";

const CreateTweet = ({tweet ,setTweet,tweets ,setTweets}) => {

    
    const handleSubmit = ( ev ) => {
        ev.preventDefault()
        tweet !== '' && setTweets( [ ...tweets, { dName: "Tonny", uName: "@tonny_g", text: tweet } ] )
        setTweet('')
        
    }

    return ( 
            <div className="flex w-full md:w-[80%] h-[25%] mx-auto p-4 border-b border-[--twitter-color]">
                <Avatar />
                <form
                    onSubmit={(ev)=>handleSubmit(ev)}
                    className='flex flex-col p-1  w-[90%]  '>
                    <textarea
                        cols="9"
                        rows="5"
                        type="text"
                        value={ tweet }
                        onChange={(e)=>setTweet(e.target.value)}
                        placeholder="Create Tweet"
                        className='focus:outline-none p-2 resize-none'
                    />
                    <button
                        type='submit'
                        className='self-end my-3 mr-6 border rounded-md px-3 bg-[--twitter-color] text-[20px] text-[#ffff] font-[500]'>Tweet</button>
                </form>
            
        </div>
     );
}
 
export default CreateTweet;