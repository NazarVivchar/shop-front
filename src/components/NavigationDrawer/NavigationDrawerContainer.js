import {connect} from "react-redux";
import NavigationDrawer from "./NavigationDrawer";

const mapStateToProps = state => {
    return {
        isUserLogged: state.userData.isLogged,
    }
};

export default connect(mapStateToProps)(NavigationDrawer);