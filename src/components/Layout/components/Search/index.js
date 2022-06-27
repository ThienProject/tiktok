import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const debounced = useDebounce(searchValue,500);

    useEffect(() => {
        if(!debounced.trim()){
            setSearchResult([]);
            return
        }
        setLoading(true);
       fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
        .then((res)=>res.json())
        .then((res)=> {
            setSearchResult(res.data);
            setLoading(false);
        })
        .catch(()=>{
            setLoading(false);
        })
    },[debounced]);

    const handleClear = ()=> {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    }
    
    const  handleHideResult = ()=> {
        setShowResult(false);
    }

    return (
        <HeadlessTippy
            interactive={true}
            visible={searchResult.length > 0 && showResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                       {searchResult.map((item)=>{
                           return    <AccountItem key={item.id} data ={item} />
                        })} 
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search account and video"
                    spellCheck={false}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    onFocus={() => {
                        setShowResult(true);
                    }}
                />
                {!!searchValue && !loading &&(
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                { loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> }

                <button className={cx('btn-search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}
export default Search;
