import './index.scss'
import {FC} from "react";
import {ReactComponent as Lock} from "../assets/lock_logo.svg";

export interface IHeaderProps {
    textHeader: string
}
const Header:FC <IHeaderProps> = ({textHeader}) => {
    return (
        <div className={'header'}>
            <Lock style={{height: "35px", width:"35px", marginRight:"10px", marginLeft:"10px"}}/><h1>{textHeader}</h1>

        </div>
    )
}

export default Header