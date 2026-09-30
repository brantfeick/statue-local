<script>
	import { siteConfig } from '$lib/site.config.js';

	let formData = {
		name: '',
		email: '',
		phone: '',
		company: '',
		message: '',
		submitted: false
	};

	function handleSubmit(e) {
		// For now, just show a success message
		// In a real app, you'd send this to a backend
		formData.submitted = true;
		setTimeout(() => {
			formData = {
				name: '',
				email: '',
				phone: '',
				company: '',
				message: '',
				submitted: false
			};
		}, 3000);
	}
</script>

<svelte:head>
	<title>Contact - 222 Columbus Avenue</title>
	<meta name="description" content="Contact us at 222 Columbus Avenue to learn more about leasing office space." />
</svelte:head>

<div class="min-h-screen bg-slate-50">
	<!-- Navigation -->
	<nav class="sticky top-0 bg-white shadow-sm z-50">
		<div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
			<a href="/" class="text-2xl font-bold text-slate-900">
				{siteConfig.navbar.siteTitle}
			</a>
			<div class="flex gap-6">
				<a href="/" class="text-slate-700 hover:text-slate-900 font-medium">Home</a>
				<a href="/about" class="text-slate-700 hover:text-slate-900 font-medium">About</a>
				<a href="/contact" class="text-blue-600 font-medium">Contact</a>
			</div>
		</div>
	</nav>

	<!-- Hero Section -->
	<section class="bg-white py-16 border-b border-slate-200">
		<div class="max-w-6xl mx-auto px-4">
			<h1 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Get in Touch</h1>
			<p class="text-xl text-slate-600">Interested in leasing space at 222 Columbus Avenue?</p>
		</div>
	</section>

	<!-- Contact Content -->
	<section class="max-w-6xl mx-auto px-4 py-16">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- Contact Form -->
			<div>
				<h2 class="text-3xl font-bold text-slate-900 mb-8">Send us an Inquiry</h2>

				{#if formData.submitted}
					<div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
						<h3 class="text-lg font-semibold text-green-900 mb-2">Thank You!</h3>
						<p class="text-green-700">
							We've received your inquiry and will contact you soon. We appreciate your interest in 222
							Columbus Avenue.
						</p>
					</div>
				{/if}

				<form on:submit|preventDefault={handleSubmit} class="space-y-6">
					<div>
						<label for="name" class="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
						<input
							type="text"
							id="name"
							bind:value={formData.name}
							required
							class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Your name"
						/>
					</div>

					<div>
						<label for="email" class="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
						<input
							type="email"
							id="email"
							bind:value={formData.email}
							required
							class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="your@email.com"
						/>
					</div>

					<div>
						<label for="phone" class="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
						<input
							type="tel"
							id="phone"
							bind:value={formData.phone}
							required
							class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="(555) 123-4567"
						/>
					</div>

					<div>
						<label for="company" class="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
						<input
							type="text"
							id="company"
							bind:value={formData.company}
							class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Your company"
						/>
					</div>

					<div>
						<label for="message" class="block text-sm font-medium text-slate-700 mb-2">Message</label>
						<textarea
							id="message"
							bind:value={formData.message}
							required
							rows="5"
							class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
							placeholder="Tell us about your space requirements..."
						></textarea>
					</div>

					<button
						type="submit"
						class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
					>
						Send Inquiry
					</button>
				</form>
			</div>

			<!-- Contact Information -->
			<div>
				<h2 class="text-3xl font-bold text-slate-900 mb-8">Direct Contact</h2>

				<div class="space-y-8">
					<!-- Leasing Professional -->
					<div class="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-slate-900 mb-4">Leasing Professional</h3>
						<div class="space-y-3">
							<p class="text-lg font-semibold text-slate-900">Jerry Adamson</p>
							<p class="text-slate-600">
								<span class="font-medium">CalDRE License:</span> #01935945
							</p>
							<p class="text-slate-600">
								<span class="font-medium">Phone:</span>
								<a href="tel:7075707802" class="text-blue-600 hover:text-blue-700 font-semibold"
									>{siteConfig.contact.phone}</a
								>
							</p>
							<p class="text-slate-600">
								<span class="font-medium">Email:</span>
								<a href="mailto:{siteConfig.contact.email}" class="text-blue-600 hover:text-blue-700 font-semibold"
									>{siteConfig.contact.email}</a
								>
							</p>
						</div>
					</div>

					<!-- Property Address -->
					<div class="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
						<h3 class="text-xl font-semibold text-slate-900 mb-4">Property Address</h3>
						<div class="space-y-2 text-slate-700">
							<p>222 Columbus Avenue, Suite 420</p>
							<p>San Francisco, CA 94133</p>
							<p class="pt-4 font-semibold text-slate-900">United States</p>
						</div>
					</div>

					<!-- Company -->
					<div class="bg-blue-50 p-8 rounded-lg border border-blue-200">
						<h3 class="text-xl font-semibold text-slate-900 mb-4">Represented By</h3>
						<p class="text-lg font-semibold text-slate-900 mb-2">Ground Matrix</p>
						<p class="text-slate-700 mb-4">
							Premier commercial real estate solutions in San Francisco
						</p>
						<p class="text-slate-600">groundmatrix.com</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="bg-slate-100 border-t border-slate-200 py-8 mt-16">
		<div class="max-w-6xl mx-auto px-4">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
				<div>
					<h3 class="font-semibold text-slate-900 mb-2">Property</h3>
					<p class="text-slate-600">222 Columbus Avenue, Suite 420</p>
					<p class="text-slate-600">San Francisco, CA 94133</p>
				</div>
				<div>
					<h3 class="font-semibold text-slate-900 mb-2">Contact</h3>
					<p class="text-slate-600">Phone: {siteConfig.contact.phone}</p>
					<p class="text-slate-600">Email: {siteConfig.contact.email}</p>
				</div>
				<div>
					<h3 class="font-semibold text-slate-900 mb-2">Company</h3>
					<p class="text-slate-600">{siteConfig.site.author}</p>
					<p class="text-slate-600">groundmatrix.com</p>
				</div>
			</div>
			<div class="border-t border-slate-200 pt-8 text-center text-slate-600">
				<p>&copy; 2026 {siteConfig.site.author}. All rights reserved.</p>
			</div>
		</div>
	</footer>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
