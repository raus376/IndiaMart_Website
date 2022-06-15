function navbar() {
  return `<div id="navbar-container">
    <div id="top-navbar">
      <img
        src="https://3.imimg.com/data3/HJ/OY/MY-3792183/blue-heaven-cosmetics-private-limited-logo-120x120.jpg"
        alt="bluheaven cosmetics"
        id="logo"
      />
      <div>
        <h1>Blue Heaven Cosmetics (P) Ltd</h1>
        <div>
          <p>
            <i class="fa-solid fa-location-dot"></i>Kriti Nagar, New Delhi,
            Delhi
          </p>
          <p><i class="fa-solid fa-check"></i>GST 07AACCB1155C1ZB</p>
          <p><i class="fa-solid fa-check"></i><b>Verified</b> Supplier</p>
          <p>
            <i class="fa-solid fa-thumbs-up"></i><b>4.2</b>/5
            <span><i class="fa-solid fa-star"></i>
            <span><i class="fa-solid fa-star"></i>
            <span><i class="fa-solid fa-star"></i>
            <span><i class="fa-solid fa-star"></i>
            <span><i class="fa-solid fa-star"></i></span>
          </p>
        </div>
      </div>
      <button>
        <i class="fa-solid fa-phone-volume"></i>View Mobile Number
      </button>
    </div>


    <div id="bottom-navbar">

        <div id="gslink">
                <p id="gshome" class="active">Home</p>
            
                <p id="gsproduct">Products & Services</p>
                <p id="gsabout">About Us</p>
                <p id="gscontact">Contact Us</p>
        </div>
        <button>
            <i class="fa-solid fa-envelope"></i> Send Email
        </button>


        <!-- Product submenu start-->
        <div id="product-sub-menu">


            <div>
                <div>
                    <h3>
                        <a href="#">Makeup</a>
                    </h3>
                    <p>
                        <a href="#">Foundation</a>
                    </p>
                    <p>
                        <a href="#">Compact</a>
                    </p>
                    <p>
                        <a href="#">Pan Cake Foundation</a>
                    </p>
                    <p>
                        <a href="#">Pan Stick Foundation</a>
                    </p>
                </div>
                <div>
                    <h3>
                        <a href="#">Lipstick</a>
                    </h3>
                    <p>
                        <a href="#">Baked Brick Lipstick</a>
                    </p>
                    <p>
                        <a href="#">Cerise Pink Lipstick</a>
                    </p>
                    <p>
                        <a href="#">Coral Red Lipstick</a>
                    </p>
                    <p>
                        <a href="#">Desert Rose Lipstick</a>
                    </p>
                    <a href="#" id="more-link">...more</a>
                </div>
            </div>
            <div>
                <div>
                    <h3>
                        <a href="#">Lips Products</a>
                    </h3>
                    <p>
                        <a href="#">Lip Gloss</a>
                    </p>
                    <p>
                        <a href="#">Lip Stick</a>
                    </p>
                    <p>
                        <a href="#">Lip Liner</a>
                    </p>
                </div>
                <div>
                    <h3>
                        <a href="#">Bleach Cream</a>
                    </h3>
                    <p>
                        <a href="#">Fruit Bleach</a>
                    </p>
                    <p>
                        <a href="#">Gold Bleach</a>
                    </p>
                    <p>
                        <a href="#">Personal Bleach</a>
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <h3>
                        <a href="#">Scrubs</a>
                    </h3>
                    <p>
                        <a href="#">Fairness Scrub</a>
                    </p>
                    <p>
                        <a href="#">Mix Fruit Scrub</a>
                    </p>
                    <p>
                        <a href="#">Facial Scrub - Wallnur & Appricot</a>
                    </p>
                </div>
                <div>
                    <h3>
                        <a href="#">Eyes Products</a>
                    </h3>
                    <p>
                        <a href="#">Masacara</a>
                    </p>
                    <p>
                        <a href="#">Eye Shadow</a>
                    </p>
                    <p>
                        <a href="#">Eye Liner</a>
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <h3>
                        <a href="#">Lip Care</a>
                    </h3>
                    <p>
                        <a href="#">Lip Balm</a>
                    </p>
                    <p>
                        <a href="#">Lip Guard</a>
                    </p>
                </div>
                <div>
                    <button>View All Categories</button>
                </div>
            </div>
    
    
        </div>
        <!-- Product submenu end-->

        <!-- About Us submenu start -->
        <div id="about-us-submenu">

            <p>
                <a href="#">Custom Profile</a>
            </p>
            <p>
                <a href="#">Testimonial</a>
            </p>
            <p>
                <a href="#">Download Brochure</a>
            </p>
        </div>
        <!-- About Us submenu end -->

    </div>

  </div>`;
}

export default navbar;
