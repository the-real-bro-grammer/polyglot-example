const ImageGrid = () => {
    return (
        <div className='image-grid-container'>
            {/* Large Image */}
            <div className='large-image'>
                <img src='https://via.placeholder.com/800x500' alt='Large placeholder' className='img-fluid' />
            </div>

            {/* Four Smaller Images */}
            <div className='small-images'>
                <img src='https://via.placeholder.com/400x300' alt='Small placeholder 1' className='img-fluid' />
                <img src='https://via.placeholder.com/400x300' alt='Small placeholder 2' className='img-fluid' />
                <img src='https://via.placeholder.com/400x300' alt='Small placeholder 3' className='img-fluid' />
                <img src='https://via.placeholder.com/400x300' alt='Small placeholder 4' className='img-fluid' />
            </div>
        </div>
    );
};

export default ImageGrid;
