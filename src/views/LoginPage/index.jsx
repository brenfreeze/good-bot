import React from 'react'
import styled from 'styled-components'

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

const SubmitButton =styled.button.attrs({ type: 'submit' })`
  font-size: 1rem;
  border: none;
  outline: none;
  background: var(--color-primary);
  padding: 1rem;
  border-radius: 10px;
`

class LoginPage extends React.Component {
  handleSubmit = event => {
    event.preventDefault()

    // console.log(event.target.email.value)
  }

  render() {
    return (
      <StyledLoginPage>
        <StyledForm onSubmit={this.handleSubmit}>
          <Title>
            Login
          </Title>
          <Input name="email" type="text" placeholder="email" />
          <Input name="password" type="password" placeholder="password" />
          <SubmitButton>
            Login
          </SubmitButton>
        </StyledForm>
      </StyledLoginPage>
    )
  }
}

export default LoginPage