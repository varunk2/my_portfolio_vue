<template>
	<header class="header text-center">
		<div class="force-overflow">
			<h1 class="blog-name pt-lg-4 mb-0">
				<router-link to='/' class="nav-link">Varun Sharma</router-link>
			</h1>
			
			<nav class="navbar navbar-expand-lg navbar-dark">
				
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				
				<div id="navigation" class="collapse navbar-collapse flex-column">
					<div class="profile-section pt-3 pt-lg-0">
						<img class="profile-image mb-3 rounded-circle mx-auto" src="@/assets/images/pic_small.jpg" alt="image" >
						
						<div class="bio mb-2">Hi, my name is Varun Sharma and welcome to my portfolio!</div><!--//bio-->
						<ul class="social-list list-inline mx-auto">
							<li class="list-inline-item">
								<a href="https://www.facebook.com/varun.sharma.5439087"><i class="fab fa-facebook fa-fw"></i></a>
							</li>
							<li class="list-inline-item">
								<a href="https://www.linkedin.com/in/varun-sharma-3457b111b/"><i class="fab fa-linkedin-in fa-fw"></i></a>
							</li>
							<li class="list-inline-item">
								<a href="https://github.com/varunk2/"><i class="fab fa-github-alt fa-fw"></i></a>
							</li>
						</ul>
						<hr> 
					</div>
					
					<ul class="navbar-nav flex-column text-left">
						<li class="nav-item">
							<router-link to='/' class="nav-link"><i class="fas fa-user fa-fw mr-2"></i>About Me</router-link>
						</li>
						<li class="nav-item" id="portfolio">
							<router-link to='/portfolio' class="nav-link"><i class="fas fa-laptop-code fa-fw mr-2"></i>Portfolio</router-link>
						</li>
						<li class="nav-item" id="resume">
							<router-link to='/resume' class="nav-link"><i class="fas fa-user fa-fw mr-2"></i>Resume</router-link>
						</li>
						<li class="nav-item" id="contact">
							<router-link to='/contact' class="nav-link"><i class="fas fa-user fa-fw mr-2"></i>Contact</router-link>
						</li>
					</ul>
					
					<div class="dark-mode-toggle text-center w-100">
						<hr>
						<div class="my-2">
							<router-link to='/contact' class="btn btn-primary"><i class="fas fa-paper-plane mr-2"></i>Hire Me</router-link>
						</div>
					</div>
					
				</div>
			</nav>
		</div>
	</header>
</template>

<script>
	export default{
		name: "Navbar"
	}
</script>