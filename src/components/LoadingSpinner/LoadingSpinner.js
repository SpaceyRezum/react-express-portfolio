import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './LoadingSpinner.css';

const spinnerElements = (array) => {
    const elementList = Array.from(array, (element, index) => 
        <div key={index} className={`${styles.cube} ${styles.cube + index}`}>Yo</div>
    );

    return elementList;
}

const LoadingSpinner = () => {
    <div class={styles.cubeGrid}>
        {spinnerElements(new Array(9))}
    </div>
}

export default CSSModules(LoadingSpinner);