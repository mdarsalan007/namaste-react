import useOnlineStatus from './utils/useOnlineStatus'

const Contact = ()=>{

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
      return <h1>Looks like you are offline. Please check your internet connection.</h1>
    }
    return (
        <div>
            <h2 className="font-bold text-2xl mx-auto my-4 w-fit">This is contact us page.</h2>
            <form className='flex flex-col w-fit mx-auto'>
                <input className='text-gray-700 text-sm py-1 my-1 px-1 border-b-neutral-700 border-1 outline-0' type='text' placeholder='Enter your name.'></input>
                <input className=' text-gray-700 text-sm py-1 my-1 px-1 border-b-neutral-700 border-1 outline-0' type='tel' placeholder='Enter your mobile no.'></input>
                <input className=' text-gray-700 text-sm py-1 my-1 px-1 border-b-neutral-700 border-1 outline-0' type='text' placeholder='Enter your message.'></input>
                <button className="w-18 bg-amber-600 p-1 rounded-md mt-2 mx-auto cursor-pointer">Submit</button>
            </form>
        </div>
    )
}

export default Contact;