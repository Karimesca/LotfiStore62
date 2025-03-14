(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);


//SHOP PAGE FUNCTIONALITY 


// Function to populate products
function populateProducts(containerId, products) {
    // Select the element to be replaced using the provided ID
    const elementToReplace = document.getElementById(containerId);

    // Create product cards from the products array
    let productCards = products.map(product => `
        <div class="col-lg-4 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
                <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img class="img-fluid w-100" src="${product.image}" alt="">
                </div>
                <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 class="text-truncate mb-3">${product.title}</h6>
                    <div class="d-flex justify-content-center">
                        <h6>${product.price}</h6><h6 class="text-muted ml-2"><del>${product.originalPrice}</del></h6>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-between bg-light border">
                    <a href="${product.link}" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</a>
                    <a href="cart.html" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                </div>
            </div>
        </div>
    `).join('');

    // New HTML content including search form and dropdown
    const newHTML = `
        <div class="row pb-3">
            <div class="col-12 pb-1">
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <form action="">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search by name">
                            <div class="input-group-append">
                                <span class="input-group-text bg-transparent text-primary">
                                    <i class="fa fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </form>
                    <div class="dropdown ml-4">
                        <button class="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort by
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                            <a class="dropdown-item" href="#">Latest</a>
                            <a class="dropdown-item" href="#">Popularity</a>
                            <a class="dropdown-item" href="#">Best Rating</a>
                        </div>
                    </div>
                </div>
            </div>
            ${productCards}
            <div class="col-12 pb-1">
                <nav aria-label="Page navigation">
                    <ul class="pagination justify-content-center mb-3">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span aria-hidden="true">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    `;

    // Replace the old content with the new content
    if (elementToReplace) {
        elementToReplace.innerHTML = newHTML;
    }
}

