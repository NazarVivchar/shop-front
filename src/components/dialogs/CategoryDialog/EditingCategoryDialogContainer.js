import {connect} from "react-redux";
import {getCategories, updateCategory} from "../../../redux/actions/categoriesActions/categoriesActionsDispatcher";
import CategoryDialog from "./CategoryDialog";

const mapDispatchToProps = dispatch => {
    const loadData = () => {
        dispatch(getCategories());
    };
    const handleSubmit = category => dispatch(updateCategory(category));

    return {
        loadData,
        handleSubmit
    }
};

const mapStateToProps = (state, ownProps) => {
    const {category} = ownProps;

    return {
        categories: state.categoriesData.categories,
        initialState: {
            category: {
                id: category.id,
                name: category.name,
            },
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDialog);