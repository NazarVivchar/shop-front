import {connect} from "react-redux";
import ProductDialog from "./ProductDialog";
import {
    getProducts,
    updateProduct
} from "../../../redux/actions/productsActions/productsActionsDispatcher";
import {getCategories} from "../../../redux/actions/categoriesActions/categoriesActionsDispatcher";

const mapDispatchToProps = dispatch => {
    const loadData = () => {
        dispatch(getCategories());
        dispatch(getProducts());
    };
    const handleSubmit = product => dispatch(updateProduct(product));

    return {
        loadData,
        handleSubmit
    }
};

const mapStateToProps = (state, ownProps) => {
    const {product} = ownProps;

    return {
        categories: state.categoriesData.categories,
        initialState: {
            product: {
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                image: product.image,
                category: product.category,
            },
            imageName: '',
            shouldPriceShrink: false,
        },
        chooseImageText: "Виберіть нове зображення"
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDialog);