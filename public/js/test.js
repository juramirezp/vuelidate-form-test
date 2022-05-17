/**
 * Minified by jsDelivr using Terser v5.10.0.
 * Original file: /npm/vue-demi@0.12.5/lib/index.iife.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var VueDemi = (function (e, i, o) {
	if (e.install) return e;
	if (i)
		if ("2." === i.version.slice(0, 2))
			if (o) {
				for (var n in o) e[n] = o[n];
				(e.isVue2 = !0),
					(e.isVue3 = !1),
					(e.install = function () {}),
					(e.Vue = i),
					(e.Vue2 = i),
					(e.version = i.version);
			} else
				console.error(
					"[vue-demi] no VueCompositionAPI instance found, please be sure to import `@vue/composition-api` before `vue-demi`."
				);
		else if ("3." === i.version.slice(0, 2)) {
			for (var n in i) e[n] = i[n];
			(e.isVue2 = !1),
				(e.isVue3 = !0),
				(e.install = function () {}),
				(e.Vue = i),
				(e.Vue2 = void 0),
				(e.version = i.version),
				(e.set = function (e, i, o) {
					return Array.isArray(e)
						? ((e.length = Math.max(e.length, i)), e.splice(i, 1, o), o)
						: ((e[i] = o), o);
				}),
				(e.del = function (e, i) {
					Array.isArray(e) ? e.splice(i, 1) : delete e[i];
				});
		} else
			console.error("[vue-demi] Vue version " + i.version + " is unsupported.");
	else
		console.error(
			"[vue-demi] no Vue instance found, please be sure to import `vue` before `vue-demi`."
		);
	return e;
})(
	(this.VueDemi = this.VueDemi || (void 0 !== VueDemi ? VueDemi : {})),
	this.Vue || ("undefined" != typeof Vue ? Vue : void 0),
	this.VueCompositionAPI ||
		("undefined" != typeof VueCompositionAPI ? VueCompositionAPI : void 0)
);
//# sourceMappingURL=/sm/2a5bf997bd5ffb04b61640821d6269560d662606e332b126e5d00ef3757c6fc3.map

var Vuelidate = (function (e, t) {
	"use strict";
	function r(e) {
		let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
		return Object.keys(e).reduce(
			(n, a) => (r.includes(a) || (n[a] = t.unref(e[a])), n),
			{}
		);
	}
	function n(e) {
		return "function" == typeof e;
	}
	function a(e) {
		return t.isReactive(e) || t.isReadonly(e);
	}
	function u(e, r, n, a) {
		return e.call(a, t.unref(r), t.unref(n), a);
	}
	function s(e) {
		return void 0 !== e.$valid ? !e.$valid : !e;
	}
	function l(e, a, l, o, i, c, $, v, d, f, p) {
		const h = t.ref(!1),
			m = e.$params || {},
			y = t.ref(null);
		let g, R;
		e.$async
			? ({ $invalid: g, $unwatch: R } = (function (e, r, n, a, l, o, i) {
					let { $lazy: c, $rewardEarly: $ } = l,
						v =
							arguments.length > 7 && void 0 !== arguments[7]
								? arguments[7]
								: [],
						d = arguments.length > 8 ? arguments[8] : void 0,
						f = arguments.length > 9 ? arguments[9] : void 0,
						p = arguments.length > 10 ? arguments[10] : void 0;
					const h = t.ref(!!a.value),
						m = t.ref(0);
					n.value = !1;
					const y = t.watch(
						[r, a].concat(v, p),
						() => {
							if ((c && !a.value) || ($ && !f.value && !n.value)) return;
							let t;
							try {
								t = u(e, r, d, i);
							} catch (e) {
								t = Promise.reject(e);
							}
							m.value++,
								(n.value = !!m.value),
								(h.value = !1),
								Promise.resolve(t)
									.then((e) => {
										m.value--,
											(n.value = !!m.value),
											(o.value = e),
											(h.value = s(e));
									})
									.catch((e) => {
										m.value--,
											(n.value = !!m.value),
											(o.value = e),
											(h.value = !0);
									});
						},
						{ immediate: !0, deep: "object" == typeof r }
					);
					return { $invalid: h, $unwatch: y };
			  })(e.$validator, a, h, l, o, y, i, e.$watchTargets, d, f, p))
			: ({ $invalid: g, $unwatch: R } = (function (e, r, n, a, l, o, i, c) {
					let { $lazy: $, $rewardEarly: v } = a;
					return {
						$unwatch: () => ({}),
						$invalid: t.computed(() => {
							if (($ && !n.value) || (v && !c.value)) return !1;
							let t = !0;
							try {
								const n = u(e, r, i, o);
								(l.value = n), (t = s(n));
							} catch (e) {
								l.value = e;
							}
							return t;
						}),
					};
			  })(e.$validator, a, l, o, y, i, d, f));
		const E = e.$message;
		return {
			$message: n(E)
				? t.computed(() =>
						E(
							r({
								$pending: h,
								$invalid: g,
								$params: r(m),
								$model: a,
								$response: y,
								$validator: c,
								$propertyPath: v,
								$property: $,
							})
						)
				  )
				: E || "",
			$params: m,
			$pending: h,
			$invalid: g,
			$response: y,
			$unwatch: R,
		};
	}
	function o() {}
	function i(e, t, r) {
		if (r) return t ? t(e()) : e();
		try {
			var n = Promise.resolve(e());
			return t ? n.then(t) : n;
		} catch (e) {
			return Promise.reject(e);
		}
	}
	function c(e) {
		const r =
			((a = function () {
				return (
					T(),
					(function (e, t) {
						var r = e();
						return r && r.then ? r.then(t) : t(r);
					})(
						function () {
							if (b.$rewardEarly) return N(), i(t.nextTick, o, e);
							var e;
						},
						function () {
							return i(t.nextTick, function () {
								return new Promise((e) => {
									if (!I.value) return e(!k.value);
									const r = t.watch(I, () => {
										e(!k.value), r();
									});
								});
							});
						}
					)
				);
			}),
			function () {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				try {
					return Promise.resolve(a.apply(this, e));
				} catch (e) {
					return Promise.reject(e);
				}
			});
		var a;
		let {
			validations: u,
			state: s,
			key: $,
			parentKey: v,
			childResults: d,
			resultsCache: f,
			globalConfig: p = {},
			instance: h,
			externalResults: m,
		} = e;
		const y = v ? `${v}.${$}` : $,
			{
				rules: g,
				nestedValidators: R,
				config: E,
			} = (function () {
				let e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				const r = t.unref(e),
					a = Object.keys(r),
					u = {},
					s = {},
					l = {};
				return (
					a.forEach((e) => {
						const t = r[e];
						switch (!0) {
							case n(t.$validator):
								u[e] = t;
								break;
							case n(t):
								u[e] = { $validator: t };
								break;
							case e.startsWith("$"):
								l[e] = t;
								break;
							default:
								s[e] = t;
						}
					}),
					{ rules: u, nestedValidators: s, config: l }
				);
			})(u),
			b = Object.assign({}, p, E),
			j = $
				? t.computed(() => {
						const e = t.unref(s);
						return e ? t.unref(e[$]) : void 0;
				  })
				: s,
			w = Object.assign({}, t.unref(m) || {}),
			C = t.computed(() => {
				const e = t.unref(m);
				return $ ? (e ? t.unref(e[$]) : void 0) : e;
			}),
			O = (function (e, r, n, a, u, s, o, i, c) {
				const $ = Object.keys(e),
					v = a.get(u, e),
					d = t.ref(!1),
					f = t.ref(!1),
					p = t.ref(0);
				if (v) {
					if (!v.$partial) return v;
					v.$unwatch(), (d.value = v.$dirty.value);
				}
				const h = {
					$dirty: d,
					$path: u,
					$touch: () => {
						d.value || (d.value = !0);
					},
					$reset: () => {
						d.value && (d.value = !1);
					},
					$commit: () => {},
				};
				return $.length
					? ($.forEach((t) => {
							h[t] = l(e[t], r, h.$dirty, s, o, t, n, u, c, f, p);
					  }),
					  (h.$externalResults = t.computed(() =>
							i.value
								? []
										.concat(i.value)
										.map((e, t) => ({
											$propertyPath: u,
											$property: n,
											$validator: "$externalResults",
											$uid: `${u}-externalResult-${t}`,
											$message: e,
											$params: {},
											$response: null,
											$pending: !1,
										}))
								: []
					  )),
					  (h.$invalid = t.computed(() => {
							const e = $.some((e) => t.unref(h[e].$invalid));
							return (f.value = e), !!h.$externalResults.value.length || e;
					  })),
					  (h.$pending = t.computed(() =>
							$.some((e) => t.unref(h[e].$pending))
					  )),
					  (h.$error = t.computed(
							() => !!h.$dirty.value && (h.$pending.value || h.$invalid.value)
					  )),
					  (h.$silentErrors = t.computed(() =>
							$.filter((e) => t.unref(h[e].$invalid))
								.map((e) => {
									const r = h[e];
									return t.reactive({
										$propertyPath: u,
										$property: n,
										$validator: e,
										$uid: `${u}-${e}`,
										$message: r.$message,
										$params: r.$params,
										$response: r.$response,
										$pending: r.$pending,
									});
								})
								.concat(h.$externalResults.value)
					  )),
					  (h.$errors = t.computed(() =>
							h.$dirty.value ? h.$silentErrors.value : []
					  )),
					  (h.$unwatch = () =>
							$.forEach((e) => {
								h[e].$unwatch();
							})),
					  (h.$commit = () => {
							(f.value = !0), (p.value = Date.now());
					  }),
					  a.set(u, e, h),
					  h)
					: (v && a.set(u, e, h), h);
			})(g, j, $, f, y, b, h, C, s),
			_ = (function (e, t, r, n, a, u, s) {
				const l = Object.keys(e);
				return l.length
					? l.reduce(
							(l, o) => (
								(l[o] = c({
									validations: e[o],
									state: t,
									key: o,
									parentKey: r,
									resultsCache: n,
									globalConfig: a,
									instance: u,
									externalResults: s,
								})),
								l
							),
							{}
					  )
					: {};
			})(R, j, y, f, b, h, C),
			{
				$dirty: x,
				$errors: P,
				$invalid: k,
				$anyDirty: L,
				$error: V,
				$pending: I,
				$touch: T,
				$reset: D,
				$silentErrors: A,
				$commit: N,
			} = (function (e, r, n) {
				const a = t.computed(() =>
						[r, n]
							.filter((e) => e)
							.reduce((e, r) => e.concat(Object.values(t.unref(r))), [])
					),
					u = t.computed({
						get: () =>
							e.$dirty.value ||
							(!!a.value.length && a.value.every((e) => e.$dirty)),
						set(t) {
							e.$dirty.value = t;
						},
					}),
					s = t.computed(() => {
						const r = t.unref(e.$silentErrors) || [],
							n = a.value
								.filter((e) => (t.unref(e).$silentErrors || []).length)
								.reduce((e, t) => e.concat(...t.$silentErrors), []);
						return r.concat(n);
					}),
					l = t.computed(() => {
						const r = t.unref(e.$errors) || [],
							n = a.value
								.filter((e) => (t.unref(e).$errors || []).length)
								.reduce((e, t) => e.concat(...t.$errors), []);
						return r.concat(n);
					}),
					o = t.computed(
						() => a.value.some((e) => e.$invalid) || t.unref(e.$invalid) || !1
					),
					i = t.computed(
						() =>
							a.value.some((e) => t.unref(e.$pending)) ||
							t.unref(e.$pending) ||
							!1
					),
					c = t.computed(
						() =>
							a.value.some((e) => e.$dirty) ||
							a.value.some((e) => e.$anyDirty) ||
							u.value
					),
					$ = t.computed(() => !!u.value && (i.value || o.value)),
					v = () => {
						e.$touch(),
							a.value.forEach((e) => {
								e.$touch();
							});
					};
				return (
					a.value.length && a.value.every((e) => e.$dirty) && v(),
					{
						$dirty: u,
						$errors: l,
						$invalid: o,
						$anyDirty: c,
						$error: $,
						$pending: i,
						$touch: v,
						$reset: () => {
							e.$reset(),
								a.value.forEach((e) => {
									e.$reset();
								});
						},
						$silentErrors: s,
						$commit: () => {
							e.$commit(),
								a.value.forEach((e) => {
									e.$commit();
								});
						},
					}
				);
			})(O, _, d),
			F = $
				? t.computed({
						get: () => t.unref(j),
						set: (e) => {
							x.value = !0;
							const r = t.unref(s),
								n = t.unref(m);
							n && (n[$] = w[$]), t.isRef(r[$]) ? (r[$].value = e) : (r[$] = e);
						},
				  })
				: null;
		return (
			$ &&
				b.$autoDirty &&
				t.watch(
					j,
					() => {
						x.value || T();
						const e = t.unref(m);
						e && (e[$] = w[$]);
					},
					{ flush: "sync" }
				),
			t.reactive(
				Object.assign(
					{},
					O,
					{
						$model: F,
						$dirty: x,
						$error: V,
						$errors: P,
						$invalid: k,
						$anyDirty: L,
						$pending: I,
						$touch: T,
						$reset: D,
						$path: y || "__root",
						$silentErrors: A,
						$validate: r,
						$commit: N,
					},
					d && {
						$getResultsForChild: function (e) {
							return (d.value || {})[e];
						},
						$clearExternalResults: function () {
							t.isRef(m)
								? (m.value = w)
								: 0 === Object.keys(w).length
								? Object.keys(m).forEach((e) => {
										delete m[e];
								  })
								: Object.assign(m, w);
						},
					},
					_
				)
			)
		);
	}
	class $ {
		constructor() {
			this.storage = new Map();
		}
		set(e, t, r) {
			this.storage.set(e, { rules: t, result: r });
		}
		checkRulesValidity(e, r, n) {
			const a = Object.keys(n),
				u = Object.keys(r);
			if (u.length !== a.length) return !1;
			return (
				!!u.every((e) => a.includes(e)) &&
				u.every(
					(e) =>
						!r[e].$params ||
						Object.keys(r[e].$params).every(
							(a) => t.unref(n[e].$params[a]) === t.unref(r[e].$params[a])
						)
				)
			);
		}
		get(e, t) {
			const r = this.storage.get(e);
			if (!r) return;
			const { rules: n, result: a } = r,
				u = this.checkRulesValidity(e, t, n),
				s = a.$unwatch ? a.$unwatch : () => ({});
			return u ? a : { $dirty: a.$dirty, $partial: !0, $unwatch: s };
		}
	}
	const v = { COLLECT_ALL: !0, COLLECT_NONE: !1 },
		d = Symbol("vuelidate#injectChildResults"),
		f = Symbol("vuelidate#removeChildResults");
	function p(e) {
		let { $scope: r, instance: n } = e;
		const a = {},
			u = t.ref([]),
			s = t.computed(() =>
				u.value.reduce((e, r) => ((e[r] = t.unref(a[r])), e), {})
			);
		(n.__vuelidateInjectInstances = [].concat(
			n.__vuelidateInjectInstances || [],
			function (e, t) {
				let { $registerAs: n, $scope: s, $stopPropagation: l } = t;
				l ||
					r === v.COLLECT_NONE ||
					s === v.COLLECT_NONE ||
					(r !== v.COLLECT_ALL && r !== s) ||
					((a[n] = e), u.value.push(n));
			}
		)),
			(n.__vuelidateRemoveInstances = [].concat(
				n.__vuelidateRemoveInstances || [],
				function (e) {
					(u.value = u.value.filter((t) => t !== e)), delete a[e];
				}
			));
		const l = t.inject(d, []);
		t.provide(d, n.__vuelidateInjectInstances);
		const o = t.inject(f, []);
		return (
			t.provide(f, n.__vuelidateRemoveInstances),
			{
				childResults: s,
				sendValidationResultsToParent: l,
				removeValidationResultsFromParent: o,
			}
		);
	}
	function h(e) {
		return new Proxy(e, {
			get: (e, r) =>
				"object" == typeof e[r] ? h(e[r]) : t.computed(() => e[r]),
		});
	}
	function m(e, r) {
		let u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
		1 === arguments.length && ((u = e), (e = void 0), (r = void 0));
		let {
			$registerAs: s,
			$scope: l = v.COLLECT_ALL,
			$stopPropagation: o,
			$externalResults: i,
			currentVueInstance: d,
		} = u;
		const f = d || t.getCurrentInstance(),
			m = f ? f.proxy.$options : {};
		if (!s && f) {
			const e = f.uid || f._uid;
			s = "_vuelidate_" + e;
		}
		const y = t.ref({}),
			g = new $(),
			{
				childResults: R,
				sendValidationResultsToParent: E,
				removeValidationResultsFromParent: b,
			} = f ? p({ $scope: l, instance: f }) : { childResults: t.ref({}) };
		if (!e && m.validations) {
			const e = m.validations;
			(r = t.ref({})),
				t.onBeforeMount(() => {
					(r.value = f.proxy),
						t.watch(
							() => (n(e) ? e.call(r.value, new h(r.value)) : e),
							(e) => {
								y.value = c({
									validations: e,
									state: r,
									childResults: R,
									resultsCache: g,
									globalConfig: u,
									instance: f.proxy,
									externalResults: i || f.proxy.vuelidateExternalResults,
								});
							},
							{ immediate: !0 }
						);
				}),
				(u = m.validationsConfig || u);
		} else {
			const n = t.isRef(e) || a(e) ? e : t.reactive(e || {});
			t.watch(
				n,
				(e) => {
					y.value = c({
						validations: e,
						state: r,
						childResults: R,
						resultsCache: g,
						globalConfig: u,
						instance: f ? f.proxy : {},
						externalResults: i,
					});
				},
				{ immediate: !0 }
			);
		}
		return (
			f &&
				(E.forEach((e) =>
					e(y, { $registerAs: s, $scope: l, $stopPropagation: o })
				),
				t.onBeforeUnmount(() => b.forEach((e) => e(s)))),
			t.computed(() => Object.assign({}, t.unref(y.value), R.value))
		);
	}
	return (
		(e.CollectFlag = v),
		(e.default = m),
		(e.useVuelidate = m),
		Object.defineProperty(e, "__esModule", { value: !0 }),
		e
	);
})({}, VueDemi);
//# sourceMappingURL=index.iife.min.js.map

var VuelidateValidators = (function (e, r) {
	"use strict";
	function t(e) {
		return "function" == typeof e;
	}
	function a(e) {
		return null !== e && "object" == typeof e && !Array.isArray(e);
	}
	function n(e) {
		return t(e.$validator) ? Object.assign({}, e) : { $validator: e };
	}
	function i(e) {
		return "object" == typeof e ? e.$valid : e;
	}
	function s(e) {
		return e.$validator || e;
	}
	function o(e, r) {
		if (!a(e))
			throw new Error(
				'[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ' +
					typeof e
			);
		if (!a(r) && !t(r))
			throw new Error(
				"[@vuelidate/validators]: Validator must be a function or object with $validator parameter"
			);
		const i = n(r);
		return (i.$params = Object.assign({}, i.$params || {}, e)), i;
	}
	function u(e, i) {
		if (!t(e) && "string" != typeof r.unref(e))
			throw new Error(
				'[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ' +
					typeof e
			);
		if (!a(i) && !t(i))
			throw new Error(
				"[@vuelidate/validators]: Validator must be a function or object with $validator parameter"
			);
		const s = n(i);
		return (s.$message = e), s;
	}
	const l = (e) => {
			if (((e = r.unref(e)), Array.isArray(e))) return !!e.length;
			if (null == e) return !1;
			if (!1 === e) return !0;
			if (e instanceof Date) return !isNaN(e.getTime());
			if ("object" == typeof e) {
				for (let r in e) return !0;
				return !1;
			}
			return !!String(e).length;
		},
		d = (e) => (
			(e = r.unref(e)),
			Array.isArray(e)
				? e.length
				: "object" == typeof e
				? Object.keys(e).length
				: String(e).length
		);
	function $() {
		for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
			t[a] = arguments[a];
		return (e) => ((e = r.unref(e)), !l(e) || t.every((r) => r.test(e)));
	}
	var c = Object.freeze({
			__proto__: null,
			withParams: o,
			withMessage: u,
			withAsync: function (e) {
				let r =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
				const t = n(e);
				return Object.assign({}, t, { $async: !0, $watchTargets: r });
			},
			forEach: function (e) {
				return {
					$validator(t) {
						for (
							var a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), o = 1;
							o < a;
							o++
						)
							n[o - 1] = arguments[o];
						return r.unref(t).reduce(
							(r, t) => {
								const a = Object.entries(t).reduce(
									(r, a) => {
										let [o, u] = a;
										const l = e[o] || {},
											d = Object.entries(l).reduce(
												(e, r) => {
													let [a, l] = r;
													const d = s(l).call(this, u, t, ...n),
														$ = i(d);
													if (
														((e.$data[a] = d),
														(e.$data.$invalid = !$ || !!e.$data.$invalid),
														(e.$data.$error = e.$data.$invalid),
														!$)
													) {
														let r = l.$message || "";
														const t = l.$params || {};
														"function" == typeof r &&
															(r = r({
																$pending: !1,
																$invalid: !$,
																$params: t,
																$model: u,
																$response: d,
															})),
															e.$errors.push({
																$property: o,
																$message: r,
																$params: t,
																$response: d,
																$model: u,
																$pending: !1,
																$validator: a,
															});
													}
													return {
														$valid: e.$valid && $,
														$data: e.$data,
														$errors: e.$errors,
													};
												},
												{ $valid: !0, $data: {}, $errors: [] }
											);
										return (
											(r.$data[o] = d.$data),
											(r.$errors[o] = d.$errors),
											{
												$valid: r.$valid && d.$valid,
												$data: r.$data,
												$errors: r.$errors,
											}
										);
									},
									{ $valid: !0, $data: {}, $errors: {} }
								);
								return {
									$valid: r.$valid && a.$valid,
									$data: r.$data.concat(a.$data),
									$errors: r.$errors.concat(a.$errors),
								};
							},
							{ $valid: !0, $data: [], $errors: [] }
						);
					},
					$message: (e) => {
						let { $response: r } = e;
						return r
							? r.$errors.map((e) =>
									Object.values(e)
										.map((e) => e.map((e) => e.$message))
										.reduce((e, r) => e.concat(r), [])
							  )
							: [];
					},
				};
			},
			req: l,
			len: d,
			regex: $,
			unwrap: r.unref,
			unwrapNormalizedValidator: s,
			unwrapValidatorResponse: i,
			normalizeValidatorObject: n,
		}),
		f = {
			$validator: $(/^[a-zA-Z]*$/),
			$message: "The value is not alphabetical",
			$params: { type: "alpha" },
		},
		m = {
			$validator: $(/^[a-zA-Z0-9]*$/),
			$message: "The value must be alpha-numeric",
			$params: { type: "alphaNum" },
		},
		p = {
			$validator: $(/^\d*(\.\d+)?$/),
			$message: "Value must be numeric",
			$params: { type: "numeric" },
		};
	function v(e, t) {
		return (a) =>
			!l(a) ||
			((!/\s/.test(a) || a instanceof Date) &&
				+r.unref(e) <= +a &&
				+r.unref(t) >= +a);
	}
	var h = {
		$validator: $(
			/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i
		),
		$message: "Value is not a valid email address",
		$params: { type: "email" },
	};
	const g = (e) => {
		if (e.length > 3 || 0 === e.length) return !1;
		if ("0" === e[0] && "0" !== e) return !1;
		if (!e.match(/^\d+$/)) return !1;
		const r = 0 | +e;
		return r >= 0 && r <= 255;
	};
	var y = {
		$validator: function (e) {
			if (!l(e)) return !0;
			if ("string" != typeof e) return !1;
			const r = e.split(".");
			return 4 === r.length && r.every(g);
		},
		$message: "The value is not a valid IP address",
		$params: { type: "ipAddress" },
	};
	function x() {
		let e =
			arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ":";
		return (t) => {
			if (((e = r.unref(e)), !l(t))) return !0;
			if ("string" != typeof t) return !1;
			const a =
				"string" == typeof e && "" !== e
					? t.split(e)
					: 12 === t.length || 16 === t.length
					? t.match(/.{2}/g)
					: null;
			return null !== a && (6 === a.length || 8 === a.length) && a.every(w);
		};
	}
	const w = (e) => e.toLowerCase().match(/^[0-9a-f]{2}$/);
	var b = {
		$validator: function (e) {
			return "string" == typeof e && (e = e.trim()), l(e);
		},
		$message: "Value is required",
		$params: { type: "required" },
	};
	const A = (e, r) => !e || l("string" == typeof r ? r.trim() : r);
	const T = (e, r) => !!e || l("string" == typeof r ? r.trim() : r);
	function z(e) {
		return (t) => r.unref(t) === r.unref(e);
	}
	var j = {
		$validator: $(
			/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i
		),
		$message: "The value is not a valid URL address",
		$params: { type: "url" },
	};
	function V(e, r, t) {
		return t
			? r
				? r(e)
				: e
			: ((e && e.then) || (e = Promise.resolve(e)), r ? e.then(r) : e);
	}
	function P(e) {
		return function () {
			for (var r = arguments.length, t = new Array(r), a = 0; a < r; a++)
				t[a] = arguments[a];
			return e.reduce((e, r) => (i(e) ? e : s(r).apply(this, t)), !1);
		};
	}
	function q(e) {
		return function () {
			const r = this;
			for (var t = arguments.length, a = new Array(t), n = 0; n < t; n++)
				a[n] = arguments[n];
			return e.reduce(function (e, t) {
				return V(e, function (e) {
					return i(e) ? e : s(t).apply(r, a);
				});
			}, Promise.resolve(!1));
		};
	}
	function O() {
		for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
			r[t] = arguments[t];
		const a = r.some((e) => e.$async),
			n = r.reduce(
				(e, r) => (r.$watchTargets ? e.concat(r.$watchTargets) : e),
				[]
			);
		let i = () => !1;
		return (
			r.length && (i = a ? q(r) : P(r)),
			{ $async: a, $validator: i, $watchTargets: n }
		);
	}
	function _(e, r, t) {
		return t
			? r
				? r(e)
				: e
			: ((e && e.then) || (e = Promise.resolve(e)), r ? e.then(r) : e);
	}
	function L(e) {
		return function () {
			for (var r = arguments.length, t = new Array(r), a = 0; a < r; a++)
				t[a] = arguments[a];
			return e.reduce((e, r) => (i(e) ? s(r).apply(this, t) : e), !0);
		};
	}
	function N(e) {
		return function () {
			const r = this;
			for (var t = arguments.length, a = new Array(t), n = 0; n < t; n++)
				a[n] = arguments[n];
			return e.reduce(function (e, t) {
				return _(e, function (e) {
					return i(e) ? s(t).apply(r, a) : e;
				});
			}, Promise.resolve(!0));
		};
	}
	function D() {
		for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
			r[t] = arguments[t];
		const a = r.some((e) => e.$async),
			n = r.reduce(
				(e, r) => (r.$watchTargets ? e.concat(r.$watchTargets) : e),
				[]
			);
		let i = () => !1;
		return (
			r.length && (i = a ? N(r) : L(r)),
			{ $async: a, $validator: i, $watchTargets: n }
		);
	}
	function E(e) {
		return function (r, n) {
			if (!l(r)) return !0;
			const o = s(e).call(this, r, n);
			return a((u = o)) && t(u.then) ? o.then((e) => !i(e)) : !i(o);
			var u;
		};
	}
	function M(e) {
		return (t) =>
			!l(t) || ((!/\s/.test(t) || t instanceof Date) && +t >= +r.unref(e));
	}
	function S(e) {
		return (t) =>
			!l(t) || ((!/\s/.test(t) || t instanceof Date) && +t <= +r.unref(e));
	}
	var I = {
			$validator: $(/(^[0-9]*$)|(^-[0-9]+$)/),
			$message: "Value is not an integer",
			$params: { type: "integer" },
		},
		U = {
			$validator: $(/^[-]?\d*(\.\d+)?$/),
			$message: "Value must be decimal",
			$params: { type: "decimal" },
		};
	return (
		(e.alpha = f),
		(e.alphaNum = m),
		(e.and = function () {
			return o(
				{ type: "and" },
				u(
					"The value does not match all of the provided validators",
					D(...arguments)
				)
			);
		}),
		(e.between = function (e, r) {
			return {
				$validator: v(e, r),
				$message: (e) => {
					let { $params: r } = e;
					return `The value must be between ${r.min} and ${r.max}`;
				},
				$params: { min: e, max: r, type: "between" },
			};
		}),
		(e.createI18nMessage = function (e) {
			let {
				t: r,
				messagePath: t = (e) => {
					let { $validator: r } = e;
					return "validations." + r;
				},
				messageParams: a = (e) => e,
			} = e;
			return function (e) {
				let {
					withArguments: n = !1,
					messagePath: i = t,
					messageParams: s = a,
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				function o(e) {
					return r(
						i(e),
						s(
							Object.assign(
								{
									model: e.$model,
									property: e.$property,
									pending: e.$pending,
									invalid: e.$invalid,
									response: e.$response,
									validator: e.$validator,
									propertyPath: e.$propertyPath,
								},
								e.$params
							)
						)
					);
				}
				return n && "function" == typeof e
					? function () {
							return u(o, e(...arguments));
					  }
					: u(o, e);
			};
		}),
		(e.decimal = U),
		(e.email = h),
		(e.helpers = c),
		(e.integer = I),
		(e.ipAddress = y),
		(e.macAddress = function (e) {
			return {
				$validator: x(e),
				$message: "The value is not a valid MAC Address",
				$params: { type: "macAddress" },
			};
		}),
		(e.maxLength = function (e) {
			return {
				$validator: ((t = e), (e) => !l(e) || d(e) <= r.unref(t)),
				$message: (e) => {
					let { $params: r } = e;
					return "The maximum length allowed is " + r.max;
				},
				$params: { max: e, type: "maxLength" },
			};
			var t;
		}),
		(e.maxValue = (e) => ({
			$validator: S(e),
			$message: (e) => {
				let { $params: r } = e;
				return "The maximum value allowed is " + r.max;
			},
			$params: { max: e, type: "maxValue" },
		})),
		(e.minLength = function (e) {
			return {
				$validator: ((t = e), (e) => !l(e) || d(e) >= r.unref(t)),
				$message: (e) => {
					let { $params: r } = e;
					return `This field should be at least ${r.min} characters long`;
				},
				$params: { min: e, type: "minLength" },
			};
			var t;
		}),
		(e.minValue = function (e) {
			return {
				$validator: M(e),
				$message: (e) => {
					let { $params: r } = e;
					return "The minimum value allowed is " + r.min;
				},
				$params: { min: e, type: "minValue" },
			};
		}),
		(e.not = function (e) {
			return {
				$validator: E(e),
				$message: "The value does not match the provided validator",
				$params: { type: "not" },
			};
		}),
		(e.numeric = p),
		(e.or = function () {
			return o(
				{ type: "or" },
				u(
					"The value does not match any of the provided validators",
					O(...arguments)
				)
			);
		}),
		(e.required = b),
		(e.requiredIf = function (e) {
			return {
				$validator:
					((t = e),
					function (e, a) {
						if ("function" != typeof t) return A(r.unref(t), e);
						const n = t.call(this, e, a);
						return A(n, e);
					}),
				$message: "The value is required",
				$params: { type: "requiredIf", prop: e },
			};
			var t;
		}),
		(e.requiredUnless = function (e) {
			return {
				$validator:
					((t = e),
					function (e, a) {
						if ("function" != typeof t) return T(r.unref(t), e);
						const n = t.call(this, e, a);
						return T(n, e);
					}),
				$message: "The value is required",
				$params: { type: "requiredUnless", prop: e },
			};
			var t;
		}),
		(e.sameAs = function (e) {
			let r =
				arguments.length > 1 && void 0 !== arguments[1]
					? arguments[1]
					: "other";
			return {
				$validator: z(e),
				$message: (e) => `The value must be equal to the ${r} value`,
				$params: { equalTo: e, otherName: r, type: "sameAs" },
			};
		}),
		(e.url = j),
		Object.defineProperty(e, "__esModule", { value: !0 }),
		e
	);
})({}, VueDemi);
//# sourceMappingURL=index.iife.min.js.mapvar VuelidateValidators=function(e,r){"use strict";function t(e){return"function"==typeof e}function a(e){return null!==e&&"object"==typeof e&&!Array.isArray(e)}function n(e){return t(e.$validator)?Object.assign({},e):{$validator:e}}function i(e){return"object"==typeof e?e.$valid:e}function s(e){return e.$validator||e}function o(e,r){if(!a(e))throw new Error('[@vuelidate/validators]: First parameter to "withParams" should be an object, provided '+typeof e);if(!a(r)&&!t(r))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const i=n(r);return i.$params=Object.assign({},i.$params||{},e),i}function u(e,i){if(!t(e)&&"string"!=typeof r.unref(e))throw new Error('[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided '+typeof e);if(!a(i)&&!t(i))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const s=n(i);return s.$message=e,s}const l=e=>{if(e=r.unref(e),Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"==typeof e){for(let r in e)return!0;return!1}return!!String(e).length},d=e=>(e=r.unref(e),Array.isArray(e)?e.length:"object"==typeof e?Object.keys(e).length:String(e).length);function $(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return e=>(e=r.unref(e),!l(e)||t.every(r=>r.test(e)))}var c=Object.freeze({__proto__:null,withParams:o,withMessage:u,withAsync:function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const t=n(e);return Object.assign({},t,{$async:!0,$watchTargets:r})},forEach:function(e){return{$validator(t){for(var a=arguments.length,n=new Array(a>1?a-1:0),o=1;o<a;o++)n[o-1]=arguments[o];return r.unref(t).reduce((r,t)=>{const a=Object.entries(t).reduce((r,a)=>{let[o,u]=a;const l=e[o]||{},d=Object.entries(l).reduce((e,r)=>{let[a,l]=r;const d=s(l).call(this,u,t,...n),$=i(d);if(e.$data[a]=d,e.$data.$invalid=!$||!!e.$data.$invalid,e.$data.$error=e.$data.$invalid,!$){let r=l.$message||"";const t=l.$params||{};"function"==typeof r&&(r=r({$pending:!1,$invalid:!$,$params:t,$model:u,$response:d})),e.$errors.push({$property:o,$message:r,$params:t,$response:d,$model:u,$pending:!1,$validator:a})}return{$valid:e.$valid&&$,$data:e.$data,$errors:e.$errors}},{$valid:!0,$data:{},$errors:[]});return r.$data[o]=d.$data,r.$errors[o]=d.$errors,{$valid:r.$valid&&d.$valid,$data:r.$data,$errors:r.$errors}},{$valid:!0,$data:{},$errors:{}});return{$valid:r.$valid&&a.$valid,$data:r.$data.concat(a.$data),$errors:r.$errors.concat(a.$errors)}},{$valid:!0,$data:[],$errors:[]})},$message:e=>{let{$response:r}=e;return r?r.$errors.map(e=>Object.values(e).map(e=>e.map(e=>e.$message)).reduce((e,r)=>e.concat(r),[])):[]}}},req:l,len:d,regex:$,unwrap:r.unref,unwrapNormalizedValidator:s,unwrapValidatorResponse:i,normalizeValidatorObject:n}),f={$validator:$(/^[a-zA-Z]*$/),$message:"The value is not alphabetical",$params:{type:"alpha"}},m={$validator:$(/^[a-zA-Z0-9]*$/),$message:"The value must be alpha-numeric",$params:{type:"alphaNum"}},p={$validator:$(/^\d*(\.\d+)?$/),$message:"Value must be numeric",$params:{type:"numeric"}};function v(e,t){return a=>!l(a)||(!/\s/.test(a)||a instanceof Date)&&+r.unref(e)<=+a&&+r.unref(t)>=+a}var h={$validator:$(/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i),$message:"Value is not a valid email address",$params:{type:"email"}};const g=e=>{if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;const r=0|+e;return r>=0&&r<=255};var y={$validator:function(e){if(!l(e))return!0;if("string"!=typeof e)return!1;const r=e.split(".");return 4===r.length&&r.every(g)},$message:"The value is not a valid IP address",$params:{type:"ipAddress"}};function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return t=>{if(e=r.unref(e),!l(t))return!0;if("string"!=typeof t)return!1;const a="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==a&&(6===a.length||8===a.length)&&a.every(w)}}const w=e=>e.toLowerCase().match(/^[0-9a-f]{2}$/);var b={$validator:function(e){return"string"==typeof e&&(e=e.trim()),l(e)},$message:"Value is required",$params:{type:"required"}};const A=(e,r)=>!e||l("string"==typeof r?r.trim():r);const T=(e,r)=>!!e||l("string"==typeof r?r.trim():r);function z(e){return t=>r.unref(t)===r.unref(e)}var j={$validator:$(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i),$message:"The value is not a valid URL address",$params:{type:"url"}};function V(e,r,t){return t?r?r(e):e:(e&&e.then||(e=Promise.resolve(e)),r?e.then(r):e)}function P(e){return function(){for(var r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];return e.reduce((e,r)=>i(e)?e:s(r).apply(this,t),!1)}}function q(e){return function(){const r=this;for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return e.reduce((function(e,t){return V(e,(function(e){return i(e)?e:s(t).apply(r,a)}))}),Promise.resolve(!1))}}function O(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];const a=r.some(e=>e.$async),n=r.reduce((e,r)=>r.$watchTargets?e.concat(r.$watchTargets):e,[]);let i=()=>!1;return r.length&&(i=a?q(r):P(r)),{$async:a,$validator:i,$watchTargets:n}}function _(e,r,t){return t?r?r(e):e:(e&&e.then||(e=Promise.resolve(e)),r?e.then(r):e)}function L(e){return function(){for(var r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];return e.reduce((e,r)=>i(e)?s(r).apply(this,t):e,!0)}}function N(e){return function(){const r=this;for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return e.reduce((function(e,t){return _(e,(function(e){return i(e)?s(t).apply(r,a):e}))}),Promise.resolve(!0))}}function D(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];const a=r.some(e=>e.$async),n=r.reduce((e,r)=>r.$watchTargets?e.concat(r.$watchTargets):e,[]);let i=()=>!1;return r.length&&(i=a?N(r):L(r)),{$async:a,$validator:i,$watchTargets:n}}function E(e){return function(r,n){if(!l(r))return!0;const o=s(e).call(this,r,n);return a(u=o)&&t(u.then)?o.then(e=>!i(e)):!i(o);var u}}function M(e){return t=>!l(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+r.unref(e)}function S(e){return t=>!l(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+r.unref(e)}var I={$validator:$(/(^[0-9]*$)|(^-[0-9]+$)/),$message:"Value is not an integer",$params:{type:"integer"}},U={$validator:$(/^[-]?\d*(\.\d+)?$/),$message:"Value must be decimal",$params:{type:"decimal"}};return e.alpha=f,e.alphaNum=m,e.and=function(){return o({type:"and"},u("The value does not match all of the provided validators",D(...arguments)))},e.between=function(e,r){return{$validator:v(e,r),$message:e=>{let{$params:r}=e;return`The value must be between ${r.min} and ${r.max}`},$params:{min:e,max:r,type:"between"}}},e.createI18nMessage=function(e){let{t:r,messagePath:t=(e=>{let{$validator:r}=e;return"validations."+r}),messageParams:a=(e=>e)}=e;return function(e){let{withArguments:n=!1,messagePath:i=t,messageParams:s=a}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};function o(e){return r(i(e),s(Object.assign({model:e.$model,property:e.$property,pending:e.$pending,invalid:e.$invalid,response:e.$response,validator:e.$validator,propertyPath:e.$propertyPath},e.$params)))}return n&&"function"==typeof e?function(){return u(o,e(...arguments))}:u(o,e)}},e.decimal=U,e.email=h,e.helpers=c,e.integer=I,e.ipAddress=y,e.macAddress=function(e){return{$validator:x(e),$message:"The value is not a valid MAC Address",$params:{type:"macAddress"}}},e.maxLength=function(e){return{$validator:(t=e,e=>!l(e)||d(e)<=r.unref(t)),$message:e=>{let{$params:r}=e;return"The maximum length allowed is "+r.max},$params:{max:e,type:"maxLength"}};var t},e.maxValue=e=>({$validator:S(e),$message:e=>{let{$params:r}=e;return"The maximum value allowed is "+r.max},$params:{max:e,type:"maxValue"}}),e.minLength=function(e){return{$validator:(t=e,e=>!l(e)||d(e)>=r.unref(t)),$message:e=>{let{$params:r}=e;return`This field should be at least ${r.min} characters long`},$params:{min:e,type:"minLength"}};var t},e.minValue=function(e){return{$validator:M(e),$message:e=>{let{$params:r}=e;return"The minimum value allowed is "+r.min},$params:{min:e,type:"minValue"}}},e.not=function(e){return{$validator:E(e),$message:"The value does not match the provided validator",$params:{type:"not"}}},e.numeric=p,e.or=function(){return o({type:"or"},u("The value does not match any of the provided validators",O(...arguments)))},e.required=b,e.requiredIf=function(e){return{$validator:(t=e,function(e,a){if("function"!=typeof t)return A(r.unref(t),e);const n=t.call(this,e,a);return A(n,e)}),$message:"The value is required",$params:{type:"requiredIf",prop:e}};var t},e.requiredUnless=function(e){return{$validator:(t=e,function(e,a){if("function"!=typeof t)return T(r.unref(t),e);const n=t.call(this,e,a);return T(n,e)}),$message:"The value is required",$params:{type:"requiredUnless",prop:e}};var t},e.sameAs=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"other";return{$validator:z(e),$message:e=>`The value must be equal to the ${r} value`,$params:{equalTo:e,otherName:r,type:"sameAs"}}},e.url=j,Object.defineProperty(e,"__esModule",{value:!0}),e}({},VueDemi);
//# sourceMappingURL=index.iife.min.js.map
