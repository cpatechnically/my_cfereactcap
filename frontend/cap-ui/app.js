'use strict';

const e = React.createElement;
const useState = React.useState;
const useEffect = React.useEffect;
const rootURL = "http://127.0.0.1:8000";


const getCookies = (name) => {
    var cookies = {};
    if (document.cookie && document.cookie !== '') {
        document.cookie.split(';').forEach(function (c) {
            var m = c.trim().match(/(\w+)=(.*)/);
            if(m !== undefined) {
                cookies[m[1]] = decodeURIComponent(m[2]);
            }
        });
    }
    if (name) {
        return cookies[name]
    }
    return cookies;
}


const useDisplayMsg = () => {
    //const [msg, isError, setDisplayMsg] = useDisplayMsg('')
    const [msg, setMsg] = useState('')
    const [isError, setIsError] = useState(false)

    const setDisplayMsg = (msg, isError) => {
        setMsg(msg)
        const error = String(isError) === 'true' ? true : false
        setIsError(error)
    }

    useEffect(() =>{
        let timeout;
        if (msg !== ''){
            const duration = 4000
            timeout = setTimeout(()=>{
                setDisplayMsg("",false)
            }, duration)
        }
        return () => {
            clearTimeout(timeout)
        }
    })
    return [msg, isError, setDisplayMsg]
}



const CaptureEmailUI = (props) => {
    const [value, setValue] = useState('')
    const [msg, isError, setDisplayMsg] = useDisplayMsg()

    const handleSubmit = (e) => {
        e.preventDefault()
        const csrftoken = getCookies('csrftoken')
        //console.log("token",csrftoken)
        //console.log(value)
        if (!csrftoken) {
            setDisplayMsg("This is not a valid embed.",true)
        }

        if (value === '' || value === undefined || value === null) {
            setDisplayMsg("Value is required",true)
            return
        }
        console.log(value)
        //send to backend
        const url = `${rootURL}/api/capture/email/`
        const data = {
            email: value
        }

        const jsonData = JSON.stringify(data)

        const xhr = new XMLHttpRequest()
        xhr.open("POST", url, true) //async true
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.setRequestHeader('X-CSRFTOKEN', csrftoken)
        xhr.onerror = () => {
            setDisplayMsg("Error! please try again later", true)
        }

        xhr.onload = () => {
            //console.log(xhr.responseText)
            if (xhr.status === 201) {
                //console.log(xhr)
                setValue('')
                setDisplayMsg('Success! Your email is saved.',false)
            } else {
                setDisplayMsg('Error! please try again.',true)
            }
        }
        xhr.send(jsonData)
    }


    const handleChange = (e) => {
        setValue(e.target.value)
        setDisplayMsg('',false)
    }
    //console.log(props)
    const {config} = props
    return <form className={config.formClass} onSubmit={handleSubmit}>
        {(!isError && msg) && <div 
            className={config.successClass ? 
                config.successClass : 'alert alert-success'
            }>{msg}</div>}
            
        <input 
            className={config.inputClass}
            value={value}
            onChange={handleChange}
            type="email" 
            placeholder="your email"
            //required
            />
        {(isError && msg) && <p className={config.errorClass}>{msg}</p>}
        {config.btnShow === 'false' ? '' :
            <p><button className={config.btnClass} type="submit">Save Email</button></p>
        }
    </form>
}

// Find all DOM containers, and render our component into them.
var containers = document.querySelectorAll('.cap-ui')
containers.forEach(domContainer => {
    //console.log(domContainer.dataset)
    //Read the user ID from a data-* attribute.
    //const userid = domContainer.dataset.userid
    // render the component into the DOM
    ReactDOM.render(
      e(CaptureEmailUI, { config: domContainer.dataset}),
      domContainer
    )
});