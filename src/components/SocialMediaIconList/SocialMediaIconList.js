import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './SocialMediaIconList.css';

const SocialMediaIconList = (props) => (
    <div className={styles.listContainer}> 
        {props.icons.map((iconObject) => {
            return <a className={styles.icon} href={iconObject.url} title={iconObject.title}>{iconObject.unicode}</a>
        })}
    </div>
)

export default CSSModules(SocialMediaIconList);