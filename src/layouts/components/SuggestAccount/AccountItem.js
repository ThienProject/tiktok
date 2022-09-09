import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestAccount.module.scss';
import { Wrapper } from '~/components/Popper';
import Button from '~/components/Button';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);
function AccountItem() {

    const renderPreview = (props)=>{
        return (
            <div tabIndex = '-1' {...props}>
                <Wrapper>
                    <div className={cx('preview')}>
                       <AccountPreview />
                    </div>
                </Wrapper>
            </div>
        )
    }
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                placement='bottom'
                offset={[-20,0]}
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662793200&x-signature=Jd51a4IV6IzJ9bvlEwBqZu3x2C4%3D"
                        alt='avatar'
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}><strong>pt.lovely.end</strong>
                            <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Phạm Văn Thiên</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {
}
export default AccountItem