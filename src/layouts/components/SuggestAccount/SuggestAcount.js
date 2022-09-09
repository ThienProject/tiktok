import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './SuggestAccount.module.scss';
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);
function SuggestAccount({label}){
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <div>
                <AccountItem />
                <AccountItem />
                <p className={cx('more-btn')}>see all</p>
            </div>
        </div>
    );
}
SuggestAccount.propTypes = {
    label :PropTypes.string.isRequired
}
export default SuggestAccount