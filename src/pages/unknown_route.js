import {Footer, StatusMsg} from "../components";

export function UnknownMsgPage() {


    const msg = "Undefined route or bad gateway  =>" + window.location.pathname;
    return (
        <div>
            <StatusMsg color="alert alert-danger" message={msg}/>
            <Footer/>
        </div>
    )
}
