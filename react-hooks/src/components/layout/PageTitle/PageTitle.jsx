import React from 'react';

import './PageTitle.css';

function PageTitle(props) {
    return (
        <blockquote className="pageTitle">
            <h1>
                {
                    props.pageTitle
                }
            </h1>
            <p>
                {
                    props.subTitle
                }
            </p>
        </blockquote>
    );
}

export default PageTitle;