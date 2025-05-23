export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "mysveltekit/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DF0frX-t.js",app:"_app/immutable/entry/app.R0rLb_F8.js",imports:["_app/immutable/entry/start.DF0frX-t.js","_app/immutable/chunks/B7SB3HQD.js","_app/immutable/chunks/BhXK8Sv5.js","_app/immutable/chunks/BPPrWe6j.js","_app/immutable/chunks/D_h8Iqox.js","_app/immutable/entry/app.R0rLb_F8.js","_app/immutable/chunks/BhXK8Sv5.js","_app/immutable/chunks/CJXIdqiy.js","_app/immutable/chunks/CIbTKPDu.js","_app/immutable/chunks/D_h8Iqox.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
