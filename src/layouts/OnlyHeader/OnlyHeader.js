import Header from "~/layouts/components/Header";
import classNames from "classnames/bind";
import styles from "./OnlyHeader.module.scss";
const cx = classNames.bind(styles);
function OnlyHeader({children})
{
    return (
        <div>
            <Header />
            <div className={cx("container")}>
                <div className={cx("content")}>{children}</div> 
            </div>
            
        </div>
    )
}
export default OnlyHeader 