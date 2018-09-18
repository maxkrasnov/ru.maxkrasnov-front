import Home from '../views/home';
import Note from '../views/note';
import Feedback from '../views/feedback';
import Works from '../views/works';
import HH from '../views/hh';

export default {
    routes: [
        {
            path: '/',
            component: Home,
            exact: true,
        },
        {
            path: '/page/:page',
            component: Home,
            exact: true,
        },
        {
            path: '/note/:code',
            component: Note,
            exact: true,
        },
        {
            path: '/feedback',
            component: Feedback,
            exact: true,
        },
        {
            path: '/works',
            component: Works,
            exact: true,
        },
        {
            path: '/works/page/:page',
            component: Works,
            exact: true,
        },
        {
            path: '/hh',
            component: HH,
            exact: true,
        },
    ],
    redirects: [],
}
