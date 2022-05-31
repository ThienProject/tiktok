import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind"
import styles from './AccountItem.module.scss'
const cx = classNames.bind(styles);
function AccountItem()
{
    return <div className={cx('wrapper')}>
        <img  className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/205d4812d9f51f6bc23308d18580f805~c5_300x300.webp?x-expires=1654160400&x-signature=NWPd%2BE2oQaE4W4P4IcYJYwdqSFo%3D" alt="Hoa"/>
        <div className={cx('info')}>
            <h5 className={cx('name')}> 
                <span>Phạm Văn Thiên</span>
                <FontAwesomeIcon className={cx('check-icon')}  icon={faCheckCircle}/>
            </h5>
            <span className={cx('username') } >thienpham15</span>
        </div>
        
    </div>
}

export default AccountItem