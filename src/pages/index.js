import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import EmailForm from '../components/emailForm'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Background from '../images/background.jpg';
import { PrivacyPolicyPage } from './privacypolicy';
import mockvideo from '../images/mockvideo.mp4'

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

const IndexPage = () => (
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
          Instagram for educators and students.
          </p>

          <GenCopy>
          Teachers for students. Students for students. No more paywall between a pupil and high quality subject tutorials.
          Learning can be easy as swiping.
          </GenCopy>
          <br /><br />
        </div>

       
      </Section>
    </Content>
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
    
    <p css={css`
          font-size: 1.8em;
          display: flex;
          flex-direction: row;
          color: #f5f3f2;
          padding: 26px;
          display: none;
          @media only screen and (min-width: 768px) {
            width: 40%;
            padding: 12px;
            align-items: center;
            margin-left: 78px;
            display: block;
          }
      `}>
        {/* <Image filename="mockup-frame.png"/> */}
        <video height="700" autoplay="true" muted="true" loop="true"> 
          <source src={mockvideo} type="video/mp4" />
        </video>
        </p>
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
    © {new Date().getFullYear()} peepul.app  <Link to="/privacypolicy/">Privacy Policy</Link>
    <Link to="/support/">Support</Link>
    </footer>
  </div>

)
export default IndexPage
