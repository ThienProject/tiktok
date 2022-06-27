
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
        path : '/', component: Home
    },

    {
        path : '/following', component: Following
    },
    
    {
        path : '/@:nickname', component: Profile
    },
    {
        path : '/upload', component: Upload, layout : OnlyHeader
    },
    {
        path : '/search', component: Search, layout : null
    },
]

// required login
const privateRoutes = [

]
export {publicRoutes, privateRoutes} 