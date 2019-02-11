import React from 'react';

const ImageForm = (props) => {

    return(
        <div>
            <form className="ImageForm" onSubmit={props.handleImageForm}>
                <input type="text" name="image_url" placeholder="Enter Image URL"/>
                <input type="submit" />
            </form>
        </div>
    )

}

export default ImageForm;