import {connect} from "react-redux";
import UserDialog from "./UserDialog";
import {registerUser} from "../../../redux/actions/userActions/userActionsDispatcher";

const mapDispatchToProps = dispatch => {
    const handleSubmit = user => dispatch(registerUser(user));

    return {
        handleSubmit
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        initialState: {
            user: {
                username: "",
                password: "",
                passwordRepeat: "",
                name: "",
                surname: "",
            },
        },
        dialogTitle: "Реєстрація",
        confirmButtonText: "Зареєструватися",
        suggestionText: "Уже зареєстровані?",
        isRegisterForm: true
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDialog);