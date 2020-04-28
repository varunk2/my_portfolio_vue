<template>
  <div class="main-wrapper">
    
    <!-- About me Section -->
    <section class="about-me-section p-3 p-lg-5 theme-bg-light">
      <div class="container">
        <div class="profile-teaser media flex-column flex-lg-row">
          
          <div class="media-body">
            <h2 class="name font-weight-bold mb-1">Varun Sharma</h2>
            <div class="tagline mb-3">Web Developer</div>
            <div class="bio mb-4">I'm an enthusiastic web developer specialised in backend development of powerful and dynamic web apps.<br><br>I'm a book enthusiast currently reading <a class="link-on-bg" href="https://www.jordanbpeterson.com/12-rules-for-life/" target="_blank">"12 Rules For Life"</a> by Mark Manson.<br><br> Want to know how I may help you in your project? Check out my project portfolio and resume.
            </div>
            <div class="mb-4">
              <router-link to='portfolio' class="btn btn-primary mr-2 mb-3">
                <i class="fas fa-arrow-alt-circle-right mr-2"></i><span class="d-none d-md-inline">View</span> Portfolio
              </router-link>
              <router-link to='resume' class="btn btn-secondary mb-3">
                <i class="fas fa-file-alt mr-2"></i><span class="d-none d-md-inline">View</span> Resume
              </router-link>
              <!-- <a class="btn btn-primary mr-2 mb-3" href="portfolio.html"><i class="fas fa-arrow-alt-circle-right mr-2"></i><span class="d-none d-md-inline">View</span> Portfolio</a> -->
              <!-- <a class="btn btn-secondary mb-3" href="resume.html"><i class="fas fa-file-alt mr-2"></i><span class="d-none d-md-inline">View</span> Resume</a> -->
            </div>
          </div>
          <img class="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0" src="@/assets/images/profile-lg.jpg" alt="">
        </div>
      </div>
    </section>
    <!-- ./About me Section -->

    <div class="container"><hr></div>
    
    <!-- Skills Section -->
    <section class="overview-section p-3 p-lg-5">
      <div class="container">
        <h2 class="section-title font-weight-bold mb-3">What I do</h2>
        <div class="section-intro mb-5">I have 1.5 years' experience building software. Below is a quick overview of my main technical skill sets and technologies I use.</div>
        <div class="row">

          <!-- HTML -->
          <div class="item col-6 col-lg-3">
            <div class="item-inner text-center">
              <div class="item-icon">
                <img src="@/assets/images/skills/001-html5.png" class="skills_images">
              </div>
              <br>
              <h3 class="item-title">
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <br><br>
                HTML 5
              </h3>
            </div>
          </div>
          <!-- ./HTML -->

          <!-- CSS -->
          <div class="item col-6 col-lg-3">
            <div class="item-inner text-center">
              <div class="item-icon">
                <img src="@/assets/images/skills/002-css.png" class="skills_images">
              </div>
              <br>
              <h3 class="item-title">
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="far fa-star"></span>
                <br><br>
                CSS 3
              </h3>
            </div>
          </div>
          <!-- ./CSS -->

          <!-- JavaScript -->
          <div class="item col-6 col-lg-3">
            <div class="item-inner text-center">
              <div class="item-icon">
                <img src="@/assets/images/skills/003-java-script.png" class="skills_images">
              </div>
              <br>
              <h3 class="item-title">
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
                <br><br>
                Javascript (ES6)
              </h3>
            </div>
          </div>
          <!-- ./JavaScript -->

          <!-- jQuery -->
          <div class="item col-6 col-lg-3">
            <div class="item-inner text-center">
              <div class="item-icon">
                <img src="@/assets/images/skills/jquery_icon.png" class="skills_images">
              </div>
              <br>
              <h3 class="item-title">
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="far fa-star"></span>
                <br><br>
                jQuery
              </h3>
            </div>
          </div>
          <!-- ./jQuery -->

          <!-- Bootstrap -->
          <div class="item col-6 col-lg-3">
            <div class="item-inner text-center">
              <div class="item-icon">
                <img src="@/assets/images/skills/bootstrap-icon.png" class="skills_images">
              </div>
              <br>
              <h3 class="item-title">
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="far fa-star"></span>
                <br><br>
                Bootstrap 4
              </h3>
            </div>
          </div>
          <!-- ./Bootstrap -->

          <!-- PHP -->
          <div class="item col-6 col-lg-3">
            <div class="item-inner text-center">
              <div class="item-icon">
                <img src="@/assets/images/skills/004-php.png" class="skills_images">
              </div>
              <br>
              <h3 class="item-title">
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="far fa-star"></span>
                <br><br>
                PHP
              </h3>
            </div>
          </div>
          <!-- ./PHP -->

          <!-- Python -->
          <div class="item col-6 col-lg-3">
            <div class="item-inner text-center">
              <div class="item-icon">
                <img src="@/assets/images/skills/pyhton-logo.png" class="skills_images">
              </div>
              <br>
              <h3 class="item-title">
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
                <br><br>
                Python
              </h3>
            </div>
          </div>
          <!-- Python -->

          <!-- Mysql -->
          <div class="item col-6 col-lg-3">
            <div class="item-inner text-center">
              <div class="item-icon">
                <img src="@/assets/images/skills/mysql_logo.png" class="skills_images">
              </div>
              <br>
              <h3 class="item-title">
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
                <br><br>
                MySQL
              </h3>
            </div>
          </div>
          <!-- ./Mysql -->

          <!-- CodeIgniter -->
          <div class="item col-6 col-lg-3">
            <div class="item-inner text-center">
              <div class="item-icon">
                <img src="@/assets/images/skills/codeigniter_logo.png" class="skills_images">
              </div>
              <br>
              <h3 class="item-title">
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
                <br><br>
                CodeIgniter
              </h3>
            </div>
          </div>
          <!-- ./CodeIgniter -->

          <!-- Laravel -->
          <div class="item col-6 col-lg-3">
            <div class="item-inner text-center">
              <div class="item-icon">
                <img src="@/assets/images/skills/laravel-logo.png" class="skills_images">
              </div>
              <br>
              <h3 class="item-title">
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
                <br><br>
                Laravel
              </h3>
            </div>
          </div>
          <!-- ./Laravel -->

          <!-- Django -->
          <div class="item col-6 col-lg-3">
            <div class="item-inner text-center">
              <div class="item-icon">
                <img src="@/assets/images/skills/django_logo.png" class="skills_images">
              </div>
              <br>
              <h3 class="item-title">
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
                <br><br>
                Django
              </h3>
            </div>
          </div>
          <!-- ./Django -->

          <!-- Firebase -->
          <div class="item col-6 col-lg-3">
            <div class="item-inner text-center">
              <div class="item-icon">
                <img src="@/assets/images/skills/firebase_logo.png" class="skills_images">
              </div>
              <br>
              <h3 class="item-title">
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
                <br><br>
                Firebase
              </h3>
            </div>
          </div>
          <!-- ./Firebase -->

        </div>
        
      </div>
    </section>
    <!-- ./Skills Section -->
    
    <div class="container"><hr></div>
    
    <!-- Featured Projects -->
    <section class="featured-section p-3 p-lg-5">
      <div class="container">
        <h2 class="section-title font-weight-bold mb-5">Featured Projects</h2>
        <div class="row">
          <div class="col-md-6 mb-5">
            <div class="card project-card">
              <img src="@/assets/images/project/agility_today.png" class="img-fluid" alt="image">
              <div class="card-body">
                <h5 class="card-title">
                  <a href="https://agilitytoday.com/" target="_blank" class="theme-link">Agility Today</a>
                </h5>
                <p class="card-text">
                  AgilityToday is a 2 days Unconference, hosted in the National Capital Region of India. This unconference is a learning program, facilitated by AgileVirgin.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6 mb-5"> 
            <div class="card project-card">
              <img src="@/assets/images/project/agile_virgin.png" class="card-img" alt="image">
              <div class="card-body">
                <h5 class="card-title"><a href="project.html" target="_blank" class="theme-link">Agile Virgin</a></h5>
                <p class="card-text">Started in 2013, with a vision to meet Agility needs of it’s Community, AgileVirgin operates as one BIG Community of Practices (CoP).</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 mb-5">
            <div class="card project-card">
              <img src="@/assets/images/project/carry_my_baggage.png" class="card-img" alt="image">
              <div class="card-body">
                <h5 class="card-title"><a href="https://carrymybaggage.com/" target="_blank" class="theme-link">Carry My Baggage</a></h5>
                <p class="card-text">Carrymybaggage.com is a baggage transfer service that provides door-to- door, door-to-airport, and airport-to- door collection and delivery for all kinds of baggage items. </p>
              </div>
            </div>
          </div>

          <div class="col-md-6 mb-5">
            <div class="card project-card">
              <img src="@/assets/images/project/edways.png" class="card-img" alt="image">
              <div class="card-body">
                <h5 class="card-title"><a href="https://edwayz.com/" target="_blank" class="theme-link">Edwayz</a></h5>
                <p class="card-text">Edwayz is an ed-tech startup focused towards innovating education by gamifying simple concepts. They provide a large collection of free worksheets, work books for children.</p> 
              </div>
            </div>
          </div>
        </div>
        <div class="text-center py-3"><a href="portfolio.html" class="btn btn-primary"><i class="fas fa-arrow-alt-circle-right mr-2"></i>View Portfolio</a></div>
        
      </div>
    </section>
    <!-- ./Featured Projects-->
    
    <div class="container"><hr></div>

    <footer class="footer text-center py-4">
      <p>Handmade by me with <i class="fa fa-heart heart_icon text-danger"></i> &copy; 2019</p>
    </footer>
    
  </div>
</template>

<script>
export default {
  name: 'Index',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .checked{ color: orange; }
  .skills_images { width: 43% !important; }
</style>
