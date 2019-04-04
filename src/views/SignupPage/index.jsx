import React from 'react'
import styled from 'styled-components'
import { withFirebase, } from '../../services/FirebaseContext'

const StyledLoginPage = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 0;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  background: var(--color-secondary);
  border: none;
  outline: none;
  padding: 1rem;
  color: white;
  font-size: 1rem;
  margin-bottom: 10px;

  border-radius: 10px;

  &:last-child {
    margin-bottom: none;
  }
`

const Title = styled.h1`
  text-align: center;
  color: white;
  margin-bottom: 1rem;
`

const SubmitButton = styled.button.attrs({ type: 'submit' })`
  font-size: 1rem;
  border: none;
  outline: none;
  background: var(--color-primary);
  padding: 1rem;
  border-radius: 10px;
`

class SignupPage extends React.Component {
  handleSubmit = event => {
    event.preventDefault()

    const { firebase } = this.props
    const email = event.target.email.value
    const password = event.target.password.value

    firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log(authUser)
      })
      .catch(error => {
        alert(error.message)
      })
  }

  render() {
    return(
      <StyledLoginPage>
        <StyledForm onSubmit={this.handleSubmit}>
          <Title>
            Sign Up
          </Title>
          <Input name="full name" placeholder="fullname" type="text" />
          <Input name="email" placeholder="email" type="email" />
          <Input name="password" placeholder="password" type="password" />

          <SubmitButton>
            Sign Up
          </SubmitButton>
        </StyledForm>
      </StyledLoginPage>
    )
  }
}

export default withFirebase(SignupPage)