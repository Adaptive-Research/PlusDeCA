import {Footer, StatusMsg} from "../components";

export function UnknownMsgPage() {
    console.log('UnknownMsgPage()');
    var msg = "Undefined route or bad gateway  =>" + window.location.pathname;
    return (
        <div>
            <StatusMsg color="alert alert-danger" message={msg}/>
            <Footer/>
        </div>
    )
}
