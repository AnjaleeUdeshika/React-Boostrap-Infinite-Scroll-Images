import React from "react";
import { MDBFooter } from 'mdb-react-ui-kit';

import "../Styles/FooterS.css";


function Footer(props) {
  const { image } = props;
  return (
    <>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-google'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-linkedin'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-github'></i>
            </a>
          </div>
        </section> */}

        <section className='Footer-Main'>
          <div className='container text-center text-md-start mt-5'>
            <div className='row mt-3'>
              <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <a href='#'>
                    <img src={require("../Asset/BlueVenus.png")} />
                    </a>
                </h6>
                <p>
                The best NFT marketplace website in 
                the world and feel your experience in 
                selling or buy our work.
                </p>
              </div>

              <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 className='text fw-bold mb-4'>About</h6>
                <p>
                  <a href='#' className='text-reset' >
                  Product
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                  Resource
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                  {'Term & Condition'}
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                  FAQ
                  </a>
                </p>
              </div>

              <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 className='text fw-bold mb-4'>Company</h6>
                <p>
                  <a href='#!' className='text-reset'>
                  Our Team
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                  Partner With Us
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                  {'Privacy & Policy'}
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                  Features
                  </a>
                </p>
              </div>

              <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                <h6 className='text fw-bold mb-4'>Contact</h6>
                <p>
                  <a href='#!' className='text-reset'>
                  +94 777 387 643
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                  dasun@nirvanaclouds.com
                  </a>
                </p>

                <p>
                  <a href='' className='me-4 text-reset'>
                    <i className='fab fa-youtube'></i>
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <i className='fab fa-discord'></i>
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <i className='fab fa-instagram'></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        
          <div className='bottom-section text-center p-4' >
          Created by {''}
          <a className='text-white fw-bold' href='https://nirvanaclouds.com/'>
            NirvanaClouds {''}
          </a>
          | All Right Reserved!
          </div>
        
      </MDBFooter>
    </>
  );
}

export default Footer;
