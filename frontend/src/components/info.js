const Info = () => {
    return ( 
        <div className="info">
            <div className="details">
                <h3>contact</h3>
                <hr />
                <div className="contact">
                    <div className="call typ">
                        <p><i className="fa fa-phone" aria-hidden="true"></i></p>
                        <ul>
                            <li>call us</li>
                            <li><a href="tel:+2348068635849">+234 8068635849</a></li>
                        </ul>
                    </div>
                    <div className="email typ">
                        <p><i class="fa fa-envelope" aria-hidden="true"></i></p>
                        <ul>
                            <li>email us</li>
                            <li><a href="mailto:autoshop@gmail.com"> autoshop@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="ig typ">
                        <p><i className="fa-brands fa-instagram" ></i></p>
                        <ul>
                            <li>check it out</li>
                            <li><a href="/">Autoshop</a> </li>
                        </ul>
                    </div>
                </div>
                <div className="about"></div>
            </div>
            <div className="about"></div>
        </div>
     );
}
 
export default Info;