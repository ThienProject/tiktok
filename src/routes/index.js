
import config from '~/config'
// Layout
// Layout
import {OnlyHeader} from '~/layouts';

// pages
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
import Profile from '~/pages/Profile';
// No need to login
const publicRoutes = [
    {
        path : config.routes.home, component: Home
    },

    {
        path : config.routes.following, component: Following
    },
    
    {
        path : config.routes.profile, component: Profile
    },
    {
        path : config.routes.upload, component: Upload, layout : OnlyHeader
    },
    {
        path : config.routes.search, component: Search, layout : null
    },
]

// required login
const privateRoutes = [

]
export {publicRoutes, privateRoutes} 