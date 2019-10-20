import {connect} from "react-redux";
import {getCategories} from "../../redux/actions/categoriesActions/categoriesActionsDispatcher";
import MainPage from "./MainPage";
import {getProductsAmount} from "../../redux/actions/productsActions/productsActionsDispatcher";

const mapDispatchToProps = dispatch => {
    const loadData = categoryFilter => {
        console.log('dfdfdf');

        dispatch(getCategories());
        dispatch(getProductsAmount(categoryFilter));
    };


    return {loadData}
};

const mapStateToProps = state => {
    return {
        categories: state.categoriesData.categories,
        productsAmount: state.productsData.total,

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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);