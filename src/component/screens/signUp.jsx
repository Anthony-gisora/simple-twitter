import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ( { setUser } ) => {
    const [ username, setUsername ] = useState('')
    const [ handle, setHandle ] = useState( '' )
    const navigate = useNavigate()
    
    const handleSubmmit = ( e ) => {
        e.preventDefault()
        if (username !== '' && handle!=='') {
            setUser( { username: username, handle: handle } )
            navigate( '/home' )
            setUsername( '' )
            setHandle('')
        } else {
            alert("Both inputs Should be provided...!")
        }
    }
    return ( 
        <div className="bg-[--bg-twitter] w-full md:w-[40%] md:h-[95%] h-full my-auto mx-auto flex flex-col items-center">
            <div className='flex flex-col items-center justify-center h-fit w-[80%] bg-[#ffff] my-auto space-y-6 p-4'> 
                <h1 className='text-[24px] font-[700]'>Sign Up</h1>
                <form
                    onSubmit={(e)=>{handleSubmmit(e)}}
                    className='flex flex-col items-center h-full w-full space-y-3'>
                    <label htmlFor="Username" className='text-[20px] font-semibold'>Username</label>
                    <input
                        className='focus:outline-none px-auto border w-[200px] px-2 py-2 rounded-[30px]'
                        id='Username'
                        type='text'
                        placeholder='Username e.g Tonny'
                        value={ username }
                        onChange={(e)=> setUsername(e.target.value)}
                    />
                    <label htmlFor="twitterHandle" className='text-[20px] font-semibold'>Handle</label>
                    <input
                        className='focus:outline-none px-auto border w-[200px] px-2 py-2 rounded-[30px]'
                        id='twitterHandle'
                        type='text'
                        placeholder='Handle e.g tonny_g'
                        value={ handle }
                        onChange={(e)=> setHandle(e.target.value)}
                    />
                    <button type="submit" className='rounded-[30px] bg-[--twitter-color] min-w-fit w-[40%] '>Submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default SignUp;