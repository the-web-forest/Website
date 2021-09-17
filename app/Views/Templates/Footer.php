  <!-- Footer -->
  <footer id="footer" class="footer bg-img-center-bottom bg-img-cover" data-tm-bg-img="images/background/bg3.jpg">
    <div class="footer-widget-area pt-120">
      <div class="container pb-40">
        <div class="row">
          <div class="col-md-12 col-lg-3">
            <div class="tm-widget-contact-info contact-info-style1" data-tm-margin-top="-22">
              <div class="thumb" data-tm-margin-bottom="48">
                <img alt="Logo" width="200" src="images/logo-wide-white.png">
              </div>
              <ul class="mb-30">
                <li class="contact-email">
                  <div class="icon"><img src="images/icons/c2.png" alt="Icon"></div>
                  <div class="text">
                    <a href="mailto:contato@thewebforest.com">contato@thewebforest.com</a>
                    <span>Email</span>
                  </div>
                </li>
                <li class="contact-address border-0">
                  <div class="icon"><img src="images/icons/c3.png" alt="Icon"></div>
                  <div class="text"><span class="font-size-15 text-white">Piracicaba, BR</span></div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="widget widget_nav_menu ml-25">
              <h4 class="widget-title">Links</h4>
              <div class="menu-footer-page-list">
                <ul id="footer-page-list" class="menu">
                  <li><a href="index-mp-layout1.html">Our Projects</a></li>
                  <li><a href="index-mp-layout1.html">About us</a></li>
                  <li><a href="index-mp-layout1.html">New Campaign</a></li>
                  <li><a href="index-mp-layout1.html">Upcoming Events</a></li>
                  <li><a href="index-mp-layout1.html">Volunteers</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="widget">
              <h4 class="widget-title mb-40">News</h4>
              <div class="latest-posts pt-2">
                <article class="post clearfix pb-0 mb-40">
                  <a class="post-thumb" href="#"><img src="http://placehold.it/70x70" alt="Image"></a>
                  <div class="post-right">
                    <div class="post-date">
                      <span class="entry-date text-theme-colored2 pt-0 text-uppercase mb-10">Jan 22 - 2021</span>
                    </div>
                    <p class="post-title m-0"><a href="#">A Clean Water Gives More Good Taste</a></p>
                  </div>
                </article>
                <article class="post clearfix pb-0">
                  <a class="post-thumb" href="#"><img src="http://placehold.it/70x70" alt="Image"></a>
                  <div class="post-right">
                    <div class="post-date">
                      <span class="entry-date text-theme-colored2 pt-0 text-uppercase mb-10">Jan 22 - 2021</span>
                    </div>
                    <p class="post-title m-0"><a href="#">A Clean Water Gives More Good Taste</a></p>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-3">
            <div class="widget contact-info contact-info-style1">
              <h4 class="widget-title mb-40">Newsletter</h4>
              <p class="description mb-40 font-size-15">Sign up now to get daily latest news & updates from us</p>
              <!-- Mailchimp Subscription Form-->
              <form id="mailchimp-subscription-form10" class="newsletter-form cp-newsletter m-0 p-0">
                <div class="input-group">
                  <input type="email" id="mce-EMAIL2" class="form-control font-size-13 border-radius-0" placeholder="Email address" name="EMAIL" value="" data-tm-bg-color="#272f2a" data-tm-height="81px">
                  <div class="input-group-append tm-sc tm-sc-button">
                    <button type="submit" class="btn text-theme-colored1 btn-sm btn-flat border-0 box-shadow-none font-size-13" data-tm-bg-color="#272f2a" data-tm-height="81px"><i class="fa fa-arrow-right"></i></button>
                  </div>
                </div>
              </form>

              <!-- Mailchimp Subscription Form Validation-->
              <script>
                (function($) {
                  $('#mailchimp-subscription-form10').ajaxChimp({
                      callback: mailChimpCallBack,
                      url: '//thememascot.us9.list-manage.com/subscribe/post?u=a01f440178e35febc8cf4e51f&amp;id=49d6d30e1e'
                  });

                  function mailChimpCallBack(resp) {
                      // Hide any previous response text
                      var $mailchimpform = $('#mailchimp-subscription-form10'),
                          $response = '';
                      $mailchimpform.children(".alert").remove();
                      if (resp.result === 'success') {
                          $response = '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
                      } else if (resp.result === 'error') {
                          $response = '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
                      }
                      $mailchimpform.prepend($response);
                  }
                })(jQuery);
              </script>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="footer-bottom-style1">
                <div class="footer-paragraph font-size-15">© Copyright <?=date("Y");?> The Web Forest</div>
                <div class="widget widget-social-list-custom clearfix mb-0">
                  <ul class="styled-icons icon-theme-colored1">
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fab fa-vk"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <a class="scrollToTop" href="#"><i class="fa fa-angle-up"></i></a>