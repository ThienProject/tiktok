import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus, faPlane } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img alt="Tiktok" src={images.logo}></img>
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search account and video" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    
                    <button className={cx('btn-search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('action-group')}>
                    <button><FontAwesomeIcon icon={faPlus} /> Upload</button>
                    <button><FontAwesomeIcon icon={faPlane} /> </button>
                </div>
            </div>
        </header>
    );
}
export default Header;
