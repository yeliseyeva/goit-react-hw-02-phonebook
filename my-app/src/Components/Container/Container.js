import React from "react";
// import PropTypes from "prop-types";

function Container ({title, children}) {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default Container;