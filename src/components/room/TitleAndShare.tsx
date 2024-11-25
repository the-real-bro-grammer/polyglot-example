const TitleAndShare = () => {
    return (
        <div className='title-and-share d-flex justify-content-between align-items-start mb-3'>
            {/* Title */}
            <h1 className='room-title'>Example Title In English</h1>

            {/* Share and Save Buttons */}
            <div className='d-flex gap-3'>
                <button className='btn btn-link d-flex align-items-center text-decoration-none'>
                    <i className='bi bi-share me-1'></i> Share
                </button>
                <button className='btn btn-link d-flex align-items-center text-decoration-none'>
                    <i className='bi bi-heart me-1'></i> Save
                </button>
            </div>
        </div>
    );
};

export default TitleAndShare;
