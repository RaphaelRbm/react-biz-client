import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export let toastDuration = 2000;

export const successMsg = (message:string)=>{

    console.log("success");
    
    toast.success(message, {
        position: "top-center",
        autoClose: toastDuration,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
        });

}


export const errorMsg = (message:string)=>{

    console.log("error");
    toast.error(message, {
        position: "top-center",
        autoClose: toastDuration,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }