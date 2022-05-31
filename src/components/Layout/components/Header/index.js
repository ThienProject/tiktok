import {useEffect, useState} from 'react'
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import {Wrapper as PopperWrapper } from '~/components/Popper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus, faPlane } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(()=>{
        setTimeout(() => {
            setSearchResult([1,2,3]);
        }, 0)
    })

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img alt="Tiktok" src={images.logo}></img>
                </div>

                <div className={cx('middle')}>
                <Tippy
                        interactive = {true}
                        visible = {searchResult.length >0} 
                        render={(attrs) => (
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <h4 className={cx('search-title')}>
                                            Accounts
                                        </h4>
                                        <AccountItem />
                                        <AccountItem />
                                    </PopperWrapper>
                                </div>
                        )}
                        >
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
                    </Tippy>
                </div>
                    
                

                <div className={cx('action-group')}>
                    <button>
                        <FontAwesomeIcon icon={faPlus} /> Upload
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faPlane} />{' '}
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Header;
