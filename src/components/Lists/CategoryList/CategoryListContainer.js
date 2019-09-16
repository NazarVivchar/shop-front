import {connect} from "react-redux";
import {getCategories} from "../../../redux/actions/categoriesActions/categoriesActionsDispatcher";
import CategoryList from "./CategoryList";

const mapDispatchToProps = dispatch => {
    const loadData = () => {
        dispatch(getCategories());
    };

    return {loadData}
};

const mapStateToProps = state => {
    return {
            categories: state.categoriesData.categories.sort((c1, c2) => c1.name.localeCompare(c2.name))
        }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);