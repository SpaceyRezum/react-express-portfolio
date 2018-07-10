import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './About.css';
import mainPhoto from '../../shared/images/alexis-bellet.png';
import Layout from '../Layout/Layout';
import SingleElementWrapper from '../../shared/hoc/SingleElementWrapper';
import SocialMediaIconList from '../../components/SocialMediaIconList/SocialMediaIconList';
import SocialMediaIconHelper from '../../components/SocialMediaIconList/SocialMediaIconHelper';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import axios from 'axios';
import NavLinks from '../../components/NavLinks/NavLinks';

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

    resetValues(hardReset) {
        var updatedState = {
            errorMessage: "",
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
        };
        if (hardReset) {
            updatedState.emailSending = false;
            updatedState.emailSent = false;
        }
        this.setState(updatedState);
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
        const leftContainerContent = (!this.state.emailSending && !this.state.emailSent ? (
            <SingleElementWrapper>
                <form className={styles.FormContainer} onSubmit={(event) => this.sendEmail(event)}>
                    <div className={styles.TitleContainer}>
                        <h2 className={styles.Title}>Contact - About Me</h2>
                    </div>
                    <div className={styles.Form}>
                        <div className={styles.ErrorMessageContainer}>
                            {this.state.errorMessage}
                        </div>
                        <div className={styles.InputGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" value={this.state.form.name.value} onChange={(event) => this.inputChange(event.target.attributes.name.value, event.target.value)} />
                        </div>
                        <div className={styles.InputGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" value={this.state.form.email.value} onChange={(event) => this.inputChange(event.target.attributes.name.value, event.target.value)} />
                        </div>
                        <div className={styles.InputGroup}>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" name="subject" id="subject" value={this.state.form.subject.value} onChange={(event) => this.inputChange(event.target.attributes.name.value, event.target.value)} />
                        </div>
                        <div className={styles.InputGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea rows="6" type="text" name="message" id="message" value={this.state.form.message.value} onChange={(event) => this.inputChange(event.target.attributes.name.value, event.target.value)} />
                        </div>
                    </div>
                    <div className={styles.ButtonContainer}>
                        <button type="submit">Send</button>
                        <button type="button" onClick={() => this.resetValues()}>Reset</button>
                    </div>
                </form>
                <NavLinks links={[{ url: "/", text: "Back to Homepage" }]} />
            </SingleElementWrapper>
        ) : (this.state.emailSending ? <LoadingSpinner /> : (
            <div>
                <p>Your email was sent successfully! I will get back to you shortly!</p>
                <p>The following buttons allow you to go back to the home page or send another message</p>
                <Link to="/">Back to Homepage</Link>
                <button type="button" onClick={() => this.resetValues(true)}>Send Another Message</button>
            </div>
        )));
        const rightContainerContent = (
            <SingleElementWrapper>
                <div className={styles.PortraitContainer}>
                    <img src={mainPhoto} className={styles.Portrait} alt="Portrait Alexis Bellet" />
                </div>
                <div className={styles.AboutParagraphContainer}>
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