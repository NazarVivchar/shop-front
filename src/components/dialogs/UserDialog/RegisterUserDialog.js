import {connect} from "react-redux";
import UserDialog from "./UserDialog";
import {registerUser} from "../../../redux/actions/userActions/userActionsDispatcher";

const mapDispatchToProps = dispatch => {
    const handleSubmit = values => dispatch(registerUser(
        {
            username: values.username,
            password: values.password,
            name: values.name,
            surname: values.surname
        }
    ));

    return {
        handleSubmit
    }
};

const mapStateToProps = () => {
    return {
        dialogTitle: "Реєстрація",
        confirmButtonText: "Зареєструватися",
        suggestionText: "Уже зареєстровані?",
        isRegisterForm: true
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDialog);