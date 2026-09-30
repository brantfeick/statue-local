<script>
	import { siteConfig } from '$lib/site.config.js';
</script>

<svelte:head>
	<title>About 222 Columbus Avenue</title>
	<meta name="description" content="Learn about 222 Columbus Avenue and our office space offerings." />
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
				<a href="/about" class="text-blue-600 font-medium">About</a>
				<a href="/contact" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-medium"
					>Contact</a
				>
			</div>
		</div>
	</nav>

	<!-- Hero Section -->
	<section class="bg-white py-16 border-b border-slate-200">
		<div class="max-w-6xl mx-auto px-4">
			<h1 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">About 222 Columbus Avenue</h1>
			<p class="text-xl text-slate-600">
				Premium office suites in San Francisco's most desirable location
			</p>
		</div>
	</section>

	<!-- Main Content -->
	<section class="max-w-6xl mx-auto px-4 py-16">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
			<div>
				<h2 class="text-3xl font-bold text-slate-900 mb-6">Our Location</h2>
				<p class="text-lg text-slate-700 mb-4">
					Located at the prestigious 222 Columbus Avenue in San Francisco's vibrant downtown district, our
					boutique office suites offer the perfect combination of location, style, and professional amenities.
				</p>
				<p class="text-lg text-slate-700 mb-4">
					Whether you're a growing startup, established professional, or enterprise looking to expand, 222
					Columbus Avenue provides the ideal environment for your business to thrive.
				</p>
				<div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
					<p class="font-semibold text-slate-900 mb-2">Address</p>
					<p class="text-slate-700 mb-4">222 Columbus Avenue, Suite 420</p>
					<p class="font-semibold text-slate-900 mb-2">San Francisco, CA 94133</p>
				</div>
			</div>
			<div class="rounded-lg overflow-hidden shadow-xl">
				<img
					src="/assets/property-showcase.jpg"
					alt="222 Columbus Avenue"
					class="w-full h-auto object-cover"
				/>
			</div>
		</div>

		<!-- Features -->
		<div class="mb-16">
			<h2 class="text-3xl font-bold text-slate-900 mb-8">What We Offer</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div class="p-6 bg-white rounded-lg shadow-sm border border-slate-200">
					<h3 class="text-xl font-semibold text-slate-900 mb-2">Professional Environment</h3>
					<p class="text-slate-600">Modern office suites designed for productivity and success</p>
				</div>
				<div class="p-6 bg-white rounded-lg shadow-sm border border-slate-200">
					<h3 class="text-xl font-semibold text-slate-900 mb-2">Flexible Lease Terms</h3>
					<p class="text-slate-600">Customize your lease to fit your business needs and timeline</p>
				</div>
				<div class="p-6 bg-white rounded-lg shadow-sm border border-slate-200">
					<h3 class="text-xl font-semibold text-slate-900 mb-2">Convenient Location</h3>
					<p class="text-slate-600">Easy access to public transportation and downtown amenities</p>
				</div>
				<div class="p-6 bg-white rounded-lg shadow-sm border border-slate-200">
					<h3 class="text-xl font-semibold text-slate-900 mb-2">Expert Support</h3>
					<p class="text-slate-600">Dedicated leasing professionals to support your business</p>
				</div>
			</div>
		</div>

		<!-- About Company -->
		<div class="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
			<h2 class="text-3xl font-bold text-slate-900 mb-6">About Ground Matrix</h2>
			<p class="text-lg text-slate-700 mb-4">
				Ground Matrix is a commercial real estate company specializing in premier office space solutions in San
				Francisco. With years of experience and a deep understanding of the local market, we help businesses find
				the perfect space to grow and succeed.
			</p>
			<p class="text-lg text-slate-700">
				Our team is committed to providing exceptional service and finding the ideal lease opportunities for our
				clients.
			</p>
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
