import PlaceholderImage from '../Placeholder';

const ImageGrid = () => {
    return (
        <div className='image-grid-container'>
            {/* Large Image */}
            <div className='large-image'>
                <PlaceholderImage width={800} height={500} />
            </div>

            {/* Four Smaller Images */}
            <div className='small-images'>
                <PlaceholderImage width={400} height={300} />
                <PlaceholderImage width={400} height={300} />
                <PlaceholderImage width={400} height={300} />
                <PlaceholderImage width={400} height={300} />
                {/* <div className='mt-3 text-start'>
                    <button className='btn btn-light btn-lg rounded-pill shadow-sm'>
                        <i className='bi bi-grid-3x3-gap me-2'></i> Show all photos
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default ImageGrid;
