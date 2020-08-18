import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from '../../selection.json';

export const Icon = createIconSetFromIcoMoon(fontelloConfig);

//Module
export const mapStateToProps = (state) => {
    return {
        openedInvitePopup: state.openedInvitePopup,
    }
}

export const colors = {
    white: '#fff',
    black: '#000',
    red: '#fb3416',
    blue: '#11499d',
    primary: '#5844af',
    subText: '#5b5c5d',
    gray: '#a5a3a8',
    green: '#43b880',
    yellow: '#fdcd08',
    lightGray: '#d1d0d0',
    darkGray: '#646366',
    mustard: '#f0a328'
};

export const TopButtons = {
    buttons: ['Live', 'Upcoming', 'Past'],
    icons: ['live-section', 'upcoming-section', 'past-section'],
    iconColors: [colors.primary, colors.green, colors.yellow]
}

export const MyEventInfo = {
    icons: ['posts-time-date', 'posts-views', 'cams'],
    iconColors: [colors.gray, colors.gray, colors.gray]
}

export const MyEventTop = {
    buttons: ['Leader', 'Participant'],
    icons: ['leader', 'participant'],
    iconColors: [colors.primary, colors.primary]
}

export const EventTopInfo = {
    icons: ['posts-place', 'posts-time-date', 'posts-views'],
    iconColors: [colors.gray, colors.gray, colors.gray]
}

export const EventBottomInfo = {
    icons: [['reactions-clap', 'reactions-heart', 'reactions-unlike'], 'comments', 'cams-landing'],
    iconColors: [colors.gray, colors.gray, colors.gray]
}

export const EventDetailBottomInfo = {
    buttons: ['1.3 M', '42 k', 'Share'],
    icons: [['reactions-wow', 'reactions-hand', 'reactions-heart'], 'comments', 'share'],
    iconColors: [colors.gray, colors.gray, colors.gray]
}

export const DrawerListbuttons = {
    buttons: ['My Profile', 'Notification', 'Settings', 'Help', 'About'],
    icons: ['menu-my-profile', 'menu-nortification', 'menu-settings', 'menu-help', 'menu-about'],
    iconColors: [colors.black, colors.black, colors.black, colors.black, colors.black],
}

export const SocialButtons = {
    icons: ['sign-in-with-google', 'sign-in-with-facebook', 'sign-in-with-apple'],
    colors: [colors.red, colors.blue, colors.black]
}

export const ReactionButtons = {
    icons: ['reactions-clap', 'reactions-hand', 'reactions-heart', 'reactions-wow', 'reactions-unlike', 'reactions-vomiting'],
    colors: [colors.green, colors.mustard, colors.red, colors.yellow, colors.gray, colors.gray]
}

export const EventMenus = {
    buttons: ['Share', 'Watch Later', 'Download', 'Report'],
    icons: ['share', 'watchlater', 'download', 'report'],
}

export const MyEventMenus = {
    buttons: ['Edit', 'Delete', 'Filter', 'Hide', 'Finish', 'Cancel', 'Start', 'Resume', 'View Details', 'Share', 'Test'],
    icons: ['edit', 'delete', 'filter', 'hide', 'finish', 'cancel', 'start', 'resume', 'view-details', 'share', 'test'],
}

export const EventDetailMenus = {
    buttons: ['Follow', 'Share', 'Watch Later', 'Download', 'Total View', 'Project', 'Settings', 'Report'],
    icons: ['follow', 'share', 'watchlater', 'download', 'total-view', 'project', 'video-settings', 'report'],
}
