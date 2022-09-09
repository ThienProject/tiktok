import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from './AccountPreview.module.scss';
const cx = classNames.bind(styles)
function AccountPreview (){
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img className={cx('avatar')} 
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662793200&x-signature=Jd51a4IV6IzJ9bvlEwBqZu3x2C4%3D"
                    alt = "" />
                <div><Button  primary className = {cx('btn-follow')}>Follow</Button></div>
                
            </header>
            <section className={cx('body')}>
                <p className={cx('nickname')}><strong>pt.lovely.end</strong>
                            <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                        </p>
                 <p className={cx('name')}>Phạm Văn Thiên</p>
            </section>
            <footer className={cx('footer')}>
                <strong className={cx('count-follow')}>8.5M </strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('count-follow')}>8.5M</strong>
                <span className={cx('label')}>Likes</span>
            </footer>
        </div>
    )
}
export default AccountPreview;