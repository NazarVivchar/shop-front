import {connect} from "react-redux";
import UserDialog from "./UserDialog";
import {logInUser} from "../../../redux/actions/userActions/userActionsDispatcher";

const mapDispatchToProps = dispatch => {
    const handleSubmit = values => dispatch(logInUser(
        {
            username: values.username,
            password: values.password,
        }
    ));

    return {
        handleSubmit
    }
};

const mapStateToProps = () => {
    return {
        dialogTitle: "Вхід",
        confirmButtonText: "Увійти",
        suggestionText: "Зареєструватися",
        isRegisterForm: false
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDialog);