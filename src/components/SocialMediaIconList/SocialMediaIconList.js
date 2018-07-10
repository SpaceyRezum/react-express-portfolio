import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './SocialMediaIconList.css';

const SocialMediaIconList = (props) => (
    <div className={styles.LinkContainer}> 
        { props.icons.map((iconObject, index) => {
            return <a key={index} className={styles.Icon} href={iconObject.url} title={iconObject.title}>{iconObject.unicode}</a>
        }) }
    </div>
)

export default CSSModules(SocialMediaIconList);