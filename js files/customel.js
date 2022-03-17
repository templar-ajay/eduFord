class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
        <nav>
        <a href="index.html"><img src="images/logo.png" ></a>
        <div class="nav-links" id="navLinks">
            <i class="fa-solid fa-xmark" onclick="hideMenu()"></i>
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="html/about.html">ABOUT</a></li>
                <li><a href="html/course.html">COURSES</a></li>
                <li><a href="html/blog.html">BLOG</a></li>
                <li><a href="html/contact.html">CONTACT</a></li>
            </ul>
        </div>
        <i class="fa-solid fa-bars" onclick="showMenu()"></i>
    </nav>
        `
    }
}
customElements.define('my-header',MyHeader)

class MyFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
        <section class="footer">
        <h4>About Us</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eligendi, quo error, a asperiores maiores corrupti <br>
              aperiam vero amet ipsum rerum nulla cumque! 
              Exercitationem, fugit.</p>
        <div class="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
        </div>
        <p> Made with <i class="fa-regular fa-heart"></i> by Ajay Kumar</p>
    </section>
    
        `
    }
}
customElements.define('my-footer',MyFooter)