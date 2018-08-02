import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import axios from 'axios';
import styles from './Project.css';
import Layout from '../Layout/Layout';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import SingleElementWrapper from '../../shared/hoc/SingleElementWrapper';
import TechStackIconList from '../../components/TechStackIconList/TechStackIconList';
import TechStackIconHelper from '../../components/TechStackIconList/TechStackIconHelper';
import NavLinks from '../../components/NavLinks/NavLinks';

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
        }).catch(err => {
            alert(err.response.data);
            this.setState({
                isLoading: false, project: {}
            })
        });
    }

    render() {
        const navLinks = [{
            url: "/",
            text: "Back to Homepage"
        },
        {
            url: "/About",
            text: "Contact - About Me"
        }];

        const techStackArray = this.state.project.techStack ? this.state.project.techStack.map(name => TechStackIconHelper[name] ? TechStackIconHelper[name] : false) : [];

        const imageSrcSet = this.state.project && this.state.project.imageUrl ? `${this.state.project.imageUrl.replace('large', 'small')} 512w, ${this.state.project.imageUrl.replace('large', 'medium')} 768w, ${this.state.project.imageUrl} 1024w` : null;

        const imageSizes = this.state.project && this.state.project.imageUrl ? `(min-width: 640px) 50vw, 100vw` : null;

        const leftContainerContent = this.state.isLoading ? <LoadingSpinner /> : (
            <SingleElementWrapper>
                <div className={styles.TitleContainer}>
                    <h2 className={styles.Title}>{this.state.project.title}</h2>
                </div>
                <div className={styles.SubtitleContainer}>
                    <h3 className={styles.Subtitle}>{this.state.project.subtitle}</h3>
                </div>
                <div className={styles.ProjectLinkContainer}>
                    {this.state.project.liveUrl ? <a target="_blank" href={this.state.project.liveUrl} title="Live version link to project">View it live!</a> : null}
                    {this.state.project.githubUrl ? <a target="_blank" href={this.state.project.githubUrl} title="Github link for project">Source Code on Github</a> : null}

                </div>
                <div className={styles.TechStackContainer}>
                    <h4 className={styles.TechStackTitle}>Technology Stack Used</h4>
                    <TechStackIconList icons={techStackArray} />
                </div>
                <NavLinks links={navLinks} />
            </SingleElementWrapper>
        );
        const rightContainerContent = this.state.isLoading ? <LoadingSpinner revertColors /> : (
            <SingleElementWrapper>
                <div className={styles.ImageContainer}>
                    <img srcSet={imageSrcSet} sizes={imageSizes} src={this.state.project.imageUrl} alt={`${this.state.project.title}'s description`} />
                </div>
                <div className={styles.DescriptionContainer}>
                    <h3>Description</h3>
                    {this.state.project.description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                </div>
            </SingleElementWrapper>
        );
        return <Layout leftContainerContent={leftContainerContent} rightContainerContent={rightContainerContent} />
    }
}

export default CSSModules(Project); 
