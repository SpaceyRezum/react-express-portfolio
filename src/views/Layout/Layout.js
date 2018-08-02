import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Layout.css';

const Layout = (props) => {
    const fullContainerClass = props.mobileReverseStyling ? `${styles.FullContainer} ${styles.MobileReverseStyling}` : styles.FullContainer;
    return (
        <div className={fullContainerClass}>
            <div className={styles.LeftContainer}>
                <div className={styles.ContentContainer}>
                    {props.leftContainerContent}
                </div>
            </div>
            <div className={styles.RightContainer}>
                <div className={styles.ContentContainer}>
                    {props.rightContainerContent}
                </div>
            </div>
        </div>
    )
}

export default CSSModules(Layout);
