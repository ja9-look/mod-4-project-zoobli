import React from 'react';
import Widget from './Widget'

const ImageForm = props => {

    return(
        <div className={'collapsible_forms hidden'}>
            {/* <form className={'ImageForm'} onSubmit={props.handleImageForm}>
                <input type="text" name="image_url" placeholder="Enter Image URL"/>
                <input className='pseudobutton' id="button" type="submit" value='Add Image'/>
            </form> */}
            <Widget submitImage={props.submitImage} />
            <div className={'search_form_wrapper'}>
                <form>
                    <input onChange={(event) => props.onChange(event)} type="search" placeholder="Search tags" />
                </form>
            </div>
        </div>
    )

}

export default ImageForm;