function AlertController() {
	alert('welcome baydiwo');
}

(function() {
	var app = angular.module('bacotin', []);
	app.controller('BacotinController', function() {
		this.products = gems;
	});

	// var gems = [
	// 		{
	// 			name: 'bacot lu',
	// 			price: 1.25,
	// 			description: 'maksud lo apa',
	// 			images: [
	// 				"images/1_thumb.jpg",
	// 				"images/2_thumb.jpg",
	// 				"images/3_thumb.jpg"
	// 			]
	// 		},
	// 		{
	// 			name: 'bacot lu lagi',
	// 			price: 1325,
	// 			description: 'maksud lo apa',
	// 			images: [
	// 				"images/4_thumb.jpg",
	// 				"images/2_thumb.jpg",
	// 				"images/3_thumb.jpg"
	// 			]
	// 		}
	// 	];
	var gems = [
	{
		name: 'Azurite',
		description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
		shine: 8,
		price: 110.50,
		rarity: 7,
		color: '#CCC',
		faces: 14,
		images: [
		"images/1_thumb.jpg",
		"images/2_thumb.jpg",
		"images/3_thumb.jpg",
		],
		reviews: [{
			stars: 5,
			body: "I love this gem!",
			author: "joe@example.org",
			createdOn: 1397490980837
		}, {
			stars: 1,
			body: "This gem sucks.",
			author: "tim@example.org",
			createdOn: 1397490980837
		}]
	},
	{
		name: 'Bloodstone',
		description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
		shine: 9,
		price: 22.90,
		rarity: 6,
		color: '#EEE',
		faces: 12,
		images: [
		"images/1_thumb.jpg",
		"images/2_thumb.jpg",
		"images/3_thumb.jpg",
		],
		reviews: [{
			stars: 3,
			body: "I think this gem was just OK, could honestly use more shine, IMO.",
			author: "JimmyDean@example.org",
			createdOn: 1397490980837
		}, {
			stars: 4,
			body: "Any gem with 12 faces is for me!",
			author: "gemsRock@example.org",
			createdOn: 1397490980837
		}]
	},
	{
		name: 'Zircon',
		description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
		shine: 70,
		price: 1100,
		rarity: 2,
		color: '#000',
		faces: 6,
		images: [
		"images/1_thumb.jpg",
		"images/2_thumb.jpg",
		"images/3_thumb.jpg",
		],
		reviews: [{
			stars: 1,
			body: "This gem is WAY too expensive for its rarity value.",
			author: "turtleguyy@example.org",
			createdOn: 1397490980837
		}, {
			stars: 1,
			body: "BBW: High Shine != High Quality.",
			author: "LouisW407@example.org",
			createdOn: 1397490980837
		}, {
			stars: 1,
			body: "Don't waste your rubles!",
			author: "nat@example.org",
			createdOn: 1397490980837
		}]
	}
	];

	app.controller("PanelController", function() {
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller("GalleryController", function() {
		this.current = 0;
		this.setCurrent = function(newGallery){
			this.current = newGallery || 0;
		};
	});

	app.controller("ReviewController", function() {
		this.review = {};

		this.addReview = function(product) {

			product.reviews.push(this.review);
			this.review.createdOn = Date.now();
			this.review= {};
			alert('alert' + product);
		};
	});
	// app.directive('productTitle', function() {
	// 	return {
	// 		restrict: 'E',
	// 		templateUrl: 'product-title.html'
	// 	};
	// });

})();

