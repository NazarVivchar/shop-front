import React from "react";
import {Redirect} from "react-router";

function withAuthorization(Component, allowedRoles) {
    if(localStorage.getItem('Token')) {
        const token = localStorage.getItem('Token');
        const decodedToken = JSON.parse(window.atob(token.split('.')[1]));
        const userRoles = decodedToken.authorities.split(' ');
        if(userRoles.some(role=> allowedRoles.includes(role)))
            return (
                <Component />
            );
    }
    return <Redirect to='/main-page' />
}

export default withAuthorization;