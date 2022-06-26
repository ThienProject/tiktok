import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEarthAsia,
    faKeyboard,
    faEllipsisVertical,
    faCircleQuestion,
    faGear,
    faUser,
    faCoins,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Images';
import Search from '~/components/Layout/components/Search';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        subChildren: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    

    const loginUser = true;

   

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/@hoaa' },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Logout',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Image alt="Tiktok" src={images.logo} />
                </div>

                <div className={cx('middle')}>
                    <Search />
                </div>

                <div className={cx('action-group')}>
                    {loginUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <Button leftIcon={<UploadIcon></UploadIcon>} className={cx('action-btn')}>
                                    Upload
                                </Button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>{/* <FontAwesomeIcon icon={faPlus} /> */} Upload</Button>
                            <Button primary>{} Login</Button>
                        </>
                    )}
                    <Menu items={loginUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {loginUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="Phạm Văn Thiên"
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2e315939d516bfa2f95defc3ce1790a7~c5_100x100.jpeg?x-expires=1656234000&x-signature=GQ6pFfZ9gDbLVoSMgj1rcO%2F%2BG1Y%3D"
                            />
                        ) : (
                            <button className={cx('btn-more')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
