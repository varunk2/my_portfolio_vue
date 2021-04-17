<template>
  <div class="main-wrapper">
    
    <!-- About me Section -->
    <section class="about-me-section p-3 p-lg-5 theme-bg-light">
      <div class="container">
        <div class="profile-teaser media flex-column flex-lg-row">
          
          <div class="media-body">
            <h2 class="name font-weight-bold mb-1">Varun Sharma</h2>
            <!-- <div class="tagline mb-3">Web Developer</div> -->
            <div class="bio mb-4">
              I'm an enthusiastic, curious and a smiling game and web developer.
              <br>
              <br>
              Currently I'm trying my hands in game development which I find very challenging in comparison to web development. Well both domains have there own challenges but game development is more challenging that's just my opinion.
              <br>
              <br>
              I've previously worked as a full-stack web developer for 2 years creating small to large scale static and dynamic websites.
              <br>
              <br>
              I'm a book enthusiast currently reading <a class="link-on-bg" href="https://www.jordanbpeterson.com/12-rules-for-life/" target="_blank">"12 Rules For Life"</a> by <a href="https://www.jordanbpeterson.com/">Jordan Bernt Peterson</a>.
              <br>
              <br>
              This website is a collection of some of my work and is intended to showcase my ideas and methods.
            </div>
            <div class="mb-4">
              <router-link to='portfolio' class="btn btn-primary mr-2 mb-3">
                <i class="fas fa-arrow-alt-circle-right mr-1"></i> View Portfolio
              </router-link>
              <router-link to='resume' class="btn btn-secondary mb-3">
                <i class="fas fa-file-alt mr-1"></i> View Resume
              </router-link>
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
        <h2 class="section-title font-weight-bold mb-3">What I know</h2>
        <div class="section-intro">Below is a quick overview of my main technical skill sets and technologies I use.</div>        

        <!-- Game Development Skills -->
        <div class="skills-section mt-5">

          <ul class="nav nav-pills" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="pill" href="#game_development">
                <h3>Game Development</h3>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#web_development">
                <h3>Web Development</h3>
              </a>
            </li>
          </ul>

          <!-- Tab panes -->
          <div class="tab-content">
            <div id="game_development" class="container tab-pane active"><br>
              <!-- C# -->
              <div class="skill-wrapper mt-4">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-name text-left">C#</p>
                  </div>
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-percentage text-right">25%</p>
                  </div>
                </div>          
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <!-- C# -->
              
              <!-- Unity -->
              <div class="skill-wrapper mt-4">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-name text-left">Unity</p>
                  </div>
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-percentage text-right">45%</p>
                  </div>
                </div>          
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 45%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <!-- Unity -->
              
              <!-- Adobe PhotoShop 20.1.0 -->
              <div class="skill-wrapper mt-4">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-name text-left">Adobe PhotoShop 20.1.0</p>
                  </div>
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-percentage text-right">15%</p>
                  </div>
                </div>          
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 15%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <!-- Adobe PhotoShop 20.1.0 -->
            </div>

            <div id="web_development" class="container tab-pane fade"><br>
              <!-- HTML 5 -->
              <div class="skill-wrapper mt-4">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-name text-left">HTML 5</p>
                  </div>
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-percentage text-right">70%</p>
                  </div>
                </div>          
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 70%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <!-- HTML 5 -->
              
              <!-- CSS 3 -->
              <div class="skill-wrapper mt-4">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-name text-left">CSS 3</p>
                  </div>
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-percentage text-right">60%</p>
                  </div>
                </div>          
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 60%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <!-- CSS 3 -->
              
              <!-- JavaScript -->
              <div class="skill-wrapper mt-4">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-name text-left">JavaScript</p>
                  </div>
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-percentage text-right">60%</p>
                  </div>
                </div>          
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 60%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <!-- JavaScript -->
              
              <!-- Bootstrap -->
              <div class="skill-wrapper mt-4">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-name text-left">Bootstrap</p>
                  </div>
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-percentage text-right">70%</p>
                  </div>
                </div>          
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 70%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <!-- Bootstrap -->

              <!-- PHP -->
              <div class="skill-wrapper mt-4">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-name text-left">PHP</p>
                  </div>
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-percentage text-right">60%</p>
                  </div>
                </div>          
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 60%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <!-- PHP -->

              <!-- CodeIgniter -->
              <div class="skill-wrapper mt-4">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-name text-left">CodeIgniter</p>
                  </div>
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-percentage text-right">60%</p>
                  </div>
                </div>          
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 60%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <!-- CodeIgniter -->
              
              <!-- Python -->
              <div class="skill-wrapper mt-4">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-name text-left">Python</p>
                  </div>
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-percentage text-right">40%</p>
                  </div>
                </div>          
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 40%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <!-- Python -->

              <!-- MySQL -->
              <div class="skill-wrapper mt-4">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-name text-left">MySQL</p>
                  </div>
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-percentage text-right">70%</p>
                  </div>
                </div>          
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 70%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <!-- MySQL -->

              <!-- Firebase -->
              <div class="skill-wrapper mt-4">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-name text-left">Firebase</p>
                  </div>
                  <div class="col-md-6 col-sm-6 col-6">
                    <p class="skill-percentage text-right">50%</p>
                  </div>
                </div>          
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <!-- Firebase -->
            </div>
          </div>

        </div>
        <!-- Game Development Skills -->
        
      </div>
    </section>
    <!-- ./Skills Section -->
    
    <div class="container"><hr></div>
    
    <!-- Featured Projects -->
    <section class="featured-section p-3 p-lg-5">
      <div class="container">
        <h2 class="section-title font-weight-bold mb-5">Some of my projects</h2>
        <div class="row">
          <div class="col-md-6 mb-5">
            <div class="card project-card">
              <img src="@/assets/images/project/space_shooter_2d.png" class="img-fluid" alt="image">
              <div class="card-body">
                <h5 class="card-title">
                  <a href="https://github.com/varunk2/SpaceShooter2D" target="_blank" class="theme-link">Space Shooter 2D</a>
                </h5>
                <p class="card-text">
                  Space Shooter 2D is a 2D space shooter game which I made just for fun to test my Unity skills.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6 mb-5">
            <div class="card project-card">
              <img src="@/assets/images/project/2d_platformer.png" class="img-fluid" alt="image">
              <div class="card-body">
                <h5 class="card-title">
                  <a href="https://github.com/varunk2/SpaceShooter2D" target="_blank" class="theme-link">2D Platformer Game</a>
                </h5>
                <p class="card-text">
                  A 2D platformer game which I made in Unity while pursuing my Full-stack Game Development course from Outscal.
                  <br>This was a full game with a starting scene and a game over scene, Player and enemy animations, Scene management, Health management and audios.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-5"> 
            <div class="card project-card">
              <img src="@/assets/images/project/conways_game_of_life.png" class="card-img" alt="image">
              <div class="card-body">
                <h5 class="card-title"><a href="https://github.com/varunk2/conways_game_of_life" target="_blank" class="theme-link">Conway's Game Of Life</a></h5>
                <p class="card-text">Implemented rules of Conway’s Game of Life, resulting a beautiful implementation. This was indeed a tough task to implement.</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 mb-5"> 
            <div class="card project-card">
              <img src="@/assets/images/project/truck_smash.png" class="card-img" alt="image">
              <div class="card-body">
                <h5 class="card-title"><a href="https://github.com/varunk2/conways_game_of_life" target="_blank" class="theme-link">Truck Smash</a></h5>
                <p class="card-text">A simple prototype of car physics which I was trying for fun. This was the very first time when I made something in Unity while learning Unity.<br>Implemented player controls which would make the car move.<br>Learned how to make the Camera follow the car and give the player a proper view of the scene.</p>
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
			<p>Handmade by me with <i class="fa fa-heart heart_icon text-danger"></i> &copy; 2021</p>
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
