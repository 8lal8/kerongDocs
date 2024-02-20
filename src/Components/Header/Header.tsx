import './index.scss'
import {FC} from "react";

export interface IHeaderProps {
    textHeader: string
}
const Header:FC <IHeaderProps> = ({textHeader}) => {
    return (
        <div className={'header'}><h1>{textHeader}</h1></div>
    )
}

export default Header