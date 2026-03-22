<svelte:head>
	<title>{$t('contact.meta_title')}</title>
	<meta name="description" content={$t('contact.meta_desc')} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import { t } from '$lib/i18n';

	let name = $state('');
	let email = $state('');
	let subject = $state('investor');
	let message = $state('');
	let status = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		status = 'sending';
		try {
			const res = await fetch('https://formspree.io/f/xwpkqdgb', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({ name, email, subject, message })
			});
			status = res.ok ? 'sent' : 'error';
		} catch {
			status = 'error';
		}
	}
</script>

<Nav activePage="contact" />

<!-- HERO -->
<section class="relative overflow-hidden bg-green-950 px-6 pb-20 pt-40">
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-800/30 via-green-950 to-green-950"></div>
	<div class="relative z-10 mx-auto max-w-3xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">{$t('contact.hero.eyebrow')}</div>
		<h1 class="mb-4 text-5xl font-extrabold tracking-tight text-white">{$t('contact.hero.title')}</h1>
		<p class="text-lg text-green-100">
			{$t('contact.hero.desc')}
		</p>
	</div>
</section>

<!-- CONTENT -->
<section class="border-t border-green-800 bg-green-950 px-6 py-20">
	<div class="mx-auto grid max-w-5xl gap-12 sm:grid-cols-2">

		<!-- FORM -->
		<div>
			{#if status === 'sent'}
				<div class="rounded-2xl border border-green-600 bg-green-800/50 p-8 text-center">
					<div class="mb-3 text-4xl">✓</div>
					<h2 class="mb-2 text-xl font-bold text-white">{$t('contact.sent.title')}</h2>
					<p class="text-green-200">{$t('contact.sent.desc')}</p>
					<button
						onclick={() => { status = 'idle'; name = ''; email = ''; message = ''; }}
						class="mt-6 text-sm text-green-400 underline underline-offset-2 hover:text-green-300 transition-colors"
					>
						{$t('contact.sent.again')}
					</button>
				</div>
			{:else}
				<form onsubmit={handleSubmit} class="space-y-5">
					<div>
						<label for="name" class="mb-1.5 block text-sm font-medium text-green-300">{$t('contact.form.name')}</label>
						<input
							id="name"
							type="text"
							bind:value={name}
							required
							placeholder={$t('contact.form.name_placeholder')}
							class="w-full rounded-xl border border-green-700 bg-green-900 px-4 py-3 text-white placeholder-green-600 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition-colors"
						/>
					</div>
					<div>
						<label for="email" class="mb-1.5 block text-sm font-medium text-green-300">{$t('contact.form.email')}</label>
						<input
							id="email"
							type="email"
							bind:value={email}
							required
							placeholder="you@example.com"
							class="w-full rounded-xl border border-green-700 bg-green-900 px-4 py-3 text-white placeholder-green-600 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition-colors"
						/>
					</div>
					<div>
						<label for="subject" class="mb-1.5 block text-sm font-medium text-green-300">{$t('contact.form.subject_label')}</label>
						<select
							id="subject"
							bind:value={subject}
							class="w-full rounded-xl border border-green-700 bg-green-900 px-4 py-3 text-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition-colors"
						>
							<option value="investor">{$t('contact.form.opt_investor')}</option>
							<option value="farmer">{$t('contact.form.opt_farmer')}</option>
							<option value="partner">{$t('contact.form.opt_partner')}</option>
							<option value="press">{$t('contact.form.opt_press')}</option>
							<option value="other">{$t('contact.form.opt_other')}</option>
						</select>
					</div>
					<div>
						<label for="message" class="mb-1.5 block text-sm font-medium text-green-300">{$t('contact.form.message')}</label>
						<textarea
							id="message"
							bind:value={message}
							required
							rows="5"
							placeholder={$t('contact.form.message_placeholder')}
							class="w-full rounded-xl border border-green-700 bg-green-900 px-4 py-3 text-white placeholder-green-600 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition-colors resize-none"
						></textarea>
					</div>
					{#if status === 'error'}
						<p class="text-sm text-red-400">{$t('contact.form.error')}</p>
					{/if}
					<button
						type="submit"
						disabled={status === 'sending'}
						class="w-full rounded-xl bg-green-500 py-3.5 text-base font-semibold text-white hover:bg-green-400 disabled:opacity-60 transition-colors"
					>
						{status === 'sending' ? $t('contact.form.sending') : $t('contact.form.submit')}
					</button>
				</form>
			{/if}
		</div>

		<!-- CONTACT INFO -->
		<div class="space-y-8">
			<div>
				<h2 class="mb-6 text-2xl font-bold text-white">{$t('contact.sidebar.title')}</h2>
				<div class="space-y-4">
					{#each $t('contact.sidebar.items') as item}
						<div class="rounded-xl border border-green-700 bg-green-800/50 p-4">
							<div class="mb-1 font-semibold text-white">{item.type}</div>
							<p class="text-sm text-green-200">{item.detail}</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="rounded-xl border border-green-700 bg-green-800/50 p-6 space-y-3">
				<h3 class="font-semibold text-white">{$t('contact.sidebar.direct_title')}</h3>
				<div class="text-sm text-green-200 space-y-1">
					<div><span class="text-green-400">{$t('contact.sidebar.label_email')}</span> invest@greenalgae.mu</div>
					<div><span class="text-green-400">{$t('contact.sidebar.label_location')}</span> Mauritius</div>
					<div><span class="text-green-400">{$t('contact.sidebar.label_response')}</span> {$t('contact.sidebar.response_time')}</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- FOOTER -->
<footer class="border-t border-green-800 bg-green-950 px-6 py-10 text-center text-xs text-green-400">
	<div class="mx-auto max-w-5xl">
		<div class="mb-2 font-semibold text-green-300">GreenAlgae Mauritius</div>
		Confidential Investor Document · 2026 · Financial projections are targets based on published benchmarks, not audited forecasts.
	</div>
</footer>
