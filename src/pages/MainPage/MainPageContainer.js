import {connect} from "react-redux";
import {getCategories} from "../../redux/actions/categoriesActions/categoriesActionsDispatcher";
import MainPage from "./MainPage";
import {getProducts} from "../../redux/actions/productsActions/productsActionsDispatcher";
import {updateUserOrder} from "../../redux/actions/userOrderActions/userOrderActionsDispatcher";

const mapDispatchToProps = (dispatch, ownProps) => {
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