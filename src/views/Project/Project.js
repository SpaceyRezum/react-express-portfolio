import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import axios from 'axios';
import styles from './Project.css';
import Layout from '../Layout/Layout';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import SingleElementWrapper from '../../shared/hoc/SingleElementWrapper';
import TechStackIconList from '../../components/TechStackIconList/TechStackIconList';
import TechStackIconHelper from '../../components/TechStackIconList/TechStackIconHelper';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            project: {}
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`/api/projects/${id}`).then(response => {
            if (response.data)
                this.setState({ isLoading: false, project: response.data });
        });
    }

    render() {
        const leftContainerContent = this.state.isLoading ? <LoadingSpinner /> : (
            <SingleElementWrapper>
                <h2 className={styles.title}>Title</h2>
                <h3 className={styles.subtitle}>One liner description</h3>
                <div className={styles.projectLinkContainer}>
                    <a href="#" title="Github link for project">Source Code on Github</a>
                    <a href="#" title="Live version link to project">View it live!</a>
                </div>
                <div className={styles.techStackContainer}>
                    <h4 className={styles.techStackTitle}>Technology Stack Used</h4>
                    <div className={styles.techStackIcons}>
                        <TechStackIconList icons={[TechStackIconHelper.javascript]} />
                    </div>
                </div>
            </SingleElementWrapper>
        );
        const rightContainerContent = this.state.isLoading ? <LoadingSpinner revertColors /> : (
            <SingleElementWrapper>
                <img src="http://placekitten.com/200/300" alt="placeholder" />
                <div className={styles.descriptionContainer}>
                    <h3>Description</h3>
                    <p>
                        This is a description paragraph
                </p>
                </div>
            </SingleElementWrapper>
        );
        return <Layout leftContainerContent={leftContainerContent} rightContainerContent={rightContainerContent} />
    }
}

export default CSSModules(Project); 
