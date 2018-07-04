import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './About.css';
import mainPhoto from '../../shared/images/alexis-bellet.png';
import Layout from '../Layout/Layout';
import SingleElementWrapper from '../../shared/hoc/SingleElementWrapper';
import SocialMediaIconList from '../../components/SocialMediaIconList/SocialMediaIconList';
import SocialMediaIconHelper from '../../components/SocialMediaIconList/SocialMediaIconHelper';
import axios from 'axios';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: "",
            emailSending: false,
            emailSent: false,
            form: {
                name: {
                    value: "",
                    required: true,
                    valid: false
                },
                email: {
                    value: "",
                    required: true,
                    valid: false
                },
                subject: {
                    value: "",
                    required: true,
                    valid: false
                },
                message: {
                    value: "",
                    required: true,
                    valid: false
                }
            }
        }
    }

    inputChange(inputName, value) {
        let updatedState = Object.assign({}, this.state);
        updatedState.form[inputName] = {
            value: value,
            valid: (!value ? false : true),
        };
        this.setState(updatedState);
    }

    resetValues() {
        this.setState({
            form: {
                name: {
                    value: "",
                    required: true,
                    valid: false
                },
                email: {
                    value: "",
                    required: true,
                    valid: false
                },
                subject: {
                    value: "",
                    required: true,
                    valid: false
                },
                message: {
                    value: "",
                    required: true,
                    valid: false
                },
            }
        });
    }

    sendEmail(event) {
        event.preventDefault();
        this.setState({ emailSending: true });
        const emptyFields = this.validateForm(this.state.form);
        if (emptyFields.length <= 0) {
            var data = {
                name: this.state.form.name.value,
                email: this.state.form.email.value,
                subject: this.state.form.subject.value,
                message: this.state.form.message.value,
            };
            axios.post('/api/contact', data).then((response) => {
                this.setState({ errorMessage: "", emailSending: false, emailSent: true });
                return;
            }).catch((err) => {
                this.setState({ errorMessage: err, emailSending: false, emailSent: false });
                return;
            })
        } else {
            const errorMessage = emptyFields.length > 1 ? `${emptyFields.join(', ')} are required fields` : `${emptyFields[0]} is a required field`;
            this.setState({ errorMessage: errorMessage, emailSending: false, emailSent: false });
        }
    }

    validateForm(formObject) {
        let emptyFields = [];
        Object.entries(formObject).forEach(element => {
            if (element[1].valid === false && element[1].required)
                emptyFields.push(element[0]);
        });
        return emptyFields;
    }

    render() {
        const leftContainerContent = (
            <SingleElementWrapper>
                <h2>Contact - About Me</h2>
                <form onSubmit={(event) => this.sendEmail(event)}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={this.state.form.name.value} onChange={(event) => this.inputChange(event.target.attributes.name.value, event.target.value)} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={this.state.form.email.value} onChange={(event) => this.inputChange(event.target.attributes.name.value, event.target.value)} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" id="subject" value={this.state.form.subject.value} onChange={(event) => this.inputChange(event.target.attributes.name.value, event.target.value)} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea type="text" name="message" id="message" value={this.state.form.message.value} onChange={(event) => this.inputChange(event.target.attributes.name.value, event.target.value)} />
                    </div>
                    {!this.state.emailSending && !this.state.emailSent ? (<div className={styles.buttonContainer}>
                        <button type="submit">Send</button>
                        <button type="button" onClick={() => this.resetValues()}>Reset</button>
                    </div>) : (this.state.emailSending ? <LoadingSpinner /> : <p>Your email was sent successfully! I will get back to you shortly!</p>)}
                </form>
            </SingleElementWrapper>
        );
        const rightContainerContent = (
            <SingleElementWrapper>
                <img src={mainPhoto} className={styles.Portrait} alt="Portrait Alexis Bellet" />
                <div className={styles.aboutParagraphContainer}>
                    <h3>About me</h3>
                    <p>
                        My name is Alexis Bellet, I am a versatile web developer originally from Grenoble, France and currently living in the Toronto Area in Ontario, Canada (after leaving in Germany for 3 years). Throughout my career, I have specialized in Javascript but have history picking up new languages for specific tasks/jobs.
                    </p>
                    <p>
                        With a background in international business and digital marketing (and experience in SEO/SEA), I am capable of wearing several hats and love working in diverse teams.
                    </p>
                    <p>
                        Have any projects you want to collaborate on or you are just interested in having a chat over a drink? Let me know!
                    </p>
                    <p>
                        Talk to you soon!
                    </p>
                </div>
                <SocialMediaIconList icons={[SocialMediaIconHelper.linkedin, SocialMediaIconHelper.github, SocialMediaIconHelper.twitter]} />
            </SingleElementWrapper>
        );
        return (
            <Layout leftContainerContent={leftContainerContent} rightContainerContent={rightContainerContent} />
        )
    }
}

export default CSSModules(About);