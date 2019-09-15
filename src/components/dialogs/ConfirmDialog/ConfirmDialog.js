import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

class ConfirmDialog extends Component {
    handleConfirm = () => {
        this.props.handleClose();
        this.props.handleConfirm();
    };

    render() {
        return (
            <Dialog
                open={this.props.isOpened}
                onClose={this.props.handleClose}>
                <DialogTitle>
                    {this.props.messageText}
                </DialogTitle>
                <DialogActions>
                    <Button
                        onClick={this.props.handleClose}>
                        Скасувати
                    </Button>
                    <Button
                        color="secondary"
                        onClick={this.handleConfirm}>
                        {this.props.mainButtonText}
                    </Button>
                </DialogActions>
            </Dialog>

        );
    }
}

export default ConfirmDialog;