// Define product arrays for each page
let productsShopMain = [
    { image: "img/product-1.jpg", title: "Men's Shirt", price: "50.00 DH", originalPrice: "60.00 DH" , link: "detail.html"},
    { image: "img/product-2.jpg", title: "Men's Pants", price: "70.00 DH", originalPrice: "80.00 DH" , link: "detail.html"},
    { image: "img/product-3.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "img/product-4.jpg", title: "Women's Top", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    { image: "img/product-3.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "img/product-1.jpg", title: "Men's Shirt", price: "50.00 DH", originalPrice: "60.00 DH" , link: "detail.html"},
    { image: "img/product-2.jpg", title: "Men's Pants", price: "70.00 DH", originalPrice: "80.00 DH" ,link: "detail.html"},
    { image: "img/product-3.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "img/product-4.jpg", title: "Women's Top", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    { image: "img/product-3.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "img/product-1.jpg", title: "Men's Shirt", price: "50.00 DH", originalPrice: "60.00 DH" , link: "detail.html"},
    { image: "img/product-2.jpg", title: "Men's Pants", price: "70.00 DH", originalPrice: "80.00 DH" , link: "detail.html"},
    { image: "img/product-3.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "img/product-4.jpg", title: "Women's Top", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    { image: "img/product-3.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    // Add more products as needed...
];

let productsShopWomenClothes = [
    { image: "storepics/clothes/v1.png", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/clothes/v2.png", title: "Women's Dress", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    { image: "storepics/clothes/v3.png", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/clothes/v4.png", title: "Women's Dress", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    { image: "storepics/clothes/v5.png", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/clothes/v6.png", title: "Women's Dress", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    { image: "storepics/clothes/v7.png", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/clothes/v8.png", title: "Women's Dress", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    { image: "storepics/clothes/v9.png", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/clothes/v10.png", title: "Women's Dress", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    { image: "storepics/clothes/v11.png", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/clothes/v12.png", title: "Women's Dress", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    { image: "storepics/clothes/v13.png", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/clothes/v14.png", title: "Women's Dress", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    { image: "storepics/clothes/v15.png", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/clothes/v16.png", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    // Add more products as needed...
];

let productsShopPerfumeWomen = [
    { image: "storepics/pw/pw1.jpg", title: "Women's Perfume", price: "120.00 DH", originalPrice: "140.00 DH" , link: "detail.html"},
    { image: "storepics/pw/pw2.jpg", title: "Floral Perfume", price: "90.00 DH", originalPrice: "110.00 DH" , link: "detail.html"},
    { image: "storepics/pw/pw3.jpg", title: "Men's Shirt", price: "50.00 DH", originalPrice: "60.00 DH" , link: "detail.html"},
    { image: "storepics/pw/pw4.jpg", title: "Men's Pants", price: "70.00 DH", originalPrice: "80.00 DH" , link: "detail.html"},
    { image: "storepics/pw/pw5.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/pw/pw9.jpg", title: "Women's Top", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    { image: "storepics/pw/pw12.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/pw/pw16.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/pw/pw18.jpg", title: "Women's Top", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    // Add more products as needed...
];

let productsShopPerfumeMan = [
    { image: "storepics/pm/pm1.jpg", title: "Women's Top", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    { image: "storepics/pm/pm2.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/pm/pm3.jpg", title: "Men's Shirt", price: "50.00 DH", originalPrice: "60.00 DH" , link: "detail.html"},
    { image: "storepics/pm/pm4.jpg", title: "Men's Pants", price: "70.00 DH", originalPrice: "80.00 DH" , link: "detail.html"},
    { image: "storepics/pm/pm5.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/pm/pm7.jpg", title: "Women's Top", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    { image: "storepics/pm/pm8.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/pm/pm9.jpg", title: "Men's Shirt", price: "50.00 DH", originalPrice: "60.00 DH" , link: "detail.html"},
    { image: "storepics/pm/pm13.jpg", title: "Men's Pants", price: "70.00 DH", originalPrice: "80.00 DH" , link: "detail.html"},
    { image: "storepics/pm/pm14.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/pm/pm15.jpg", title: "Women's Top", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    { image: "storepics/pm/pm17.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    // Add more products as needed...
];

let productsShopPacks = [
    { image: "storepics/pack/pack12.jpg", title: "Women's Perfume", price: "120.00 DH", originalPrice: "140.00 DH" , link: "detail.html"},
    { image: "storepics/pack/pack13.jpg", title: "Floral Perfume", price: "90.00 DH", originalPrice: "110.00 DH" , link: "detail.html"},
    { image: "storepics/pack/pack14.jpg", title: "Men's Shirt", price: "50.00 DH", originalPrice: "60.00 DH" , link: "detail.html"},
    { image: "storepics/pack/pack15.jpg", title: "Men's Pants", price: "70.00 DH", originalPrice: "80.00 DH" , link: "detail.html"},
    { image: "storepics/pack/pack16.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/pack/pack17.jpg", title: "Women's Top", price: "40.00 DH", originalPrice: "50.00 DH " , link: "detail.html"},
    { image: "storepics/pack/pack16.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/pack/pack16.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/pack/pack16.jpg", title: "Women's Top", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    // Add more products as needed...
];

let productsShopBags = [
    { image: "storepics/sac/sac87.jpg", title: "Men's Shirt", price: "50.00 DH", originalPrice: "60.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac11.jpg", title: "Men's Pants", price: "70.00 DH", originalPrice: "80.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac19.jpg", title: "Women's Top", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac20.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac27.jpg", title: "Men's Shirt", price: "50.00 DH", originalPrice: "60.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac28.jpg", title: "Men's Pants", price: "70.00 DH", originalPrice: "80.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac32.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac33.jpg", title: "Women's Top", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac34.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac36.jpg", title: "Men's Shirt", price: "50.00 DH", originalPrice: "60.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac41.jpg", title: "Men's Pants", price: "70.00 DH", originalPrice: "80.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac46.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac49.jpg", title: "Women's Top", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac51.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac56.jpg", title: "Men's Shirt", price: "50.00 DH", originalPrice: "60.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac57.jpg", title: "Men's Pants", price: "70.00 DH", originalPrice: "80.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac61.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac64.jpg", title: "Women's Top", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac66.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac80.jpg", title: "Men's Shirt", price: "50.00 DH", originalPrice: "60.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac81.jpg", title: "Men's Pants", price: "70.00 DH", originalPrice: "80.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac82.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac84.jpg", title: "Women's Top", price: "40.00 DH", originalPrice: "50.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac85.jpg", title: "Women's Dress", price: "80.00 DH", originalPrice: "90.00 DH" , link: "detail.html"},
    { image: "storepics/sac/sac4.jpg", title: "Men's Shirt", price: "50.00 DH", originalPrice: "60.00 DH" , link: "detail.html"},
    // Add more products as needed...
];

// Call the function based on the page context
if (document.getElementById('shopm')) {
    populateProducts('shopm', productsShopMain);
} else if (document.getElementById('shop-women-clothes')) {
    populateProducts('shop-women-clothes', productsShopWomenClothes);
} else if (document.getElementById('shop-perfume-women')) {
    populateProducts('shop-perfume-women', productsShopPerfumeWomen);
} else if (document.getElementById('shop-perfume-man')) {
    populateProducts('shop-perfume-man', productsShopPerfumeMan);
} else if (document.getElementById('shop-packs')) {
    populateProducts('shop-packs', productsShopPacks);
} else if (document.getElementById('shop-bags')) {
    populateProducts('shop-bags', productsShopBags);
}
