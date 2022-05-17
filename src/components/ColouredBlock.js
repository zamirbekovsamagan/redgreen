import './ColouredBlock.css'
import { useEffect,useRef, useState} from 'react'

function ColouredBlock (){

    const [classname, setClassname] = useState('')
    const [isColorured, setIsColoured] = useState(false)

    const myRef = useRef(null)

    useEffect(()=>{

        if(isColorured){
            setClassname('red')
        }else{
            setClassname('green')
        }

        myRef.current = setInterval(()=>{
            setIsColoured((el)=> !el)
        },1000)

        return ()=> clearInterval(myRef.current)

    },[isColorured])

    return (
        <div className={classname}></div>
    )
}

export default ColouredBlock