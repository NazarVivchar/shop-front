import {connect} from "react-redux";
import {getCategories} from "../../redux/actions/categoriesActions/categoriesActionsDispatcher";
import {getProducts} from "../../redux/actions/productsActions/productsActionsDispatcher";
import DashboardProductPage from "./DashboardProductPage";

const mapDispatchToProps = dispatch => {
    const loadData = categoryId => {
        dispatch(getCategories());
        dispatch(getProducts(categoryId));
        console.log('loadData');
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
        ],
        orderOptions: [
            {
                id: 0,
                name: 'За алфавітом',
                field: 'name',
                order: -1
            },
            {
                id: 1,
                name: 'За ціною (спадання)',
                field: 'price',
                order: -1
            },
            {
                id: 2,
                name: 'За ціною (зростання)',
                field: 'price',
                order: 1
            }
        ]
    }};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardProductPage);