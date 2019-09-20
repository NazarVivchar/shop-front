import {connect} from "react-redux";
import Header from "./Header";
import {checkIfUserLoggedAction} from "../../redux/actions/userActions/userActions";
import {logOutUser} from "../../redux/actions/userActions/userActionsDispatcher";

const mapDispatchToProps = dispatch => {
    return {
        checkIfUserIsLogged: () => dispatch(checkIfUserLoggedAction()),
        logOutUser: () => dispatch(logOutUser())
    }
};
const mapStateToProps = state => {
    return {
        isUserLogged: state.userData.isLogged,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);