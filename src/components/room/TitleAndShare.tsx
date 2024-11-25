import { faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TitleAndShare = () => {
    return (
        <div className='title-and-share d-flex justify-content-between align-items-start mb-3'>
            {/* Title */}
            <h1 className='room-title'>Example Title In English</h1>

            {/* Share and Save Buttons */}
            <div className='d-flex gap-3'>
                <button className='btn btn-link d-flex align-items-center text-decoration-none border-0'>
                    <FontAwesomeIcon icon={faShareAlt} className='me-2 text-muted' />
                    Share
                </button>
                <button className='btn btn-link d-flex align-items-center text-decoration-none border-0'>
                    <FontAwesomeIcon icon={faHeart} className='me-2 text-muted' /> Save
                </button>
            </div>
        </div>
    );
};

export default TitleAndShare;
