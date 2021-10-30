import React, { Fragment } from 'react';
import spinner from './spinner.svg';

const Spinner = () => (
    <Fragment>
        <img
            src={spinner}
            alt="Loading..."
            style={{
                width: '50px',
                margin: '10vh auto',
                display: 'block',
                animation: 'spin 1.6s linear infinite',
            }}
        />
    </Fragment>
);

export default Spinner;
