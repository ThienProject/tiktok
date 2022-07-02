import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {Link} from 'react-router-dom'
import classNames from "classnames/bind"
import PropTypes from 'prop-types'
import Images from "../Images";
import styles from './AccountItem.module.scss'
const cx = classNames.bind(styles);
function AccountItem({data})
{
    return <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
        <Images  className={cx('avatar')} src={data.avatar} alt={data.nickname}/>
        <div className={cx('info')}>
            <h5 className={cx('name')}> 
                <span>{data.full_name}</span>
               {data.tick &&  <FontAwesomeIcon className={cx('check-icon')}  icon={faCheckCircle}/>}
            </h5>
            <span className={cx('username') } >{data.nickname}</span>
        </div>
        
    </Link>
}
AccountItem.propTypes = {
    data : PropTypes.object.isRequired
}
export default AccountItem