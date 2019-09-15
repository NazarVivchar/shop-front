import {connect} from "react-redux";
import ProductDialog from "./ProductDialog";
import {saveProduct} from "../../../redux/actions/productsActions/productsActionsDispatcher";
import {getCategories} from "../../../redux/actions/categoriesActions/categoriesActionsDispatcher";

const mapDispatchToProps = dispatch => {
    const loadData = () => {
        dispatch(getCategories());
    };
    const handleSubmit = product => dispatch(saveProduct(product));

    return {
        loadData,
        handleSubmit
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categoriesData.categories,
        initialState: {
            product: {
                name: '',
                description: '',
                price: '',
                image: '',
                category:  state.categoriesData.categories[0],
            },
            imageName: '',
            shouldPriceShrink: false,
        },
        chooseImageText: "Виберіть зображення"
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDialog);