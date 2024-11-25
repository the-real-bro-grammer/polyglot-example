import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDollarSign, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className='footer py-4 border-top'>
            {/* Top Section: Links */}
            <div className='container'>
                <div className='row text-left'>
                    {/* Column 1 */}
                    <div className='col-12 col-md-4 mb-4 mb-md-0'>
                        <h6 className='fw-bold'>Support</h6>
                        <ul className='list-unstyled'>
                            <li>Help Center</li>
                            <li>AirCover</li>
                            <li>Anti-discrimination</li>
                            <li>Disability support</li>
                            <li>Cancellation options</li>
                            <li>Report neighborhood concern</li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className='col-12 col-md-4 mb-4 mb-md-0'>
                        <h6 className='fw-bold'>Hosting</h6>
                        <ul className='list-unstyled'>
                            <li>Airbnb your home</li>
                            <li>AirCover for Hosts</li>
                            <li>Hosting resources</li>
                            <li>Community forum</li>
                            <li>Hosting responsibly</li>
                            <li>Airbnb-friendly apartments</li>
                            <li>Join a free Hosting class</li>
                            <li>Find a co-host</li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className='col-12 col-md-4'>
                        <h6 className='fw-bold'>Airbnb</h6>
                        <ul className='list-unstyled'>
                            <li>Newsroom</li>
                            <li>New features</li>
                            <li>Careers</li>
                            <li>Investors</li>
                            <li>Gift cards</li>
                            <li>Airbnb.org emergency stays</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Language, Currency, Social Links, and Terms */}
            <div className='container mt-4'>
                <div className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
                    {/* Left: Language and Currency */}
                    <div className='d-flex align-items-center mb-3 mb-md-0 gap-3'>
                        <FontAwesomeIcon icon={faGlobe} />
                        <span>English (US)</span>
                        <FontAwesomeIcon icon={faDollarSign} />
                        <span>USD</span>
                    </div>

                    {/* Center: Social Links */}
                    <div className='d-flex align-items-center gap-3'>
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>

                    {/* Right: Terms */}
                    <div className='text-center text-md-end'>
                        <p className='mb-0'>
                            &copy; 2024 Airbnb, Inc. · <a href='#'>Terms</a> · <a href='#'>Sitemap</a> ·{' '}
                            <a href='#'>Privacy</a> · <a href='#'>Your Privacy Choices</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
