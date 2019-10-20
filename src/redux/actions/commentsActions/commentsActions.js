export const commentsActionTypes = {
    GET_COMMENTS: '[COMMENTS] Trying to get comments',
    GET_COMMENTS_SUCCESS: '[COMMENTS] Successfully got all comments',
    SAVE_COMMENT_SUCCESS: '[COMMENTS] Successfully saved new category',
};

export const getCommentsAction = () => ({
    type: commentsActionTypes.GET_COMMENTS,
});

export const getCommentsSuccessAction = comments => ({
    type: commentsActionTypes.GET_COMMENTS_SUCCESS,
    payload: comments,
});

export const saveCommentSuccessAction = comment => ({
    type: commentsActionTypes.SAVE_COMMENT_SUCCESS,
    payload: comment,
});
