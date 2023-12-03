// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			user?: User.Info
		}
		interface Error {
			id: string;
			code: string;
		}
	}

	namespace User {
		interface Info extends App.Locals {
			id: number;
			nickname: string;
			phone: string;
			email: string;
		}
	}
}

export {};
