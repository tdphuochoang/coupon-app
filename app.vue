<template>
	<div class="">
		<Authenticator class="h-screen">
			<template v-slot="{ user, signOut }">
				<div class="bg-[#ECF0F1] min-h-full">
					<div>
						<!--Navbar-->
						<Navbar @search="performSearch" :user="user" :signOut="signOut" />
					</div>

					<!--List of coupons-->
					<main class="sm:px-10 sm:py-5">
						<MainSection :coupons="filteredCoupons" />
					</main>
				</div>
			</template>
		</Authenticator>
	</div>
</template>

<script>
import MainSection from "@/components/MainSection.vue";
import { coupons } from "@/data/data.js";
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";

export default {
	components: {
		MainSection,
		Authenticator,
	},
	data() {
		return {
			allCoupons: coupons,
			filteredCoupons: coupons,
		};
	},
	methods: {
		performSearch(query) {
			this.filteredCoupons = this.allCoupons.filter((coupon) =>
				coupon.title.toLowerCase().includes(query.toLowerCase())
			);
		},
	},
};
</script>

<style>
@import url("~/assets/auth-styles.css");
</style>
