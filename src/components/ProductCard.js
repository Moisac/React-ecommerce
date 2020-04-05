import React from 'react'

export const ProductCard = () => {
    return (
        <div>
            {context.products.map(product => (
                <div className="product-wrapper" key={product.id}>
                    <div className="image-wrapper">
                        <div className="product-icons">
                            <Tooltip title="Add to favorite" placement="left">
                                <HeartOutlined onClick={context.addProductToFav.bind(this, product)} />
                            </Tooltip>
                            
                                <QuickView 
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                brand={product.brand}
                                addToCart={context.addProductToCart.bind(this, product)}
                                />
                        </div>
                        <div className="badges">
                            {product.badges && product.badges.map((badge) => (
                                <span className={badge && badge === 'Sale' ? 'sale' : 'new'}>{badge}</span> 
                            ))}
                        </div>
                        <Slider {...innerSettings}>
                            {product.images.map(img => (
                                <img src={img} />
                            ))}
                        </Slider>
                        </div>
                        <div className="product-content">
                            <b className="brand">{product.brand}</b>
                            <h6 className="title">{product.title}</h6>
                            <p className="price">${product.price}</p>
                            <Button className="add-to-cart" type="primary" icon={<ShoppingCartOutlined />} onClick={context.addProductToCart.bind(this, product)}>Add to Cart</Button>
                        </div>
                    </div>  
                )
            )} 
        </div>
    )
}
