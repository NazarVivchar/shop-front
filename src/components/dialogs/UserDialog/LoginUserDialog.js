import {connect} from "react-redux";
import UserDialog from "./UserDialog";
import {logInUser} from "../../../redux/actions/userActions/userActionsDispatcher";

const mapDispatchToProps = dispatch => {
    const handleSubmit = user => dispatch(logInUser(user));

    return {
        handleSubmit
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        initialState: {
            user: {
                username: "",
                password: ""
            },
        },
        dialogTitle: "Вхід",
        confirmButtonText: "Увійти",
        suggestionText: "Зареєструватися",
        isRegisterForm: false
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDialog);