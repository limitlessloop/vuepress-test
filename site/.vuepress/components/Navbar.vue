<template>
	<header class="Navbar">
		<div v-for="link in userNav">
			<router-link :to="link.link">{{link.text}}</router-link>
		</div>
	</header>
</template>

<script>
export default {
	computed: {
		userNav() {
			return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
		}
	}
}
</script>
