import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Alert(props) {
  const capitalizeAlertType = (alertType) => {
    let word = alertType.toLowerCase()
    return word[0].toUpperCase() + word.slice(1)
  }

  return (
    <>
      <div className="alert-container" style = {{minHeight: "65px"}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalizeAlertType(props.alert.type)} !!</strong> {props.alert.msg}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
      </div>
    </>
  );
}
