import {connect} from "react-redux";
import {getCategories} from "../../redux/actions/categoriesActions/categoriesActionsDispatcher";
import MainPage from "./MainPage";
import {getProducts} from "../../redux/actions/productsActions/productsActionsDispatcher";

const mapDispatchToProps = dispatch => {
    const loadData = () => {
        dispatch(getCategories());
        dispatch(getProducts());
    };

    return {loadData}
};

const mapStateToProps = state => {
    return {
        categories: state.categoriesData.categories,
        products: state.productsData.products,
        categoryOptions: [
            {
                id: 0,
                name: "Усі"
            },
            ...state.categoriesData.categories.map(category => ({
                id: category.id,
                name: category.name
            }))
        ]
    }};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);