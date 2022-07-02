import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import {forwardRef} from 'react'
import styles from "./Button.module.scss";
import PropTypes from "prop-types"
const cx = classNames.bind(styles);

const  Button  = forwardRef(({
     to,
     href, 
     primary = false, 

    outline = false
    ,small =false,
     large = false,
     text = false,
     disable = false,
     className,
      children,
      onClick,
      rounded,
      leftIcon,
      rightIcon,
       ...passProps
    }, ref) => {

    let Comp = 'button';
    const props ={
        onClick,
        ...passProps
    }
    if(to){
        props.to = to;
        Comp = Link;
    }
    else if(href){
        props.href = href;
        Comp = 'a'
    }
    if(disable){
        delete props.onClick;
    }

    const classes = cx('wrapper',
    {
        [className] : className,
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded
    }

    );

    return (
        <Comp ref = {ref} className ={classes} {...props} >
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
})
    Button.propTypes = {
        children : PropTypes.node.isRequired,
        to : PropTypes.string, 
        href : PropTypes.string,
        primary : PropTypes.bool,
        outline : PropTypes.bool,
        rounded : PropTypes.bool,
        text : PropTypes.bool,
        disable : PropTypes.bool,
        small : PropTypes.bool,
        large : PropTypes.bool,
        className : PropTypes.string,
        onClick : PropTypes.func,
        leftIcon : PropTypes.node,
        rightIcon : PropTypes.node,
    }
export default  Button