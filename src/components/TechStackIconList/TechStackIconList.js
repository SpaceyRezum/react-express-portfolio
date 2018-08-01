import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './TechStackIconList.css';

const TechStackIconList = (props) => (
    <div className={styles.ListContainer}>
        {props.icons.map((iconObject, index) => iconObject.title ? (
            <a target="_blank" key={index} className={styles.IconLink} href={iconObject.url}><i key={index} title={iconObject.title} className={`${styles.Icon} ${iconObject.iconCode}`}></i></a>
            ) : null)
        }
    </div>
)

export default CSSModules(TechStackIconList);