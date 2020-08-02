import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => (
    // TODO: add alt to all imgs
    <>
        <header className="header">

            <div className="container">

                {/* 
                    ========================================================================
                    Header Section
                    ======================================================================== 
                */}

                {/* separate the content and image and styling it with flexbox */}
                {/* header contet section */}

                <div className="header__content">
                    <h1 className="content__title">start reading today and don't make any excuses</h1>
                    <span className="content__sub-title">reading today leader tomorrow</span>
                    <p className="content__description">lorem ipsum dolor sit amet, consectetur adipiscing elit, viverra faucibus eget id mauris elementum tristique, tempus cursus vuipuate vitae et pellentesque massa pretium.</p>
                    <div className="content__buttons">
                        <Link to="#" className="buttons__primary btn">sign up</Link>
                        <Link to="#" className="buttons__alter btn">learn more</Link>
                    </div>
                </div>

                {/* header illustration image section */}

                <div className="header__illustration">
                    <img src="illustrations/undraw_business_shop_qw5t.svg" className="illustration__image" />
                </div>

                {/* 
                    ========================================================================
                    Header Section End
                    ======================================================================== 
                */}

            </div>

        </header>

        <main className="main">
            
            <section className="main__why-reading-books">
                {/* 
                    ========================================================================
                    Why Reading Books Section
                    ======================================================================== 
                */}

                <h2 className="why-reading-books__heading">why are you reading books ?</h2>

                <div className="why-reading-books__section">
                    {/* separate the content and image and styling it with flexbox */}
                    <div className="section__content">
                        <h3 className="content__heading">the benefit of reading</h3>
                        {/* Order List of Reasons */}
                        <ol className="content__reading-benefit">

                            <li className="reading-benefit__item">
                                <h4 className="item__title">motivate the brain</h4>
                                <p className="item__description">lorem ipsum dolor sit amet, consectetur adipiscing elit, viverra faucibus</p>
                            </li>

                            <li className="reading-benefit__item">
                                <h4 className="item__title">increased knowledge</h4>
                                <p className="item__description">lorem ipsum dolor sit amet, consectetur adipiscing elit, viverra faucibus</p>
                            </li>

                            <li className="reading-benefit__item">
                                <h4 className="item__title">memory booster</h4>
                                <p className="item__description">lorem ipsum dolor sit amet, consectetur adipiscing elit, viverra faucibus</p>
                            </li>

                        </ol>

                    </div>

                    <div className="section__illustration">
                        <img src="illustrations/undraw_reading_list_4boi.svg" className="illustration__image" />
                    </div>

                </div>
                {/* 
                    ========================================================================
                    Why Reading Books Section End
                    ======================================================================== 
                */}
            </section>

           <section className="main__book-instead-of-pdf">
                {/* 
                    ========================================================================
                    Book Instead Of PDF Section
                    ======================================================================== 
                */}
                <h2 className="book-instead-of-pdf__heading">reading book instead of reading pdf file</h2>
                <div className="book-instead-of-pdf__section">
                    {/* separate the content and image and styling it with flexbox */}
                    <div className="section__content">

                        <h3 className="content__heading">sub-heading sub-heading</h3>
                        {/* Order List of Reasons */}
                        <ul className="content__why-books">

                            <li className="why-books__item">
                                <p className="item__description">lorem ipsum dolor sit amet, consectetur adipiscing elit, viverra faucibus</p>
                            </li>

                            <li className="why-books__item">
                                <p className="item__description">lorem ipsum dolor sit amet, consectetur adipiscing elit, viverra faucibus</p>
                            </li>

                            <li className="why-books__item">
                                <p className="item__description">lorem ipsum dolor sit amet, consectetur adipiscing elit, viverra faucibus</p>
                            </li>
                            
                        </ul>
                    </div>

                    <div className="section__illustration">
                        <img src="illustrations/undraw_book_lover_mkck.svg" className="illustration__image" />
                    </div>

                </div>
                {/* 
                    ========================================================================
                    Book Instead Of PDF Section End
                    ======================================================================== 
                */}
           </section>
        </main>
    </>
)

export default Home