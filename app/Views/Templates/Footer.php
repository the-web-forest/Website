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
            <!-- EMPTY -->
          </div>
          <div class="col-md-6 col-lg-3">
            <!-- EMPTY -->
          </div>
          <div class="col-md-12 col-lg-3">
            <div class="widget contact-info contact-info-style1">
              <h4 class="widget-title mb-40">Newsletter</h4>
              <p class="description mb-40 font-size-15">Inscreva-se e fique por dentro das novidades da nossa floresta virtual</p>
                <div class="input-group">
                  <input type="email" class="form-control font-size-13 border-radius-0" placeholder="Digite seu e-mail" name="email" id="email-from-bottom" value="" data-tm-height="81px">
                  <div class="input-group-append tm-sc tm-sc-button">
                    <button onclick="registerEmail('<?=base_url()?>')" class="btn text-theme-colored1 btn-sm btn-flat border-0 box-shadow-none font-size-13" data-tm-bg-color="#272f2a" data-tm-height="81px"><i class="fa fa-arrow-right"></i></button>
                  </div>
                  <div id="msg-email-sucesso" style="display: none; color: green; background-color: #e2e5e2; padding: 10px; border-radius: 5px; margin-top: 10px; width: 100%;">E-mail cadastrado com sucesso</div>
                  <div id="msg-email-erro" style="display: none; color: red; background-color: rgb(239 171 171); padding: 10px; border-radius: 5px; margin-top: 10px; width: 100%;">Erro ao cadastrar o e-mail</div>
                </div>
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