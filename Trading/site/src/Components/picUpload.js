import React from 'react';
import {Row, Button} from 'react-bootstrap';

const PicUpload = ({upload})=> {

  const handleSubmit = (e)=> {
    e.preventDefault()
    //console.log(e)
    console.log(e.target.file.files[0])
   upload(e.target.file.files[0])
  }

   return(
      <Row>
        <div class="col-sm-8 mt-3">
          <h4>Node.js upload images - bezkoder.com</h4>

          <form class="mt-4"
            action="http://localhost:3000/upload"
            method="POST"
            enctype="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div class="form-group">
              <input
                type="file"
                name="file"
                id="input-files"
                class="form-control-file border"
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </Row>
   )
}

export default PicUpload;