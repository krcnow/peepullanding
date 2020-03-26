import React from 'react'
import { css } from '@emotion/core'
import * as axios from 'axios'
import ClipLoader from 'react-spinners/ClipLoader'
import styled from '@emotion/styled'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../components/toast.css'


const API_URL = 'https://us-central1-app-untropy.cloudfunctions.net/untropy/subscribe'

const FormContainer = styled.div`
  position:relative;
  text-align:center;
`

const SpinnerContainer = styled.div`
  padding: 8px 24px;

`


export default class EmailForm extends React.Component {
  // TODO Make this better - use hooks instead.
  state = {
    formInputs: {
      email: ''
    },
    isLoading: false
  }

  handleInputChange = event => {
    const { value, name } = event.target
    // TODO Make this better - not proud of nested objects
    this.setState({
      ...this.state,
      formInputs: {
        ...this.state.formInputs,
        [name]: value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      ...this.state,
      isLoading: true
    })
    axios.post(API_URL, {
      email: this.state.formInputs.email
    }).then(() => {

      toast.success(`Thank you!\nWe will reach out to you on ${this.state.formInputs.email} soon!`, {
        position: toast.POSITION.TOP_CENTER,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        autoClose: 2500,
        closeButton: false,
        bodyClassName: 'toast-body',

      });
      // TODO Make this better - no nexted objects
      this.setState({
        ...this.state,
        formInputs: {
          ...this.state.formInputs,
          email: ''
        },
        isLoading: false
      })
    }).catch((error) => {
      console.error(error)
      // TODO Make this better - no nexted objects
      this.setState({
        ...this.state,
        formInputs: {
          ...this.state.formInputs,
          email: ''
        },
        isLoading: false
      })
      toast.error("Sorry, There is problem with our systems. Please try again later.")
    })
  }

  render () {
    return (
      <FormContainer>
        <form
          onSubmit={this.handleSubmit}
          css={css`
            margin-bottom: 0;
            text-align: center;
            @media only screen and (min-width: 768px) {
              text-align: left;
            }
        `}>

          <input
            type="email"
            name="email"
            placeholder="Enter e-mail address"
            value={this.state.formInputs.email}
            onChange={this.handleInputChange}
            css={css`
              border-radius: 4px;
              width: 100%;
              height: auto;
              padding: 10px;
              display: block;
              margin-bottom: 24px;
              border: 1px solid #ccc;
              @media only screen and (min-width: 768px) {
                width: 100%;
                &:hover {
                  -webkit-box-shadow: 2px 1px 15px -1px rgba(209,209,209,0.3);
                  -moz-box-shadow: 2px 1px 15px -1px rgba(209,209,209,0.3);
                  box-shadow: 2px 1px 15px -1px rgba(209,209,209,0.3);
                }
              }

          `} required={true}/>

          {
            !this.state.isLoading &&
            <input
              type="submit"
              value="Submit"
              css={css`
                    border-radius: 5px;
                    background-color: #7052FF;
                    color: #fff;
                    padding: 8px 24px;
                    width: 100%;

                    @media only screen and (min-width: 768px) {
                      width: auto;
                      &:hover {
                        background-color: #333;

                      }
                  }
              `}
            />

          }
          <SpinnerContainer>
            <ClipLoader
              size={40}
              // size={"150px"} this also works
              color={'#000'}
              loading={this.state.isLoading}
            />
          </SpinnerContainer>
        </form>
        <ToastContainer toastClassName="dark-toast" />
      </FormContainer>


    )
  }
}
