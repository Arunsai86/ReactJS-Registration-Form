import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    secondName: '',
    formSubmitted: false,
    firstNameRequiredText: false,
    secondNameRequiredText: false,
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, secondName} = this.state
    if (firstName === '' && secondName === '') {
      this.setState({
        firstNameRequiredText: true,
        secondNameRequiredText: true,
      })
    } else if (firstName === '') {
      this.setState({
        firstNameRequiredText: true,
      })
    } else if (secondName === '') {
      this.setState({
        secondNameRequiredText: true,
      })
    } else {
      this.setState({
        formSubmitted: true,
      })
    }
  }

  getFirstName = event => this.setState({firstName: event.target.value})

  getLastName = event => this.setState({secondName: event.target.value})

  lastNameCheckInput = event => {
    if (event.target.value === '') {
      this.setState({
        secondNameRequiredText: true,
      })
    } else {
      this.setState({
        secondNameRequiredText: false,
      })
    }
  }

  firstNameCheckInput = event => {
    if (event.target.value === '') {
      this.setState({
        firstNameRequiredText: true,
      })
    } else {
      this.setState({
        firstNameRequiredText: false,
      })
    }
  }

  clickAnotherResponseBtn = () => {
    this.setState({
      formSubmitted: false,
    })
  }

  renderSubmitSuccess = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p className="success-name">Submitted Successfully</p>
      <div className="button-container">
        <button
          type="button"
          className="button"
          onClick={this.clickAnotherResponseBtn}
        >
          Submit Another Response
        </button>
      </div>
    </>
  )

  renderSecondName = () => {
    const {secondName, secondNameRequiredText} = this.state
    return (
      <div>
        <label htmlFor="secondName" className="label-name">
          LAST NAME
        </label>
        <input
          type="text"
          id="secondName"
          className="label"
          value={secondName}
          placeholder="Last name"
          onBlur={this.lastNameCheckInput}
          onChange={this.getLastName}
        />
        {secondNameRequiredText && <p className="error">*Required</p>}
      </div>
    )
  }

  renderFirstName = () => {
    const {firstName, firstNameRequiredText} = this.state
    return (
      <div>
        <label htmlFor="firstName" className="label-name">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="First name"
          className="label"
          value={firstName}
          onBlur={this.firstNameCheckInput}
          onChange={this.getFirstName}
        />
        {firstNameRequiredText && <p className="error">*Required</p>}
      </div>
    )
  }

  render() {
    const {formSubmitted} = this.state
    return (
      <div className="app-container">
        <h1 className="title">Registration</h1>
        <div>
          {formSubmitted ? (
            <div className="container">{this.renderSubmitSuccess()}</div>
          ) : (
            <form className="container" onSubmit={this.submitForm}>
              {this.renderFirstName()}
              {this.renderSecondName()}
              <div className="button-container">
                <button type="submit" className="button">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
