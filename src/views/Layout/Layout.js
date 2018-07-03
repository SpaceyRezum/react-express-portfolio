import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Layout.css';

const Layout = (props) => {
    return (
        
            <div className={styles.FullContainer}>
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
