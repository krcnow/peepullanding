import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import EmailForm from '../components/emailForm'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Background from '../images/background.jpg';
import {IndexPage } from './index'

const Content = styled.div`
    border: 1px solid #FFD41D;
    background-color: #FFD41D;
    width: 100%;
    background-image: url(${Background});
    background-size: cover;
    background-position: center center;
`

const FlexChild = styled.div`
    text-align: center;
    @media only screen and (min-width: 768px) {
      text-align: left;
    }
`

const Section = styled.div`
    z-index: 2;
    position: relative;
    top: 0;
    color: #333;
    width: 100%;
    height: 100%;
    padding: 18% 7%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      padding: 7%;
    }
`

const GenCopy = styled.p`
    font-size: 1em;
    font-weight: 400;
    color: #f5f3f2;
    text-align: center;

    @media only screen and (min-width: 768px) {
      text-align: left;
    }

`

const PrivacyPolicyPage = () => (
  <div>
    <Content>

      <SEO title="Peepul" />
      <div
        css={css`

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1.7em;
          font-weight: 700;
          margin-left: 7%;
          margin-top: 50px;
          @media only screen and (min-width: 768px) {
            justify-content: flex-start;
          }
      `}>
        <div css={css`
            width: 30%;
            @media only screen and (min-width: 768px) {
              width: 10%;

            }
        `}>
          <Image filename="ghumo_fav.png"/>
          
        </div>

        <div css={css`
        margin-left: 5px;

        `}>
        </div>
      </div>

      <Section>
        <div
          css={css`
          width: 100%;
          @media only screen and (min-width: 768px) {
            width: 43%;
          }
      `}>

          <p css={css`
            font-size: 3em;
            font-weight: 700;
            color: #f5f3f2;
            line-height: 1.2em;
            text-align: center;
            @media only screen and (min-width: 768px) {
              margin-bottom: 0.2em;
              text-align: left;
            }
        `}>
          Support
          </p>

          <GenCopy>
            Reach out to rk@peepul.app for any queries, comments or feedback.
          </GenCopy>
          <br /><br />
        </div>

        {/* <p css={css`
          font-size: 1.8em;
          display: flex;
          flex-direction: column;
          color: #f5f3f2;
          padding: 16px;
          display: none;
          @media only screen and (min-width: 768px) {
            width: 40%;
            padding: 32px;
            display: block;
          }
      `}>
        <Image filename="model-mobile.PNG"/>
        </p> */}
      </Section>
    </Content>
{/* 
    <div css={css`
      width: 100%;
      height: auto;
      background-color: #fafafa;
      color: #333;
      display: block;
      padding: 18% 7% 0 7%;
      @media only screen and (min-width: 768px) {
        padding: 7% 7% 0 7%;
      }

  `}>

      <br />
      <div
        css={css`
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;

          z-index: 1;
          @media only screen and (min-width: 768px) {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
          }
      `}>
        <FlexChild>
          <h1>How it works</h1>
          <GenCopy>
           A tutor from anywhere in the world uploads an excellent video of a topic. A student from the other corner learns.
          </GenCopy>
          <br /><br />
          <h2>1. Create a guide</h2>
        While exploration a destination, easily record a guide of your stops.
          <br />Add insider tidbits and pictures.
        </FlexChild>

        <div
          css={css`
            width: 80%;
            height: 200px;
            overflow: hidden;
            align-self: center;
            margin : 50px 0;
            @media only screen and (min-width: 768px) {
              width: 30%;
              margin-top: 0px;
              height: 400px;
            }

        `}>
          <Image filename="itn.png" />
        </div>
      </div>

    </div>

    <div css={css`
      width:100%;
      background-color: #fafafa;
      padding: 7%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 10;

  `}>

      <FlexChild css={css`
        margin-bottom: 0px;
        align-self: flex-start;

    `}>
        <h2> 2. Share your travel guides</h2>
        <p>
      Once you are done recording. <br />
      Share your story with friends or fellow travelers and find out how they enjoyed it.
        </p><br />
      </FlexChild>

      <div css={css`
        width:90%;
        @media only screen and (min-width: 768px) {
          width:60%;
        }
    `}>
        <Image filename="map.png" />
      </div>

    </div>

    <div css={css`
      width: 100%;
      height: auto;
      background-color: #fafafa;
      color: #333;
      display: block;
      padding: 7% 7% 0 7%;

  `}>

      <br />
      <div
        css={css`
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;

          z-index: 1;
          @media only screen and (min-width: 768px) {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
          }
      `}>
        <FlexChild
        >
          <h2>3. Explore other guides</h2>
        Visiting a new destination?
          <br />Take a tour around town, with a traveler created guide or with one generated by our AI.
        </FlexChild>

        <div
          css={css`
            width: 80%;
            height: 200px;
            overflow: hidden;
            align-self: center;
            margin-top: 50px;
            @media only screen and (min-width: 768px) {
              width: 30%;
              margin-top: 0px;
              height: 400px;
            }

        `}>
          <Image filename="explore_foo.png" />
        </div>
      </div>

    </div> */}

    <div css={css`
      width:100%;
      background-color: #FFD41D;
      color: #333;
      padding: 7%;
      text-align: center;
      @media only screen and (min-width: 768px) {
        text-align: left;
      }
  `}>

      <h1>Sign up today</h1>
      <GenCopy>
      Get on the list to try out the app when we go live
      </GenCopy>
      <div css={css`
        width: 100%;
        @media only screen and (min-width: 768px) {
            width: 30%;
        }
    `}>
        <EmailForm />
      </div>

    </div>

    <footer css={css`
      width:100%;
      background-color: #333;
      color: #fff;
      padding: 20px 7%;
      font-size: 0.8em;
      text-align: center;
      @media only screen and (min-width: 768px) {
        text-align: left;
      }
  `}>
    © {new Date().getFullYear()} peepul.app <Link to="/">Home</Link>
    </footer>

  </div>

)

export default PrivacyPolicyPage
