import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './TechStackIconList.css';

const TechStackIconList = (props) => (
    <div className={styles.ListContainer}> 
        {props.icons.map((iconObject, index) => {
            return <i key={index} title={iconObject.title} className={`${styles.Icon} ${iconObject.iconCode}`}></i>
        })}
    </div>
)

export default CSSModules(TechStackIconList);