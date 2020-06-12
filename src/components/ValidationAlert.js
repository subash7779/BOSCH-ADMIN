import React from 'react';

const ValidationAlert = ({ content }) => {
    return <div className="text-danger text-small" style={{ "height": "21px" }}>{content}</div>
}

export default ValidationAlert;