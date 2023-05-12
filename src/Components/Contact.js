function Contact()
{
    return(
    <section class="contact_section layout_padding">
        <div class="container ">
        <div class="heading_container ">
            <h2 class="">
            Request
            <span>
                A call Back
            </span>

            </h2>
        </div>
        </div>
        <div class="container">
        <div class="row">
            <div class="col-md-6 ">
            <form action="#">
                <div>
                <input type="text" placeholder="Name" />
                </div>
                <div>
                <input type="email" placeholder="Email" />
                </div>
                <div>
                <input type="text" placeholder="Pone Number" />
                </div>
                <div>
                <input type="text" class="message-box" placeholder="Message" />
                </div>
                <div class="d-flex  mt-4 ">
                <button>
                    SEND
                </button>
                </div>
            </form>
            </div>
            <div class="col-md-6">
            <div class="map_section">
                <div id="map" class="w-100 h-100"></div>
            </div>
            </div>
        </div>
        </div>
    </section>
    );
}

export default Contact;