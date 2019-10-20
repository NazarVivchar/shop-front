import {connect} from "react-redux";
import CommentFormCard from "./CommentFormCard";

const mapStateToProps = state => {
    return {
        isUserLogged: state.userData.isLogged,
        name: state.userData.name || "",
        surname: state.userData.surname || ""
    }
};

export default connect(mapStateToProps)(CommentFormCard);
