// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		type OptionalLocals = {
			user: User.Info | null
		}
		interface Locals extends OptionalLocals {
			static: string
		}
		interface Error {
			id: string;
			code: string;
		}
	}

	namespace User {
		interface Info {
			id: number;
			nickname: string;
			phone: string;
			email: string;
		}
	}
}

export {};
