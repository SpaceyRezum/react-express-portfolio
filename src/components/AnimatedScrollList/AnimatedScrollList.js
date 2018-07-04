import React from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from "./AnimatedScrollList.css";
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const AnimatedScrollList = (props) => {
    const content = props.isLoading ? (
        <LoadingSpinner />
    ) : (
            <ul className={styles.animatedListContainer}>
                {props.projects.map((project) => {
                    return (
                        <li key={project.id}>
                            <Link to={`/projects/${project.id}`}>{project.title}</Link>
                        </li>
                    )
                })}
                <li>
                    <Link to="/About">Contact - About Me</Link>
                </li>
            </ul>
        );
    return content;
}

export default CSSModules(AnimatedScrollList);