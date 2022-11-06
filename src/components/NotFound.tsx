import { FunctionComponent } from "react";

interface NotFoundProps {

}

const NotFound: FunctionComponent<NotFoundProps> = () => {
    return ( <>

        <div className="text-center" style={{marginTop:"10rem", marginBottom:"5rem"}}>
            <img src="/media/images/not_found/img_not_found.png" alt="" />
        </div>
    </> );
    }

    export default NotFound;