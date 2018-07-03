import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import axios from 'axios';
import styles from './Project.css';
import Layout from '../Layout/Layout';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

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
        axios.get(`/api/projects/${id}`).then( response => {
            if (response.data)
                this.setState({isLoading: false, project: response.data});
        });
    }
     
    render() {
        const leftContainerContent = (<LoadingSpinner/>);
        const rightContainerContent = (<div>&nbsp;</div>);
        return <Layout leftContainerContent={leftContainerContent} rightContainerContent={rightContainerContent} />
    }
}

export default CSSModules(Project); 
