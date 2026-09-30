<script>
	import { siteConfig } from '$lib/site.config.js';

	const { data } = $props();
	const contact = siteConfig.contact;
</script>

<svelte:head>
	<title>{siteConfig.seo.defaultTitle}</title>
	<meta name="description" content={siteConfig.seo.defaultDescription} />
	<meta property="og:image" content={siteConfig.seo.ogImage} />
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
				<a href="/contact" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-medium"
					>Contact</a
				>
			</div>
		</div>
	</nav>

	<!-- Hero Section with Image -->
	<section class="relative">
		<div class="max-w-6xl mx-auto px-4 py-12">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<!-- Left: Property Image -->
				<div class="rounded-lg overflow-hidden shadow-xl">
					<img
						src="/assets/property-showcase.jpg"
						alt="222 Columbus Avenue - Office Suites"
						class="w-full h-auto object-cover"
					/>
				</div>

				<!-- Right: Property Details -->
				<div>
					<h1 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
						222 Columbus Avenue
					</h1>
					<p class="text-2xl font-semibold text-blue-600 mb-6">Boutique Office Suites For Lease</p>

					<div class="space-y-4 mb-8">
						<p class="text-lg text-slate-700">
							Premium office space available in the heart of San Francisco's historic neighborhood.
						</p>
						<div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
							<p class="text-slate-800 font-semibold">San Francisco, CA 94133</p>
							<p class="text-slate-600">Prime Downtown Location</p>
						</div>
					</div>

					<!-- CTA Button -->
					<a
						href="/contact"
						class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
					>
						Inquire About Lease
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Property Highlights -->
	<section class="bg-white py-16 mt-12">
		<div class="max-w-6xl mx-auto px-4">
			<h2 class="text-3xl font-bold text-slate-900 mb-12 text-center">Why Choose 222 Columbus</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="text-center p-6">
					<div class="text-4xl font-bold text-blue-600 mb-4">📍</div>
					<h3 class="text-xl font-semibold text-slate-900 mb-2">Prime Location</h3>
					<p class="text-slate-600">Located in a prestigious downtown area with excellent accessibility</p>
				</div>
				<div class="text-center p-6">
					<div class="text-4xl font-bold text-blue-600 mb-4">🏢</div>
					<h3 class="text-xl font-semibold text-slate-900 mb-2">Modern Facilities</h3>
					<p class="text-slate-600">Boutique-style office suites with professional amenities</p>
				</div>
				<div class="text-center p-6">
					<div class="text-4xl font-bold text-blue-600 mb-4">💼</div>
					<h3 class="text-xl font-semibold text-slate-900 mb-2">Professional Support</h3>
					<p class="text-slate-600">Expert leasing team ready to assist with your space needs</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section class="bg-slate-900 text-white py-16">
		<div class="max-w-6xl mx-auto px-4 text-center">
			<h2 class="text-3xl font-bold mb-8">Interested in Leasing?</h2>
			<div class="space-y-4 mb-8">
				<p class="text-lg">
					<strong>Contact Jerry Adamson</strong>
				</p>
				<p class="text-xl">
					<a href="tel:7075707802" class="text-blue-400 hover:text-blue-300 font-semibold"
						>{contact.phone}</a
					>
				</p>
				<p class="text-lg">
					<a href="mailto:{contact.email}" class="text-blue-400 hover:text-blue-300 font-semibold"
						>{contact.email}</a
					>
				</p>
			</div>
			<a
				href="/contact"
				class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
			>
				Send Inquiry
			</a>
		</div>
	</section>

	<!-- Footer -->
	<footer class="bg-slate-100 border-t border-slate-200 py-8">
		<div class="max-w-6xl mx-auto px-4">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
				<div>
					<h3 class="font-semibold text-slate-900 mb-2">Property</h3>
					<p class="text-slate-600">{contact.address.street}</p>
					<p class="text-slate-600">{contact.address.city}, {contact.address.state} {contact.address.zipCode}</p>
				</div>
				<div>
					<h3 class="font-semibold text-slate-900 mb-2">Contact</h3>
					<p class="text-slate-600">Phone: {contact.phone}</p>
					<p class="text-slate-600">Email: {contact.email}</p>
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
