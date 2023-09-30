import React from 'react'

const Footer = () => {
  return (
    <footer className="default-padding-top bg-light">
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-6">
                            <p>&copy; Copyright 2023. All Rights Reserved by <a href="https://anisul.com">Anisul Kibria</a></p>
                        </div>
                        <div className="col-md-3 text-right link">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/anisulkibria/"><i className="fab fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/shaheenbd"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/anisulkibria/"><i className="fab fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-right link">
                            <ul>
                                <li>
                                    <a href="#">Terms</a>
                                </li>
                                <li>
                                    <a href="#">Privacy</a>
                                </li>
                                <li>
                                    <a href="#">Support</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer