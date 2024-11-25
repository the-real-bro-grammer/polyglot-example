const RoomDetails = () => {
    return (
        <section className='room-details container mt-4'>
            {/* Title Section */}
            <div className='title-section mb-4'>
                <h2 className='room-title'>Entire home in Location, Location</h2>
                <p className='room-info'>14 guests · 6 bedrooms · 14 beds · 5 baths</p>
                <div className='guest-favorite d-flex align-items-center mb-2'>
                    <span className='badge bg-light text-dark me-2'>
                        <i className='bi bi-award me-1'></i> Guest favorite
                    </span>
                    <span>One of the most loved homes on Airbnb, according to guests</span>
                </div>
                <div className='ratings-host d-flex align-items-start justify-content-between mt-3'>
                    <div className='ratings'>
                        <span className='me-2'>
                            <strong>5.0</strong> ★★★★★
                        </span>
                        <a href='#' className='text-decoration-none text-danger'>
                            6 Reviews
                        </a>
                    </div>
                    <div className='host-info d-flex align-items-center'>
                        <img src='https://via.placeholder.com/40' alt='Host avatar' className='rounded-circle me-3' />
                        <div>
                            <strong>Hosted by Host</strong>
                            <p className='mb-0 text-secondary'>Superhost · 5 years hosting</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Details Section */}
            <div className='details-section mb-4'>
                <div className='detail-item d-flex align-items-start mb-3'>
                    <i className='bi bi-key-fill me-3 text-danger'></i>
                    <div>
                        <strong>Self check-in</strong>
                        <p className='mb-0'>Check yourself in with the keypad.</p>
                    </div>
                </div>
                <div className='detail-item d-flex align-items-start mb-3'>
                    <i className='bi bi-award-fill me-3 text-danger'></i>
                    <div>
                        <strong>Brampton Park is a Superhost</strong>
                        <p className='mb-0'>Superhosts are experienced, highly rated Hosts.</p>
                    </div>
                </div>
                <div className='detail-item d-flex align-items-start'>
                    <i className='bi bi-geo-alt-fill me-3 text-danger'></i>
                    <div>
                        <strong>Unbeatable location</strong>
                        <p className='mb-0'>100% of guests in the past year gave this location a 5-star rating.</p>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className='description-section'>
                <p>Excerpt. Details</p>
                <a href='#' className='text-decoration-none text-danger fw-bold'>
                    Show more
                </a>
            </div>
        </section>
    );
};

export default RoomDetails;
