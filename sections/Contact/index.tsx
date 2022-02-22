import { useState } from 'react'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import styles from './styles.module.css'
import SubmitButton from '../../components/FilledButton';
import ContactDataDTO from './DTOs/FormData';
import { EmailHelper } from '../../helpers'

const ContactSection = () => {

    const [formData, setFormData] = useState<ContactDataDTO>(ContactDataDTO.getInstance())
    const [messageSent, setMessageSent] = useState<boolean>(false)

    const changeForm = (value: string, field: string) => {
        switch(field) {
            case 'email':
                return setFormData({...formData, email: value})
            case 'name':
                return setFormData({...formData, name: value})
            case 'message':
                return setFormData({...formData, message: value})
        }
    }

    const isNameValid = (): boolean => {
        return formData.name.length > 2
    }

    const isEmailValid = (): boolean => {
        return EmailHelper.isEmail(formData.email)
    }

    const isMessageValid = (): boolean => {
        return formData.message.length > 2
    }

    const isFormValid = (): boolean => {
        
        const nameFieldIsValid = isNameValid()
        const emailFieldIsValid = isEmailValid()
        const messageFieldIsValid = isMessageValid()

        const allFields = [
            nameFieldIsValid,
            emailFieldIsValid,
            messageFieldIsValid
        ]

        setFormData({ 
            ...formData, 
            nameError: !nameFieldIsValid,
            emailError: !emailFieldIsValid,
            messageError: !messageFieldIsValid
        })

        return allFields.every((val) => val === true);
    }

    const sendForm = (): void => {
        
        if(!isFormValid())
            return

        // Call E-mail Service Here 
        const messageSent = true
        setMessageSent(messageSent)
    }

    return (
        <section id="contact">
          <div id={styles.container}>
            <div id={styles.title}>
                {
                    (!messageSent) ? 'Entre em contato' : 'Mensagem enviada com sucesso!'
                }
            </div>
            {
                (!messageSent) && (
                    <div id={styles.form}>
                        <Input
                            type='text'
                            placeholder='Nome'
                            name='contact_name_input'
                            value={formData.name}
                            onChangeFunction={(value) => changeForm(value, 'name')}
                            maxLength={50}
                            error={formData.nameError}
                        />
                        <Input
                            type='email'
                            placeholder='E-mail'
                            name='contact_email_input'
                            value={formData.email}
                            onChangeFunction={(value) => changeForm(value, 'email')}
                            maxLength={50}
                            error={formData.emailError}
                        />
                        <TextArea
                            name='contact_message_textarea'
                            cols={30}
                            rows={8}
                            placeholder='Mensagem'
                            maxLength={600}
                            value={formData.message}
                            onChangeFunction={(value) => changeForm(value, 'message')}
                            error={formData.messageError}
                        />
                        <SubmitButton 
                            text='Enviar' 
                            type='function' 
                            onClickFunction={() => sendForm()}
                            width='100%'
                        />
                    </div>
                )
            }
          </div>
        </section>
    )
}

export default ContactSection