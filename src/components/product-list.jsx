import React from 'react'
import '../css/product-list.css'
import Card from './card'

const ProductList = () => {
    const product = [{
        img: "https://picsum.photos/200",
        title: "Product title",
        desc: "Lorem",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laudantium hic provident placeat?",
        originalPrize: "1000",
        offer: "20% OFF",
        newPrize: "800"
    }, {
        img: "https://picsum.photos/200",
        title: "Product title",
        desc: "Lorem",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laudantium hic provident placeat?",
        originalPrize: "1000",
        offer: "20% OFF",
        newPrize: "800"
    }, {
        img: "https://picsum.photos/200",
        title: "Product title",
        desc: "Lorem",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laudantium hic provident placeat?",
        originalPrize: "1000",
        offer: "20% OFF",
        newPrize: "800"
    }, {
        img: "https://picsum.photos/200",
        title: "Product title",
        desc: "Lorem",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laudantium hic provident placeat?",
        originalPrize: "1000",
        offer: "20% OFF",
        newPrize: "800"
    }, {
        img: "https://picsum.photos/200",
        title: "Product title",
        desc: "Lorem",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laudantium hic provident placeat?",
        originalPrize: "1000",
        offer: "20% OFF",
        newPrize: "800"
    }, {
        img: "https://picsum.photos/200",
        title: "Product title",
        desc: "Lorem",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laudantium hic provident placeat?",
        originalPrize: "1000",
        offer: "20% OFF",
        newPrize: "800"
    }, {
        img: "https://picsum.photos/200",
        title: "Product title",
        desc: "Lorem",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laudantium hic provident placeat?",
        originalPrize: "1000",
        offer: "20% OFF",
        newPrize: "800"
    }]

    return (
        <>
            <div className="product-container">
                <div className="title text-center">Product List</div>
                <div className="product-list-navbar">
                    <p className="product mx-2">Product Name - 14366 items</p>
                    <form className="sort-product">
                        <label htmlFor="sort" className='mx-2 text-secondary'>Sort By</label>
                        <select htmlFor="sort" className='sort-product-input'>
                            <option value=""></option>
                            <option value="a-z">a-z</option>
                            <option value="A-Z">A-Z</option>
                        </select>
                    </form>
                </div>
                <div className="product-body">
                    {product.map((data, index) => {
                        return (
                            <Card
                                key={index}
                                url={data.img}
                                title={data.title}
                                desc={data.desc}
                                text={data.text}
                                originalPrize={data.originalPrize}
                                offer={data.offer}
                                newPrize={data.newPrize} />
                        )
                    })}
                    <div className="page-number">
                        <span className='text-secondary'>&lt;</span>
                        <a href="/product-list">1</a>
                        <a href="/product-list">2</a>
                        <a href="/product-list">3</a>
                        <a href="/product-list">4</a>
                        <a href="/product-list">5</a>...
                        <a href="/product-list">10</a>
                        <span>&gt;</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList