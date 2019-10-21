export const getProductRating = product => {
    const {comments} = product;
    if(comments && comments.length) {
        return product.comments.reduce((sum, comment) => sum+comment.rating, 0)/product.comments.length;
    }
    else
    {
        return null;
    }
};