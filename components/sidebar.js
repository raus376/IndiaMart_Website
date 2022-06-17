function sideBar(){
    return `
    
        <h3>Products & Services</h3>
        <div>
            <input type="checkbox" name="category_accordion" id="makeup" class="accordion__input">
            <label for="makeup" class="accordion__label">Makeup</label>
            <div class="accordion__content">
                <p><a href="../makeup.html">Foundation</a></p>
                <p><a href="../makeup.html">Compact</a></p>
                <p><a href="../makeup.html">Pan Cake Foundation</a></p>
                <p><a href="../makeup.html">Pan Stick Foundation</a></p>
            </div>
        </div>
        <div>
            <input type="checkbox" name="category_accordion" id="lipstick" class="accordion__input">
            <label for="lipstick" class="accordion__label">Lipstick</label>
            <div class="accordion__content">
                <p><a href="../lipstick.html">Baked Brick Lipstick</a></p>
                <p><a href="../lipstick.html">Cerise Pink Lipstick</a></p>
                <p><a href="../lipstick.html">Coral Red Lipstick</a></p>
                <p><a href="../lipstick.html">Desert Rose Lipstick </a></p>
                <p><a href="../lipstick.html">Eternal Red Lipstick</a></p>
                <p><a href="../lipstick.html">+5 more products</a></p>
                
            </div>
        </div>
        <div>
            <input type="checkbox" name="category_accordion" id="lipsProducts" class="accordion__input">
            <label for="lipsProducts" class="accordion__label">Lips Products</label>
            <div class="accordion__content">
                <p><a href="../lipsProducts.html">Lip Gloss</a></p>
                <p><a href="../lipsProducts.html">Lip Stick</a></p>
                <p><a href="../lipsProducts.html">Lip Liner</a></p>
            </div>
        </div>
        <div>
            <input type="checkbox" name="category_accordion" id="bleachCream" class="accordion__input">
            <label for="bleachCream" class="accordion__label">Bleach Cream</label>
            <div class="accordion__content">
                <p><a href="../bleachCream.html">Fruit Bleach</a></p>
                <p><a href="../bleachCream.html">Gold Bleach</a></p>
                <p><a href="../bleachCream.html">Personal Bleach</a></p>
            </div>
        </div>
        
        <div>
            <input type="checkbox" name="category_accordion" id="scrubs" class="accordion__input">
            <label for="scrubs" class="accordion__label">Scrubs</label>
            <div class="accordion__content">
                <p><a href="../scrubs.html">Fairness Scrub</a></p>
                <p><a href="../scrubs.html">Mix Fruit Scrub</a></p>
                <p><a href="../scrubs.html">Facial Scrub - Walnut & Apricot</a></p>
            </div>
        </div>
        <div>
            <input type="checkbox" name="category_accordion" id="eyesProducts" class="accordion__input">
            <label for="eyesProducts" class="accordion__label">Eyes Products</label>
            <div class="accordion__content">
                <p><a href="../eyesProducts.html">Mascara</a></p>
                <p><a href="../eyesProducts.html">Eye Shadow</a></p>
                <p><a href="../eyesProducts.html">Eye Liner </a></p>
            </div>
        </div>
        <div>
            <input type="checkbox" name="category_accordion" id="lipcare" class="accordion__input">
            <label for="lipcare" class="accordion__label">LipCare</label>
            <div class="accordion__content">
                <p><a href="../lipcare.html">Lip Balm</a></p>
                <p><a href="../lipcare.html">Lip Gaurd</a></p>
            </div>
        </div>
        <div>
            <input type="checkbox" name="category_accordion" id="traditional" class="accordion__input">
            <label for="traditional" class="accordion__label">Traditional Items</label>
            <div class="accordion__content">
                <p><a href="">Sindoor</a></p>
                <p><a href="">Kajal</a></p>
            </div>
        </div>
        <h3>+more</h3>
    `
}

export {sideBar}