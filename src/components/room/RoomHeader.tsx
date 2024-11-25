import ImageGrid from './ImageGrid';
import TitleAndShare from './TitleAndShare';

const RoomHeader = () => {
    return (
        <section className='room-header mt-4'>
            {/* Title */}
            <TitleAndShare />

            {/* Image Grid */}
            <ImageGrid />

            {/* Show all photos button */}
            <div className='mt-3 text-start'>
                <button className='btn btn-light btn-lg rounded-pill shadow-sm'>
                    <i className='bi bi-grid-3x3-gap me-2'></i> Show all photos
                </button>
            </div>
        </section>
    );
};

export default RoomHeader;
