function About()
{
    return(
        <section class="about_section ">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <div class="img-box">
                <img src="/images/about-img.jpg" alt="about-img"/>
              </div>
            </div>
            <div class="col-md-5 col-lg-4">
              <div class="detail-box">
                <div class="heading_container">
                  <h2>
                    A Few words about us
                  </h2>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                  of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
                  desktop publishing packages and web
                </p>
                <div>
                  <a href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;