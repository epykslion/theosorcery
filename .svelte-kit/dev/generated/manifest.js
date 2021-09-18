const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\portfolio\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\services\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\contact.svelte"),
	() => import("..\\..\\..\\src\\routes\\photos\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\photos\\osakajo\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\about\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\todos\\index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/portfolio/index.svelte
	[/^\/portfolio\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/services/index.svelte
	[/^\/services\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/contact.svelte
	[/^\/contact\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/photos/index.svelte
	[/^\/photos\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/photos/osakajo/index.svelte
	[/^\/photos\/osakajo\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/about/index.svelte
	[/^\/about\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/todos/index.json.ts
	[/^\/todos\.json$/],

	// src/routes/todos/index.svelte
	[/^\/todos\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/todos/[uid].json.ts
	[/^\/todos\/([^/]+?)\.json$/]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];