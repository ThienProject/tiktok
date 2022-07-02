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
import * as searchService from '~/services/searchService'
const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const debouncedValue = useDebounce(searchValue,500);

    useEffect(() => {
        if(!debouncedValue.trim()){
            setSearchResult([]);
            return
        }
       

        const fetchApi =  async ()=>{
            setLoading(true);
            const result = await searchService.search(debouncedValue, 'less');
            setSearchResult(result);
            setLoading(false);
        }
        fetchApi();
     },[debouncedValue]);
    console.log("rerender....");
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if(!searchValue.startsWith(' ')){
            setSearchValue(searchValue);
        }
        
    }
    const handleClear = ()=> {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    }
    
    const  handleHideResult = ()=> {
        setShowResult(false);
    }
    const handleSubmit = (e)=>{
       
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
                    onChange={handleChange}
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

                <button className={cx('btn-search')} 
                    onMouseDown = {(e) => e.preventDefault()}
                     onClick ={handleSubmit}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}
export default Search;
