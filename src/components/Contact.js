import useOnlineStatus from './utils/useOnlineStatus'

const Contact = ()=>{

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
      return <h1>Looks like you are offline. Please check your internet connection.</h1>
    }
    return (
        <div>
            <h2>This is contact us page.</h2>
        </div>
    )
}

export default Contact;