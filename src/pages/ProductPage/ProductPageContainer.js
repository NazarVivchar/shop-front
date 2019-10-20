import {connect} from "react-redux";
import ProductPage from "./ProductPage";
import {getProductById, updateProduct} from "../../redux/actions/productsActions/productsActionsDispatcher";

const mapDispatchToProps = (dispatch, ownProps) => {
    const loadData = () => {
        dispatch(getProductById(ownProps.match.params.productId));
    };


const saveComment = product => (name, surname, commentText) => {
    dispatch(updateProduct({
        ...product,
        comments: [
            ...product.comments,
            {
                name,
                surname,
                commentText
            }
        ]
    }))};

    return {
        loadData,
        saveComment
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.productsData.products.find(product=>{
            return product.id===Number(ownProps.match.params.productId);
        }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);