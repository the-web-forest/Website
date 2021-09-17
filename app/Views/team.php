<!DOCTYPE html>
<html dir="ltr" lang="en">

  <?php echo view('Templates/Header'); ?>

<body class="tm-container-1340px has-side-panel side-panel-right">

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
              <h2 class="title">Nosso Time</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section: home End -->

    <!-- Section: Team -->
    <section>
      <div class="container pb-70">
        <div class="section-content">
          <div class="row">

            <!-- Member  -->
            <div class="col-lg-6 col-xl-3 col-md-6">
              <div class="team-item mb-30">
                <div class="team-thumb">
                  <img class="w-100" src="images/team/1.jpg" alt="">
                </div>
                <div class="team-content">
                  <div class="team-information">
                    <h4 class="team-name mt-0 mb-0">Matheus Barros</h4>
                    <p class="designation ">Fundador & Desenvolvedor</p>
                  </div>
                  <div class="team-social">
                    <ul class="styled-icons icon-dark icon-rounded clearfix">
                      <li><a class="social-link" href="https://www.linkedin.com/in/barros42" target="_blank" ><i class="fab fa-linkedin"></i></a></li>
                      <li><a class="social-link" href="https://twitter.com/4str0n4uta" target="_blank"><i class="fab fa-twitter"></i></a></li>
                      <li><a class="social-link" href="https://www.youtube.com/channel/UC-fqQFJ19_VMzEUa8OwDjbw" target="_blank"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Member -->

            <!-- Member  -->
            <div class="col-lg-6 col-xl-3 col-md-6">
              <div class="team-item mb-30">
                <div class="team-thumb">
                  <img class="w-100" src="images/team/2.jpg" alt="">
                </div>
                <div class="team-content">
                  <div class="team-information">
                    <h4 class="team-name mt-0 mb-0">Daniel Trindade</h4>
                    <p class="designation ">Desenvolvedor</p>
                  </div>
                  <div class="team-social">
                    <ul class="styled-icons icon-dark icon-rounded clearfix">
                      <li><a class="social-link" href="https://www.linkedin.com/in/daniel-trindade-a44955163" target="_blank" ><i class="fab fa-linkedin"></i></a></li>
                      <li><a class="social-link" href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                      <li><a class="social-link" href="#" target="_blank"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Member -->

          </div>
        </div>
      </div>
    </section>
    <!-- End Divider -->
  </div>
  <!-- end main-content -->
  <?=view('Templates/Footer.php')?>
</div>
<!-- end wrapper -->

<!-- Footer Scripts -->
<!-- JS | Custom script for all pages -->
<script src="js/custom.js"></script>

</body>
</html>