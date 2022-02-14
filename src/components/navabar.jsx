import '../css/navbar.css'

const Navbar = () => {
    return (
        <>
            <nav>
                <form id="form1" className='form1'>
                    <input type="text" name="item" id="item" placeholder='What are you looking for...' />
                    <div className="buttons">
                        <button className="button"><i class="bi bi-search text-white"></i> Search</button>
                        <input type="reset" value="Cancel" />
                    </div>
                </form>
            </nav>
        </>
    )
}

export default Navbar