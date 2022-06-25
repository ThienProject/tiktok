import {useState,forwardRef} from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss'
import classNames from 'classnames';
// đổi tên fallback thành customFallback và đặt mặt định là ...
function Image({src,alt, className, fallback: customFallback = images.noImg, ...props},ref){

    const[fallback, setFallback] = useState('');
    const handleError = ()=>{
        setFallback(customFallback);
    }
    return <img 
    className={classNames(styles.wrapper, className)}
    ref = {ref} 
    alt = {alt} 
    src = {fallback || src }
    { ...props}
    onError = {handleError}
    />
}
export default forwardRef(Image)