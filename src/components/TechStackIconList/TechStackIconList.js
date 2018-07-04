import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './TechStackIconList.css';

const TechStackIconList = (props) => (
    <div className={styles.listContainer}> 
        {props.icons.map((iconObject, index) => {
            return <i key={index} className={`${styles.icon} ${iconObject.iconCode}`}></i>
        })}
    </div>
)

export default CSSModules(TechStackIconList);