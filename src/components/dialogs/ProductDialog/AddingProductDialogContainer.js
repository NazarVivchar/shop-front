import {connect} from "react-redux";
import ProductDialog from "./ProductDialog";
import {saveProduct} from "../../../redux/actions/productsActions/productsActionsDispatcher";
import {getCategories} from "../../../redux/actions/categoriesActions/categoriesActionsDispatcher";

const mapDispatchToProps = dispatch => {
    const loadData = () => {
        dispatch(getCategories());
    };
    const handleSubmit = product => dispatch(saveProduct(
        {
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            image: product.image,
            discount: 0,
        }));

    return {
        loadData,
        handleSubmit
    }
};

const mapStateToProps = (state, ownProps) => {
    const categories = state.categoriesData.categories;
    const initialState = {
        product: {
            image: '',
            category: {id: 0},
        },
        imageName: '',
        shouldPriceShrink: false,
    };

    return {
        categories: categories,
        initialState: initialState,
        chooseImageText: "Виберіть зображення"
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDialog);