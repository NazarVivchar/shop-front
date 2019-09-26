import {connect} from "react-redux";
import {getProducts} from "../../../redux/actions/productsActions/productsActionsDispatcher";
import {selectNumberOfProductsInCategory} from "../../../selectors/categorySelectors";
import CategoryCard from "./CategoryCard";
import {deleteCategory} from "../../../redux/actions/categoriesActions/categoriesActionsDispatcher";

const mapDispatchToProps = (dispatch, ownProps) => {
    const loadData = () => {
        dispatch(getProducts());
    };

    const handleDelete = () => dispatch(deleteCategory(ownProps.category.id));

    return {
        handleDelete,
        loadData
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        numberOfProducts: selectNumberOfProductsInCategory(state, ownProps.category)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCard);
