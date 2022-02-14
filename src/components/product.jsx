import '../css/product.css'

const Product = () => {
    return (
        <>
            <p className="book-title text-center">Product page</p>
            <form action="" id="form3" className='form3'>
                <input type="text" className='product-searchbar my-0' placeholder='Search...' />
                <button type='submit' className='product-submit-button'>Add Product</button>
            </form>
            <div className="product-table-container">
                <table className='product-table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Data Source</th>
                            <th>Query</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td className='text-center'>
                                <button className='edit-btn'>Edit</button>
                                <button className='delete-btn'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td className='text-center'>
                                <button className='edit-btn'>Edit</button>
                                <button className='delete-btn'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td className='text-center'>
                                <button className='edit-btn'>Edit</button>
                                <button className='delete-btn'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td className='text-center'>
                                <button className='edit-btn'>Edit</button>
                                <button className='delete-btn'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td className='text-center'>
                                <button className='edit-btn'>Edit</button>
                                <button className='delete-btn'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td className='text-center'>
                                <button className='edit-btn'>Edit</button>
                                <button className='delete-btn'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="table-row-counter">
                    <label htmlFor="row-number">Rows per page:&nbsp;</label>
                    <select name="row-number" id="row-number">
                        <option value="5">5</option>
                        <option value="15">15</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <h6>1-5 of 6</h6>
                    <div className="group-btn">
                        <button className='row-btn text-secondary'>&lt;</button>
                        <button className='row-btn'>&gt;</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product