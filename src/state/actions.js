/**
 * action types
 */
export const OPEN_INVITE_DIALOGE = 'OpenInviteDialog';

export function openInviteDialog(open) {
    return {type: OPEN_INVITE_DIALOGE, open};
}
