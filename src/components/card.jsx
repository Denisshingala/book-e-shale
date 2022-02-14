const Card = (probs) => {
    return (
        <>
            <div className="card" style={{ width: "227.67px" }}>
                <img src={probs.url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title fw-bold m-0">{probs.title}</h3>
                    <p className="card-desc mb-2">{probs.desc}</p>
                    <p className="card-text mb-2">
                        {probs.text}<br /><br />
                        <span className="text-secondary">MRP <strike>&#8377; {probs.originalPrize} </strike></span> 
                        <span className="text-success">&nbsp;&nbsp;{probs.offer}</span><br />
                        <span className="fw-bolder">&#8377; {probs.newPrize}</span>
                    </p>
                    <button className="card-btn">Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default Card