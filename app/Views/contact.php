<!DOCTYPE html>
<html dir="ltr" lang="en">
  <?php echo view('Templates/Header'); ?>
<body class="tm-container-1300px has-side-panel side-panel-right">
<!-- preloader -->
<div id="preloader">
  <div id="spinner">
    <div class="preloader-dot-loading">
      <div class="cssload-loading"><i></i><i></i><i></i><i></i></div>
    </div>
  </div>
  <div id="disable-preloader" class="btn btn-default btn-sm">Disable Preloader</div>
</div>

<?php echo view('Templates/Sidebar'); ?>

<div id="wrapper" class="clearfix">
  
  <!-- Header -->
  <?php echo view('Templates/SubHeader'); ?>

  <!-- Start main-content -->
  <div class="main-content-area">
    <!-- Section: page title -->
    <section class="page-title layer-overlay overlay-dark-9 section-typo-light bg-img-center" data-tm-bg-img="images/background/bg1.jpg">
      <div class="container pt-90 pb-90">
        <div class="section-content">
          <div class="row">
            <div class="col-md-12 text-center">
              <h2 class="title">Contato</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section: home End -->

    <!-- Divider: Contact -->
    <section class="divider">
      <div class="container">
        <div class="row pt-30">
          <div class="col-lg-4">
            <div class="icon-box icon-left iconbox-centered-in-responsive iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate bg-white-f1 p-30 mb-30">
              <div class="icon-box-wrapper">
                <div class="icon-wrapper">
                  <a class="icon icon-type-font-icon icon-dark icon-circled"> <i class="flaticon-contact-044-call-1"></i> </a>
                </div>
                <div class="icon-text">
                  <h5 class="icon-box-title mt-0">Telefone</h5>
                  <div class="content"><a href="tel:+55 19 98128-1830">+55 19 98128-1830</a></div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
            <div class="icon-box icon-left iconbox-centered-in-responsive iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate bg-white-f1 p-30 mb-30">
              <div class="icon-box-wrapper">
                <div class="icon-wrapper">
                  <a class="icon icon-type-font-icon icon-dark icon-circled"> <i class="flaticon-contact-043-email-1"></i> </a>
                </div>
                <div class="icon-text">
                  <h5 class="icon-box-title mt-0">Email</h5>
                  <div class="content"><a href="mailto:contato@thewebforest.com">contato@thewebforest.com</a></div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
            <div class="icon-box icon-left iconbox-centered-in-responsive iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate bg-white-f1 p-30 mb-30">
              <div class="icon-box-wrapper">
                <div class="icon-wrapper">
                  <a class="icon icon-type-font-icon icon-dark icon-circled"> <i class="flaticon-contact-025-world"></i> </a>
                </div>
                <div class="icon-text">
                  <h5 class="icon-box-title mt-0">Endereço</h5>
                  <div class="content">Piracicaba, SP - BR</div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <h2 class="mt-0 mb-0">Quer entrar em contato?</h2>
            <p class="font-size-20">Basta preencher esse formulário!</p>
            <!-- Contact Form -->
            <form id="contact_form" name="contact_form" class="" action="includes/sendmail.php" method="post">
              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label>Nome <small>*</small></label>
                    <input name="form_name" class="form-control" type="text" placeholder="Digite seu nome">
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label>Email <small>*</small></label>
                    <input name="form_email" class="form-control required email" type="email" placeholder="Digite seu email">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label>Assunto <small>*</small></label>
                    <input name="form_subject" class="form-control required" type="text" placeholder="Digite o assunto">
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label>Celular</label>
                    <input name="form_phone" class="form-control" type="text" placeholder="Digite seu Celular">
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label>Mensagem</label>
                <textarea name="form_message" class="form-control required" rows="8" placeholder="Digite sua mensagem"></textarea>
              </div>
              <div class="mb-3">
                <input name="form_botcheck" class="form-control" type="hidden" value="" />
                <button type="submit" class="btn btn-theme-colored1 text-uppercase mt-10 mb-sm-30 border-left-theme-color-2-4px" data-loading-text="Aguarde...">Envie sua mensagem</button>
                <button type="reset" class="btn btn-theme-colored2 text-uppercase mt-10 mb-sm-30 border-left-theme-color-2-4px">Limpar</button>
              </div>
            </form>

            <!-- Contact Form Validation-->
            <script>
              (function($) {
                $("#contact_form").validate({
                  submitHandler: function(form) {
                    var form_btn = $(form).find('button[type="submit"]');
                    var form_result_div = '#form-result';
                    $(form_result_div).remove();
                    form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
                    var form_btn_old_msg = form_btn.html();
                    form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
                    $(form).ajaxSubmit({
                      dataType:  'json',
                      success: function(data) {
                        if( data.status == 'true' ) {
                          $(form).find('.form-control').val('');
                        }
                        form_btn.prop('disabled', false).html(form_btn_old_msg);
                        $(form_result_div).html(data.message).fadeIn('slow');
                        setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
                      }
                    });
                  }
                });
              })(jQuery);
            </script>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider: Google Map -->
    <section>
      <div class="container-fluid pt-0 pb-0">
        <div class="row">
          <!-- Google Map HTML Codes -->
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471098.98984000855!2d-48.07475455273221!3d-22.711105796386363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c631a5af864bcd%3A0x1b74b86e744eb12c!2sPiracicaba%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1631680835400!5m2!1spt-BR!2sbr" data-tm-width="100%" height="500" frameborder="0" allowfullscreen=""></iframe>
        </div>
      </div>
    </section>
    <!-- End Divider -->
  </div>
  <!-- end main-content -->

  <!-- Footer -->
  <?=view('Templates/Footer.php')?>
</div>
<!-- end wrapper -->

<!-- Footer Scripts -->
<!-- JS | Custom script for all pages -->
<script src="js/custom.js"></script>

</body>
</html>