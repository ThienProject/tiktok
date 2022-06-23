import classNames from "classnames/bind";
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import {Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const defaultFn = () =>{}
const cx = classNames.bind(styles);
function Menu({children, items =[], onChange = defaultFn}){
    const [history, setHistory] = useState([{data : items}])
    const current = history[history.length -1];

    function renderItems(){
       return current.data.map((item, index) => {
            const isParent = !!item.subChildren;
            return <MenuItem key = {index} 
                data={item} 
                onClick={()=>{
                if(isParent){
                    setHistory(prev => [...prev, item.subChildren])
                }
                else{
                    onChange(item)
                }
            }} ></MenuItem>
        })
    }

    return (
        
            <Tippy
                        visible
                       delay={[0, 500]}
                        interactive = {true}
                        placement='bottom-end'
                        render={(attrs) => (
                                <div className={cx('menu-more')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper className={cx('menu-popper')}>
                                    { history.length > 1 && <Header onBack={()=>{
                                       setHistory(prev => prev.slice(0,prev.length -1));
                                    }} title = "language" > </Header>}
                                        {renderItems()}
                                    </PopperWrapper>
                                </div>
                        )}
                        >
                        {children}
                    </Tippy>
        
    );
}
export default Menu;