import * as React from 'react';
import { Html, Button, Head, Body, Row, Section, Text, Container } from "@react-email/components";
import { ContactFormData } from './contactForm';

export function ContactEmail({ name, email, subject, message }: ContactFormData) {
    return (
        <Html lang="en">
            <Head />
            <Body style={main}>
                <Container style={container}>
                    <Section>
                        <Row>
                            <Text style={heading}>You have new message from "{name}"</Text>
                            <Text style={review}>{message}</Text>
                        </Row>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

const main = {
    backgroundColor: '#ffffff',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    width: '580px',
    maxWidth: '100%',
};

const heading = {
    fontSize: '24px',
    lineHeight: '1.3',
    fontWeight: '700',
    color: '#484848',
};

const paragraph = {
    fontSize: '18px',
    lineHeight: '1.4',
    color: '#484848',
};

const review = {
    ...paragraph,  
    padding: '24px',
    backgroundColor: '#f2f3f3',
    borderRadius: '4px',
};


export default ContactEmail;