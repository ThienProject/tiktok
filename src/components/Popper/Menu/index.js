import classNames from "classnames/bind";
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import {Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);
function Menu({children, items =[]}){
    function renderItems(){
       return items.map((item, index) => {
            return <MenuItem key = {index} data={item} ></MenuItem>
        })
    }

    return (
        
            <Tippy
                       delay={[0, 500]}
                        interactive = {true}
                        placement='bottom-end'
                        render={(attrs) => (
                                <div className={cx('menu-more')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper className={cx('menu-popper')}>
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