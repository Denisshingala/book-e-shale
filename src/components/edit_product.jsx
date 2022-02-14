import '../css/edit_product.css'

const EditProduct = () => {
    return (
        <>
            <div className="edit-product-container">
                <p className="title text-center">Edit Product</p>
                <form action="" className='edit-product-form row g-3 my-0'>
                    <div className="col-md-6" style={{ marginBottom: "35px" }}>
                        <label htmlFor="fname" className="form-label">First Name</label><br />
                        <input type="text" className="form-input" name="fname" />
                    </div>
                    <div className="col-md-6" style={{ marginBottom: "35px" }}>
                        <label htmlFor="lname" className="form-label">Last Name</label><br />
                        <input type="text" className="form-input" name="lname" />
                    </div>
                    <div className="col-md-6" style={{ marginBottom: "60px" }} id="column-group">
                        <label htmlFor="category" className="form-label">Shop by Categories</label><br />
                        <select className="form-input" name="category">
                            <option value=""></option>
                            <option value="option1">option1</option>
                            <option value="option2">option2</option>
                            <option value="option3">option3</option>
                            <option value="option4">option4</option>
                            <option value="option5">option5</option>
                        </select>
                    </div>
                    <div className="col-md-6" style={{ marginBottom: "60px" }} id="column-group">
                        <label htmlFor="discription" className="form-label">Discription</label><br />
                        <input type="text" className="form-input" name="discription" />
                    </div>
                    <div className="col-md-6" style={{ marginBottom: "35px", marginTop: "0px" }} >
                        <input type="file" id="file" className="file-input m-0" name="book" />
                        <button type='button' className="upload-btn" onClick={() => document.getElementById('file').click()}>Upload</button>
                    </div>
                    <div className="btn-group">
                        <input type="submit" value="Submit" className='submit-btn mx-0' />
                        <input type="reset" value="Cancel" className='cancel-btn mx-2' />
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditProduct