import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title =`${title} - dragon news`;
    },[])
}

export default useTitle;