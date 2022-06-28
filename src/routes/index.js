import routesConfig from '~/config/router'
// Layout
import {OnlyHeader} from '~/components/Layout';

// pages
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
import Profile from '~/pages/Profile';
// No need to login
const publicRoutes = [
    {
        path : routesConfig.home, component: Home
    },

    {
        path : routesConfig.following, component: Following
    },
    
    {
        path : routesConfig.profile, component: Profile
    },
    {
        path : routesConfig.upload, component: Upload, layout : OnlyHeader
    },
    {
        path : routesConfig.search, component: Search, layout : null
    },
]

// required login
const privateRoutes = [

]
export {publicRoutes, privateRoutes} 