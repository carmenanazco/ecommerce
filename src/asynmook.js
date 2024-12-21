const products=[
    {
        id: "1", 
        name: "Toggepi", 
        price: 5000, 
        category: "figuras",
        img: '../img/Toggepi.jpg',
        stock: 5,
        description: "figura de pokemon de 10cm",
    },
    {
        id: "2", 
        name: "Teddiursa", 
        price: 4000, 
        category: "figuras",
        img: "../img/Teddiursa.jpg",
        stock: 10,
        description: "figura de pokemon de 10cm",
    },
    
    {
        id: "3", 
        name: "...", 
        price: 4000, 
        category: "figuras",
        img: "../img/Teddiursa.jpg",
        stock: 2,
        description: "figura de pokemon de 10cm",
    },
    
    {
        id: "4", 
        name: "Mundo", 
        price: 4000, 
        category: "lamparas",
        img: "../img/Teddiursa.jpg",
        stock: 12,
        description: "lampara de 10cm",
    },

    {
        id: "5", 
        name: "Llavero", 
        price: 4000, 
        category: "resinados",
        img: "../img/Teddiursa.jpg",
        stock: 20,
        description: "Llavero hecho con resina",
    },

]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products.filter((prod) => prod.category === categoryId))
        }, 2500);
    });

};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 2500);
    });
  };
