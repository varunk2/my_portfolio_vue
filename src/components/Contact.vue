<template>
	<div class="main-wrapper">
		<section class="cta-section theme-bg-light py-5" style="margin-bottom:-2rem;">
			<div class="container text-center single-col-max-width">
				<h2 class="heading">Contact</h2>
				<div class="intro">
					<p>Interested in hiring me for your project or just want to say hi? Fill in the contact form below and I'll get back to you for sure.</p>
					<p>Want to get connected? Follow me on the social channels below.</p>
					<ul class="list-inline mb-0">
						<li class="list-inline-item mb-3">
							<a class="twitter" href="https://www.facebook.com/varun.sharma.5439087">
								<i class="fab fa-facebook fa-fw fa-lg"></i>
							</a>
						</li>
						<li class="list-inline-item mb-3">
							<a class="linkedin" href="https://www.linkedin.com/in/varun-sharma-3457b111b/">
								<i class="fab fa-linkedin-in fa-fw fa-lg"></i>
							</a>
						</li>
						<li class="list-inline-item mb-3">
							<a class="github" href="https://github.com/varunk2/">
								<i class="fab fa-github-alt fa-fw fa-lg"></i>
							</a>
						</li>
						<li class="list-inline-item mb-3">
							<a class="codepen" href="https://codepen.io/varunk2">
								<i class="fab fa-codepen fa-fw fa-lg"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
		
		<section class="contact-section px-3 p-md-5">
			<div class="container">
				<!-- <form class="contact-form col-lg-8 mx-lg-auto" method="post" action="email.php"> -->
					<form id="contact-form" class="contact-form col-lg-8 mx-lg-auto" method="post">
						<div class="form-row">

						<!-- Name -->
						<div class="form-group col-12">
							<label class="sr-only" for="cname">Name</label>
							<input type="text" class="form-control" name="name" id="name" placeholder="Name" minlength="2" required="" aria-required="true">
						</div>
						<!-- ./Name -->
						
						<!-- Email -->					
						<div class="form-group col-12">
							<label class="sr-only" for="cemail">Email</label>
							<input type="email" class="form-control" name="email" id="email" placeholder="Email" required="" aria-required="true">
						</div>
						<!-- ./Email -->
						
						<!-- Phone Number -->
						<div class="form-group col-12">
							<label class="sr-only" for="cemail">Phone Number</label>
							<input type="tel" class="form-control" name="phone_number" id="phone_number" placeholder="Phone Number" required="" aria-required="true">
						</div>
						<!-- ./Phone Number -->
						
						<!-- Message -->						
						<div class="form-group col-12">
							<label class="sr-only" for="cmessage">Your message</label>
							<textarea class="form-control" name="message" id="message" placeholder="Enter your message" rows="10" required="" aria-required="true"></textarea>
						</div>
						<!-- ./Message -->
						<div class="form-group col-12">
							<button type="submit" class="btn btn-block btn-primary btn-lg py-2">Send <i class="fab fa-telegram-plane"></i></button>
						</div>
					</div>
				</form>
			</div>
		</section>
		
		<div class="container"><hr></div>

		<footer class="footer text-center py-4">
			<p>Handmade by me with <i class="fa fa-heart heart_icon text-danger"></i> &copy; 2019</p>
		</footer>
    
    </div>
</template>

<script>
export default{
	name: 'Contact'
}
</script>