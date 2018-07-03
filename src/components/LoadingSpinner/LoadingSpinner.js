import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './LoadingSpinner.css';

const LoadingSpinner = (props) => (
    <div className={styles.cubeGrid}>
        {spinnerElements(new Array(9))}
    </div>
)

const spinnerElements = (array) => {
    const elementList = Array.from(array, (element, index) => {    
        return <div key={index} className={`${styles.cube} ${"skCube" + index}`} id={index}></div>
    });

    return elementList;
}

export default CSSModules(LoadingSpinner);