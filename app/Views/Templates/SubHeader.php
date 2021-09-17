<header id="header" class="header header-layout-type-header-2rows">
    <div class="header-nav tm-enable-navbar-hide-on-scroll">
      <div class="header-nav-wrapper navbar-scrolltofixed">
        <div class="menuzord-container header-nav-container">
          <div class="container position-relative">
            <div class="row header-nav-col-row">
              <div class="col-sm-auto align-self-center">
                <a class="menuzord-brand site-brand" href="<?=base_url()?>">
                  <img class="logo-default logo-1x" src="images/logo-wide@2x.png" alt="Logo">
                  <img class="logo-default logo-2x retina" src="images/logo-wide@2x.png" alt="Logo">
                </a>
              </div>
              <div class="col-sm-auto ms-auto pr-0 align-self-center">
                <nav id="top-primary-nav" class="menuzord theme-color1" data-effect="fade" data-animation="none" data-align="right">
                  <ul id="main-nav" class="menuzord-menu">
                    <li class="active">
                    <li><a href="<?=base_url()?>">Home</a></li>
                    <li><a href="#">Páginas</a>
                      <ul class="dropdown">
                        <li><a href="<?=base_url()?>#about">Sobre</a></li>
                        <li><a href="/team">Time</a></li>
                      </ul>
                    </li>
                    <li><a href="/contact">Contato</a></li>
                    <li><a href="#em-breve" onClick="alert('Em Breve!')">Web Forest</a></li>
                  </ul>
                </nav>
              </div>
              <div class="col-sm-auto align-self-center nav-side-icon-parent">
                <ul class="list-inline nav-side-icon-list">
                  <li class="hidden-mobile-mode">
                    <div id="side-panel-trigger" class="side-panel-trigger"> <a href="#">
                      <div class="hamburger-box">
                        <div class="hamburger-inner"></div>
                      </div>
                      </a> </div>
                  </li>
                </ul>
                <div id="top-nav-search-form" class="clearfix">
                  <form action="#" method="GET">
                    <input type="text" name="s" value="" placeholder="Type and Press Enter..." autocomplete="off" />
                  </form>
                  <a href="#" id="close-search-btn"><i class="fa fa-times"></i></a>
                </div>
              </div>
            </div>
            <div class="row header-nav-clone-col-row d-block d-xl-none">
               <div class="col-12">
                <nav id="top-primary-nav-clone" class="menuzord d-block d-xl-none default menuzord-color-default menuzord-border-boxed menuzord-responsive" data-effect="slide" data-animation="none" data-align="right">
                 <ul id="main-nav-clone" class="menuzord-menu menuzord-right menuzord-indented scrollable">
                 </ul>
                </nav>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>