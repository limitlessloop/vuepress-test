<template>
	<header class="Navbar">
		<template v-for="link in userNav">
			<router-link :to="link.link">{{link.text}}</router-link>
		</template>
	</header>
</template>

<style scoped>
/* @import 'karamel'; */

.Navbar {
	display: flex;
	justify-content: flex-end;
	margin-bottom: 100px;
}
.Navbar a {
	margin-left: 20px;
	@extend .red;
}
</style>

<script>
export default {
	computed: {
		userNav() {
			return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
		}
	}
}
</script>
