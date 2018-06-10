// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	local: {
		allItems: "http://localhost:3000/items/all",
		item: "http://localhost:3000/items/",
		saveItem: "http://localhost:3000/items/save",
		saveUser: "http://localhost:3000/users/signup",
		loginUser: "http://localhost:3000/users/login",
		acountUser: "http://localhost:3000/users/",
		updateUser: "http://localhost:3000/users/update"
	}
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
