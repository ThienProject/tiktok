import styles from "./Sidebar.module.scss"
import classNames from "classnames/bind";
import Menu, {MenuItem} from "./Menu";
import config from "~/config";
import { HomeIcon, HomeIconActive, LiveIcon, LiveIconActive, UserGroupIcon, UserGroupIconActive } from "~/components/Icons";
const cx = classNames.bind(styles)
function Sidebar(){
    return  <div className={cx('wrapper')}>
        <Menu>
            <MenuItem title = "For Your" to = {config.routes.home} icon ={<HomeIcon />} activeIcon = {<HomeIconActive/>} />
            <MenuItem title = "Following" to = {config.routes.following} icon ={<UserGroupIcon/>} activeIcon = {<UserGroupIconActive/>} />
            <MenuItem title = "LIVE" to = {config.routes.live} icon ={<LiveIcon/>} activeIcon = {<LiveIconActive/>}/>
        </Menu>
    </div>
}
export default Sidebar