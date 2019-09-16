import {connect} from "react-redux";
import {getCategories, saveCategory} from "../../../redux/actions/categoriesActions/categoriesActionsDispatcher";
import CategoryDialog from "./CategoryDialog";

const mapDispatchToProps = dispatch => {
    const loadData = () => {
        dispatch(getCategories());
    };
    const handleSubmit = category => dispatch(saveCategory(category));

    return {
        loadData,
        handleSubmit
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categoriesData.categories,
        initialState: {
            category: {
                name: '',
            },
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDialog);