import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, fetchWithEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, createError, setResponseHeader, send, getResponseStatus, setResponseStatus, setResponseHeaders, getRequestHeaders, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getRouterParam, getQuery as getQuery$1, readBody, getResponseStatusText } from 'file://C:/projects/vue3-assessment/node_modules/h3/dist/index.mjs';
import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file://C:/projects/vue3-assessment/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file://C:/projects/vue3-assessment/node_modules/devalue/index.js';
import destr from 'file://C:/projects/vue3-assessment/node_modules/destr/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, joinRelativeURL } from 'file://C:/projects/vue3-assessment/node_modules/ufo/dist/index.mjs';
import { renderToString } from 'file://C:/projects/vue3-assessment/node_modules/vue/server-renderer/index.mjs';
import { hash } from 'file://C:/projects/vue3-assessment/node_modules/ohash/dist/index.mjs';
import { propsToString, renderSSRHead } from 'file://C:/projects/vue3-assessment/node_modules/@unhead/ssr/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://C:/projects/vue3-assessment/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file://C:/projects/vue3-assessment/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://C:/projects/vue3-assessment/node_modules/hookable/dist/index.mjs';
import { klona } from 'file://C:/projects/vue3-assessment/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file://C:/projects/vue3-assessment/node_modules/scule/dist/index.mjs';
import defu, { defuFn } from 'file://C:/projects/vue3-assessment/node_modules/defu/dist/defu.mjs';
import { createStorage, prefixStorage } from 'file://C:/projects/vue3-assessment/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/projects/vue3-assessment/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/projects/vue3-assessment/node_modules/radix3/dist/index.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { consola } from 'file://C:/projects/vue3-assessment/node_modules/consola/dist/index.mjs';
import { getContext } from 'file://C:/projects/vue3-assessment/node_modules/unctx/dist/index.mjs';
import { isVNode, version, unref } from 'file://C:/projects/vue3-assessment/node_modules/vue/index.mjs';
import BaseStyle from 'file://C:/projects/vue3-assessment/node_modules/@primevue/core/base/style/index.mjs';
import { isNotEmpty, isEmpty } from 'file://C:/projects/vue3-assessment/node_modules/@primeuix/utils/object/index.mjs';
import { Theme } from 'file://C:/projects/vue3-assessment/node_modules/@primeuix/styled/index.mjs';
import { createServerHead as createServerHead$1, CapoPlugin } from 'file://C:/projects/vue3-assessment/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file://C:/projects/vue3-assessment/node_modules/@unhead/shared/dist/index.mjs';

const r=Object.create(null),E=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),s=new Proxy(r,{get(e,o){return E()[o]??r[o]},has(e,o){const i=E();return o in i||o in r},set(e,o,i){const g=E(!0);return g[o]=i,!0},deleteProperty(e,o){if(!o)return !1;const i=E(!0);return delete i[o],!0},ownKeys(){const e=E(!0);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"development"||"",p=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:!0}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:!1}],["VERCEL","VERCEL_ENV",{ci:!1}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:!0}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"]];function B(){if(globalThis.process?.env)for(const e of p){const o=e[1]||e[0];if(globalThis.process?.env[o])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}const l=B(),d=l.name;function n(e){return e?e!=="false":!1}const I=globalThis.process?.platform||"",T=n(s.CI)||l.ci!==!1,R=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(s.DEBUG);const C=t==="test"||n(s.TEST);n(s.MINIMAL)||T||C||!R;const a=/^win/i.test(I);!n(s.NO_COLOR)&&(n(s.FORCE_COLOR)||(R||a)&&s.TERM!=="dumb"||T);const _=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(_?.split(".")[0])||null;const W=globalThis.process||Object.create(null),c={versions:{}};new Proxy(W,{get(e,o){if(o==="env")return s;if(o in e)return e[o];if(o in c)return c[o]}});const A=globalThis.process?.release?.name==="node",L=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,O=!!globalThis.fastly,S=!!globalThis.Netlify,N=!!globalThis.EdgeRuntime,u=globalThis.navigator?.userAgent==="Cloudflare-Workers",b=!!globalThis.__lagon__,F=[[S,"netlify"],[N,"edge-light"],[u,"workerd"],[O,"fastly"],[D,"deno"],[L,"bun"],[A,"node"],[b,"lagon"]];function G(){const e=F.find(o=>o[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "primevue": {
      "usePrimeVue": true,
      "autoImport": true,
      "resolvePath": "",
      "importPT": "",
      "importTheme": "",
      "options": {
        "theme": {
          "preset": {
            "primitive": {
              "borderRadius": {
                "none": "0",
                "xs": "2px",
                "sm": "4px",
                "md": "6px",
                "lg": "8px",
                "xl": "12px"
              },
              "emerald": {
                "50": "#ecfdf5",
                "100": "#d1fae5",
                "200": "#a7f3d0",
                "300": "#6ee7b7",
                "400": "#34d399",
                "500": "#10b981",
                "600": "#059669",
                "700": "#047857",
                "800": "#065f46",
                "900": "#064e3b",
                "950": "#022c22"
              },
              "green": {
                "50": "#f0fdf4",
                "100": "#dcfce7",
                "200": "#bbf7d0",
                "300": "#86efac",
                "400": "#4ade80",
                "500": "#22c55e",
                "600": "#16a34a",
                "700": "#15803d",
                "800": "#166534",
                "900": "#14532d",
                "950": "#052e16"
              },
              "lime": {
                "50": "#f7fee7",
                "100": "#ecfccb",
                "200": "#d9f99d",
                "300": "#bef264",
                "400": "#a3e635",
                "500": "#84cc16",
                "600": "#65a30d",
                "700": "#4d7c0f",
                "800": "#3f6212",
                "900": "#365314",
                "950": "#1a2e05"
              },
              "red": {
                "50": "#fef2f2",
                "100": "#fee2e2",
                "200": "#fecaca",
                "300": "#fca5a5",
                "400": "#f87171",
                "500": "#ef4444",
                "600": "#dc2626",
                "700": "#b91c1c",
                "800": "#991b1b",
                "900": "#7f1d1d",
                "950": "#450a0a"
              },
              "orange": {
                "50": "#fff7ed",
                "100": "#ffedd5",
                "200": "#fed7aa",
                "300": "#fdba74",
                "400": "#fb923c",
                "500": "#f97316",
                "600": "#ea580c",
                "700": "#c2410c",
                "800": "#9a3412",
                "900": "#7c2d12",
                "950": "#431407"
              },
              "amber": {
                "50": "#fffbeb",
                "100": "#fef3c7",
                "200": "#fde68a",
                "300": "#fcd34d",
                "400": "#fbbf24",
                "500": "#f59e0b",
                "600": "#d97706",
                "700": "#b45309",
                "800": "#92400e",
                "900": "#78350f",
                "950": "#451a03"
              },
              "yellow": {
                "50": "#fefce8",
                "100": "#fef9c3",
                "200": "#fef08a",
                "300": "#fde047",
                "400": "#facc15",
                "500": "#eab308",
                "600": "#ca8a04",
                "700": "#a16207",
                "800": "#854d0e",
                "900": "#713f12",
                "950": "#422006"
              },
              "teal": {
                "50": "#f0fdfa",
                "100": "#ccfbf1",
                "200": "#99f6e4",
                "300": "#5eead4",
                "400": "#2dd4bf",
                "500": "#14b8a6",
                "600": "#0d9488",
                "700": "#0f766e",
                "800": "#115e59",
                "900": "#134e4a",
                "950": "#042f2e"
              },
              "cyan": {
                "50": "#ecfeff",
                "100": "#cffafe",
                "200": "#a5f3fc",
                "300": "#67e8f9",
                "400": "#22d3ee",
                "500": "#06b6d4",
                "600": "#0891b2",
                "700": "#0e7490",
                "800": "#155e75",
                "900": "#164e63",
                "950": "#083344"
              },
              "sky": {
                "50": "#f0f9ff",
                "100": "#e0f2fe",
                "200": "#bae6fd",
                "300": "#7dd3fc",
                "400": "#38bdf8",
                "500": "#0ea5e9",
                "600": "#0284c7",
                "700": "#0369a1",
                "800": "#075985",
                "900": "#0c4a6e",
                "950": "#082f49"
              },
              "blue": {
                "50": "#eff6ff",
                "100": "#dbeafe",
                "200": "#bfdbfe",
                "300": "#93c5fd",
                "400": "#60a5fa",
                "500": "#3b82f6",
                "600": "#2563eb",
                "700": "#1d4ed8",
                "800": "#1e40af",
                "900": "#1e3a8a",
                "950": "#172554"
              },
              "indigo": {
                "50": "#eef2ff",
                "100": "#e0e7ff",
                "200": "#c7d2fe",
                "300": "#a5b4fc",
                "400": "#818cf8",
                "500": "#6366f1",
                "600": "#4f46e5",
                "700": "#4338ca",
                "800": "#3730a3",
                "900": "#312e81",
                "950": "#1e1b4b"
              },
              "violet": {
                "50": "#f5f3ff",
                "100": "#ede9fe",
                "200": "#ddd6fe",
                "300": "#c4b5fd",
                "400": "#a78bfa",
                "500": "#8b5cf6",
                "600": "#7c3aed",
                "700": "#6d28d9",
                "800": "#5b21b6",
                "900": "#4c1d95",
                "950": "#2e1065"
              },
              "purple": {
                "50": "#faf5ff",
                "100": "#f3e8ff",
                "200": "#e9d5ff",
                "300": "#d8b4fe",
                "400": "#c084fc",
                "500": "#a855f7",
                "600": "#9333ea",
                "700": "#7e22ce",
                "800": "#6b21a8",
                "900": "#581c87",
                "950": "#3b0764"
              },
              "fuchsia": {
                "50": "#fdf4ff",
                "100": "#fae8ff",
                "200": "#f5d0fe",
                "300": "#f0abfc",
                "400": "#e879f9",
                "500": "#d946ef",
                "600": "#c026d3",
                "700": "#a21caf",
                "800": "#86198f",
                "900": "#701a75",
                "950": "#4a044e"
              },
              "pink": {
                "50": "#fdf2f8",
                "100": "#fce7f3",
                "200": "#fbcfe8",
                "300": "#f9a8d4",
                "400": "#f472b6",
                "500": "#ec4899",
                "600": "#db2777",
                "700": "#be185d",
                "800": "#9d174d",
                "900": "#831843",
                "950": "#500724"
              },
              "rose": {
                "50": "#fff1f2",
                "100": "#ffe4e6",
                "200": "#fecdd3",
                "300": "#fda4af",
                "400": "#fb7185",
                "500": "#f43f5e",
                "600": "#e11d48",
                "700": "#be123c",
                "800": "#9f1239",
                "900": "#881337",
                "950": "#4c0519"
              },
              "slate": {
                "50": "#f8fafc",
                "100": "#f1f5f9",
                "200": "#e2e8f0",
                "300": "#cbd5e1",
                "400": "#94a3b8",
                "500": "#64748b",
                "600": "#475569",
                "700": "#334155",
                "800": "#1e293b",
                "900": "#0f172a",
                "950": "#020617"
              },
              "gray": {
                "50": "#f9fafb",
                "100": "#f3f4f6",
                "200": "#e5e7eb",
                "300": "#d1d5db",
                "400": "#9ca3af",
                "500": "#6b7280",
                "600": "#4b5563",
                "700": "#374151",
                "800": "#1f2937",
                "900": "#111827",
                "950": "#030712"
              },
              "zinc": {
                "50": "#fafafa",
                "100": "#f4f4f5",
                "200": "#e4e4e7",
                "300": "#d4d4d8",
                "400": "#a1a1aa",
                "500": "#71717a",
                "600": "#52525b",
                "700": "#3f3f46",
                "800": "#27272a",
                "900": "#18181b",
                "950": "#09090b"
              },
              "neutral": {
                "50": "#fafafa",
                "100": "#f5f5f5",
                "200": "#e5e5e5",
                "300": "#d4d4d4",
                "400": "#a3a3a3",
                "500": "#737373",
                "600": "#525252",
                "700": "#404040",
                "800": "#262626",
                "900": "#171717",
                "950": "#0a0a0a"
              },
              "stone": {
                "50": "#fafaf9",
                "100": "#f5f5f4",
                "200": "#e7e5e4",
                "300": "#d6d3d1",
                "400": "#a8a29e",
                "500": "#78716c",
                "600": "#57534e",
                "700": "#44403c",
                "800": "#292524",
                "900": "#1c1917",
                "950": "#0c0a09"
              }
            },
            "semantic": {
              "transitionDuration": "0.2s",
              "focusRing": {
                "width": "1px",
                "style": "solid",
                "color": "{primary.color}",
                "offset": "2px",
                "shadow": "none"
              },
              "disabledOpacity": "0.6",
              "iconSize": "1rem",
              "anchorGutter": "2px",
              "primary": {
                "50": "{emerald.50}",
                "100": "{emerald.100}",
                "200": "{emerald.200}",
                "300": "{emerald.300}",
                "400": "{emerald.400}",
                "500": "{emerald.500}",
                "600": "{emerald.600}",
                "700": "{emerald.700}",
                "800": "{emerald.800}",
                "900": "{emerald.900}",
                "950": "{emerald.950}"
              },
              "formField": {
                "paddingX": "0.75rem",
                "paddingY": "0.5rem",
                "borderRadius": "{border.radius.md}",
                "focusRing": {
                  "width": "0",
                  "style": "none",
                  "color": "transparent",
                  "offset": "0",
                  "shadow": "none"
                },
                "transitionDuration": "{transition.duration}"
              },
              "list": {
                "padding": "0.25rem 0.25rem",
                "gap": "2px",
                "header": {
                  "padding": "0.5rem 1rem 0.25rem 1rem"
                },
                "option": {
                  "padding": "0.5rem 0.75rem",
                  "borderRadius": "{border.radius.sm}"
                },
                "optionGroup": {
                  "padding": "0.5rem 0.75rem",
                  "fontWeight": "600"
                }
              },
              "content": {
                "borderRadius": "{border.radius.md}"
              },
              "mask": {
                "transitionDuration": "0.15s"
              },
              "navigation": {
                "list": {
                  "padding": "0.25rem 0.25rem",
                  "gap": "2px"
                },
                "item": {
                  "padding": "0.5rem 0.75rem",
                  "borderRadius": "{border.radius.sm}",
                  "gap": "0.5rem"
                },
                "submenuLabel": {
                  "padding": "0.5rem 0.75rem",
                  "fontWeight": "600"
                },
                "submenuIcon": {
                  "size": "0.875rem"
                }
              },
              "overlay": {
                "select": {
                  "borderRadius": "{border.radius.md}",
                  "shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
                },
                "popover": {
                  "borderRadius": "{border.radius.md}",
                  "padding": "0.75rem",
                  "shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
                },
                "modal": {
                  "borderRadius": "{border.radius.xl}",
                  "padding": "1.25rem",
                  "shadow": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                },
                "navigation": {
                  "shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
                }
              },
              "colorScheme": {
                "light": {
                  "surface": {
                    "0": "#ffffff",
                    "50": "{slate.50}",
                    "100": "{slate.100}",
                    "200": "{slate.200}",
                    "300": "{slate.300}",
                    "400": "{slate.400}",
                    "500": "{slate.500}",
                    "600": "{slate.600}",
                    "700": "{slate.700}",
                    "800": "{slate.800}",
                    "900": "{slate.900}",
                    "950": "{slate.950}"
                  },
                  "primary": {
                    "color": "{primary.500}",
                    "contrastColor": "#ffffff",
                    "hoverColor": "{primary.600}",
                    "activeColor": "{primary.700}"
                  },
                  "highlight": {
                    "background": "{primary.50}",
                    "focusBackground": "{primary.100}",
                    "color": "{primary.700}",
                    "focusColor": "{primary.800}"
                  },
                  "mask": {
                    "background": "rgba(0,0,0,0.4)",
                    "color": "{surface.200}"
                  },
                  "formField": {
                    "background": "{surface.0}",
                    "disabledBackground": "{surface.200}",
                    "filledBackground": "{surface.50}",
                    "filledFocusBackground": "{surface.50}",
                    "borderColor": "{surface.300}",
                    "hoverBorderColor": "{surface.400}",
                    "focusBorderColor": "{primary.color}",
                    "invalidBorderColor": "{red.400}",
                    "color": "{surface.700}",
                    "disabledColor": "{surface.500}",
                    "placeholderColor": "{surface.500}",
                    "floatLabelColor": "{surface.500}",
                    "floatLabelFocusColor": "{surface.500}",
                    "floatLabelInvalidColor": "{red.400}",
                    "iconColor": "{surface.400}",
                    "shadow": "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
                  },
                  "text": {
                    "color": "{surface.700}",
                    "hoverColor": "{surface.800}",
                    "mutedColor": "{surface.500}",
                    "hoverMutedColor": "{surface.600}"
                  },
                  "content": {
                    "background": "{surface.0}",
                    "hoverBackground": "{surface.100}",
                    "borderColor": "{surface.200}",
                    "color": "{text.color}",
                    "hoverColor": "{text.hover.color}"
                  },
                  "overlay": {
                    "select": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.200}",
                      "color": "{text.color}"
                    },
                    "popover": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.200}",
                      "color": "{text.color}"
                    },
                    "modal": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.200}",
                      "color": "{text.color}"
                    }
                  },
                  "list": {
                    "option": {
                      "focusBackground": "{surface.100}",
                      "selectedBackground": "{highlight.background}",
                      "selectedFocusBackground": "{highlight.focus.background}",
                      "color": "{text.color}",
                      "focusColor": "{text.hover.color}",
                      "selectedColor": "{highlight.color}",
                      "selectedFocusColor": "{highlight.focus.color}",
                      "icon": {
                        "color": "{surface.400}",
                        "focusColor": "{surface.500}"
                      }
                    },
                    "optionGroup": {
                      "background": "transparent",
                      "color": "{text.muted.color}"
                    }
                  },
                  "navigation": {
                    "item": {
                      "focusBackground": "{surface.100}",
                      "activeBackground": "{surface.100}",
                      "color": "{text.color}",
                      "focusColor": "{text.hover.color}",
                      "activeColor": "{text.hover.color}",
                      "icon": {
                        "color": "{surface.400}",
                        "focusColor": "{surface.500}",
                        "activeColor": "{surface.500}"
                      }
                    },
                    "submenuLabel": {
                      "background": "transparent",
                      "color": "{text.muted.color}"
                    },
                    "submenuIcon": {
                      "color": "{surface.400}",
                      "focusColor": "{surface.500}",
                      "activeColor": "{surface.500}"
                    }
                  }
                },
                "dark": {
                  "surface": {
                    "0": "#ffffff",
                    "50": "{zinc.50}",
                    "100": "{zinc.100}",
                    "200": "{zinc.200}",
                    "300": "{zinc.300}",
                    "400": "{zinc.400}",
                    "500": "{zinc.500}",
                    "600": "{zinc.600}",
                    "700": "{zinc.700}",
                    "800": "{zinc.800}",
                    "900": "{zinc.900}",
                    "950": "{zinc.950}"
                  },
                  "primary": {
                    "color": "{primary.400}",
                    "contrastColor": "{surface.900}",
                    "hoverColor": "{primary.300}",
                    "activeColor": "{primary.200}"
                  },
                  "highlight": {
                    "background": "color-mix(in srgb, {primary.400}, transparent 84%)",
                    "focusBackground": "color-mix(in srgb, {primary.400}, transparent 76%)",
                    "color": "rgba(255,255,255,.87)",
                    "focusColor": "rgba(255,255,255,.87)"
                  },
                  "mask": {
                    "background": "rgba(0,0,0,0.6)",
                    "color": "{surface.200}"
                  },
                  "formField": {
                    "background": "{surface.950}",
                    "disabledBackground": "{surface.700}",
                    "filledBackground": "{surface.800}",
                    "filledFocusBackground": "{surface.800}",
                    "borderColor": "{surface.700}",
                    "hoverBorderColor": "{surface.600}",
                    "focusBorderColor": "{primary.color}",
                    "invalidBorderColor": "{red.300}",
                    "color": "{surface.0}",
                    "disabledColor": "{surface.400}",
                    "placeholderColor": "{surface.400}",
                    "floatLabelColor": "{surface.400}",
                    "floatLabelFocusColor": "{surface.400}",
                    "floatLabelInvalidColor": "{red.300}",
                    "iconColor": "{surface.400}",
                    "shadow": "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
                  },
                  "text": {
                    "color": "{surface.0}",
                    "hoverColor": "{surface.0}",
                    "mutedColor": "{surface.400}",
                    "hoverMutedColor": "{surface.300}"
                  },
                  "content": {
                    "background": "{surface.900}",
                    "hoverBackground": "{surface.800}",
                    "borderColor": "{surface.700}",
                    "color": "{text.color}",
                    "hoverColor": "{text.hover.color}"
                  },
                  "overlay": {
                    "select": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.700}",
                      "color": "{text.color}"
                    },
                    "popover": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.700}",
                      "color": "{text.color}"
                    },
                    "modal": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.700}",
                      "color": "{text.color}"
                    }
                  },
                  "list": {
                    "option": {
                      "focusBackground": "{surface.800}",
                      "selectedBackground": "{highlight.background}",
                      "selectedFocusBackground": "{highlight.focus.background}",
                      "color": "{text.color}",
                      "focusColor": "{text.hover.color}",
                      "selectedColor": "{highlight.color}",
                      "selectedFocusColor": "{highlight.focus.color}",
                      "icon": {
                        "color": "{surface.500}",
                        "focusColor": "{surface.400}"
                      }
                    },
                    "optionGroup": {
                      "background": "transparent",
                      "color": "{text.muted.color}"
                    }
                  },
                  "navigation": {
                    "item": {
                      "focusBackground": "{surface.800}",
                      "activeBackground": "{surface.800}",
                      "color": "{text.color}",
                      "focusColor": "{text.hover.color}",
                      "activeColor": "{text.hover.color}",
                      "icon": {
                        "color": "{surface.500}",
                        "focusColor": "{surface.400}",
                        "activeColor": "{surface.400}"
                      }
                    },
                    "submenuLabel": {
                      "background": "transparent",
                      "color": "{text.muted.color}"
                    },
                    "submenuIcon": {
                      "color": "{surface.500}",
                      "focusColor": "{surface.400}",
                      "activeColor": "{surface.400}"
                    }
                  }
                }
              }
            },
            "components": {
              "accordion": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "panel": {
                  "borderWidth": "0 0 1px 0",
                  "borderColor": "{content.border.color}"
                },
                "header": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{text.color}",
                  "padding": "1.125rem",
                  "fontWeight": "600",
                  "borderRadius": "0",
                  "borderWidth": "0",
                  "borderColor": "{content.border.color}",
                  "background": "{content.background}",
                  "hoverBackground": "{content.background}",
                  "activeBackground": "{content.background}",
                  "activeHoverBackground": "{content.background}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "toggleIcon": {
                    "color": "{text.muted.color}",
                    "hoverColor": "{text.color}",
                    "activeColor": "{text.color}",
                    "activeHoverColor": "{text.color}"
                  },
                  "first": {
                    "topBorderRadius": "{content.border.radius}",
                    "borderWidth": "0"
                  },
                  "last": {
                    "bottomBorderRadius": "{content.border.radius}",
                    "activeBottomBorderRadius": "0"
                  }
                },
                "content": {
                  "borderWidth": "0",
                  "borderColor": "{content.border.color}",
                  "background": "{content.background}",
                  "color": "{text.color}",
                  "padding": "0 1.125rem 1.125rem 1.125rem"
                }
              },
              "autocomplete": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}"
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "padding": "{list.option.group.padding}"
                },
                "dropdown": {
                  "width": "2.5rem",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.border.color}",
                  "activeBorderColor": "{form.field.border.color}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                },
                "colorScheme": {
                  "light": {
                    "dropdown": {
                      "background": "{surface.100}",
                      "hoverBackground": "{surface.200}",
                      "activeBackground": "{surface.300}",
                      "color": "{surface.600}",
                      "hoverColor": "{surface.700}",
                      "activeColor": "{surface.800}"
                    }
                  },
                  "dark": {
                    "dropdown": {
                      "background": "{surface.800}",
                      "hoverBackground": "{surface.700}",
                      "activeBackground": "{surface.600}",
                      "color": "{surface.300}",
                      "hoverColor": "{surface.200}",
                      "activeColor": "{surface.100}"
                    }
                  }
                }
              },
              "avatar": {
                "root": {
                  "width": "2rem",
                  "height": "2rem",
                  "fontSize": "1rem",
                  "background": "{content.border.color}",
                  "borderRadius": "{content.border.radius}"
                },
                "group": {
                  "borderColor": "{content.background}",
                  "offset": "-1rem"
                },
                "lg": {
                  "width": "3rem",
                  "height": "3rem",
                  "fontSize": "1.5rem"
                },
                "xl": {
                  "width": "4rem",
                  "height": "4rem",
                  "fontSize": "2rem"
                }
              },
              "badge": {
                "root": {
                  "borderRadius": "{border.radius.md}",
                  "padding": "0 0.5rem",
                  "fontSize": "0.75rem",
                  "fontWeight": "700",
                  "minWidth": "1.5rem",
                  "height": "1.5rem"
                },
                "dot": {
                  "size": "0.5rem"
                },
                "sm": {
                  "fontSize": "0.625rem",
                  "minWidth": "1.25rem",
                  "height": "1.25rem"
                },
                "lg": {
                  "fontSize": "0.875rem",
                  "minWidth": "1.75rem",
                  "height": "1.75rem"
                },
                "xl": {
                  "fontSize": "1rem",
                  "minWidth": "2rem",
                  "height": "2rem"
                },
                "colorScheme": {
                  "light": {
                    "primary": {
                      "background": "{primary.color}",
                      "color": "{primary.contrast.color}"
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "color": "{surface.600}"
                    },
                    "success": {
                      "background": "{green.500}",
                      "color": "{surface.0}"
                    },
                    "info": {
                      "background": "{sky.500}",
                      "color": "{surface.0}"
                    },
                    "warn": {
                      "background": "{orange.500}",
                      "color": "{surface.0}"
                    },
                    "danger": {
                      "background": "{red.500}",
                      "color": "{surface.0}"
                    },
                    "contrast": {
                      "background": "{surface.950}",
                      "color": "{surface.0}"
                    }
                  },
                  "dark": {
                    "primary": {
                      "background": "{primary.color}",
                      "color": "{primary.contrast.color}"
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "color": "{surface.300}"
                    },
                    "success": {
                      "background": "{green.400}",
                      "color": "{green.950}"
                    },
                    "info": {
                      "background": "{sky.400}",
                      "color": "{sky.950}"
                    },
                    "warn": {
                      "background": "{orange.400}",
                      "color": "{orange.950}"
                    },
                    "danger": {
                      "background": "{red.400}",
                      "color": "{red.950}"
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "color": "{surface.950}"
                    }
                  }
                }
              },
              "blockui": {
                "root": {
                  "borderRadius": "{content.border.radius}"
                }
              },
              "breadcrumb": {
                "root": {
                  "padding": "1rem",
                  "background": "{content.background}",
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                },
                "item": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "borderRadius": "{content.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "hoverColor": "{navigation.item.icon.focus.color}"
                  },
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "separator": {
                  "color": "{navigation.item.icon.color}"
                }
              },
              "button": {
                "root": {
                  "borderRadius": "{form.field.border.radius}",
                  "roundedBorderRadius": "2rem",
                  "gap": "0.5rem",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "iconOnlyWidth": "2.5rem",
                  "sm": {
                    "fontSize": "0.875rem",
                    "paddingX": "0.625rem",
                    "paddingY": "0.375rem"
                  },
                  "lg": {
                    "fontSize": "1.125rem",
                    "paddingX": "0.875rem",
                    "paddingY": "0.625rem"
                  },
                  "label": {
                    "fontWeight": "500"
                  },
                  "raisedShadow": "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "offset": "{focus.ring.offset}"
                  },
                  "badgeSize": "1rem",
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "primary": {
                        "background": "{primary.color}",
                        "hoverBackground": "{primary.hover.color}",
                        "activeBackground": "{primary.active.color}",
                        "borderColor": "{primary.color}",
                        "hoverBorderColor": "{primary.hover.color}",
                        "activeBorderColor": "{primary.active.color}",
                        "color": "{primary.contrast.color}",
                        "hoverColor": "{primary.contrast.color}",
                        "activeColor": "{primary.contrast.color}",
                        "focusRing": {
                          "color": "{primary.color}",
                          "shadow": "none"
                        }
                      },
                      "secondary": {
                        "background": "{surface.100}",
                        "hoverBackground": "{surface.200}",
                        "activeBackground": "{surface.300}",
                        "borderColor": "{surface.100}",
                        "hoverBorderColor": "{surface.200}",
                        "activeBorderColor": "{surface.300}",
                        "color": "{surface.600}",
                        "hoverColor": "{surface.700}",
                        "activeColor": "{surface.800}",
                        "focusRing": {
                          "color": "{surface.600}",
                          "shadow": "none"
                        }
                      },
                      "info": {
                        "background": "{sky.500}",
                        "hoverBackground": "{sky.600}",
                        "activeBackground": "{sky.700}",
                        "borderColor": "{sky.500}",
                        "hoverBorderColor": "{sky.600}",
                        "activeBorderColor": "{sky.700}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{sky.500}",
                          "shadow": "none"
                        }
                      },
                      "success": {
                        "background": "{green.500}",
                        "hoverBackground": "{green.600}",
                        "activeBackground": "{green.700}",
                        "borderColor": "{green.500}",
                        "hoverBorderColor": "{green.600}",
                        "activeBorderColor": "{green.700}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{green.500}",
                          "shadow": "none"
                        }
                      },
                      "warn": {
                        "background": "{orange.500}",
                        "hoverBackground": "{orange.600}",
                        "activeBackground": "{orange.700}",
                        "borderColor": "{orange.500}",
                        "hoverBorderColor": "{orange.600}",
                        "activeBorderColor": "{orange.700}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{orange.500}",
                          "shadow": "none"
                        }
                      },
                      "help": {
                        "background": "{purple.500}",
                        "hoverBackground": "{purple.600}",
                        "activeBackground": "{purple.700}",
                        "borderColor": "{purple.500}",
                        "hoverBorderColor": "{purple.600}",
                        "activeBorderColor": "{purple.700}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{purple.500}",
                          "shadow": "none"
                        }
                      },
                      "danger": {
                        "background": "{red.500}",
                        "hoverBackground": "{red.600}",
                        "activeBackground": "{red.700}",
                        "borderColor": "{red.500}",
                        "hoverBorderColor": "{red.600}",
                        "activeBorderColor": "{red.700}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{red.500}",
                          "shadow": "none"
                        }
                      },
                      "contrast": {
                        "background": "{surface.950}",
                        "hoverBackground": "{surface.900}",
                        "activeBackground": "{surface.800}",
                        "borderColor": "{surface.950}",
                        "hoverBorderColor": "{surface.900}",
                        "activeBorderColor": "{surface.800}",
                        "color": "{surface.0}",
                        "hoverColor": "{surface.0}",
                        "activeColor": "{surface.0}",
                        "focusRing": {
                          "color": "{surface.950}",
                          "shadow": "none"
                        }
                      }
                    },
                    "outlined": {
                      "primary": {
                        "hoverBackground": "{primary.50}",
                        "activeBackground": "{primary.100}",
                        "borderColor": "{primary.200}",
                        "color": "{primary.color}"
                      },
                      "secondary": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "borderColor": "{surface.200}",
                        "color": "{surface.500}"
                      },
                      "success": {
                        "hoverBackground": "{green.50}",
                        "activeBackground": "{green.100}",
                        "borderColor": "{green.200}",
                        "color": "{green.500}"
                      },
                      "info": {
                        "hoverBackground": "{sky.50}",
                        "activeBackground": "{sky.100}",
                        "borderColor": "{sky.200}",
                        "color": "{sky.500}"
                      },
                      "warn": {
                        "hoverBackground": "{orange.50}",
                        "activeBackground": "{orange.100}",
                        "borderColor": "{orange.200}",
                        "color": "{orange.500}"
                      },
                      "help": {
                        "hoverBackground": "{purple.50}",
                        "activeBackground": "{purple.100}",
                        "borderColor": "{purple.200}",
                        "color": "{purple.500}"
                      },
                      "danger": {
                        "hoverBackground": "{red.50}",
                        "activeBackground": "{red.100}",
                        "borderColor": "{red.200}",
                        "color": "{red.500}"
                      },
                      "contrast": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "borderColor": "{surface.700}",
                        "color": "{surface.950}"
                      },
                      "plain": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "borderColor": "{surface.200}",
                        "color": "{surface.700}"
                      }
                    },
                    "text": {
                      "primary": {
                        "hoverBackground": "{primary.50}",
                        "activeBackground": "{primary.100}",
                        "color": "{primary.color}"
                      },
                      "secondary": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "color": "{surface.500}"
                      },
                      "success": {
                        "hoverBackground": "{green.50}",
                        "activeBackground": "{green.100}",
                        "color": "{green.500}"
                      },
                      "info": {
                        "hoverBackground": "{sky.50}",
                        "activeBackground": "{sky.100}",
                        "color": "{sky.500}"
                      },
                      "warn": {
                        "hoverBackground": "{orange.50}",
                        "activeBackground": "{orange.100}",
                        "color": "{orange.500}"
                      },
                      "help": {
                        "hoverBackground": "{purple.50}",
                        "activeBackground": "{purple.100}",
                        "color": "{purple.500}"
                      },
                      "danger": {
                        "hoverBackground": "{red.50}",
                        "activeBackground": "{red.100}",
                        "color": "{red.500}"
                      },
                      "plain": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "color": "{surface.700}"
                      }
                    },
                    "link": {
                      "color": "{primary.color}",
                      "hoverColor": "{primary.color}",
                      "activeColor": "{primary.color}"
                    }
                  },
                  "dark": {
                    "root": {
                      "primary": {
                        "background": "{primary.color}",
                        "hoverBackground": "{primary.hover.color}",
                        "activeBackground": "{primary.active.color}",
                        "borderColor": "{primary.color}",
                        "hoverBorderColor": "{primary.hover.color}",
                        "activeBorderColor": "{primary.active.color}",
                        "color": "{primary.contrast.color}",
                        "hoverColor": "{primary.contrast.color}",
                        "activeColor": "{primary.contrast.color}",
                        "focusRing": {
                          "color": "{primary.color}",
                          "shadow": "none"
                        }
                      },
                      "secondary": {
                        "background": "{surface.800}",
                        "hoverBackground": "{surface.700}",
                        "activeBackground": "{surface.600}",
                        "borderColor": "{surface.800}",
                        "hoverBorderColor": "{surface.700}",
                        "activeBorderColor": "{surface.600}",
                        "color": "{surface.300}",
                        "hoverColor": "{surface.200}",
                        "activeColor": "{surface.100}",
                        "focusRing": {
                          "color": "{surface.300}",
                          "shadow": "none"
                        }
                      },
                      "info": {
                        "background": "{sky.400}",
                        "hoverBackground": "{sky.300}",
                        "activeBackground": "{sky.200}",
                        "borderColor": "{sky.400}",
                        "hoverBorderColor": "{sky.300}",
                        "activeBorderColor": "{sky.200}",
                        "color": "{sky.950}",
                        "hoverColor": "{sky.950}",
                        "activeColor": "{sky.950}",
                        "focusRing": {
                          "color": "{sky.400}",
                          "shadow": "none"
                        }
                      },
                      "success": {
                        "background": "{green.400}",
                        "hoverBackground": "{green.300}",
                        "activeBackground": "{green.200}",
                        "borderColor": "{green.400}",
                        "hoverBorderColor": "{green.300}",
                        "activeBorderColor": "{green.200}",
                        "color": "{green.950}",
                        "hoverColor": "{green.950}",
                        "activeColor": "{green.950}",
                        "focusRing": {
                          "color": "{green.400}",
                          "shadow": "none"
                        }
                      },
                      "warn": {
                        "background": "{orange.400}",
                        "hoverBackground": "{orange.300}",
                        "activeBackground": "{orange.200}",
                        "borderColor": "{orange.400}",
                        "hoverBorderColor": "{orange.300}",
                        "activeBorderColor": "{orange.200}",
                        "color": "{orange.950}",
                        "hoverColor": "{orange.950}",
                        "activeColor": "{orange.950}",
                        "focusRing": {
                          "color": "{orange.400}",
                          "shadow": "none"
                        }
                      },
                      "help": {
                        "background": "{purple.400}",
                        "hoverBackground": "{purple.300}",
                        "activeBackground": "{purple.200}",
                        "borderColor": "{purple.400}",
                        "hoverBorderColor": "{purple.300}",
                        "activeBorderColor": "{purple.200}",
                        "color": "{purple.950}",
                        "hoverColor": "{purple.950}",
                        "activeColor": "{purple.950}",
                        "focusRing": {
                          "color": "{purple.400}",
                          "shadow": "none"
                        }
                      },
                      "danger": {
                        "background": "{red.400}",
                        "hoverBackground": "{red.300}",
                        "activeBackground": "{red.200}",
                        "borderColor": "{red.400}",
                        "hoverBorderColor": "{red.300}",
                        "activeBorderColor": "{red.200}",
                        "color": "{red.950}",
                        "hoverColor": "{red.950}",
                        "activeColor": "{red.950}",
                        "focusRing": {
                          "color": "{red.400}",
                          "shadow": "none"
                        }
                      },
                      "contrast": {
                        "background": "{surface.0}",
                        "hoverBackground": "{surface.100}",
                        "activeBackground": "{surface.200}",
                        "borderColor": "{surface.0}",
                        "hoverBorderColor": "{surface.100}",
                        "activeBorderColor": "{surface.200}",
                        "color": "{surface.950}",
                        "hoverColor": "{surface.950}",
                        "activeColor": "{surface.950}",
                        "focusRing": {
                          "color": "{surface.0}",
                          "shadow": "none"
                        }
                      }
                    },
                    "outlined": {
                      "primary": {
                        "hoverBackground": "color-mix(in srgb, {primary.color}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {primary.color}, transparent 84%)",
                        "borderColor": "{primary.700}",
                        "color": "{primary.color}"
                      },
                      "secondary": {
                        "hoverBackground": "rgba(255,255,255,0.04)",
                        "activeBackground": "rgba(255,255,255,0.16)",
                        "borderColor": "{surface.700}",
                        "color": "{surface.400}"
                      },
                      "success": {
                        "hoverBackground": "color-mix(in srgb, {green.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {green.400}, transparent 84%)",
                        "borderColor": "{green.700}",
                        "color": "{green.400}"
                      },
                      "info": {
                        "hoverBackground": "color-mix(in srgb, {sky.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {sky.400}, transparent 84%)",
                        "borderColor": "{sky.700}",
                        "color": "{sky.400}"
                      },
                      "warn": {
                        "hoverBackground": "color-mix(in srgb, {orange.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {orange.400}, transparent 84%)",
                        "borderColor": "{orange.700}",
                        "color": "{orange.400}"
                      },
                      "help": {
                        "hoverBackground": "color-mix(in srgb, {help.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {help.400}, transparent 84%)",
                        "borderColor": "{purple.700}",
                        "color": "{purple.400}"
                      },
                      "danger": {
                        "hoverBackground": "color-mix(in srgb, {danger.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {danger.400}, transparent 84%)",
                        "borderColor": "{red.700}",
                        "color": "{red.400}"
                      },
                      "contrast": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "borderColor": "{surface.500}",
                        "color": "{surface.0}"
                      },
                      "plain": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "borderColor": "{surface.600}",
                        "color": "{surface.0}"
                      }
                    },
                    "text": {
                      "primary": {
                        "hoverBackground": "color-mix(in srgb, {primary.color}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {primary.color}, transparent 84%)",
                        "color": "{primary.color}"
                      },
                      "secondary": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "color": "{surface.400}"
                      },
                      "success": {
                        "hoverBackground": "color-mix(in srgb, {green.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {green.400}, transparent 84%)",
                        "color": "{green.400}"
                      },
                      "info": {
                        "hoverBackground": "color-mix(in srgb, {sky.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {sky.400}, transparent 84%)",
                        "color": "{sky.400}"
                      },
                      "warn": {
                        "hoverBackground": "color-mix(in srgb, {orange.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {orange.400}, transparent 84%)",
                        "color": "{orange.400}"
                      },
                      "help": {
                        "hoverBackground": "color-mix(in srgb, {purple.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {purple.400}, transparent 84%)",
                        "color": "{purple.400}"
                      },
                      "danger": {
                        "hoverBackground": "color-mix(in srgb, {red.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {red.400}, transparent 84%)",
                        "color": "{red.400}"
                      },
                      "plain": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "color": "{surface.0}"
                      }
                    },
                    "link": {
                      "color": "{primary.color}",
                      "hoverColor": "{primary.color}",
                      "activeColor": "{primary.color}"
                    }
                  }
                }
              },
              "datepicker": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "panel": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.popover.shadow}",
                  "padding": "{overlay.popover.padding}"
                },
                "header": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "padding": "0 0 0.5rem 0",
                  "fontWeight": "500",
                  "gap": "0.5rem"
                },
                "title": {
                  "gap": "0.5rem",
                  "fontWeight": "500"
                },
                "dropdown": {
                  "width": "2.5rem",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.border.color}",
                  "activeBorderColor": "{form.field.border.color}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "inputIcon": {
                  "color": "{form.field.icon.color}"
                },
                "selectMonth": {
                  "hoverBackground": "{content.hover.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "padding": "0.25rem 0.5rem",
                  "borderRadius": "{content.border.radius}"
                },
                "selectYear": {
                  "hoverBackground": "{content.hover.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "padding": "0.25rem 0.5rem",
                  "borderRadius": "{content.border.radius}"
                },
                "group": {
                  "borderColor": "{content.border.color}",
                  "gap": "{overlay.popover.padding}"
                },
                "dayView": {
                  "margin": "0.5rem 0 0 0"
                },
                "weekDay": {
                  "padding": "0.25rem",
                  "fontWeight": "500",
                  "color": "{content.color}"
                },
                "date": {
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{primary.color}",
                  "rangeSelectedBackground": "{highlight.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{primary.contrast.color}",
                  "rangeSelectedColor": "{highlight.color}",
                  "width": "2rem",
                  "height": "2rem",
                  "borderRadius": "50%",
                  "padding": "0.25rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "monthView": {
                  "margin": "0.5rem 0 0 0"
                },
                "month": {
                  "borderRadius": "{content.border.radius}"
                },
                "yearView": {
                  "margin": "0.5rem 0 0 0"
                },
                "year": {
                  "borderRadius": "{content.border.radius}"
                },
                "buttonbar": {
                  "padding": "0.5rem 0 0 0",
                  "borderColor": "{content.border.color}"
                },
                "timePicker": {
                  "padding": "0.5rem 0 0 0",
                  "borderColor": "{content.border.color}",
                  "gap": "0.5rem",
                  "buttonGap": "0.25rem"
                },
                "colorScheme": {
                  "light": {
                    "dropdown": {
                      "background": "{surface.100}",
                      "hoverBackground": "{surface.200}",
                      "activeBackground": "{surface.300}",
                      "color": "{surface.600}",
                      "hoverColor": "{surface.700}",
                      "activeColor": "{surface.800}"
                    },
                    "today": {
                      "background": "{surface.200}",
                      "color": "{surface.900}"
                    }
                  },
                  "dark": {
                    "dropdown": {
                      "background": "{surface.800}",
                      "hoverBackground": "{surface.700}",
                      "activeBackground": "{surface.600}",
                      "color": "{surface.300}",
                      "hoverColor": "{surface.200}",
                      "activeColor": "{surface.100}"
                    },
                    "today": {
                      "background": "{surface.700}",
                      "color": "{surface.0}"
                    }
                  }
                }
              },
              "card": {
                "root": {
                  "background": "{content.background}",
                  "borderRadius": "{border.radius.xl}",
                  "color": "{content.color}",
                  "shadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
                },
                "body": {
                  "padding": "1.25rem",
                  "gap": "0.5rem"
                },
                "caption": {
                  "gap": "0.5rem"
                },
                "title": {
                  "fontSize": "1.25rem",
                  "fontWeight": "500"
                },
                "subtitle": {
                  "color": "{text.muted.color}"
                }
              },
              "carousel": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "content": {
                  "gap": "0.25rem"
                },
                "indicatorList": {
                  "padding": "1rem",
                  "gap": "0.5rem"
                },
                "indicator": {
                  "width": "2rem",
                  "height": "0.5rem",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "colorScheme": {
                  "light": {
                    "indicator": {
                      "background": "{surface.200}",
                      "hoverBackground": "{surface.300}",
                      "activeBackground": "{primary.color}"
                    }
                  },
                  "dark": {
                    "indicator": {
                      "background": "{surface.700}",
                      "hoverBackground": "{surface.600}",
                      "activeBackground": "{primary.color}"
                    }
                  }
                }
              },
              "cascadeselect": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "dropdown": {
                  "width": "2.5rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}"
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}",
                  "icon": {
                    "color": "{list.option.icon.color}",
                    "focusColor": "{list.option.icon.focus.color}",
                    "size": "0.875rem"
                  }
                }
              },
              "checkbox": {
                "root": {
                  "borderRadius": "{border.radius.sm}",
                  "width": "1.25rem",
                  "height": "1.25rem",
                  "background": "{form.field.background}",
                  "checkedBackground": "{primary.color}",
                  "checkedHoverBackground": "{primary.hover.color}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.border.color}",
                  "checkedBorderColor": "{primary.color}",
                  "checkedHoverBorderColor": "{primary.hover.color}",
                  "checkedFocusBorderColor": "{primary.color}",
                  "checkedDisabledBorderColor": "{form.field.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "shadow": "{form.field.shadow}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "icon": {
                  "size": "0.875rem",
                  "color": "{form.field.color}",
                  "checkedColor": "{primary.contrast.color}",
                  "checkedHoverColor": "{primary.contrast.color}",
                  "disabledColor": "{form.field.disabled.color}"
                }
              },
              "chip": {
                "root": {
                  "borderRadius": "16px",
                  "paddingX": "0.75rem",
                  "paddingY": "0.5rem",
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                },
                "image": {
                  "width": "2rem",
                  "height": "2rem"
                },
                "icon": {
                  "size": "1rem"
                },
                "removeIcon": {
                  "size": "1rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  }
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.100}",
                      "color": "{surface.800}"
                    },
                    "icon": {
                      "color": "{surface.800}"
                    },
                    "removeIcon": {
                      "color": "{surface.800}"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "{surface.800}",
                      "color": "{surface.0}"
                    },
                    "icon": {
                      "color": "{surface.0}"
                    },
                    "removeIcon": {
                      "color": "{surfaec.0}"
                    }
                  }
                }
              },
              "colorpicker": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "preview": {
                  "width": "1.5rem",
                  "height": "1.5rem",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "panel": {
                  "shadow": "{overlay.popover.shadow}",
                  "borderRadius": "{overlay.popover.borderRadius}"
                },
                "colorScheme": {
                  "light": {
                    "panel": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.900}"
                    },
                    "handle": {
                      "color": "{surface.0}"
                    }
                  },
                  "dark": {
                    "panel": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.700}"
                    },
                    "handle": {
                      "color": "{surface.0}"
                    }
                  }
                }
              },
              "confirmdialog": {
                "icon": {
                  "size": "2rem",
                  "color": "{overlay.modal.color}"
                },
                "content": {
                  "gap": "1rem"
                }
              },
              "confirmpopup": {
                "root": {
                  "background": "{overlay.popover.background}",
                  "borderColor": "{overlay.popover.border.color}",
                  "color": "{overlay.popover.color}",
                  "borderRadius": "{overlay.popover.border.radius}",
                  "shadow": "{overlay.popover.shadow}",
                  "gutter": "10px",
                  "arrowOffset": "1.25rem"
                },
                "content": {
                  "padding": "{overlay.popover.padding}",
                  "gap": "1rem"
                },
                "icon": {
                  "size": "1.5rem",
                  "color": "{overlay.popover.color}"
                },
                "footer": {
                  "gap": "0.5rem",
                  "padding": "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"
                }
              },
              "contextmenu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "transitionDuration": "{transition.duration}"
                },
                "list": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}"
                  }
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}",
                  "activeColor": "{navigation.submenu.icon.active.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                }
              },
              "dataview": {
                "root": {
                  "borderColor": "transparent",
                  "borderWidth": "0",
                  "borderRadius": "0",
                  "padding": "0"
                },
                "header": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem",
                  "borderRadius": "0"
                },
                "content": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "borderColor": "transparent",
                  "borderWidth": "0",
                  "padding": "0",
                  "borderRadius": "0"
                },
                "footer": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "1px 0 0 0",
                  "padding": "0.75rem 1rem",
                  "borderRadius": "0"
                },
                "paginatorTop": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "paginatorBottom": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "1px 0 0 0"
                }
              },
              "datatable": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "header": {
                  "background": "{content.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem"
                },
                "headerCell": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "gap": "0.5rem",
                  "padding": "0.75rem 1rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "columnTitle": {
                  "fontWeight": "600"
                },
                "row": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "bodyCell": {
                  "borderColor": "{datatable.border.color}",
                  "padding": "0.75rem 1rem"
                },
                "footerCell": {
                  "background": "{content.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "padding": "0.75rem 1rem"
                },
                "columnFooter": {
                  "fontWeight": "600"
                },
                "footer": {
                  "background": "{content.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem"
                },
                "dropPointColor": "{primary.color}",
                "columnResizerWidth": "0.5rem",
                "resizeIndicator": {
                  "width": "1px",
                  "color": "{primary.color}"
                },
                "sortIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}"
                },
                "loadingIcon": {
                  "size": "2rem"
                },
                "rowToggleButton": {
                  "hoverBackground": "{content.hover.background}",
                  "selectedHoverBackground": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "selectedHoverColor": "{primary.color}",
                  "size": "1.75rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "filter": {
                  "inlineGap": "0.5rem",
                  "overlaySelect": {
                    "background": "{overlay.select.background}",
                    "borderColor": "{overlay.select.border.color}",
                    "borderRadius": "{overlay.select.border.radius}",
                    "color": "{overlay.select.color}",
                    "shadow": "{overlay.select.shadow}"
                  },
                  "overlayPopover": {
                    "background": "{overlay.popover.background}",
                    "borderColor": "{overlay.popover.border.color}",
                    "borderRadius": "{overlay.popover.border.radius}",
                    "color": "{overlay.popover.color}",
                    "shadow": "{overlay.popover.shadow}",
                    "padding": "{overlay.popover.padding}",
                    "gap": "0.5rem"
                  },
                  "rule": {
                    "borderColor": "{content.border.color}"
                  },
                  "constraintList": {
                    "padding": "{list.padding}",
                    "gap": "{list.gap}"
                  },
                  "constraint": {
                    "focusBackground": "{list.option.focus.background}",
                    "selectedBackground": "{list.option.selected.background}",
                    "selectedFocusBackground": "{list.option.selected.focus.background}",
                    "color": "{list.option.color}",
                    "focusColor": "{list.option.focus.color}",
                    "selectedColor": "{list.option.selected.color}",
                    "selectedFocusColor": "{list.option.selected.focus.color}",
                    "separator": {
                      "borderColor": "{content.border.color}"
                    },
                    "padding": "{list.option.padding}",
                    "borderRadius": "{list.option.border.radius}"
                  }
                },
                "paginatorTop": {
                  "borderColor": "{datatable.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "paginatorBottom": {
                  "borderColor": "{datatable.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "borderColor": "{content.border.color}"
                    },
                    "row": {
                      "stripedBackground": "{surface.50}"
                    },
                    "bodyCell": {
                      "selectedBorderColor": "{primary.100}"
                    }
                  },
                  "dark": {
                    "root": {
                      "borderColor": "{surface.800}"
                    },
                    "row": {
                      "stripedBackground": "{surface.950}"
                    },
                    "bodyCell": {
                      "selectedBorderColor": "{primary.900}"
                    }
                  }
                }
              },
              "dialog": {
                "root": {
                  "background": "{overlay.modal.background}",
                  "borderColor": "{overlay.modal.border.color}",
                  "color": "{overlay.modal.color}",
                  "borderRadius": "{overlay.modal.border.radius}",
                  "shadow": "{overlay.modal.shadow}"
                },
                "header": {
                  "padding": "{overlay.modal.padding}",
                  "gap": "0.5rem"
                },
                "title": {
                  "fontSize": "1.25rem",
                  "fontWeight": "600"
                },
                "content": {
                  "padding": "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
                },
                "footer": {
                  "padding": "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",
                  "gap": "0.5rem"
                }
              },
              "divider": {
                "root": {
                  "borderColor": "{content.border.color}"
                },
                "content": {
                  "background": "{content.background}",
                  "color": "{text.color}"
                },
                "horizontal": {
                  "margin": "1rem 0",
                  "padding": "0 1rem",
                  "content": {
                    "padding": "0 0.5rem"
                  }
                },
                "vertical": {
                  "margin": "0 1rem",
                  "padding": "0.5rem 0",
                  "content": {
                    "padding": "0.5rem 0"
                  }
                }
              },
              "dock": {
                "root": {
                  "background": "rgba(255, 255, 255, 0.1)",
                  "borderColor": "rgba(255, 255, 255, 0.2)",
                  "padding": "0.5rem",
                  "borderRadius": "{border.radius.xl}"
                },
                "item": {
                  "borderRadius": "{content.border.radius}",
                  "padding": "0.5rem",
                  "size": "3rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "drawer": {
                "root": {
                  "background": "{overlay.modal.background}",
                  "borderColor": "{overlay.modal.border.color}",
                  "color": "{overlay.modal.color}",
                  "borderRadius": "{overlay.modal.border.radius}",
                  "shadow": "{overlay.modal.shadow}"
                },
                "header": {
                  "padding": "{overlay.modal.padding}"
                },
                "title": {
                  "fontSize": "1.5rem",
                  "fontWeight": "600"
                },
                "content": {
                  "padding": "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
                }
              },
              "editor": {
                "toolbar": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}"
                },
                "toolbarItem": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}",
                  "padding": "{list.padding}"
                },
                "overlayOption": {
                  "focusBackground": "{list.option.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "content": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}"
                }
              },
              "fieldset": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "padding": "0 1.125rem 1.125rem 1.125rem",
                  "transitionDuration": "{transition.duration}"
                },
                "legend": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "borderRadius": "{content.border.radius}",
                  "borderWidth": "1px",
                  "borderColor": "transparent",
                  "padding": "0.5rem 0.75rem",
                  "gap": "0.5rem",
                  "fontWeight": "600",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "toggleIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}"
                },
                "content": {
                  "padding": "0"
                }
              },
              "fileupload": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "transitionDuration": "{transition.duration}"
                },
                "header": {
                  "background": "transparent",
                  "color": "{text.color}",
                  "padding": "1.125rem",
                  "borderWidth": "0",
                  "borderRadius": "0",
                  "gap": "0.5rem"
                },
                "content": {
                  "highlightBorderColor": "{primary.color}",
                  "padding": "0 1.125rem 1.125rem 1.125rem"
                },
                "file": {
                  "padding": "1rem",
                  "gap": "1rem",
                  "borderColor": "{content.border.color}",
                  "info": {
                    "gap": "0.5rem"
                  }
                },
                "progressbar": {
                  "height": "0.25rem"
                },
                "basic": {
                  "gap": "0.5rem"
                }
              },
              "floatlabel": {
                "root": {
                  "color": "{form.field.float.label.color}",
                  "focusColor": "{form.field.float.label.focus.color}",
                  "invalidColor": "{form.field.float.label.invalid.color}",
                  "transitionDuration": "0.2s"
                }
              },
              "galleria": {
                "root": {
                  "borderWidth": "1px",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "transitionDuration": "{transition.duration}"
                },
                "navButton": {
                  "background": "rgba(255, 255, 255, 0.1)",
                  "hoverBackground": "rgba(255, 255, 255, 0.2)",
                  "color": "{surface.100}",
                  "hoverColor": "{surface.0}",
                  "size": "3rem",
                  "gutter": "0.5rem",
                  "prev": {
                    "borderRadius": "50%"
                  },
                  "next": {
                    "borderRadius": "50%"
                  },
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "navIcon": {
                  "size": "1.5rem"
                },
                "thumbnailsContent": {
                  "background": "{content.background}",
                  "padding": "1rem 0.25rem"
                },
                "thumbnailNavButton": {
                  "size": "2rem",
                  "borderRadius": "{content.border.radius}",
                  "gutter": "0.5rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "thumbnailNavButtonIcon": {
                  "size": "1rem"
                },
                "caption": {
                  "background": "rgba(0, 0, 0, 0.5)",
                  "color": "{surface.100}",
                  "padding": "1rem"
                },
                "indicatorList": {
                  "gap": "0.5rem",
                  "padding": "1rem"
                },
                "indicatorButton": {
                  "width": "1rem",
                  "height": "1rem",
                  "activeBackground": "{primary.color}",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "insetIndicatorList": {
                  "background": "rgba(0, 0, 0, 0.5)"
                },
                "insetIndicatorButton": {
                  "background": "rgba(255, 255, 255, 0.4)",
                  "hoverBackground": "rgba(255, 255, 255, 0.6)",
                  "activeBackground": "rgba(255, 255, 255, 0.9)"
                },
                "mask": {
                  "background": "{mask.background}",
                  "color": "{mask.color}"
                },
                "closeButton": {
                  "size": "3rem",
                  "gutter": "0.5rem",
                  "background": "rgba(255, 255, 255, 0.1)",
                  "hoverBackground": "rgba(255, 255, 255, 0.2)",
                  "color": "{surface.50}",
                  "hoverColor": "{surface.0}",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "closeButtonIcon": {
                  "size": "1.5rem"
                },
                "colorScheme": {
                  "light": {
                    "thumbnailNavButton": {
                      "hoverBackground": "{surface.100}",
                      "color": "{surface.600}",
                      "hoverColor": "{surface.700}"
                    },
                    "indicatorButton": {
                      "background": "{surface.200}",
                      "hoverBackground": "{surface.300}"
                    }
                  },
                  "dark": {
                    "thumbnailNavButton": {
                      "hoverBackground": "{surface.700}",
                      "color": "{surface.400}",
                      "hoverColor": "{surface.0}"
                    },
                    "indicatorButton": {
                      "background": "{surface.700}",
                      "hoverBackground": "{surface.600}"
                    }
                  }
                }
              },
              "iconfield": {
                "icon": {
                  "color": "{form.field.icon.color}"
                }
              },
              "image": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "preview": {
                  "icon": {
                    "size": "1.5rem"
                  },
                  "mask": {
                    "background": "{mask.background}",
                    "color": "{mask.color}"
                  }
                },
                "toolbar": {
                  "position": {
                    "left": "auto",
                    "right": "1rem",
                    "top": "1rem",
                    "bottom": "auto"
                  },
                  "blur": "8px",
                  "background": "rgba(255,255,255,0.1)",
                  "borderColor": "rgba(255,255,255,0.2)",
                  "borderWidth": "1px",
                  "borderRadius": "30px",
                  "padding": ".5rem",
                  "gap": "0.5rem"
                },
                "action": {
                  "hoverBackground": "rgba(255,255,255,0.1)",
                  "color": "{surface.50}",
                  "hoverColor": "{surface.0}",
                  "size": "3rem",
                  "iconSize": "1.5rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "inlinemessage": {
                "root": {
                  "padding": "{form.field.padding.y} {form.field.padding.x}",
                  "borderRadius": "{content.border.radius}",
                  "gap": "0.5rem"
                },
                "text": {
                  "fontWeight": "500"
                },
                "icon": {
                  "size": "1rem"
                },
                "colorScheme": {
                  "light": {
                    "info": {
                      "background": "color-mix(in srgb, {blue.50}, transparent 5%)",
                      "borderColor": "{blue.200}",
                      "color": "{blue.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.50}, transparent 5%)",
                      "borderColor": "{green.200}",
                      "color": "{green.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
                    },
                    "warn": {
                      "background": "color-mix(in srgb,{yellow.50}, transparent 5%)",
                      "borderColor": "{yellow.200}",
                      "color": "{yellow.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.50}, transparent 5%)",
                      "borderColor": "{red.200}",
                      "color": "{red.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "borderColor": "{surface.200}",
                      "color": "{surface.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
                    },
                    "contrast": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.950}",
                      "color": "{surface.50}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
                    }
                  },
                  "dark": {
                    "info": {
                      "background": "color-mix(in srgb, {blue.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {blue.700}, transparent 64%)",
                      "color": "{blue.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {green.700}, transparent 64%)",
                      "color": "{green.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
                    },
                    "warn": {
                      "background": "color-mix(in srgb, {yellow.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {yellow.700}, transparent 64%)",
                      "color": "{yellow.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {red.700}, transparent 64%)",
                      "color": "{red.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.700}",
                      "color": "{surface.300}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.100}",
                      "color": "{surface.950}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
                    }
                  }
                }
              },
              "inplace": {
                "root": {
                  "padding": "{form.field.padding.y} {form.field.padding.x}",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{transition.duration}"
                },
                "display": {
                  "hoverBackground": "{content.hover.background}",
                  "hoverColor": "{content.hover.color}"
                }
              },
              "inputchips": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                },
                "colorScheme": {
                  "light": {
                    "chip": {
                      "focusBackground": "{surface.200}",
                      "color": "{surface.800}"
                    }
                  },
                  "dark": {
                    "chip": {
                      "focusBackground": "{surface.700}",
                      "color": "{surface.0}"
                    }
                  }
                }
              },
              "inputgroup": {
                "addon": {
                  "background": "{form.field.background}",
                  "borderColor": "{form.field.border.color}",
                  "color": "{form.field.icon.color}",
                  "borderRadius": "{form.field.border.radius}"
                }
              },
              "inputnumber": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "button": {
                  "width": "2.5rem",
                  "borderRadius": "{form.field.border.radius}",
                  "verticalPadding": "{form.field.padding.y}"
                },
                "colorScheme": {
                  "light": {
                    "button": {
                      "background": "transparent",
                      "hoverBackground": "{surface.100}",
                      "activeBackground": "{surface.200}",
                      "borderColor": "{form.field.border.color}",
                      "hoverBorderColor": "{form.field.border.color}",
                      "activeBorderColor": "{form.field.border.color}",
                      "color": "{surface.400}",
                      "hoverColor": "{surface.500}",
                      "activeColor": "{surface.600}"
                    }
                  },
                  "dark": {
                    "button": {
                      "background": "transparent",
                      "hoverBackground": "{surface.800}",
                      "activeBackground": "{surface.700}",
                      "borderColor": "{form.field.border.color}",
                      "hoverBorderColor": "{form.field.border.color}",
                      "activeBorderColor": "{form.field.border.color}",
                      "color": "{surface.400}",
                      "hoverColor": "{surface.300}",
                      "activeColor": "{surface.200}"
                    }
                  }
                }
              },
              "inputtext": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "0.875rem",
                    "paddingX": "0.625rem",
                    "paddingY": "0.375rem"
                  },
                  "lg": {
                    "fontSize": "1.125rem",
                    "paddingX": "0.875rem",
                    "paddingY": "0.625rem"
                  }
                }
              },
              "knob": {
                "root": {
                  "transitionDuration": "{transition.duration}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "value": {
                  "background": "{primary.color}"
                },
                "range": {
                  "background": "{content.border.color}"
                },
                "text": {
                  "color": "{text.muted.color}"
                }
              },
              "listbox": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "shadow": "{form.field.shadow}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "header": {
                    "padding": "{list.header.padding}"
                  }
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "padding": "{list.option.group.padding}"
                },
                "checkmark": {
                  "color": "{list.option.color}",
                  "gutterStart": "-0.375rem",
                  "gutterEnd": "0.375rem"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                },
                "colorScheme": {
                  "light": {
                    "option": {
                      "stripedBackground": "{surface.50}"
                    }
                  },
                  "dark": {
                    "option": {
                      "stripedBackground": "{surface.900}"
                    }
                  }
                }
              },
              "megamenu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "gap": "0.5rem",
                  "verticalOrientation": {
                    "padding": "{navigation.list.padding}",
                    "gap": "0"
                  },
                  "horizontalOrientation": {
                    "padding": "0.5rem 0.75rem"
                  },
                  "transitionDuration": "{transition.duration}"
                },
                "baseItem": {
                  "borderRadius": "{content.border.radius}",
                  "padding": "{navigation.item.padding}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}"
                  }
                },
                "overlay": {
                  "padding": "0",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "shadow": "{overlay.navigation.shadow}",
                  "gap": "0.5rem"
                },
                "submenu": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "submenuLabel": {
                  "padding": "{navigation.submenu.label.padding}",
                  "fontWeight": "{navigation.submenu.label.font.weight}",
                  "background": "{navigation.submenu.label.background.}",
                  "color": "{navigation.submenu.label.color}"
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}",
                  "activeColor": "{navigation.submenu.icon.active.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                },
                "mobileButton": {
                  "borderRadius": "50%",
                  "size": "1.75rem",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.muted.hover.color}",
                  "hoverBackground": "{content.hover.background}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "menu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "transitionDuration": "{transition.duration}"
                },
                "list": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}"
                  }
                },
                "submenuLabel": {
                  "padding": "{navigation.submenu.label.padding}",
                  "fontWeight": "{navigation.submenu.label.font.weight}",
                  "background": "{navigation.submenu.label.background}",
                  "color": "{navigation.submenu.label.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                }
              },
              "menubar": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "gap": "0.5rem",
                  "padding": "0.5rem 0.75rem",
                  "transitionDuration": "{transition.duration}"
                },
                "baseItem": {
                  "borderRadius": "{content.border.radius}",
                  "padding": "{navigation.item.padding}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}"
                  }
                },
                "submenu": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "mobileIndent": "1rem"
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}",
                  "activeColor": "{navigation.submenu.icon.active.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                },
                "mobileButton": {
                  "borderRadius": "50%",
                  "size": "1.75rem",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.muted.hover.color}",
                  "hoverBackground": "{content.hover.background}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "message": {
                "root": {
                  "borderRadius": "{content.border.radius}",
                  "borderWidth": "1px",
                  "transitionDuration": "{transition.duration}"
                },
                "content": {
                  "padding": "0.5rem 0.75rem",
                  "gap": "0.5rem"
                },
                "text": {
                  "fontSize": "1rem",
                  "fontWeight": "500"
                },
                "icon": {
                  "size": "1.125rem"
                },
                "closeButton": {
                  "width": "1.75rem",
                  "height": "1.75rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "offset": "{focus.ring.offset}"
                  }
                },
                "closeIcon": {
                  "size": "1rem"
                },
                "colorScheme": {
                  "light": {
                    "info": {
                      "background": "color-mix(in srgb, {blue.50}, transparent 5%)",
                      "borderColor": "{blue.200}",
                      "color": "{blue.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{blue.100}",
                        "focusRing": {
                          "color": "{blue.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.50}, transparent 5%)",
                      "borderColor": "{green.200}",
                      "color": "{green.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{green.100}",
                        "focusRing": {
                          "color": "{green.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "warn": {
                      "background": "color-mix(in srgb,{yellow.50}, transparent 5%)",
                      "borderColor": "{yellow.200}",
                      "color": "{yellow.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{yellow.100}",
                        "focusRing": {
                          "color": "{yellow.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.50}, transparent 5%)",
                      "borderColor": "{red.200}",
                      "color": "{red.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{red.100}",
                        "focusRing": {
                          "color": "{red.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "borderColor": "{surface.200}",
                      "color": "{surface.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.200}",
                        "focusRing": {
                          "color": "{surface.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "contrast": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.950}",
                      "color": "{surface.50}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.800}",
                        "focusRing": {
                          "color": "{surface.50}",
                          "shadow": "none"
                        }
                      }
                    }
                  },
                  "dark": {
                    "info": {
                      "background": "color-mix(in srgb, {blue.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {blue.700}, transparent 64%)",
                      "color": "{blue.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{blue.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {green.700}, transparent 64%)",
                      "color": "{green.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{green.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "warn": {
                      "background": "color-mix(in srgb, {yellow.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {yellow.700}, transparent 64%)",
                      "color": "{yellow.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{yellow.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {red.700}, transparent 64%)",
                      "color": "{red.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{red.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.700}",
                      "color": "{surface.300}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.700}",
                        "focusRing": {
                          "color": "{surface.300}",
                          "shadow": "none"
                        }
                      }
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.100}",
                      "color": "{surface.950}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.100}",
                        "focusRing": {
                          "color": "{surface.950}",
                          "shadow": "none"
                        }
                      }
                    }
                  }
                }
              },
              "metergroup": {
                "root": {
                  "borderRadius": "{content.border.radius}",
                  "gap": "1rem"
                },
                "meters": {
                  "background": "{content.border.color}",
                  "size": "0.5rem"
                },
                "label": {
                  "gap": "0.5rem"
                },
                "labelMarker": {
                  "size": "0.5rem"
                },
                "labelIcon": {
                  "size": "1rem"
                },
                "labelList": {
                  "verticalGap": "0.5rem",
                  "horizontalGap": "1rem"
                }
              },
              "multiselect": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "dropdown": {
                  "width": "2.5rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "header": {
                    "padding": "{list.header.padding}"
                  }
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}",
                  "gap": "0.5rem"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "padding": "{list.option.group.padding}"
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                }
              },
              "orderlist": {
                "root": {
                  "gap": "1.125rem"
                },
                "controls": {
                  "gap": "0.5rem"
                }
              },
              "organizationchart": {
                "root": {
                  "gutter": "0.75rem",
                  "transitionDuration": "{transition.duration}"
                },
                "node": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "selectedColor": "{highlight.color}",
                  "hoverColor": "{content.hover.color}",
                  "padding": "0.75rem 1rem",
                  "toggleablePadding": "0.75rem 1rem 1.25rem 1rem",
                  "borderRadius": "{content.border.radius}"
                },
                "nodeToggleButton": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "size": "1.5rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "connector": {
                  "color": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "height": "24px"
                }
              },
              "overlaybadge": {
                "root": {
                  "outline": {
                    "width": "2px",
                    "color": "{content.background}"
                  }
                }
              },
              "popover": {
                "root": {
                  "background": "{overlay.popover.background}",
                  "borderColor": "{overlay.popover.border.color}",
                  "color": "{overlay.popover.color}",
                  "borderRadius": "{overlay.popover.border.radius}",
                  "shadow": "{overlay.popover.shadow}",
                  "gutter": "10px",
                  "arrowOffset": "1.25rem"
                },
                "content": {
                  "padding": "{overlay.popover.padding}"
                }
              },
              "paginator": {
                "root": {
                  "padding": "0.5rem 1rem",
                  "gap": "0.25rem",
                  "borderRadius": "{content.border.radius}",
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "transitionDuration": "{transition.duration}"
                },
                "navButton": {
                  "background": "transparent",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "selectedColor": "{highlight.color}",
                  "width": "2.5rem",
                  "height": "2.5rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "currentPageReport": {
                  "color": "{text.muted.color}"
                },
                "jumpToPageInput": {
                  "maxWidth": "2.5rem"
                }
              },
              "password": {
                "meter": {
                  "background": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "height": ".75rem"
                },
                "icon": {
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.popover.background}",
                  "borderColor": "{overlay.popover.border.color}",
                  "borderRadius": "{overlay.popover.border.radius}",
                  "color": "{overlay.popover.color}",
                  "padding": "{overlay.popover.padding}",
                  "shadow": "{overlay.popover.shadow}"
                },
                "content": {
                  "gap": "0.5rem"
                },
                "colorScheme": {
                  "light": {
                    "strength": {
                      "weakBackground": "{red.500}",
                      "mediumBackground": "{amber.500}",
                      "strongBackground": "{green.500}"
                    }
                  },
                  "dark": {
                    "strength": {
                      "weakBackground": "{red.400}",
                      "mediumBackground": "{amber.400}",
                      "strongBackground": "{green.400}"
                    }
                  }
                }
              },
              "panel": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}"
                },
                "header": {
                  "background": "transparent",
                  "color": "{text.color}",
                  "padding": "1.125rem",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0",
                  "borderRadius": "0"
                },
                "toggleableHeader": {
                  "padding": "0.375rem 1.125rem"
                },
                "title": {
                  "fontWeight": "600"
                },
                "content": {
                  "padding": "0 1.125rem 1.125rem 1.125rem"
                },
                "footer": {
                  "padding": "0 1.125rem 1.125rem 1.125rem"
                }
              },
              "panelmenu": {
                "root": {
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                },
                "panel": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "1px",
                  "color": "{content.color}",
                  "padding": "0.25rem 0.25rem",
                  "borderRadius": "{content.border.radius}",
                  "first": {
                    "borderWidth": "1px",
                    "topBorderRadius": "{content.border.radius}"
                  },
                  "last": {
                    "borderWidth": "1px",
                    "bottomBorderRadius": "{content.border.radius}"
                  }
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "gap": "0.5rem",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{content.border.radius}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}"
                  }
                },
                "submenu": {
                  "indent": "1rem"
                },
                "submenuIcon": {
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}"
                }
              },
              "picklist": {
                "root": {
                  "gap": "1.125rem"
                },
                "controls": {
                  "gap": "0.5rem"
                }
              },
              "progressbar": {
                "root": {
                  "background": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "height": "1.25rem"
                },
                "value": {
                  "background": "{primary.color}"
                },
                "label": {
                  "color": "{primary.contrast.color}",
                  "fontSize": "0.75rem",
                  "fontWeight": "600"
                }
              },
              "progressspinner": {
                "colorScheme": {
                  "light": {
                    "root": {
                      "color.1": "{red.500}",
                      "color.2": "{blue.500}",
                      "color.3": "{green.500}",
                      "color.4": "{yellow.500}"
                    }
                  },
                  "dark": {
                    "root": {
                      "color.1": "{red.400}",
                      "color.2": "{blue.400}",
                      "color.3": "{green.400}",
                      "color.4": "{yellow.400}"
                    }
                  }
                }
              },
              "radiobutton": {
                "root": {
                  "width": "1.25rem",
                  "height": "1.25rem",
                  "background": "{form.field.background}",
                  "checkedBackground": "{primary.color}",
                  "checkedHoverBackground": "{primary.hover.color}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.border.color}",
                  "checkedBorderColor": "{primary.color}",
                  "checkedHoverBorderColor": "{primary.hover.color}",
                  "checkedFocusBorderColor": "{primary.color}",
                  "checkedDisabledBorderColor": "{form.field.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "shadow": "{form.field.shadow}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "icon": {
                  "size": "0.75rem",
                  "checkedColor": "{primary.contrast.color}",
                  "checkedHoverColor": "{primary.contrast.color}",
                  "disabledColor": "{form.field.disabled.color}"
                }
              },
              "rating": {
                "root": {
                  "gap": "0.25rem",
                  "transitionDuration": "{transition.duration}"
                },
                "icon": {
                  "size": "1rem",
                  "color": "{text.muted.color}",
                  "hoverColor": "{primary.color}",
                  "activeColor": "{primary.color}"
                }
              },
              "scrollpanel": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "bar": {
                  "size": "9px",
                  "borderRadius": "{border.radius.sm}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "colorScheme": {
                  "light": {
                    "bar": {
                      "background": "{surface.100}"
                    }
                  },
                  "dark": {
                    "bar": {
                      "background": "{surface.800}"
                    }
                  }
                }
              },
              "select": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "dropdown": {
                  "width": "2.5rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "header": {
                    "padding": "{list.header.padding}"
                  }
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "padding": "{list.option.group.padding}"
                },
                "clearIcon": {
                  "color": "{form.field.icon.color}"
                },
                "checkmark": {
                  "color": "{list.option.color}",
                  "gutterStart": "-0.375rem",
                  "gutterEnd": "0.375rem"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                }
              },
              "selectbutton": {
                "root": {
                  "borderRadius": "{form.field.border.radius}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "invalidBorderColor": "{form.field.invalid.border.color}"
                    }
                  },
                  "dark": {
                    "root": {
                      "invalidBorderColor": "{form.field.invalid.border.color}"
                    }
                  }
                }
              },
              "skeleton": {
                "root": {
                  "borderRadius": "{content.border.radius}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.200}",
                      "animationBackground": "rgba(255,255,255,0.4)"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "rgba(255, 255, 255, 0.06)",
                      "animationBackground": "rgba(255, 255, 255, 0.04)"
                    }
                  }
                }
              },
              "slider": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "track": {
                  "background": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "size": "3px"
                },
                "range": {
                  "background": "{primary.color}"
                },
                "handle": {
                  "width": "20px",
                  "height": "20px",
                  "borderRadius": "50%",
                  "background": "{content.border.color}",
                  "hoverBackground": "{content.border.color}",
                  "content": {
                    "borderRadius": "50%",
                    "hoverBackground": "{content.background}",
                    "width": "16px",
                    "height": "16px",
                    "shadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"
                  },
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "colorScheme": {
                  "light": {
                    "handle": {
                      "contentBackground": "{surface.0}"
                    }
                  },
                  "dark": {
                    "handle": {
                      "contentBackground": "{surface.950}"
                    }
                  }
                }
              },
              "speeddial": {
                "root": {
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                }
              },
              "splitter": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "transitionDuration": "{transition.duration}"
                },
                "gutter": {
                  "background": "{content.border.color}"
                },
                "handle": {
                  "size": "24px",
                  "background": "transparent",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "splitbutton": {
                "root": {
                  "borderRadius": "{form.field.border.radius}",
                  "roundedBorderRadius": "2rem",
                  "raisedShadow": "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                }
              },
              "stepper": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "separator": {
                  "background": "{content.border.color}",
                  "activeBackground": "{primary.color}",
                  "margin": "0 0 0 1.625rem",
                  "size": "2px"
                },
                "step": {
                  "padding": "0.5rem",
                  "gap": "1rem"
                },
                "stepHeader": {
                  "padding": "0",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "gap": "0.5rem"
                },
                "stepTitle": {
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "fontWeight": "500"
                },
                "stepNumber": {
                  "background": "{content.background}",
                  "activeBackground": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "activeBorderColor": "{content.border.color}",
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "size": "2rem",
                  "fontSize": "1.143rem",
                  "fontWeight": "500",
                  "borderRadius": "50%",
                  "shadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
                },
                "steppanels": {
                  "padding": "0.875rem 0.5rem 1.125rem 0.5rem"
                },
                "steppanel": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "padding": "0 0 0 1rem"
                }
              },
              "steps": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "separator": {
                  "background": "{content.border.color}"
                },
                "itemLink": {
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "gap": "0.5rem"
                },
                "itemLabel": {
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "fontWeight": "500"
                },
                "itemNumber": {
                  "background": "{content.background}",
                  "activeBackground": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "activeBorderColor": "{content.border.color}",
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "size": "2rem",
                  "fontSize": "1.143rem",
                  "fontWeight": "500",
                  "borderRadius": "50%",
                  "shadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
                }
              },
              "tabmenu": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "tablist": {
                  "borderWidth": "0 0 1px 0",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}"
                },
                "item": {
                  "background": "transparent",
                  "hoverBackground": "transparent",
                  "activeBackground": "transparent",
                  "borderWidth": "0 0 1px 0",
                  "borderColor": "{content.border.color}",
                  "hoverBorderColor": "{content.border.color}",
                  "activeBorderColor": "{primary.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}",
                  "padding": "1rem 1.125rem",
                  "fontWeight": "600",
                  "margin": "0 0 -1px 0",
                  "gap": "0.5rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "itemIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}"
                },
                "activeBar": {
                  "height": "1px",
                  "bottom": "-1px",
                  "background": "{primary.color}"
                }
              },
              "tabs": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "tablist": {
                  "borderWidth": "0 0 1px 0",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}"
                },
                "tab": {
                  "background": "transparent",
                  "hoverBackground": "transparent",
                  "activeBackground": "transparent",
                  "borderWidth": "0 0 1px 0",
                  "borderColor": "{content.border.color}",
                  "hoverBorderColor": "{content.border.color}",
                  "activeBorderColor": "{primary.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}",
                  "padding": "1rem 1.125rem",
                  "fontWeight": "600",
                  "margin": "0 0 -1px 0",
                  "gap": "0.5rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "tabpanel": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "padding": "0.875rem 1.125rem 1.125rem 1.125rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "inset {focus.ring.shadow}"
                  }
                },
                "navButton": {
                  "background": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "width": "2.5rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "activeBar": {
                  "height": "1px",
                  "bottom": "-1px",
                  "background": "{primary.color}"
                },
                "colorScheme": {
                  "light": {
                    "navButton": {
                      "shadow": "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
                    }
                  },
                  "dark": {
                    "navButton": {
                      "shadow": "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
                    }
                  }
                }
              },
              "tabview": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "tabList": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}"
                },
                "tab": {
                  "borderColor": "{content.border.color}",
                  "activeBorderColor": "{primary.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}"
                },
                "tabPanel": {
                  "background": "{content.background}",
                  "color": "{content.color}"
                },
                "navButton": {
                  "background": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}"
                },
                "colorScheme": {
                  "light": {
                    "navButton": {
                      "shadow": "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
                    }
                  },
                  "dark": {
                    "navButton": {
                      "shadow": "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
                    }
                  }
                }
              },
              "textarea": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                }
              },
              "tieredmenu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "transitionDuration": "{transition.duration}"
                },
                "list": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}"
                  }
                },
                "submenuLabel": {
                  "padding": "{navigation.submenu.label.padding}",
                  "fontWeight": "{navigation.submenu.label.font.weight}",
                  "background": "{navigation.submenu.label.background.}",
                  "color": "{navigation.submenu.label.color}"
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}",
                  "activeColor": "{navigation.submenu.icon.active.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                }
              },
              "tag": {
                "root": {
                  "fontSize": "0.875rem",
                  "fontWeight": "700",
                  "padding": "0.25rem 0.5rem",
                  "gap": "0.25rem",
                  "borderRadius": "{content.border.radius}",
                  "roundedBorderRadius": "{border.radius.xl}"
                },
                "icon": {
                  "size": "0.75rem"
                },
                "colorScheme": {
                  "light": {
                    "primary": {
                      "background": "{primary.100}",
                      "color": "{primary.700}"
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "color": "{surface.600}"
                    },
                    "success": {
                      "background": "{green.100}",
                      "color": "{green.700}"
                    },
                    "info": {
                      "background": "{sky.100}",
                      "color": "{sky.700}"
                    },
                    "warn": {
                      "background": "{orange.100}",
                      "color": "{orange.700}"
                    },
                    "danger": {
                      "background": "{red.100}",
                      "color": "{red.700}"
                    },
                    "contrast": {
                      "background": "{surface.950}",
                      "color": "{surface.0}"
                    }
                  },
                  "dark": {
                    "primary": {
                      "background": "color-mix(in srgb, {primary.500}, transparent 84%)",
                      "color": "{primary.300}"
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "color": "{surface.300}"
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.500}, transparent 84%)",
                      "color": "{green.300}"
                    },
                    "info": {
                      "background": "color-mix(in srgb, {sky.500}, transparent 84%)",
                      "color": "{sky.300}"
                    },
                    "warn": {
                      "background": "color-mix(in srgb, {orange.500}, transparent 84%)",
                      "color": "{orange.300}"
                    },
                    "danger": {
                      "background": "color-mix(in srgb, {red.500}, transparent 84%)",
                      "color": "{red.300}"
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "color": "{surface.950}"
                    }
                  }
                }
              },
              "terminal": {
                "root": {
                  "background": "{form.field.background}",
                  "borderColor": "{form.field.border.color}",
                  "color": "{form.field.color}",
                  "height": "18rem",
                  "padding": "{form.field.padding.y} {form.field.padding.x}",
                  "borderRadius": "{form.field.border.radius}"
                },
                "prompt": {
                  "gap": "0.25rem"
                },
                "commandResponse": {
                  "margin": "2px 0"
                }
              },
              "timeline": {
                "event": {
                  "minHeight": "5rem"
                },
                "horizontal": {
                  "eventContent": {
                    "padding": "1rem 0"
                  }
                },
                "vertical": {
                  "eventContent": {
                    "padding": "0 1rem"
                  }
                },
                "eventMarker": {
                  "size": "1.125rem",
                  "borderRadius": "50%",
                  "borderWidth": "2px",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "content": {
                    "borderRadius": "50%",
                    "size": "0.375rem",
                    "background": "{primary.color}",
                    "insetShadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
                  }
                },
                "eventConnector": {
                  "color": "{content.border.color}",
                  "size": "2px"
                }
              },
              "togglebutton": {
                "root": {
                  "padding": "0.5rem 1rem",
                  "borderRadius": "{content.border.radius}",
                  "gap": "0.5rem",
                  "fontWeight": "500",
                  "disabledBackground": "{form.field.disabled.background}",
                  "disabledBorderColor": "{form.field.disabled.background}",
                  "disabledColor": "{form.field.disabled.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "icon": {
                  "disabledColor": "{form.field.disabled.color}"
                },
                "content": {
                  "left": "0.25rem",
                  "top": "0.25rem",
                  "checkedShadow": "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.100}",
                      "checkedBackground": "{surface.100}",
                      "hoverBackground": "{surface.100}",
                      "borderColor": "{surface.100}",
                      "color": "{surface.500}",
                      "hoverColor": "{surface.700}",
                      "checkedColor": "{surface.900}",
                      "checkedBorderColor": "{surface.100}"
                    },
                    "content": {
                      "checkedBackground": "{surface.0}"
                    },
                    "icon": {
                      "color": "{surface.500}",
                      "hoverColor": "{surface.700}",
                      "checkedColor": "{surface.900}"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "{surface.950}",
                      "checkedBackground": "{surface.950}",
                      "hoverBackground": "{surface.950}",
                      "borderColor": "{surface.950}",
                      "color": "{surface.400}",
                      "hoverColor": "{surface.300}",
                      "checkedColor": "{surface.0}",
                      "checkedBorderColor": "{surface.950}"
                    },
                    "content": {
                      "checkedBackground": "{surface.800}"
                    },
                    "icon": {
                      "color": "{surface.400}",
                      "hoverColor": "{surface.300}",
                      "checkedColor": "{surface.0}"
                    }
                  }
                }
              },
              "toggleswitch": {
                "root": {
                  "width": "2.5rem",
                  "height": "1.5rem",
                  "borderRadius": "30px",
                  "gap": "0.25rem",
                  "shadow": "{form.field.shadow}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "borderWidth": "1px",
                  "borderColor": "transparent",
                  "hoverBorderColor": "transparent",
                  "checkedBorderColor": "transparent",
                  "checkedHoverBorderColor": "transparent",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "transitionDuration": "{form.field.transition.duration}",
                  "slideDuration": "0.2s",
                  "disabledBackground": "{form.field.disabled.background}"
                },
                "handle": {
                  "borderRadius": "50%",
                  "size": "1rem",
                  "disabledBackground": "{form.field.disabled.color}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.300}",
                      "hoverBackground": "{surface.400}",
                      "checkedBackground": "{primary.color}",
                      "checkedHoverBackground": "{primary.hover.color}"
                    },
                    "handle": {
                      "background": "{surface.0}",
                      "hoverBackground": "{surface.0}",
                      "checkedBackground": "{surface.0}",
                      "checkedHoverBackground": "{surface.0}"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "{surface.700}",
                      "hoverBackground": "{surface.600}",
                      "checkedBackground": "{primary.color}",
                      "checkedHoverBackground": "{primary.hover.color}"
                    },
                    "handle": {
                      "background": "{surface.400}",
                      "hoverBackground": "{surface.300}",
                      "checkedBackground": "{surface.900}",
                      "checkedHoverBackground": "{surface.900}"
                    }
                  }
                }
              },
              "tree": {
                "root": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "padding": "1rem",
                  "gap": "2px",
                  "indent": "1rem",
                  "transitionDuration": "{transition.duration}"
                },
                "node": {
                  "padding": "0.25rem 0.5rem",
                  "borderRadius": "{content.border.radius}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{text.color}",
                  "hoverColor": "{text.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "gap": "0.25rem"
                },
                "nodeIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "selectedColor": "{highlight.color}"
                },
                "nodeToggleButton": {
                  "borderRadius": "50%",
                  "size": "1.75rem",
                  "hoverBackground": "{content.hover.background}",
                  "selectedHoverBackground": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "selectedHoverColor": "{primary.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "loadingIcon": {
                  "size": "2rem"
                }
              },
              "treeselect": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "dropdown": {
                  "width": "2.5rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "tree": {
                  "padding": "{list.padding}"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                }
              },
              "treetable": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "header": {
                  "background": "{content.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem"
                },
                "headerCell": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "gap": "0.5rem",
                  "padding": "0.75rem 1rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "columnTitle": {
                  "fontWeight": "600"
                },
                "row": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "bodyCell": {
                  "borderColor": "{treetable.border.color}",
                  "padding": "0.75rem 1rem",
                  "gap": "0.5rem"
                },
                "footerCell": {
                  "background": "{content.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "padding": "0.75rem 1rem"
                },
                "columnFooter": {
                  "fontWeight": "600"
                },
                "footer": {
                  "background": "{content.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem"
                },
                "columnResizerWidth": "0.5rem",
                "resizeIndicator": {
                  "width": "1px",
                  "color": "{primary.color}"
                },
                "sortIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}"
                },
                "loadingIcon": {
                  "size": "2rem"
                },
                "nodeToggleButton": {
                  "hoverBackground": "{content.hover.background}",
                  "selectedHoverBackground": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "selectedHoverColor": "{primary.color}",
                  "size": "1.75rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "paginatorTop": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "paginatorBottom": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "borderColor": "{content.border.color}"
                    },
                    "bodyCell": {
                      "selectedBorderColor": "{primary.100}"
                    }
                  },
                  "dark": {
                    "root": {
                      "borderColor": "{surface.800}"
                    },
                    "bodyCell": {
                      "selectedBorderColor": "{primary.900}"
                    }
                  }
                }
              },
              "toast": {
                "root": {
                  "width": "25rem",
                  "borderRadius": "{content.border.radius}",
                  "borderWidth": "1px",
                  "transitionDuration": "{transition.duration}"
                },
                "icon": {
                  "size": "1.125rem"
                },
                "content": {
                  "padding": "{overlay.popover.padding}",
                  "gap": "0.5rem"
                },
                "text": {
                  "gap": "0.5rem"
                },
                "summary": {
                  "fontWeight": "500",
                  "fontSize": "1rem"
                },
                "detail": {
                  "fontWeight": "500",
                  "fontSize": "0.875rem"
                },
                "closeButton": {
                  "width": "1.75rem",
                  "height": "1.75rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "offset": "{focus.ring.offset}"
                  }
                },
                "closeIcon": {
                  "size": "1rem"
                },
                "colorScheme": {
                  "light": {
                    "blur": "1.5px",
                    "info": {
                      "background": "color-mix(in srgb, {blue.50}, transparent 5%)",
                      "borderColor": "{blue.200}",
                      "color": "{blue.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{blue.100}",
                        "focusRing": {
                          "color": "{blue.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.50}, transparent 5%)",
                      "borderColor": "{green.200}",
                      "color": "{green.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{green.100}",
                        "focusRing": {
                          "color": "{green.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "warn": {
                      "background": "color-mix(in srgb,{yellow.50}, transparent 5%)",
                      "borderColor": "{yellow.200}",
                      "color": "{yellow.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{yellow.100}",
                        "focusRing": {
                          "color": "{yellow.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.50}, transparent 5%)",
                      "borderColor": "{red.200}",
                      "color": "{red.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{red.100}",
                        "focusRing": {
                          "color": "{red.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "borderColor": "{surface.200}",
                      "color": "{surface.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.200}",
                        "focusRing": {
                          "color": "{surface.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "contrast": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.950}",
                      "color": "{surface.50}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.800}",
                        "focusRing": {
                          "color": "{surface.50}",
                          "shadow": "none"
                        }
                      }
                    }
                  },
                  "dark": {
                    "blur": "10px",
                    "info": {
                      "background": "color-mix(in srgb, {blue.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {blue.700}, transparent 64%)",
                      "color": "{blue.500}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{blue.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {green.700}, transparent 64%)",
                      "color": "{green.500}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{green.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "warn": {
                      "background": "color-mix(in srgb, {yellow.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {yellow.700}, transparent 64%)",
                      "color": "{yellow.500}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{yellow.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {red.700}, transparent 64%)",
                      "color": "{red.500}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{red.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.700}",
                      "color": "{surface.300}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.700}",
                        "focusRing": {
                          "color": "{surface.300}",
                          "shadow": "none"
                        }
                      }
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.100}",
                      "color": "{surface.950}",
                      "detailColor": "{surface.950}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.100}",
                        "focusRing": {
                          "color": "{surface.950}",
                          "shadow": "none"
                        }
                      }
                    }
                  }
                }
              },
              "toolbar": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "gap": "0.5rem",
                  "padding": "0.75rem"
                }
              },
              "virtualscroller": {
                "loader": {
                  "mask": {
                    "background": "{content.background}",
                    "color": "{text.muted.color}"
                  },
                  "icon": {
                    "size": "2rem"
                  }
                }
              }
            },
            "directives": {
              "tooltip": {
                "root": {
                  "maxWidth": "12.5rem",
                  "gutter": "0.25rem",
                  "shadow": "{overlay.popover.shadow}",
                  "padding": "0.5rem 0.75rem",
                  "borderRadius": "{overlay.popover.border.radius}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.700}",
                      "color": "{surface.0}"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "{surface.700}",
                      "color": "{surface.0}"
                    }
                  }
                }
              },
              "ripple": {
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "rgba(0,0,0,0.1)"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "rgba(255,255,255,0.3)"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "components": [
        {
          "name": "AutoComplete",
          "as": "AutoComplete",
          "from": "primevue/autocomplete",
          "export": "default",
          "filePath": "primevue/autocomplete",
          "global": true
        },
        {
          "name": "Calendar",
          "as": "Calendar",
          "from": "primevue/calendar",
          "export": "default",
          "filePath": "primevue/calendar",
          "global": true
        },
        {
          "name": "CascadeSelect",
          "as": "CascadeSelect",
          "from": "primevue/cascadeselect",
          "export": "default",
          "filePath": "primevue/cascadeselect",
          "global": true
        },
        {
          "name": "Checkbox",
          "as": "Checkbox",
          "from": "primevue/checkbox",
          "export": "default",
          "filePath": "primevue/checkbox",
          "global": true
        },
        {
          "name": "Chips",
          "as": "Chips",
          "from": "primevue/chips",
          "export": "default",
          "filePath": "primevue/chips",
          "global": true
        },
        {
          "name": "ColorPicker",
          "as": "ColorPicker",
          "from": "primevue/colorpicker",
          "export": "default",
          "filePath": "primevue/colorpicker",
          "global": true
        },
        {
          "name": "DatePicker",
          "as": "DatePicker",
          "from": "primevue/datepicker",
          "export": "default",
          "filePath": "primevue/datepicker",
          "global": true
        },
        {
          "name": "Dropdown",
          "as": "Dropdown",
          "from": "primevue/dropdown",
          "export": "default",
          "filePath": "primevue/dropdown",
          "global": true
        },
        {
          "name": "FloatLabel",
          "as": "FloatLabel",
          "from": "primevue/floatlabel",
          "export": "default",
          "filePath": "primevue/floatlabel",
          "global": true
        },
        {
          "name": "IconField",
          "as": "IconField",
          "from": "primevue/iconfield",
          "export": "default",
          "filePath": "primevue/iconfield",
          "global": true
        },
        {
          "name": "InputChips",
          "as": "InputChips",
          "from": "primevue/inputchips",
          "export": "default",
          "filePath": "primevue/inputchips",
          "global": true
        },
        {
          "name": "InputGroup",
          "as": "InputGroup",
          "from": "primevue/inputgroup",
          "export": "default",
          "filePath": "primevue/inputgroup",
          "global": true
        },
        {
          "name": "InputGroupAddon",
          "as": "InputGroupAddon",
          "from": "primevue/inputgroupaddon",
          "export": "default",
          "filePath": "primevue/inputgroupaddon",
          "global": true
        },
        {
          "name": "InputIcon",
          "as": "InputIcon",
          "from": "primevue/inputicon",
          "export": "default",
          "filePath": "primevue/inputicon",
          "global": true
        },
        {
          "name": "InputMask",
          "as": "InputMask",
          "from": "primevue/inputmask",
          "export": "default",
          "filePath": "primevue/inputmask",
          "global": true
        },
        {
          "name": "InputNumber",
          "as": "InputNumber",
          "from": "primevue/inputnumber",
          "export": "default",
          "filePath": "primevue/inputnumber",
          "global": true
        },
        {
          "name": "InputOtp",
          "as": "InputOtp",
          "from": "primevue/inputotp",
          "export": "default",
          "filePath": "primevue/inputotp",
          "global": true
        },
        {
          "name": "InputSwitch",
          "as": "InputSwitch",
          "from": "primevue/inputswitch",
          "export": "default",
          "filePath": "primevue/inputswitch",
          "global": true
        },
        {
          "name": "InputText",
          "as": "InputText",
          "from": "primevue/inputtext",
          "export": "default",
          "filePath": "primevue/inputtext",
          "global": true
        },
        {
          "name": "Knob",
          "as": "Knob",
          "from": "primevue/knob",
          "export": "default",
          "filePath": "primevue/knob",
          "global": true
        },
        {
          "name": "Listbox",
          "as": "Listbox",
          "from": "primevue/listbox",
          "export": "default",
          "filePath": "primevue/listbox",
          "global": true
        },
        {
          "name": "MultiSelect",
          "as": "MultiSelect",
          "from": "primevue/multiselect",
          "export": "default",
          "filePath": "primevue/multiselect",
          "global": true
        },
        {
          "name": "Password",
          "as": "Password",
          "from": "primevue/password",
          "export": "default",
          "filePath": "primevue/password",
          "global": true
        },
        {
          "name": "RadioButton",
          "as": "RadioButton",
          "from": "primevue/radiobutton",
          "export": "default",
          "filePath": "primevue/radiobutton",
          "global": true
        },
        {
          "name": "Rating",
          "as": "Rating",
          "from": "primevue/rating",
          "export": "default",
          "filePath": "primevue/rating",
          "global": true
        },
        {
          "name": "Select",
          "as": "Select",
          "from": "primevue/select",
          "export": "default",
          "filePath": "primevue/select",
          "global": true
        },
        {
          "name": "SelectButton",
          "as": "SelectButton",
          "from": "primevue/selectbutton",
          "export": "default",
          "filePath": "primevue/selectbutton",
          "global": true
        },
        {
          "name": "Slider",
          "as": "Slider",
          "from": "primevue/slider",
          "export": "default",
          "filePath": "primevue/slider",
          "global": true
        },
        {
          "name": "Textarea",
          "as": "Textarea",
          "from": "primevue/textarea",
          "export": "default",
          "filePath": "primevue/textarea",
          "global": true
        },
        {
          "name": "ToggleButton",
          "as": "ToggleButton",
          "from": "primevue/togglebutton",
          "export": "default",
          "filePath": "primevue/togglebutton",
          "global": true
        },
        {
          "name": "ToggleSwitch",
          "as": "ToggleSwitch",
          "from": "primevue/toggleswitch",
          "export": "default",
          "filePath": "primevue/toggleswitch",
          "global": true
        },
        {
          "name": "TreeSelect",
          "as": "TreeSelect",
          "from": "primevue/treeselect",
          "export": "default",
          "filePath": "primevue/treeselect",
          "global": true
        },
        {
          "name": "Button",
          "as": "Button",
          "from": "primevue/button",
          "export": "default",
          "filePath": "primevue/button",
          "global": true
        },
        {
          "name": "ButtonGroup",
          "as": "ButtonGroup",
          "from": "primevue/buttongroup",
          "export": "default",
          "filePath": "primevue/buttongroup",
          "global": true
        },
        {
          "name": "SpeedDial",
          "as": "SpeedDial",
          "from": "primevue/speeddial",
          "export": "default",
          "filePath": "primevue/speeddial",
          "global": true
        },
        {
          "name": "SplitButton",
          "as": "SplitButton",
          "from": "primevue/splitbutton",
          "export": "default",
          "filePath": "primevue/splitbutton",
          "global": true
        },
        {
          "name": "Column",
          "as": "Column",
          "from": "primevue/column",
          "export": "default",
          "filePath": "primevue/column",
          "global": true
        },
        {
          "name": "Row",
          "as": "Row",
          "from": "primevue/row",
          "export": "default",
          "filePath": "primevue/row",
          "global": true
        },
        {
          "name": "ColumnGroup",
          "as": "ColumnGroup",
          "from": "primevue/columngroup",
          "export": "default",
          "filePath": "primevue/columngroup",
          "global": true
        },
        {
          "name": "DataTable",
          "as": "DataTable",
          "from": "primevue/datatable",
          "export": "default",
          "filePath": "primevue/datatable",
          "global": true
        },
        {
          "name": "DataView",
          "as": "DataView",
          "from": "primevue/dataview",
          "export": "default",
          "filePath": "primevue/dataview",
          "global": true
        },
        {
          "name": "OrderList",
          "as": "OrderList",
          "from": "primevue/orderlist",
          "export": "default",
          "filePath": "primevue/orderlist",
          "global": true
        },
        {
          "name": "OrganizationChart",
          "as": "OrganizationChart",
          "from": "primevue/organizationchart",
          "export": "default",
          "filePath": "primevue/organizationchart",
          "global": true
        },
        {
          "name": "Paginator",
          "as": "Paginator",
          "from": "primevue/paginator",
          "export": "default",
          "filePath": "primevue/paginator",
          "global": true
        },
        {
          "name": "PickList",
          "as": "PickList",
          "from": "primevue/picklist",
          "export": "default",
          "filePath": "primevue/picklist",
          "global": true
        },
        {
          "name": "Tree",
          "as": "Tree",
          "from": "primevue/tree",
          "export": "default",
          "filePath": "primevue/tree",
          "global": true
        },
        {
          "name": "TreeTable",
          "as": "TreeTable",
          "from": "primevue/treetable",
          "export": "default",
          "filePath": "primevue/treetable",
          "global": true
        },
        {
          "name": "Timeline",
          "as": "Timeline",
          "from": "primevue/timeline",
          "export": "default",
          "filePath": "primevue/timeline",
          "global": true
        },
        {
          "name": "VirtualScroller",
          "as": "VirtualScroller",
          "from": "primevue/virtualscroller",
          "export": "default",
          "filePath": "primevue/virtualscroller",
          "global": true
        },
        {
          "name": "Accordion",
          "as": "Accordion",
          "from": "primevue/accordion",
          "export": "default",
          "filePath": "primevue/accordion",
          "global": true
        },
        {
          "name": "AccordionPanel",
          "as": "AccordionPanel",
          "from": "primevue/accordionpanel",
          "export": "default",
          "filePath": "primevue/accordionpanel",
          "global": true
        },
        {
          "name": "AccordionHeader",
          "as": "AccordionHeader",
          "from": "primevue/accordionheader",
          "export": "default",
          "filePath": "primevue/accordionheader",
          "global": true
        },
        {
          "name": "AccordionContent",
          "as": "AccordionContent",
          "from": "primevue/accordioncontent",
          "export": "default",
          "filePath": "primevue/accordioncontent",
          "global": true
        },
        {
          "name": "AccordionTab",
          "as": "AccordionTab",
          "from": "primevue/accordiontab",
          "export": "default",
          "filePath": "primevue/accordiontab",
          "global": true
        },
        {
          "name": "Card",
          "as": "Card",
          "from": "primevue/card",
          "export": "default",
          "filePath": "primevue/card",
          "global": true
        },
        {
          "name": "DeferredContent",
          "as": "DeferredContent",
          "from": "primevue/deferredcontent",
          "export": "default",
          "filePath": "primevue/deferredcontent",
          "global": true
        },
        {
          "name": "Divider",
          "as": "Divider",
          "from": "primevue/divider",
          "export": "default",
          "filePath": "primevue/divider",
          "global": true
        },
        {
          "name": "Fieldset",
          "as": "Fieldset",
          "from": "primevue/fieldset",
          "export": "default",
          "filePath": "primevue/fieldset",
          "global": true
        },
        {
          "name": "Panel",
          "as": "Panel",
          "from": "primevue/panel",
          "export": "default",
          "filePath": "primevue/panel",
          "global": true
        },
        {
          "name": "ScrollPanel",
          "as": "ScrollPanel",
          "from": "primevue/scrollpanel",
          "export": "default",
          "filePath": "primevue/scrollpanel",
          "global": true
        },
        {
          "name": "Splitter",
          "as": "Splitter",
          "from": "primevue/splitter",
          "export": "default",
          "filePath": "primevue/splitter",
          "global": true
        },
        {
          "name": "SplitterPanel",
          "as": "SplitterPanel",
          "from": "primevue/splitterpanel",
          "export": "default",
          "filePath": "primevue/splitterpanel",
          "global": true
        },
        {
          "name": "Stepper",
          "as": "Stepper",
          "from": "primevue/stepper",
          "export": "default",
          "filePath": "primevue/stepper",
          "global": true
        },
        {
          "name": "StepList",
          "as": "StepList",
          "from": "primevue/steplist",
          "export": "default",
          "filePath": "primevue/steplist",
          "global": true
        },
        {
          "name": "Step",
          "as": "Step",
          "from": "primevue/step",
          "export": "default",
          "filePath": "primevue/step",
          "global": true
        },
        {
          "name": "StepItem",
          "as": "StepItem",
          "from": "primevue/stepitem",
          "export": "default",
          "filePath": "primevue/stepitem",
          "global": true
        },
        {
          "name": "StepPanels",
          "as": "StepPanels",
          "from": "primevue/steppanels",
          "export": "default",
          "filePath": "primevue/steppanels",
          "global": true
        },
        {
          "name": "StepPanel",
          "as": "StepPanel",
          "from": "primevue/steppanel",
          "export": "default",
          "filePath": "primevue/steppanel",
          "global": true
        },
        {
          "name": "StepperPanel",
          "as": "StepperPanel",
          "from": "primevue/stepperpanel",
          "export": "default",
          "filePath": "primevue/stepperpanel",
          "global": true
        },
        {
          "name": "TabView",
          "as": "TabView",
          "from": "primevue/tabview",
          "export": "default",
          "filePath": "primevue/tabview",
          "global": true
        },
        {
          "name": "Tabs",
          "as": "Tabs",
          "from": "primevue/tabs",
          "export": "default",
          "filePath": "primevue/tabs",
          "global": true
        },
        {
          "name": "TabList",
          "as": "TabList",
          "from": "primevue/tablist",
          "export": "default",
          "filePath": "primevue/tablist",
          "global": true
        },
        {
          "name": "Tab",
          "as": "Tab",
          "from": "primevue/tab",
          "export": "default",
          "filePath": "primevue/tab",
          "global": true
        },
        {
          "name": "TabPanels",
          "as": "TabPanels",
          "from": "primevue/tabpanels",
          "export": "default",
          "filePath": "primevue/tabpanels",
          "global": true
        },
        {
          "name": "TabPanel",
          "as": "TabPanel",
          "from": "primevue/tabpanel",
          "export": "default",
          "filePath": "primevue/tabpanel",
          "global": true
        },
        {
          "name": "Toolbar",
          "as": "Toolbar",
          "from": "primevue/toolbar",
          "export": "default",
          "filePath": "primevue/toolbar",
          "global": true
        },
        {
          "name": "ConfirmDialog",
          "use": {
            "as": "ConfirmationService"
          },
          "as": "ConfirmDialog",
          "from": "primevue/confirmdialog",
          "export": "default",
          "filePath": "primevue/confirmdialog",
          "global": true
        },
        {
          "name": "ConfirmPopup",
          "use": {
            "as": "ConfirmationService"
          },
          "as": "ConfirmPopup",
          "from": "primevue/confirmpopup",
          "export": "default",
          "filePath": "primevue/confirmpopup",
          "global": true
        },
        {
          "name": "Dialog",
          "as": "Dialog",
          "from": "primevue/dialog",
          "export": "default",
          "filePath": "primevue/dialog",
          "global": true
        },
        {
          "name": "Drawer",
          "as": "Drawer",
          "from": "primevue/drawer",
          "export": "default",
          "filePath": "primevue/drawer",
          "global": true
        },
        {
          "name": "DynamicDialog",
          "use": {
            "as": "DialogService"
          },
          "as": "DynamicDialog",
          "from": "primevue/dynamicdialog",
          "export": "default",
          "filePath": "primevue/dynamicdialog",
          "global": true
        },
        {
          "name": "OverlayPanel",
          "as": "OverlayPanel",
          "from": "primevue/overlaypanel",
          "export": "default",
          "filePath": "primevue/overlaypanel",
          "global": true
        },
        {
          "name": "Popover",
          "as": "Popover",
          "from": "primevue/popover",
          "export": "default",
          "filePath": "primevue/popover",
          "global": true
        },
        {
          "name": "Sidebar",
          "as": "Sidebar",
          "from": "primevue/sidebar",
          "export": "default",
          "filePath": "primevue/sidebar",
          "global": true
        },
        {
          "name": "FileUpload",
          "as": "FileUpload",
          "from": "primevue/fileupload",
          "export": "default",
          "filePath": "primevue/fileupload",
          "global": true
        },
        {
          "name": "Breadcrumb",
          "as": "Breadcrumb",
          "from": "primevue/breadcrumb",
          "export": "default",
          "filePath": "primevue/breadcrumb",
          "global": true
        },
        {
          "name": "ContextMenu",
          "as": "ContextMenu",
          "from": "primevue/contextmenu",
          "export": "default",
          "filePath": "primevue/contextmenu",
          "global": true
        },
        {
          "name": "Dock",
          "as": "Dock",
          "from": "primevue/dock",
          "export": "default",
          "filePath": "primevue/dock",
          "global": true
        },
        {
          "name": "Menu",
          "as": "Menu",
          "from": "primevue/menu",
          "export": "default",
          "filePath": "primevue/menu",
          "global": true
        },
        {
          "name": "Menubar",
          "as": "Menubar",
          "from": "primevue/menubar",
          "export": "default",
          "filePath": "primevue/menubar",
          "global": true
        },
        {
          "name": "MegaMenu",
          "as": "MegaMenu",
          "from": "primevue/megamenu",
          "export": "default",
          "filePath": "primevue/megamenu",
          "global": true
        },
        {
          "name": "PanelMenu",
          "as": "PanelMenu",
          "from": "primevue/panelmenu",
          "export": "default",
          "filePath": "primevue/panelmenu",
          "global": true
        },
        {
          "name": "Steps",
          "as": "Steps",
          "from": "primevue/steps",
          "export": "default",
          "filePath": "primevue/steps",
          "global": true
        },
        {
          "name": "TabMenu",
          "as": "TabMenu",
          "from": "primevue/tabmenu",
          "export": "default",
          "filePath": "primevue/tabmenu",
          "global": true
        },
        {
          "name": "TieredMenu",
          "as": "TieredMenu",
          "from": "primevue/tieredmenu",
          "export": "default",
          "filePath": "primevue/tieredmenu",
          "global": true
        },
        {
          "name": "Message",
          "as": "Message",
          "from": "primevue/message",
          "export": "default",
          "filePath": "primevue/message",
          "global": true
        },
        {
          "name": "InlineMessage",
          "as": "InlineMessage",
          "from": "primevue/inlinemessage",
          "export": "default",
          "filePath": "primevue/inlinemessage",
          "global": true
        },
        {
          "name": "Toast",
          "use": {
            "as": "ToastService"
          },
          "as": "Toast",
          "from": "primevue/toast",
          "export": "default",
          "filePath": "primevue/toast",
          "global": true
        },
        {
          "name": "Carousel",
          "as": "Carousel",
          "from": "primevue/carousel",
          "export": "default",
          "filePath": "primevue/carousel",
          "global": true
        },
        {
          "name": "Galleria",
          "as": "Galleria",
          "from": "primevue/galleria",
          "export": "default",
          "filePath": "primevue/galleria",
          "global": true
        },
        {
          "name": "Image",
          "as": "Image",
          "from": "primevue/image",
          "export": "default",
          "filePath": "primevue/image",
          "global": true
        },
        {
          "name": "Avatar",
          "as": "Avatar",
          "from": "primevue/avatar",
          "export": "default",
          "filePath": "primevue/avatar",
          "global": true
        },
        {
          "name": "AvatarGroup",
          "as": "AvatarGroup",
          "from": "primevue/avatargroup",
          "export": "default",
          "filePath": "primevue/avatargroup",
          "global": true
        },
        {
          "name": "Badge",
          "as": "Badge",
          "from": "primevue/badge",
          "export": "default",
          "filePath": "primevue/badge",
          "global": true
        },
        {
          "name": "BlockUI",
          "as": "BlockUI",
          "from": "primevue/blockui",
          "export": "default",
          "filePath": "primevue/blockui",
          "global": true
        },
        {
          "name": "Chip",
          "as": "Chip",
          "from": "primevue/chip",
          "export": "default",
          "filePath": "primevue/chip",
          "global": true
        },
        {
          "name": "Inplace",
          "as": "Inplace",
          "from": "primevue/inplace",
          "export": "default",
          "filePath": "primevue/inplace",
          "global": true
        },
        {
          "name": "MeterGroup",
          "as": "MeterGroup",
          "from": "primevue/metergroup",
          "export": "default",
          "filePath": "primevue/metergroup",
          "global": true
        },
        {
          "name": "OverlayBadge",
          "as": "OverlayBadge",
          "from": "primevue/overlaybadge",
          "export": "default",
          "filePath": "primevue/overlaybadge",
          "global": true
        },
        {
          "name": "ScrollTop",
          "as": "ScrollTop",
          "from": "primevue/scrolltop",
          "export": "default",
          "filePath": "primevue/scrolltop",
          "global": true
        },
        {
          "name": "Skeleton",
          "as": "Skeleton",
          "from": "primevue/skeleton",
          "export": "default",
          "filePath": "primevue/skeleton",
          "global": true
        },
        {
          "name": "ProgressBar",
          "as": "ProgressBar",
          "from": "primevue/progressbar",
          "export": "default",
          "filePath": "primevue/progressbar",
          "global": true
        },
        {
          "name": "ProgressSpinner",
          "as": "ProgressSpinner",
          "from": "primevue/progressspinner",
          "export": "default",
          "filePath": "primevue/progressspinner",
          "global": true
        },
        {
          "name": "Tag",
          "as": "Tag",
          "from": "primevue/tag",
          "export": "default",
          "filePath": "primevue/tag",
          "global": true
        },
        {
          "name": "Terminal",
          "as": "Terminal",
          "from": "primevue/terminal",
          "export": "default",
          "filePath": "primevue/terminal",
          "global": true
        }
      ],
      "directives": [
        {
          "name": "badge",
          "as": "BadgeDirective",
          "from": "primevue/badgedirective"
        },
        {
          "name": "tooltip",
          "as": "Tooltip",
          "from": "primevue/tooltip"
        },
        {
          "name": "ripple",
          "as": "Ripple",
          "from": "primevue/ripple"
        },
        {
          "name": "styleclass",
          "as": "StyleClass",
          "from": "primevue/styleclass"
        },
        {
          "name": "focustrap",
          "as": "FocusTrap",
          "from": "primevue/focustrap"
        },
        {
          "name": "animateonscroll",
          "as": "AnimateOnScroll",
          "from": "primevue/animateonscroll"
        }
      ],
      "composables": [
        {
          "name": "usePrimeVue",
          "as": "usePrimeVue",
          "from": "primevue/config"
        },
        {
          "name": "useStyle",
          "as": "useStyle",
          "from": "primevue/usestyle"
        },
        {
          "name": "useConfirm",
          "as": "useConfirm",
          "from": "primevue/useconfirm"
        },
        {
          "name": "useToast",
          "as": "useToast",
          "from": "primevue/usetoast"
        },
        {
          "name": "useDialog",
          "as": "useDialog",
          "from": "primevue/usedialog"
        }
      ],
      "config": [
        {
          "name": "PrimeVue",
          "as": "PrimeVue",
          "from": "primevue/config"
        }
      ],
      "services": [
        {
          "name": "ConfirmationService",
          "as": "ConfirmationService",
          "from": "primevue/confirmationservice"
        },
        {
          "name": "DialogService",
          "as": "DialogService",
          "from": "primevue/dialogservice"
        },
        {
          "name": "ToastService",
          "as": "ToastService",
          "from": "primevue/toastservice"
        }
      ],
      "styles": [
        {
          "name": "BaseStyle",
          "as": "BaseStyle",
          "from": "@primevue/core/base/style"
        }
      ],
      "injectStylesAsString": [],
      "injectStylesAsStringToTop": [
        ""
      ]
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"C:/projects/vue3-assessment/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\projects\\vue3-assessment","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\projects\\vue3-assessment\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\projects\\vue3-assessment\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\projects\\vue3-assessment\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"C:\\projects\\vue3-assessment\\.data\\kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config$1 = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config$1.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const rootDir = "C:/projects/vue3-assessment";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _ElvNUBavSN = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const stack = getStack();
    if (stack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename: extractFilenameFromStack(stack),
      // Clean up file names in stack trace
      stack: normalizeFilenames(stack)
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      htmlContext.bodyAppend.unshift(`<script type="application/json" id="__NUXT_LOGS__">${stringify(ctx.logs, { ...devReducers, ...ctx.event.context._payloadReducers })}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /^.*at.*(\/node_modules\/(.*\/)?(nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/.*|core\/runtime\/nitro.*)$\n?/gm;
function getStack() {
  const stack = new Error();
  Error.captureStackTrace(stack);
  return stack.stack?.replace(EXCLUDE_TRACE_RE, "").replace(/^Error.*\n/, "") || "";
}
const FILENAME_RE = /at[^(]*\(([^:)]+)[):]/;
const FILENAME_RE_GLOBAL = /at[^(]*\(([^)]+)\)/g;
function extractFilenameFromStack(stacktrace) {
  return stacktrace.match(FILENAME_RE)?.[1].replace(withTrailingSlash(rootDir), "");
}
function normalizeFilenames(stacktrace) {
  return stacktrace.replace(FILENAME_RE_GLOBAL, (match, filename) => match.replace(filename, filename.replace("file:///", "/").replace(/:.*$/, "")));
}
function onConsoleLog(callback) {
  consola.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola.wrapConsole();
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function defineRenderHandler(handler) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
      setResponseHeader(event, "Content-Type", "image/x-icon");
      return send(
        event,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
    }
    const response = await handler(event);
    if (!response) {
      const _currentStatus = getResponseStatus(event);
      setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
      return send(
        event,
        "No response returned from render handler: " + event.path
      );
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (response.headers) {
      setResponseHeaders(event, response.headers);
    }
    if (response.statusCode || response.statusMessage) {
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return response.body;
  });
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

var inlineStyles$4 = {
  root: {
    position: 'relative'
  }
};
var classes$h = {
  root: 'p-chart'
};
var ChartStyle = BaseStyle.extend({
  name: 'chart',
  classes: classes$h,
  inlineStyles: inlineStyles$4
});

function _typeof$1(o) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1(o); }
function _defineProperty$1(e, r, t) { return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == _typeof$1(i) ? i : i + ""; }
function _toPrimitive$1(t, r) { if ("object" != _typeof$1(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$1(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var theme$f = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-button {\n    display: inline-flex;\n    cursor: pointer;\n    user-select: none;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n    color: ".concat(dt('button.primary.color'), ";\n    background: ").concat(dt('button.primary.background'), ";\n    border: 1px solid ").concat(dt('button.primary.border.color'), ";\n    padding: ").concat(dt('button.padding.y'), " ").concat(dt('button.padding.x'), ";\n    font-size: 1rem;\n    font-family: inherit;\n    font-feature-settings: inherit;\n    transition: background ").concat(dt('button.transition.duration'), ", color ").concat(dt('button.transition.duration'), ", border-color ").concat(dt('button.transition.duration'), ",\n            outline-color ").concat(dt('button.transition.duration'), ", box-shadow ").concat(dt('button.transition.duration'), ";\n    border-radius: ").concat(dt('button.border.radius'), ";\n    outline-color: transparent;\n    gap: ").concat(dt('button.gap'), ";\n}\n\n.p-button:disabled {\n    cursor: default;\n}\n\n.p-button-icon-right {\n    order: 1;\n}\n\n.p-button-icon-bottom {\n    order: 2;\n}\n\n.p-button-icon-only {\n    width: ").concat(dt('button.icon.only.width'), ";\n    padding-left: 0;\n    padding-right: 0;\n    gap: 0;\n}\n\n.p-button-icon-only.p-button-rounded {\n    border-radius: 50%;\n    height: ").concat(dt('button.icon.only.width'), ";\n}\n\n.p-button-icon-only .p-button-label {\n    visibility: hidden;\n    width: 0;\n}\n\n.p-button-sm {\n    font-size: ").concat(dt('button.sm.font.size'), ";\n    padding: ").concat(dt('button.sm.padding.y'), " ").concat(dt('button.sm.padding.x'), ";\n}\n\n.p-button-sm .p-button-icon {\n    font-size: ").concat(dt('button.sm.font.size'), ";\n}\n\n.p-button-lg {\n    font-size: ").concat(dt('button.lg.font.size'), ";\n    padding: ").concat(dt('button.lg.padding.y'), " ").concat(dt('button.lg.padding.x'), ";\n}\n\n.p-button-lg .p-button-icon {\n    font-size: ").concat(dt('button.lg.font.size'), ";\n}\n\n.p-button-vertical {\n    flex-direction: column;\n}\n\n.p-button-label {\n    font-weight: ").concat(dt('button.label.font.weight'), ";\n}\n\n.p-button-fluid {\n    width: 100%;\n}\n\n.p-button-fluid.p-button-icon-only {\n    width: ").concat(dt('button.icon.only.width'), ";\n}\n\n.p-button:not(:disabled):hover {\n    background: ").concat(dt('button.primary.hover.background'), ";\n    border: 1px solid ").concat(dt('button.primary.hover.border.color'), ";\n    color: ").concat(dt('button.primary.hover.color'), ";\n}\n\n.p-button:not(:disabled):active {\n    background: ").concat(dt('button.primary.active.background'), ";\n    border: 1px solid ").concat(dt('button.primary.active.border.color'), ";\n    color: ").concat(dt('button.primary.active.color'), ";\n}\n\n.p-button:focus-visible {\n    box-shadow: ").concat(dt('button.primary.focus.ring.shadow'), ";\n    outline: ").concat(dt('button.focus.ring.width'), " ").concat(dt('button.focus.ring.style'), " ").concat(dt('button.primary.focus.ring.color'), ";\n    outline-offset: ").concat(dt('button.focus.ring.offset'), ";\n}\n\n.p-button .p-badge {\n    min-width: ").concat(dt('button.badge.size'), ";\n    height: ").concat(dt('button.badge.size'), ";\n    line-height: ").concat(dt('button.badge.size'), ";\n}\n\n.p-button-raised {\n    box-shadow: ").concat(dt('button.raised.shadow'), ";\n}\n\n.p-button-rounded {\n    border-radius: ").concat(dt('button.rounded.border.radius'), ";\n}\n\n.p-button-secondary {\n    background: ").concat(dt('button.secondary.background'), ";\n    border: 1px solid ").concat(dt('button.secondary.border.color'), ";\n    color: ").concat(dt('button.secondary.color'), ";\n}\n\n.p-button-secondary:not(:disabled):hover {\n    background: ").concat(dt('button.secondary.hover.background'), ";\n    border: 1px solid ").concat(dt('button.secondary.hover.border.color'), ";\n    color: ").concat(dt('button.secondary.hover.color'), ";\n}\n\n.p-button-secondary:not(:disabled):active {\n    background: ").concat(dt('button.secondary.active.background'), ";\n    border: 1px solid ").concat(dt('button.secondary.active.border.color'), ";\n    color: ").concat(dt('button.secondary.active.color'), ";\n}\n\n.p-button-secondary:focus-visible {\n    outline-color: ").concat(dt('button.secondary.focus.ring.color'), ";\n    box-shadow: ").concat(dt('button.secondary.focus.ring.shadow'), ";\n}\n\n.p-button-success {\n    background: ").concat(dt('button.success.background'), ";\n    border: 1px solid ").concat(dt('button.success.border.color'), ";\n    color: ").concat(dt('button.success.color'), ";\n}\n\n.p-button-success:not(:disabled):hover {\n    background: ").concat(dt('button.success.hover.background'), ";\n    border: 1px solid ").concat(dt('button.success.hover.border.color'), ";\n    color: ").concat(dt('button.success.hover.color'), ";\n}\n\n.p-button-success:not(:disabled):active {\n    background: ").concat(dt('button.success.active.background'), ";\n    border: 1px solid ").concat(dt('button.success.active.border.color'), ";\n    color: ").concat(dt('button.success.active.color'), ";\n}\n\n.p-button-success:focus-visible {\n    outline-color: ").concat(dt('button.success.focus.ring.color'), ";\n    box-shadow: ").concat(dt('button.success.focus.ring.shadow'), ";\n}\n\n.p-button-info {\n    background: ").concat(dt('button.info.background'), ";\n    border: 1px solid ").concat(dt('button.info.border.color'), ";\n    color: ").concat(dt('button.info.color'), ";\n}\n\n.p-button-info:not(:disabled):hover {\n    background: ").concat(dt('button.info.hover.background'), ";\n    border: 1px solid ").concat(dt('button.info.hover.border.color'), ";\n    color: ").concat(dt('button.info.hover.color'), ";\n}\n\n.p-button-info:not(:disabled):active {\n    background: ").concat(dt('button.info.active.background'), ";\n    border: 1px solid ").concat(dt('button.info.active.border.color'), ";\n    color: ").concat(dt('button.info.active.color'), ";\n}\n\n.p-button-info:focus-visible {\n    outline-color: ").concat(dt('button.info.focus.ring.color'), ";\n    box-shadow: ").concat(dt('button.info.focus.ring.shadow'), ";\n}\n\n.p-button-warn {\n    background: ").concat(dt('button.warn.background'), ";\n    border: 1px solid ").concat(dt('button.warn.border.color'), ";\n    color: ").concat(dt('button.warn.color'), ";\n}\n\n.p-button-warn:not(:disabled):hover {\n    background: ").concat(dt('button.warn.hover.background'), ";\n    border: 1px solid ").concat(dt('button.warn.hover.border.color'), ";\n    color: ").concat(dt('button.warn.hover.color'), ";\n}\n\n.p-button-warn:not(:disabled):active {\n    background: ").concat(dt('button.warn.active.background'), ";\n    border: 1px solid ").concat(dt('button.warn.active.border.color'), ";\n    color: ").concat(dt('button.warn.active.color'), ";\n}\n\n.p-button-warn:focus-visible {\n    outline-color: ").concat(dt('button.warn.focus.ring.color'), ";\n    box-shadow: ").concat(dt('button.warn.focus.ring.shadow'), ";\n}\n\n.p-button-help {\n    background: ").concat(dt('button.help.background'), ";\n    border: 1px solid ").concat(dt('button.help.border.color'), ";\n    color: ").concat(dt('button.help.color'), ";\n}\n\n.p-button-help:not(:disabled):hover {\n    background: ").concat(dt('button.help.hover.background'), ";\n    border: 1px solid ").concat(dt('button.help.hover.border.color'), ";\n    color: ").concat(dt('button.help.hover.color'), ";\n}\n\n.p-button-help:not(:disabled):active {\n    background: ").concat(dt('button.help.active.background'), ";\n    border: 1px solid ").concat(dt('button.help.active.border.color'), ";\n    color: ").concat(dt('button.help.active.color'), ";\n}\n\n.p-button-help:focus-visible {\n    outline-color: ").concat(dt('button.help.focus.ring.color'), ";\n    box-shadow: ").concat(dt('button.help.focus.ring.shadow'), ";\n}\n\n.p-button-danger {\n    background: ").concat(dt('button.danger.background'), ";\n    border: 1px solid ").concat(dt('button.danger.border.color'), ";\n    color: ").concat(dt('button.danger.color'), ";\n}\n\n.p-button-danger:not(:disabled):hover {\n    background: ").concat(dt('button.danger.hover.background'), ";\n    border: 1px solid ").concat(dt('button.danger.hover.border.color'), ";\n    color: ").concat(dt('button.danger.hover.color'), ";\n}\n\n.p-button-danger:not(:disabled):active {\n    background: ").concat(dt('button.danger.active.background'), ";\n    border: 1px solid ").concat(dt('button.danger.active.border.color'), ";\n    color: ").concat(dt('button.danger.active.color'), ";\n}\n\n.p-button-danger:focus-visible {\n    outline-color: ").concat(dt('button.danger.focus.ring.color'), ";\n    box-shadow: ").concat(dt('button.danger.focus.ring.shadow'), ";\n}\n\n.p-button-contrast {\n    background: ").concat(dt('button.contrast.background'), ";\n    border: 1px solid ").concat(dt('button.contrast.border.color'), ";\n    color: ").concat(dt('button.contrast.color'), ";\n}\n\n.p-button-contrast:not(:disabled):hover {\n    background: ").concat(dt('button.contrast.hover.background'), ";\n    border: 1px solid ").concat(dt('button.contrast.hover.border.color'), ";\n    color: ").concat(dt('button.contrast.hover.color'), ";\n}\n\n.p-button-contrast:not(:disabled):active {\n    background: ").concat(dt('button.contrast.active.background'), ";\n    border: 1px solid ").concat(dt('button.contrast.active.border.color'), ";\n    color: ").concat(dt('button.contrast.active.color'), ";\n}\n\n.p-button-contrast:focus-visible {\n    outline-color: ").concat(dt('button.contrast.focus.ring.color'), ";\n    box-shadow: ").concat(dt('button.contrast.focus.ring.shadow'), ";\n}\n\n.p-button-outlined {\n    background: transparent;\n    border-color: ").concat(dt('button.outlined.primary.border.color'), ";\n    color: ").concat(dt('button.outlined.primary.color'), ";\n}\n\n.p-button-outlined:not(:disabled):hover {\n    background: ").concat(dt('button.outlined.primary.hover.background'), ";\n    border-color: ").concat(dt('button.outlined.primary.border.color'), ";\n    color: ").concat(dt('button.outlined.primary.color'), ";\n}\n\n.p-button-outlined:not(:disabled):active {\n    background: ").concat(dt('button.outlined.primary.active.background'), ";\n    border-color: ").concat(dt('button.outlined.primary.border.color'), ";\n    color: ").concat(dt('button.outlined.primary.color'), ";\n}\n\n.p-button-outlined.p-button-secondary {\n    border-color: ").concat(dt('button.outlined.secondary.border.color'), ";\n    color: ").concat(dt('button.outlined.secondary.color'), ";\n}\n\n.p-button-outlined.p-button-secondary:not(:disabled):hover {\n    background: ").concat(dt('button.outlined.secondary.hover.background'), ";\n    border-color: ").concat(dt('button.outlined.secondary.border.color'), ";\n    color: ").concat(dt('button.outlined.secondary.color'), ";\n}\n\n.p-button-outlined.p-button-secondary:not(:disabled):active {\n    background: ").concat(dt('button.outlined.secondary.active.background'), ";\n    border-color: ").concat(dt('button.outlined.secondary.border.color'), ";\n    color: ").concat(dt('button.outlined.secondary.color'), ";\n}\n\n.p-button-outlined.p-button-success {\n    border-color: ").concat(dt('button.outlined.success.border.color'), ";\n    color: ").concat(dt('button.outlined.success.color'), ";\n}\n\n.p-button-outlined.p-button-success:not(:disabled):hover {\n    background: ").concat(dt('button.outlined.success.hover.background'), ";\n    border-color: ").concat(dt('button.outlined.success.border.color'), ";\n    color: ").concat(dt('button.outlined.success.color'), ";\n}\n\n.p-button-outlined.p-button-success:not(:disabled):active {\n    background: ").concat(dt('button.outlined.success.active.background'), ";\n    border-color: ").concat(dt('button.outlined.success.border.color'), ";\n    color: ").concat(dt('button.outlined.success.color'), ";\n}\n\n.p-button-outlined.p-button-info {\n    border-color: ").concat(dt('button.outlined.info.border.color'), ";\n    color: ").concat(dt('button.outlined.info.color'), ";\n}\n\n.p-button-outlined.p-button-info:not(:disabled):hover {\n    background: ").concat(dt('button.outlined.info.hover.background'), ";\n    border-color: ").concat(dt('button.outlined.info.border.color'), ";\n    color: ").concat(dt('button.outlined.info.color'), ";\n}\n\n.p-button-outlined.p-button-info:not(:disabled):active {\n    background: ").concat(dt('button.outlined.info.active.background'), ";\n    border-color: ").concat(dt('button.outlined.info.border.color'), ";\n    color: ").concat(dt('button.outlined.info.color'), ";\n}\n\n.p-button-outlined.p-button-warn {\n    border-color: ").concat(dt('button.outlined.warn.border.color'), ";\n    color: ").concat(dt('button.outlined.warn.color'), ";\n}\n\n.p-button-outlined.p-button-warn:not(:disabled):hover {\n    background: ").concat(dt('button.outlined.warn.hover.background'), ";\n    border-color: ").concat(dt('button.outlined.warn.border.color'), ";\n    color: ").concat(dt('button.outlined.warn.color'), ";\n}\n\n.p-button-outlined.p-button-warn:not(:disabled):active {\n    background: ").concat(dt('button.outlined.warn.active.background'), ";\n    border-color: ").concat(dt('button.outlined.warn.border.color'), ";\n    color: ").concat(dt('button.outlined.warn.color'), ";\n}\n\n.p-button-outlined.p-button-help {\n    border-color: ").concat(dt('button.outlined.help.border.color'), ";\n    color: ").concat(dt('button.outlined.help.color'), ";\n}\n\n.p-button-outlined.p-button-help:not(:disabled):hover {\n    background: ").concat(dt('button.outlined.help.hover.background'), ";\n    border-color: ").concat(dt('button.outlined.help.border.color'), ";\n    color: ").concat(dt('button.outlined.help.color'), ";\n}\n\n.p-button-outlined.p-button-help:not(:disabled):active {\n    background: ").concat(dt('button.outlined.help.active.background'), ";\n    border-color: ").concat(dt('button.outlined.help.border.color'), ";\n    color: ").concat(dt('button.outlined.help.color'), ";\n}\n\n.p-button-outlined.p-button-danger {\n    border-color: ").concat(dt('button.outlined.danger.border.color'), ";\n    color: ").concat(dt('button.outlined.danger.color'), ";\n}\n\n.p-button-outlined.p-button-danger:not(:disabled):hover {\n    background: ").concat(dt('button.outlined.danger.hover.background'), ";\n    border-color: ").concat(dt('button.outlined.danger.border.color'), ";\n    color: ").concat(dt('button.outlined.danger.color'), ";\n}\n\n.p-button-outlined.p-button-danger:not(:disabled):active {\n    background: ").concat(dt('button.outlined.danger.active.background'), ";\n    border-color: ").concat(dt('button.outlined.danger.border.color'), ";\n    color: ").concat(dt('button.outlined.danger.color'), ";\n}\n\n.p-button-outlined.p-button-contrast {\n    border-color: ").concat(dt('button.outlined.contrast.border.color'), ";\n    color: ").concat(dt('button.outlined.contrast.color'), ";\n}\n\n.p-button-outlined.p-button-contrast:not(:disabled):hover {\n    background: ").concat(dt('button.outlined.contrast.hover.background'), ";\n    border-color: ").concat(dt('button.outlined.contrast.border.color'), ";\n    color: ").concat(dt('button.outlined.contrast.color'), ";\n}\n\n.p-button-outlined.p-button-contrast:not(:disabled):active {\n    background: ").concat(dt('button.outlined.contrast.active.background'), ";\n    border-color: ").concat(dt('button.outlined.contrast.border.color'), ";\n    color: ").concat(dt('button.outlined.contrast.color'), ";\n}\n\n.p-button-outlined.p-button-plain {\n    border-color: ").concat(dt('button.outlined.plain.border.color'), ";\n    color: ").concat(dt('button.outlined.plain.color'), ";\n}\n\n.p-button-outlined.p-button-plain:not(:disabled):hover {\n    background: ").concat(dt('button.outlined.plain.hover.background'), ";\n    border-color: ").concat(dt('button.outlined.plain.border.color'), ";\n    color: ").concat(dt('button.outlined.plain.color'), ";\n}\n\n.p-button-outlined.p-button-plain:not(:disabled):active {\n    background: ").concat(dt('button.outlined.plain.active.background'), ";\n    border-color: ").concat(dt('button.outlined.plain.border.color'), ";\n    color: ").concat(dt('button.outlined.plain.color'), ";\n}\n\n.p-button-text {\n    background: transparent;\n    border-color: transparent;\n    color: ").concat(dt('button.text.primary.color'), ";\n}\n\n.p-button-text:not(:disabled):hover {\n    background: ").concat(dt('button.text.primary.hover.background'), ";\n    border-color: transparent;\n    color: ").concat(dt('button.text.primary.color'), ";\n}\n\n.p-button-text:not(:disabled):active {\n    background: ").concat(dt('button.text.primary.active.background'), ";\n    border-color: transparent;\n    color: ").concat(dt('button.text.primary.color'), ";\n}\n\n.p-button-text.p-button-secondary {\n    background: transparent;\n    border-color: transparent;\n    color: ").concat(dt('button.text.secondary.color'), ";\n}\n\n.p-button-text.p-button-secondary:not(:disabled):hover {\n    background: ").concat(dt('button.text.secondary.hover.background'), ";\n    border-color: transparent;\n    color: ").concat(dt('button.text.secondary.color'), ";\n}\n\n.p-button-text.p-button-secondary:not(:disabled):active {\n    background: ").concat(dt('button.text.secondary.active.background'), ";\n    border-color: transparent;\n    color: ").concat(dt('button.text.secondary.color'), ";\n}\n\n.p-button-text.p-button-success {\n    background: transparent;\n    border-color: transparent;\n    color: ").concat(dt('button.text.success.color'), ";\n}\n\n.p-button-text.p-button-success:not(:disabled):hover {\n    background: ").concat(dt('button.text.success.hover.background'), ";\n    border-color: transparent;\n    color: ").concat(dt('button.text.success.color'), ";\n}\n\n.p-button-text.p-button-success:not(:disabled):active {\n    background: ").concat(dt('button.text.success.active.background'), ";\n    border-color: transparent;\n    color: ").concat(dt('button.text.success.color'), ";\n}\n\n.p-button-text.p-button-info {\n    background: transparent;\n    border-color: transparent;\n    color: ").concat(dt('button.text.info.color'), ";\n}\n\n.p-button-text.p-button-info:not(:disabled):hover {\n    background: ").concat(dt('button.text.info.hover.background'), ";\n    border-color: transparent;\n    color: ").concat(dt('button.text.info.color'), ";\n}\n\n.p-button-text.p-button-info:not(:disabled):active {\n    background: ").concat(dt('button.text.info.active.background'), ";\n    border-color: transparent;\n    color: ").concat(dt('button.text.info.color'), ";\n}\n\n.p-button-text.p-button-warn {\n    background: transparent;\n    border-color: transparent;\n    color: ").concat(dt('button.text.warn.color'), ";\n}\n\n.p-button-text.p-button-warn:not(:disabled):hover {\n    background: ").concat(dt('button.text.warn.hover.background'), ";\n    border-color: transparent;\n    color: ").concat(dt('button.text.warn.color'), ";\n}\n\n.p-button-text.p-button-warn:not(:disabled):active {\n    background: ").concat(dt('button.text.warn.active.background'), ";\n    border-color: transparent;\n    color: ").concat(dt('button.text.warn.color'), ";\n}\n\n.p-button-text.p-button-help {\n    background: transparent;\n    border-color: transparent;\n    color: ").concat(dt('button.text.help.color'), ";\n}\n\n.p-button-text.p-button-help:not(:disabled):hover {\n    background: ").concat(dt('button.text.help.hover.background'), ";\n    border-color: transparent;\n    color: ").concat(dt('button.text.help.color'), ";\n}\n\n.p-button-text.p-button-help:not(:disabled):active {\n    background: ").concat(dt('button.text.help.active.background'), ";\n    border-color: transparent;\n    color: ").concat(dt('button.text.help.color'), ";\n}\n\n.p-button-text.p-button-danger {\n    background: transparent;\n    border-color: transparent;\n    color: ").concat(dt('button.text.danger.color'), ";\n}\n\n.p-button-text.p-button-danger:not(:disabled):hover {\n    background: ").concat(dt('button.text.danger.hover.background'), ";\n    border-color: transparent;\n    color: ").concat(dt('button.text.danger.color'), ";\n}\n\n.p-button-text.p-button-danger:not(:disabled):active {\n    background: ").concat(dt('button.text.danger.active.background'), ";\n    border-color: transparent;\n    color: ").concat(dt('button.text.danger.color'), ";\n}\n\n.p-button-text.p-button-plain {\n    background: transparent;\n    border-color: transparent;\n    color: ").concat(dt('button.text.plain.color'), ";\n}\n\n.p-button-text.p-button-plain:not(:disabled):hover {\n    background: ").concat(dt('button.text.plain.hover.background'), ";\n    border-color: transparent;\n    color: ").concat(dt('button.text.plain.color'), ";\n}\n\n.p-button-text.p-button-plain:not(:disabled):active {\n    background: ").concat(dt('button.text.plain.active.background'), ";\n    border-color: transparent;\n    color: ").concat(dt('button.text.plain.color'), ";\n}\n\n.p-button-link {\n    background: transparent;\n    border-color: transparent;\n    color: ").concat(dt('button.link.color'), ";\n}\n\n.p-button-link:not(:disabled):hover {\n    background: transparent;\n    border-color: transparent;\n    color: ").concat(dt('button.link.hover.color'), ";\n}\n\n.p-button-link:not(:disabled):hover .p-button-label {\n    text-decoration: underline;\n}\n\n.p-button-link:not(:disabled):active {\n    background: transparent;\n    border-color: transparent;\n    color: ").concat(dt('button.link.active.color'), ";\n}\n");
};
var classes$g = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-button p-component', _defineProperty$1(_defineProperty$1(_defineProperty$1(_defineProperty$1(_defineProperty$1(_defineProperty$1(_defineProperty$1(_defineProperty$1(_defineProperty$1({
      'p-button-icon-only': instance.hasIcon && !props.label && !props.badge,
      'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
      'p-button-loading': props.loading,
      'p-button-link': props.link
    }, "p-button-".concat(props.severity), props.severity), 'p-button-raised', props.raised), 'p-button-rounded', props.rounded), 'p-button-text', props.text), 'p-button-outlined', props.outlined), 'p-button-sm', props.size === 'small'), 'p-button-lg', props.size === 'large'), 'p-button-plain', props.plain), 'p-button-fluid', props.fluid)];
  },
  loadingIcon: 'p-button-loading-icon',
  icon: function icon(_ref4) {
    var props = _ref4.props;
    return ['p-button-icon', _defineProperty$1({}, "p-button-icon-".concat(props.iconPos), props.label)];
  },
  label: 'p-button-label'
};
var ButtonStyle = BaseStyle.extend({
  name: 'button',
  theme: theme$f,
  classes: classes$g
});

var theme$e = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-fileupload input[type=\"file\"] {\n    display: none;\n}\n\n.p-fileupload-advanced {\n    border: 1px solid ".concat(dt('fileupload.border.color'), ";\n    border-radius: ").concat(dt('fileupload.border.radius'), ";\n    background: ").concat(dt('fileupload.background'), ";\n    color: ").concat(dt('fileupload.color'), ";\n}\n\n.p-fileupload-header {\n    display: flex;\n    align-items: center;\n    padding: ").concat(dt('fileupload.header.padding'), ";\n    background: ").concat(dt('fileupload.header.background'), ";\n    color: ").concat(dt('fileupload.header.color'), ";\n    border-style: solid;\n    border-width: ").concat(dt('fileupload.header.border.width'), ";\n    border-color: ").concat(dt('fileupload.header.border.color'), ";\n    border-radius: ").concat(dt('fileupload.header.border.radius'), ";\n    gap: ").concat(dt('fileupload.header.gap'), ";\n}\n\n.p-fileupload-content {\n    border: 1px solid transparent;\n    position: relative;\n    transition: border-color ").concat(dt('fileupload.transition.duration'), ";\n    padding: ").concat(dt('fileupload.content.padding'), ";\n}\n\n.p-fileupload-content .p-progressbar {\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: ").concat(dt('fileupload.progressbar.height'), ";\n}\n\n.p-fileupload-file-list {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    margin-top: 1.125rem;\n}\n\n.p-fileupload-file {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: ").concat(dt('fileupload.file.padding'), ";\n    border-bottom: 1px solid ").concat(dt('fileupload.file.border.color'), ";\n    gap: ").concat(dt('fileupload.file.gap'), ";\n}\n\n.p-fileupload-file:last-child {\n    border-bottom: 0;\n}\n\n.p-fileupload-file-info {\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt('fileupload.file.info.gap'), ";\n}\n\n.p-fileupload-file-thumbnail {\n    flex-shrink: 0;\n}\n\n.p-fileupload-file-actions {\n    margin-left: auto;\n}\n\n.p-fileupload-highlight {\n    border: 1px dashed ").concat(dt('fileupload.content.highlight.border.color'), ";\n}\n\n.p-fileupload-advanced .p-message {\n    margin-top: 0;\n}\n\n.p-fileupload-basic {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: ").concat(dt('fileupload.basic.gap'), ";\n}\n");
};
var classes$f = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ["p-fileupload p-fileupload-".concat(props.mode, " p-component")];
  },
  header: 'p-fileupload-header',
  pcChooseButton: 'p-fileupload-choose-button',
  pcUploadButton: 'p-fileupload-upload-button',
  pcCancelButton: 'p-fileupload-cancel-button',
  content: 'p-fileupload-content',
  fileList: 'p-fileupload-file-list',
  file: 'p-fileupload-file',
  fileThumbnail: 'p-fileupload-file-thumbnail',
  fileInfo: 'p-fileupload-file-info',
  fileName: 'p-fileupload-file-name',
  fileSize: 'p-fileupload-file-size',
  pcFileBadge: 'p-fileupload-file-badge',
  fileActions: 'p-fileupload-file-actions',
  pcFileRemoveButton: 'p-fileupload-file-remove-button'
};
var FileUploadStyle = BaseStyle.extend({
  name: 'fileupload',
  theme: theme$e,
  classes: classes$f
});

var theme$d = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-toolbar {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    padding: ".concat(dt('toolbar.padding'), ";\n    background: ").concat(dt('toolbar.background'), ";\n    border: 1px solid ").concat(dt('toolbar.border.color'), ";\n    color: ").concat(dt('toolbar.color'), ";\n    border-radius: ").concat(dt('toolbar.border.radius'), ";\n    gap: ").concat(dt('toolbar.gap'), ";\n}\n\n.p-toolbar-start,\n.p-toolbar-center,\n.p-toolbar-end {\n    display: flex;\n    align-items: center;\n}\n");
};
var classes$e = {
  root: 'p-toolbar p-component',
  start: 'p-toolbar-start',
  center: 'p-toolbar-center',
  end: 'p-toolbar-end'
};
var ToolbarStyle = BaseStyle.extend({
  name: 'toolbar',
  theme: theme$d,
  classes: classes$e
});

var classes$d = {
  root: 'p-inputicon'
};
var InputIconStyle = BaseStyle.extend({
  name: 'inputicon',
  classes: classes$d
});

var theme$c = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-inputtext {\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-size: 1rem;\n    color: ".concat(dt('inputtext.color'), ";\n    background: ").concat(dt('inputtext.background'), ";\n    padding: ").concat(dt('inputtext.padding.y'), " ").concat(dt('inputtext.padding.x'), ";\n    border: 1px solid ").concat(dt('inputtext.border.color'), ";\n    transition: background ").concat(dt('inputtext.transition.duration'), ", color ").concat(dt('inputtext.transition.duration'), ", border-color ").concat(dt('inputtext.transition.duration'), ", outline-color ").concat(dt('inputtext.transition.duration'), ", box-shadow ").concat(dt('inputtext.transition.duration'), ";\n    appearance: none;\n    border-radius: ").concat(dt('inputtext.border.radius'), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt('inputtext.shadow'), ";\n}\n\n.p-inputtext:enabled:hover {\n    border-color: ").concat(dt('inputtext.hover.border.color'), ";\n}\n\n.p-inputtext:enabled:focus {\n    border-color: ").concat(dt('inputtext.focus.border.color'), ";\n    box-shadow: ").concat(dt('inputtext.focus.ring.shadow'), ";\n    outline: ").concat(dt('inputtext.focus.ring.width'), " ").concat(dt('inputtext.focus.ring.style'), " ").concat(dt('inputtext.focus.ring.color'), ";\n    outline-offset: ").concat(dt('inputtext.focus.ring.offset'), ";\n}\n\n.p-inputtext.p-invalid {\n    border-color: ").concat(dt('inputtext.invalid.border.color'), ";\n}\n\n.p-inputtext.p-variant-filled {\n    background: ").concat(dt('inputtext.filled.background'), ";\n}\n\n.p-inputtext.p-variant-filled:enabled:focus {\n    background: ").concat(dt('inputtext.filled.focus.background'), ";\n}\n\n.p-inputtext:disabled {\n    opacity: 1;\n    background: ").concat(dt('inputtext.disabled.background'), ";\n    color: ").concat(dt('inputtext.disabled.color'), ";\n}\n\n.p-inputtext::placeholder {\n    color: ").concat(dt('inputtext.placeholder.color'), ";\n}\n\n.p-inputtext-sm {\n    font-size: ").concat(dt('inputtext.sm.font.size'), ";\n    padding: ").concat(dt('inputtext.sm.padding.y'), " ").concat(dt('inputtext.sm.padding.x'), ";\n}\n\n.p-inputtext-lg {\n    font-size: ").concat(dt('inputtext.lg.font.size'), ";\n    padding: ").concat(dt('inputtext.lg.padding.y'), " ").concat(dt('inputtext.lg.padding.x'), ";\n}\n\n.p-inputtext-fluid {\n    width: 100%;\n}\n");
};
var classes$c = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-inputtext p-component', {
      'p-filled': instance.filled,
      'p-inputtext-sm': props.size === 'small',
      'p-inputtext-lg': props.size === 'large',
      'p-invalid': props.invalid,
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled' || instance.$primevue.config.inputVariant === 'filled',
      'p-inputtext-fluid': props.fluid
    }];
  }
};
var InputTextStyle = BaseStyle.extend({
  name: 'inputtext',
  theme: theme$c,
  classes: classes$c
});

var theme$b = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-iconfield {\n    position: relative;\n}\n\n.p-inputicon {\n    position: absolute;\n    top: 50%;\n    margin-top: calc(-1 * (".concat(dt('icon.size'), " / 2));\n    color: ").concat(dt('iconfield.icon.color'), ";\n}\n\n.p-iconfield .p-inputicon:first-child {\n    left: ").concat(dt('form.field.padding.x'), ";\n}\n\n.p-iconfield .p-inputicon:last-child {\n    right: ").concat(dt('form.field.padding.x'), ";\n}\n\n.p-iconfield .p-inputtext:last-child {\n    padding-left: calc((").concat(dt('form.field.padding.x'), " * 2) + ").concat(dt('icon.size'), ");\n}\n\n.p-iconfield .p-inputtext:first-child {\n    padding-right: calc((").concat(dt('form.field.padding.x'), " * 2) + ").concat(dt('icon.size'), ");\n}\n");
};
var classes$b = {
  root: 'p-iconfield'
};
var IconFieldStyle = BaseStyle.extend({
  name: 'iconfield',
  theme: theme$b,
  classes: classes$b
});

var ColumnStyle = BaseStyle.extend({
  name: 'column'
});

var theme$a = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-inputnumber {\n    display: inline-flex;\n    position: relative;\n}\n\n.p-inputnumber-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 auto;\n    cursor: pointer;\n    background: ".concat(dt('inputnumber.button.background'), ";\n    color: ").concat(dt('inputnumber.button.color'), ";\n    width: ").concat(dt('inputnumber.button.width'), ";\n    transition: background ").concat(dt('inputnumber.transition.duration'), ", color ").concat(dt('inputnumber.transition.duration'), ", border-color ").concat(dt('inputnumber.transition.duration'), ", outline-color ").concat(dt('inputnumber.transition.duration'), ";\n}\n\n.p-inputnumber-button:hover {\n    background: ").concat(dt('inputnumber.button.hover.background'), ";\n    color: ").concat(dt('inputnumber.button.hover.color'), ";\n}\n\n.p-inputnumber-button:active {\n    background: ").concat(dt('inputnumber.button.active.background'), ";\n    color: ").concat(dt('inputnumber.button.active.color'), ";\n}\n\n.p-inputnumber-stacked .p-inputnumber-button {\n    position: relative;\n    border: 0 none;\n}\n\n.p-inputnumber-stacked .p-inputnumber-button-group {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 1px;\n    right: 1px;\n    height: calc(100% - 2px);\n}\n\n.p-inputnumber-stacked .p-inputnumber-increment-button {\n    padding: 0;\n    border-top-right-radius: calc(").concat(dt('inputnumber.button.border.radius'), " - 1px);\n}\n\n.p-inputnumber-stacked .p-inputnumber-decrement-button {\n    padding: 0;\n    border-bottom-right-radius: calc(").concat(dt('inputnumber.button.border.radius'), " - 1px);\n}\n\n.p-inputnumber-stacked .p-inputnumber-button {\n    flex: 1 1 auto;\n    border: 0 none;\n}\n\n.p-inputnumber-horizontal .p-inputnumber-button {\n    border: 1px solid ").concat(dt('inputnumber.button.border.color'), ";\n}\n\n.p-inputnumber-horizontal .p-inputnumber-button:hover {\n    border-color: ").concat(dt('inputnumber.button.hover.border.color'), ";\n}\n\n.p-inputnumber-horizontal .p-inputnumber-button:active {\n    border-color: ").concat(dt('inputnumber.button.active.border.color'), ";\n}\n\n.p-inputnumber-horizontal .p-inputnumber-increment-button {\n    order: 3;\n    border-top-right-radius: ").concat(dt('inputnumber.button.border.radius'), ";\n    border-bottom-right-radius: ").concat(dt('inputnumber.button.border.radius'), ";\n    border-left: 0 none;\n}\n\n.p-inputnumber-horizontal .p-inputnumber-input {\n    order: 2;\n    border-radius: 0;\n}\n\n.p-inputnumber-horizontal .p-inputnumber-decrement-button {\n    order: 1;\n    border-top-left-radius: ").concat(dt('inputnumber.button.border.radius'), ";\n    border-bottom-left-radius: ").concat(dt('inputnumber.button.border.radius'), ";\n    border-right: 0 none;\n}\n\n.p-inputnumber-vertical {\n    flex-direction: column;\n}\n\n.p-inputnumber-vertical .p-inputnumber-button {\n    border: 1px solid ").concat(dt('inputnumber.button.border.color'), ";\n    padding: ").concat(dt('inputnumber.button.vertical.padding'), "; 0;\n}\n\n.p-inputnumber-vertical .p-inputnumber-button:hover {\n    border-color: ").concat(dt('inputnumber.button.hover.border.color'), ";\n}\n\n.p-inputnumber-vertical .p-inputnumber-button:active {\n    border-color: ").concat(dt('inputnumber.button.active.border.color'), ";\n}\n\n.p-inputnumber-vertical .p-inputnumber-increment-button {\n    order: 1;\n    border-top-left-radius: ").concat(dt('inputnumber.button.border.radius'), ";\n    border-top-right-radius: ").concat(dt('inputnumber.button.border.radius'), ";\n    width: 100%;\n    border-bottom: 0 none;\n}\n\n.p-inputnumber-vertical .p-inputnumber-input {\n    order: 2;\n    border-radius: 0;\n    text-align: center;\n}\n\n.p-inputnumber-vertical .p-inputnumber-decrement-button {\n    order: 3;\n    border-bottom-left-radius: ").concat(dt('inputnumber.button.border.radius'), ";\n    border-bottom-right-radius: ").concat(dt('inputnumber.button.border.radius'), ";\n    width: 100%;\n    border-top: 0 none;\n}\n\n.p-inputnumber-input {\n    flex: 1 1 auto;\n}\n\n.p-inputnumber-fluid {\n    width: 100%;\n}\n\n.p-inputnumber-fluid .p-inputnumber-input {\n    width: 1%;\n}\n\n.p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {\n    width: 100%;\n}\n");
};
var classes$a = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-inputnumber p-component p-inputwrapper', {
      'p-inputwrapper-filled': instance.filled || props.allowEmpty === false,
      'p-inputwrapper-focus': instance.focused,
      'p-inputnumber-stacked': props.showButtons && props.buttonLayout === 'stacked',
      'p-inputnumber-horizontal': props.showButtons && props.buttonLayout === 'horizontal',
      'p-inputnumber-vertical': props.showButtons && props.buttonLayout === 'vertical',
      'p-inputnumber-fluid': instance.fluid
    }];
  },
  pcInput: 'p-inputnumber-input',
  buttonGroup: 'p-inputnumber-button-group',
  incrementButton: function incrementButton(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-inputnumber-button p-inputnumber-increment-button', {
      'p-disabled': props.showButtons && props.max !== null && instance.maxBoundry()
    }];
  },
  decrementButton: function decrementButton(_ref4) {
    var instance = _ref4.instance,
      props = _ref4.props;
    return ['p-inputnumber-button p-inputnumber-decrement-button', {
      'p-disabled': props.showButtons && props.min !== null && instance.minBoundry()
    }];
  }
};
var InputNumberStyle = BaseStyle.extend({
  name: 'inputnumber',
  theme: theme$a,
  classes: classes$a
});

var theme$9 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-rating {\n    position: relative;\n    display: flex;\n    align-items: center;\n    gap: ".concat(dt('rating.gap'), ";\n}\n\n.p-rating-option {\n    display: inline-flex;\n    align-items: center;\n    cursor: pointer;\n    outline-color: transparent;\n    border-radius: 50%;\n    cursor: pointer;\n    transition: background ").concat(dt('rating.transition.duration'), ", color ").concat(dt('rating.transition.duration'), ", border-color ").concat(dt('rating.transition.duration'), ", outline-color ").concat(dt('rating.transition.duration'), ", box-shadow ").concat(dt('rating.transition.duration'), ";\n}\n\n.p-rating-option.p-focus-visible {\n    box-shadow: ").concat(dt('focus.ring.shadow'), ";\n    outline: ").concat(dt('focus.ring.width'), " ").concat(dt('focus.ring.style'), " ").concat(dt('focus.ring.color'), ";\n    outline-offset: ").concat(dt('focus.ring.offset'), ";\n}\n\n.p-rating-icon {\n    color: ").concat(dt('rating.icon.color'), ";\n    transition: background ").concat(dt('rating.transition.duration'), ", color ").concat(dt('rating.transition.duration'), ", border-color ").concat(dt('rating.transition.duration'), ", outline-color ").concat(dt('rating.transition.duration'), ", box-shadow ").concat(dt('rating.transition.duration'), ";\n    font-size: ").concat(dt('rating.icon.size'), ";\n    width: ").concat(dt('rating.icon.size'), ";\n    height: ").concat(dt('rating.icon.size'), ";\n}\n\n.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover .p-rating-icon {\n    color: ").concat(dt('rating.icon.hover.color'), ";\n}\n\n.p-rating-option-active .p-rating-icon {\n    color: ").concat(dt('rating.icon.active.color'), ";\n}\n");
};
var classes$9 = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-rating', {
      'p-readonly': props.readonly,
      'p-disabled': props.disabled
    }];
  },
  option: function option(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props,
      value = _ref3.value;
    return ['p-rating-option', {
      'p-rating-option-active': value <= props.modelValue,
      'p-focus-visible': value === instance.focusedOptionIndex && instance.isFocusVisibleItem
    }];
  },
  onIcon: 'p-rating-icon p-rating-on-icon',
  offIcon: 'p-rating-icon p-rating-off-icon'
};
var RatingStyle = BaseStyle.extend({
  name: 'rating',
  theme: theme$9,
  classes: classes$9
});

var theme$8 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-datatable {\n    position: relative;\n}\n\n.p-datatable-table {\n    border-spacing: 0;\n    width: 100%;\n}\n\n.p-datatable-scrollable > .p-datatable-table-container {\n    position: relative;\n}\n\n.p-datatable-scrollable-table > .p-datatable-thead {\n    top: 0;\n    z-index: 1;\n}\n\n.p-datatable-scrollable-table > .p-datatable-frozen-tbody {\n    position: sticky;\n    z-index: 1;\n}\n\n.p-datatable-scrollable-table>.p-datatable-tfoot {\n    bottom: 0;\n    z-index: 1;\n}\n\n.p-datatable-scrollable .p-datatable-frozen-column {\n    position: sticky;\n    background: inherit;\n}\n\n.p-datatable-scrollable th.p-datatable-frozen-column {\n    z-index: 1;\n}\n\n.p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-thead,\n.p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-thead {\n    background: ".concat(dt('datatable.header.cell.background'), ";\n}\n\n.p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-tfoot,\n.p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {\n    background: ").concat(dt('datatable.footer.cell.background'), ";\n}\n\n.p-datatable-flex-scrollable {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.p-datatable-flex-scrollable > .p-datatable-table-container {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    height: 100%;\n}\n\n.p-datatable-scrollable-table > .p-datatable-tbody > .p-datatable-row-group-header {\n    position: sticky;\n    z-index: 1;\n}\n\n.p-datatable-resizable-table > .p-datatable-thead > tr > th,\n.p-datatable-resizable-table > .p-datatable-tfoot > tr > td,\n.p-datatable-resizable-table > .p-datatable-tbody > tr > td {\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.p-datatable-resizable-table > .p-datatable-thead > tr > th.p-datatable-resizable-column:not(.p-datatable-frozen-column) {\n    background-clip: padding-box;\n    position: relative;\n}\n\n.p-datatable-resizable-table-fit > .p-datatable-thead > tr > th.p-datatable-resizable-column:last-child .p-datatable-column-resizer {\n    display: none;\n}\n\n.p-datatable-column-resizer {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    width: ").concat(dt('datatable.column.resizer.width'), ";\n    height: 100%;\n    padding: 0px;\n    cursor: col-resize;\n    border: 1px solid transparent;\n}\n\n.p-datatable-column-header-content {\n    display: flex;\n    align-items: center;\n    gap: ").concat(dt('datatable.header.cell.gap'), ";\n}\n\n.p-datatable-column-resize-indicator {\n    width: ").concat(dt('datatable.resize.indicator.width'), ";\n    position: absolute;\n    z-index: 10;\n    display: none;\n    background: ").concat(dt('datatable.resize.indicator.color'), ";\n}\n\n.p-datatable-row-reorder-indicator-up,\n.p-datatable-row-reorder-indicator-down {\n    position: absolute;\n    display: none;\n}\n\n.p-datatable-reorderable-column,\n.p-datatable-reorderable-row-handle {\n    cursor: move;\n}\n\n.p-datatable-mask {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 2;\n}\n\n.p-datatable-inline-filter {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    gap: ").concat(dt('datatable.filter.inline.gap'), ";\n}\n\n.p-datatable-inline-filter .p-datatable-filter-element-container {\n    flex: 1 1 auto;\n    width: 1%;\n}\n\n.p-datatable-filter-overlay {\n    background: ").concat(dt('datatable.filter.overlay.select.background'), ";\n    color: ").concat(dt('datatable.filter.overlay.select.color'), ";\n    border: 1px solid ").concat(dt('datatable.filter.overlay.select.border.color'), ";\n    border-radius: ").concat(dt('datatable.filter.overlay.select.border.radius'), ";\n    box-shadow: ").concat(dt('datatable.filter.overlay.select.shadow'), ";\n    min-width: 12.5rem;\n}\n\n.p-datatable-filter-constraint-list {\n    margin: 0;\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    padding: ").concat(dt('datatable.filter.constraint.list.padding'), ";\n    gap: ").concat(dt('datatable.filter.constraint.list.gap'), ";\n}\n\n.p-datatable-filter-constraint {\n    padding: ").concat(dt('datatable.filter.constraint.padding'), ";\n    color: ").concat(dt('datatable.filter.constraint.color'), ";\n    border-radius: ").concat(dt('datatable.filter.constraint.border.radius'), ";\n    cursor: pointer;\n    transition: background ").concat(dt('datatable.transition.duration'), ", color ").concat(dt('datatable.transition.duration'), ", border-color ").concat(dt('datatable.transition.duration'), ",\n        box-shadow ").concat(dt('datatable.transition.duration'), ";\n}\n\n.p-datatable-filter-constraint-selected {\n    background: ").concat(dt('datatable.filter.constraint.selected.background'), ";\n    color: ").concat(dt('datatable.filter.constraint.selected.color'), ";\n}\n\n.p-datatable-filter-constraint:not(.p-datatable-filter-constraint-selected):not(.p-disabled):hover {\n    background: ").concat(dt('datatable.filter.constraint.focus.background'), ";\n    color: ").concat(dt('datatable.filter.constraint.focus.color'), ";\n}\n\n.p-datatable-filter-constraint:focus-visible {\n    outline: 0 none;\n    background: ").concat(dt('datatable.filter.constraint.focus.background'), ";\n    color: ").concat(dt('datatable.filter.constraint.focus.color'), ";\n}\n\n.p-datatable-filter-constraint-selected:focus-visible {\n    outline: 0 none;\n    background: ").concat(dt('datatable.filter.constraint.selected.focus.background'), ";\n    color: ").concat(dt('datatable.filter.constraint.selected.focus.color'), ";\n}\n\n.p-datatable-filter-constraint-separator {\n    border-top: 1px solid ").concat(dt('datatable.filter.constraint.separator.border.color'), ";\n}\n\n.p-datatable-popover-filter {\n    display: inline-flex;\n    margin-left: auto;\n}\n\n.p-datatable-filter-overlay-popover {\n    background: ").concat(dt('datatable.filter.overlay.popover.background'), ";\n    color: ").concat(dt('datatable.filter.overlay.popover.color'), ";\n    border: 1px solid ").concat(dt('datatable.filter.overlay.popover.border.color'), ";\n    border-radius: ").concat(dt('datatable.filter.overlay.popover.border.radius'), ";\n    box-shadow: ").concat(dt('datatable.filter.overlay.popover.shadow'), ";\n    min-width: 12.5rem;\n    padding: ").concat(dt('datatable.filter.overlay.popover.padding'), ";\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt('datatable.filter.overlay.popover.gap'), ";\n}\n\n.p-datatable-filter-operator-dropdown {\n    width: 100%;\n}\n\n.p-datatable-filter-rule-list,\n.p-datatable-filter-rule {\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt('datatable.filter.overlay.popover.gap'), ";\n}\n\n.p-datatable-filter-rule {\n    border-bottom: 1px solid ").concat(dt('datatable.filter.rule.border.color'), ";\n}\n\n.p-datatable-filter-rule:last-child {\n    border-bottom: 0 none;\n}\n\n.p-datatable-filter-add-rule-button {\n    width: 100%;\n}\n\n.p-datatable-filter-remove-button {\n    width: 100%;\n}\n\n.p-datatable-filter-buttonbar {\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.p-datatable-virtualscroller-spacer {\n    display: flex;\n}\n\n.p-datatable .p-virtualscroller .p-virtualscroller-loading {\n    transform: none !important;\n    min-height: 0;\n    position: sticky;\n    top: 0;\n    left: 0;\n}\n\n.p-datatable-paginator-top {\n    border-color: ").concat(dt('datatable.paginator.top.border.color'), ";\n    border-style: solid;\n    border-width: ").concat(dt('datatable.paginator.top.border.width'), ";\n}\n\n.p-datatable-paginator-bottom {\n    border-color: ").concat(dt('datatable.paginator.bottom.border.color'), ";\n    border-style: solid;\n    border-width: ").concat(dt('datatable.paginator.bottom.border.width'), ";\n}\n\n.p-datatable-header {\n    background: ").concat(dt('datatable.header.background'), ";\n    color: ").concat(dt('datatable.header.color'), ";\n    border-color: ").concat(dt('datatable.header.border.color'), ";\n    border-style: solid;\n    border-width: ").concat(dt('datatable.header.border.width'), ";\n    padding: ").concat(dt('datatable.header.padding'), ";\n}\n\n.p-datatable-footer {\n    background: ").concat(dt('datatable.footer.background'), ";\n    color: ").concat(dt('datatable.footer.color'), ";\n    border-color: ").concat(dt('datatable.footer.border.color'), ";\n    border-style: solid;\n    border-width: ").concat(dt('datatable.footer.border.width'), ";\n    padding: ").concat(dt('datatable.footer.padding'), ";\n}\n\n.p-datatable-header-cell {\n    padding: ").concat(dt('datatable.header.cell.padding'), ";\n    background: ").concat(dt('datatable.header.cell.background'), ";\n    border-color: ").concat(dt('datatable.header.cell.border.color'), ";\n    border-style: solid;\n    border-width: 0 0 1px 0;\n    color: ").concat(dt('datatable.header.cell.color'), ";\n    font-weight: normal;\n    text-align: left;\n    transition: background ").concat(dt('datatable.transition.duration'), ", color ").concat(dt('datatable.transition.duration'), ", border-color ").concat(dt('datatable.transition.duration'), ",\n            outline-color ").concat(dt('datatable.transition.duration'), ", box-shadow ").concat(dt('datatable.transition.duration'), ";\n}\n\n.p-datatable-column-title {\n    font-weight: ").concat(dt('datatable.column.title.font.weight'), ";\n}\n\n.p-datatable-tbody > tr {\n    outline-color: transparent;\n    background: ").concat(dt('datatable.row.background'), ";\n    color: ").concat(dt('datatable.row.color'), ";\n    transition: background ").concat(dt('datatable.transition.duration'), ", color ").concat(dt('datatable.transition.duration'), ", border-color ").concat(dt('datatable.transition.duration'), ",\n            outline-color ").concat(dt('datatable.transition.duration'), ", box-shadow ").concat(dt('datatable.transition.duration'), ";\n}\n\n.p-datatable-tbody > tr > td {\n    text-align: left;\n    border-color: ").concat(dt('datatable.body.cell.border.color'), ";\n    border-style: solid;\n    border-width: 0 0 1px 0;\n    padding: ").concat(dt('datatable.body.cell.padding'), ";\n}\n\n.p-datatable-hoverable .p-datatable-tbody > tr:not(.p-datatable-row-selected):hover {\n    background: ").concat(dt('datatable.row.hover.background'), ";\n    color: ").concat(dt('datatable.row.hover.color'), ";\n}\n\n.p-datatable-tbody > tr.p-datatable-row-selected {\n    background: ").concat(dt('datatable.row.selected.background'), ";\n    color: ").concat(dt('datatable.row.selected.color'), ";\n}\n\n.p-datatable-tbody > tr:has(+ .p-datatable-row-selected) > td {\n    border-bottom-color: ").concat(dt('datatable.body.cell.selected.border.color'), ";\n}\n\n.p-datatable-tbody > tr.p-datatable-row-selected > td {\n    border-bottom-color: ").concat(dt('datatable.body.cell.selected.border.color'), ";\n}\n\n.p-datatable-tbody > tr:focus-visible,\n.p-datatable-tbody > tr.p-datatable-contextmenu-row-selected {\n    box-shadow: ").concat(dt('datatable.body.cell.focus.ring.shadow'), ";\n    outline: ").concat(dt('datatable.body.cell.focus.ring.width'), " ").concat(dt('datatable.body.cell.focus.ring.style'), " ").concat(dt('datatable.body.cell.focus.ring.color'), ";\n    outline-offset: ").concat(dt('datatable.body.cell.focus.ring.offset'), ";\n}\n\n.p-datatable-tfoot > tr > td {\n    text-align: left;\n    padding: ").concat(dt('datatable.footer.cell.padding'), ";\n    border-color: ").concat(dt('datatable.footer.cell.border.color'), ";\n    border-style: solid;\n    border-width: 0 0 1px 0;\n    color: ").concat(dt('datatable.footer.cell.color'), ";\n    background: ").concat(dt('datatable.footer.cell.background'), ";\n}\n\n.p-datatable-column-footer {\n    font-weight: ").concat(dt('datatable.column.footer.font.weight'), ";\n}\n\n.p-datatable-sortable-column {\n    cursor: pointer;\n    user-select: none;\n    outline-color: transparent;\n}\n\n.p-datatable-column-title,\n.p-datatable-sort-icon,\n.p-datatable-sort-badge {\n    vertical-align: middle;\n}\n\n.p-datatable-sort-icon {\n    color: ").concat(dt('datatable.sort.icon.color'), ";\n    transition: color ").concat(dt('datatable.transition.duration'), ";\n}\n\n.p-datatable-sortable-column:not(.p-datatable-column-sorted):hover {\n    background: ").concat(dt('datatable.header.cell.hover.background'), ";\n    color: ").concat(dt('datatable.header.cell.hover.color'), ";\n}\n\n.p-datatable-sortable-column:not(.p-datatable-column-sorted):hover .p-datatable-sort-icon {\n    color: ").concat(dt('datatable.sort.icon.hover.color'), ";\n}\n\n.p-datatable-column-sorted {\n    background: ").concat(dt('datatable.header.cell.selected.background'), ";\n    color: ").concat(dt('datatable.header.cell.selected.color'), ";\n}\n\n.p-datatable-column-sorted .p-datatable-sort-icon {\n    color: ").concat(dt('datatable.header.cell.selected.color'), ";\n}\n\n.p-datatable-sortable-column:focus-visible {\n    box-shadow: ").concat(dt('datatable.header.cell.focus.ring.shadow'), ";\n    outline: ").concat(dt('datatable.header.cell.focus.ring.width'), " ").concat(dt('datatable.header.cell.focus.ring.style'), " ").concat(dt('datatable.header.cell.focus.ring.color'), ";\n    outline-offset: ").concat(dt('datatable.header.cell.focus.ring.offset'), ";\n}\n\n.p-datatable-hoverable .p-datatable-selectable-row {\n    cursor: pointer;\n}\n\n.p-datatable-tbody > tr.p-datatable-dragpoint-top > td {\n    box-shadow: inset 0 2px 0 0 ").concat(dt('datatable.drop.point.color'), ";\n}\n\n.p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {\n    box-shadow: inset 0 -2px 0 0 ").concat(dt('datatable.drop.point.color'), ";\n}\n\n.p-datatable-loading-icon {\n    font-size: ").concat(dt('datatable.loading.icon.size'), ";\n    width: ").concat(dt('datatable.loading.icon.size'), ";\n    height: ").concat(dt('datatable.loading.icon.size'), ";\n}\n\n.p-datatable-gridlines .p-datatable-header {\n    border-width: 1px 1px 0 1px;\n}\n\n.p-datatable-gridlines .p-datatable-footer {\n    border-width: 0 1px 1px 1px;\n}\n\n.p-datatable-gridlines .p-datatable-paginator-top {\n    border-width: 1px 1px 0 1px;\n}\n\n.p-datatable-gridlines .p-datatable-paginator-bottom {\n    border-width: 0 1px 1px 1px;\n}\n\n.p-datatable-gridlines .p-datatable-thead > tr > th {\n    border-width: 1px 0 1px 1px;\n}\n\n.p-datatable-gridlines .p-datatable-thead > tr > th:last-child {\n    border-width: 1px;\n}\n\n.p-datatable-gridlines .p-datatable-tbody > tr > td {\n    border-width: 1px 0 0 1px;\n}\n\n.p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {\n    border-width: 1px 1px 0 1px;\n}\n\np-datatable-gridlines .p-datatable-tbody > tr:last-child > td {\n    border-width: 1px 0 1px 1px;\n}\n\n.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td:last-child {\n    border-width: 1px;\n}\n\n.p-datatable-gridlines .p-datatable-tfoot > tr > td {\n    border-width: 1px 0 1px 1px;\n}\n\n.p-datatable-gridlines .p-datatable-tfoot > tr > td:last-child {\n    border-width: 1px 1px 1px 1px;\n}\n\n.p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td {\n    border-width: 0 0 1px 1px;\n}\n\n.p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td:last-child {\n    border-width: 0 1px 1px 1px;\n}\n\n.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {\n    border-width: 0 0 1px 1px;\n}\n\n.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {\n    border-width: 0 1px 1px 1px;\n}\n\n.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td {\n    border-width: 0 0 0 1px;\n}\n\n.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td:last-child {\n    border-width: 0 1px 0 1px;\n}\n\n.p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd {\n    background: ").concat(dt('datatable.row.striped.background'), ";\n}\n\n.p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-datatable-row-selected {\n    background: ").concat(dt('datatable.row.selected.background'), ";\n    color: ").concat(dt('datatable.row.selected.color'), ";\n}\n\n.p-datatable.p-datatable-sm .p-datatable-header {\n    padding: 0.375rem 0.5rem;\n}\n\n.p-datatable.p-datatable-sm .p-datatable-thead > tr > th {\n    padding: 0.375rem 0.5rem;\n}\n\n.p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {\n    padding: 0.375rem 0.5rem;\n}\n\n.p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {\n    padding: 0.375rem 0.5rem;\n}\n\n.p-datatable.p-datatable-sm .p-datatable-footer {\n    padding: 0.375rem 0.5rem;\n}\n\n.p-datatable.p-datatable-lg .p-datatable-header {\n    padding: 0.9375rem 1.25rem;\n}\n\n.p-datatable.p-datatable-lg .p-datatable-thead > tr > th {\n    padding: 0.9375rem 1.25rem;\n}\n\n.p-datatable.p-datatable-lg .p-datatable-tbody>tr>td {\n    padding: 0.9375rem 1.25rem;\n}\n\n.p-datatable.p-datatable-lg .p-datatable-tfoot>tr>td {\n    padding: 0.9375rem 1.25rem;\n}\n\n.p-datatable.p-datatable-lg .p-datatable-footer {\n    padding: 0.9375rem 1.25rem;\n}\n\n.p-datatable-row-toggle-button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n    width: ").concat(dt('datatable.row.toggle.button.size'), ";\n    height: ").concat(dt('datatable.row.toggle.button.size'), ";\n    color: ").concat(dt('datatable.row.toggle.button.color'), ";\n    border: 0 none;\n    background: transparent;\n    cursor: pointer;\n    border-radius: ").concat(dt('datatable.row.toggle.button.border.radius'), ";\n    transition: background ").concat(dt('datatable.transition.duration'), ", color ").concat(dt('datatable.transition.duration'), ", border-color ").concat(dt('datatable.transition.duration'), ",\n            outline-color ").concat(dt('datatable.transition.duration'), ", box-shadow ").concat(dt('datatable.transition.duration'), ";\n    outline-color: transparent;\n    user-select: none;\n}\n\n.p-datatable-row-toggle-button:enabled:hover {\n    color: ").concat(dt('datatable.row.toggle.button.hover.color'), ";\n    background: ").concat(dt('datatable.row.toggle.button.hover.background'), ";\n}\n\n.p-datatable-tbody > tr.p-datatable-row-selected .p-datatable-row-toggle-button:hover {\n    background: ").concat(dt('datatable.row.toggle.button.selected.hover.background'), ";\n    ").concat(dt('datatable.row.toggle.button.selected.hover.color'), ";\n}\n\n.p-datatable-row-toggle-button:focus-visible {\n    box-shadow: ").concat(dt('datatable.row.toggle.button.focus.ring.shadow'), ";\n    outline: ").concat(dt('datatable.row.toggle.button.focus.ring.width'), " ").concat(dt('datatable.row.toggle.button.focus.ring.style'), " ").concat(dt('datatable.row.toggle.button.focus.ring.color'), ";\n    outline-offset: ").concat(dt('datatable.row.toggle.button.focus.ring.offset'), ";\n}\n");
};
var classes$8 = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-datatable p-component', {
      'p-datatable-hoverable': props.rowHover || props.selectionMode,
      'p-datatable-resizable': props.resizableColumns,
      'p-datatable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
      'p-datatable-scrollable': props.scrollable,
      'p-datatable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
      'p-datatable-striped': props.stripedRows,
      'p-datatable-gridlines': props.showGridlines,
      'p-datatable-sm': props.size === 'small',
      'p-datatable-lg': props.size === 'large'
    }];
  },
  mask: 'p-datatable-mask p-overlay-mask',
  loadingIcon: 'p-datatable-loading-icon',
  header: 'p-datatable-header',
  pcPaginator: function pcPaginator(_ref3) {
    var position = _ref3.position;
    return 'p-datatable-paginator-' + position;
  },
  tableContainer: 'p-datatable-table-container',
  table: function table(_ref4) {
    var props = _ref4.props;
    return ['p-datatable-table', {
      'p-datatable-scrollable-table': props.scrollable,
      'p-datatable-resizable-table': props.resizableColumns,
      'p-datatable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
    }];
  },
  thead: 'p-datatable-thead',
  headerCell: function headerCell(_ref5) {
    var instance = _ref5.instance,
      props = _ref5.props,
      column = _ref5.column;
    return column && !instance.columnProp(column, 'hidden') && (props.rowGroupMode !== 'subheader' || props.groupRowsBy !== instance.columnProp(column, 'field')) ? ['p-datatable-header-cell', {
      'p-datatable-frozen-column': instance.columnProp(column, 'frozen')
    }] : ['p-datatable-header-cell', {
      'p-datatable-sortable-column': instance.columnProp('sortable'),
      'p-datatable-resizable-column': instance.resizableColumns,
      'p-datatable-column-sorted': instance.isColumnSorted(),
      'p-datatable-frozen-column': instance.columnProp('frozen'),
      'p-datatable-reorderable-column': props.reorderableColumns
    }];
  },
  columnResizer: 'p-datatable-column-resizer',
  columnHeaderContent: 'p-datatable-column-header-content',
  columnTitle: 'p-datatable-column-title',
  columnFooter: 'p-datatable-column-footer',
  sortIcon: 'p-datatable-sort-icon',
  pcSortBadge: 'p-datatable-sort-badge',
  filter: function filter(_ref6) {
    var props = _ref6.props;
    return ['p-datatable-filter', {
      'p-datatable-inline-filter': props.display === 'row',
      'p-datatable-popover-filter': props.display === 'menu'
    }];
  },
  filterElementContainer: 'p-datatable-filter-element-container',
  pcColumnFilterButton: 'p-datatable-column-filter-button',
  pcColumnFilterClearButton: 'p-datatable-column-filter-clear-button',
  filterOverlay: function filterOverlay(_ref7) {
    _ref7.instance;
      var props = _ref7.props;
    return ['p-datatable-filter-overlay p-component', {
      'p-datatable-filter-overlay-popover': props.display === 'menu'
    }];
  },
  filterConstraintList: 'p-datatable-filter-constraint-list',
  filterConstraint: function filterConstraint(_ref8) {
    var instance = _ref8.instance,
      matchMode = _ref8.matchMode;
    return ['p-datatable-filter-constraint', {
      'p-datatable-filter-constraint-selected': matchMode && instance.isRowMatchModeSelected(matchMode.value)
    }];
  },
  filterConstraintSeparator: 'p-datatable-filter-constraint-separator',
  filterOperator: 'p-datatable-filter-operator',
  pcFilterOperatorDropdown: 'p-datatable-filter-operator-dropdown',
  filterRuleList: 'p-datatable-filter-rule-list',
  filterRule: 'p-datatable-filter-rule',
  pcFilterConstraintDropdown: 'p-datatable-filter-constraint-dropdown',
  pcFilterRemoveRuleButton: 'p-datatable-filter-remove-rule-button',
  pcFilterAddRuleButton: 'p-datatable-filter-add-rule-button',
  filterButtonbar: 'p-datatable-filter-buttonbar',
  pcFilterClearButton: 'p-datatable-filter-clear-button',
  pcFilterApplyButton: 'p-datatable-filter-apply-button',
  tbody: function tbody(_ref9) {
    var props = _ref9.props;
    return props.frozenRow ? 'p-datatable-tbody p-datatable-frozen-tbody' : 'p-datatable-tbody';
  },
  rowGroupHeader: 'p-datatable-row-group-header',
  rowToggleButton: 'p-datatable-row-toggle-button',
  rowToggleIcon: 'p-datatable-row-toggle-icon',
  row: function row(_ref10) {
    var instance = _ref10.instance,
      props = _ref10.props,
      index = _ref10.index,
      columnSelectionMode = _ref10.columnSelectionMode;
    var rowStyleClass = [];
    if (props.selectionMode) {
      rowStyleClass.push('p-datatable-selectable-row');
    }
    if (props.selection) {
      rowStyleClass.push({
        'p-datatable-row-selected': columnSelectionMode ? instance.isSelected && instance.$parentInstance.$parentInstance.highlightOnSelect : instance.isSelected
      });
    }
    if (props.contextMenuSelection) {
      rowStyleClass.push({
        'p-datatable-contextmenu-row-selected': instance.isSelectedWithContextMenu
      });
    }
    rowStyleClass.push(index % 2 === 0 ? 'p-row-even' : 'p-row-odd');
    return rowStyleClass;
  },
  rowExpansion: 'p-datatable-row-expansion',
  rowGroupFooter: 'p-datatable-row-group-footer',
  emptyMessage: 'p-datatable-empty-message',
  bodyCell: function bodyCell(_ref11) {
    var instance = _ref11.instance;
    return [{
      'p-datatable-frozen-column': instance.columnProp('frozen')
    }];
  },
  reorderableRowHandle: 'p-datatable-reorderable-row-handle',
  pcRowEditorInit: 'p-datatable-row-editor-init',
  pcRowEditorSave: 'p-datatable-row-editor-save',
  pcRowEditorCancel: 'p-datatable-row-editor-cancel',
  tfoot: 'p-datatable-tfoot',
  footerCell: function footerCell(_ref12) {
    var instance = _ref12.instance;
    return [{
      'p-datatable-frozen-column': instance.columnProp('frozen')
    }];
  },
  virtualScrollerSpacer: 'p-datatable-virtualscroller-spacer',
  footer: 'p-datatable-footer',
  columnResizeIndicator: 'p-datatable-column-resize-indicator',
  rowReorderIndicatorUp: 'p-datatable-row-reorder-indicator-up',
  rowReorderIndicatorDown: 'p-datatable-row-reorder-indicator-down'
};
var inlineStyles$3 = {
  tableContainer: {
    overflow: 'auto'
  },
  thead: {
    position: 'sticky'
  },
  tfoot: {
    position: 'sticky'
  }
};
var DataTableStyle = BaseStyle.extend({
  name: 'datatable',
  theme: theme$8,
  classes: classes$8,
  inlineStyles: inlineStyles$3
});

var theme$7 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-textarea {\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-size: 1rem;\n    color: ".concat(dt('textarea.color'), ";\n    background: ").concat(dt('textarea.background'), ";\n    padding: ").concat(dt('textarea.padding.y'), " ").concat(dt('textarea.padding.x'), ";\n    border: 1px solid ").concat(dt('textarea.border.color'), ";\n    transition: background ").concat(dt('textarea.transition.duration'), ", color ").concat(dt('textarea.transition.duration'), ", border-color ").concat(dt('textarea.transition.duration'), ", outline-color ").concat(dt('textarea.transition.duration'), ", box-shadow ").concat(dt('textarea.transition.duration'), ";\n    appearance: none;\n    border-radius: ").concat(dt('textarea.border.radius'), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt('textarea.shadow'), ";\n}\n\n.p-textarea:enabled:hover {\n    border-color: ").concat(dt('textarea.hover.border.color'), ";\n}\n\n.p-textarea:enabled:focus {\n    border-color: ").concat(dt('textarea.focus.border.color'), ";\n    box-shadow: ").concat(dt('textarea.focus.ring.shadow'), ";\n    outline: ").concat(dt('textarea.focus.ring.width'), " ").concat(dt('textarea.focus.ring.style'), " ").concat(dt('textarea.focus.ring.color'), ";\n    outline-offset: ").concat(dt('textarea.focus.ring.offset'), ";\n}\n\n.p-textarea.p-invalid {\n    border-color: ").concat(dt('textarea.invalid.border.color'), ";\n}\n\n.p-textarea.p-variant-filled {\n    background: ").concat(dt('textarea.filled.background'), ";\n}\n\n.p-textarea.p-variant-filled:enabled:focus {\n    background: ").concat(dt('textarea.filled.focus.background'), ";\n}\n\n.p-textarea:disabled {\n    opacity: 1;\n    background: ").concat(dt('textarea.disabled.background'), ";\n    color: ").concat(dt('textarea.disabled.color'), ";\n}\n\n.p-textarea::placeholder {\n    color: ").concat(dt('textarea.placeholder.color'), ";\n}\n\n.p-textarea-fluid {\n    width: 100%;\n}\n\n.p-textarea-resizable {\n    overflow: hidden;\n    resize: none;\n}\n");
};
var classes$7 = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-textarea p-component', {
      'p-filled': instance.filled,
      'p-textarea-resizable ': props.autoResize,
      'p-invalid': props.invalid,
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled' || instance.$primevue.config.inputVariant === 'filled',
      'p-textarea-fluid': props.fluid
    }];
  }
};
var TextareaStyle = BaseStyle.extend({
  name: 'textarea',
  theme: theme$7,
  classes: classes$7
});

var theme$6 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-dialog {\n    max-height: 90%;\n    transform: scale(1);\n    border-radius: ".concat(dt('dialog.border.radius'), ";\n    box-shadow: ").concat(dt('dialog.shadow'), ";\n    background: ").concat(dt('dialog.background'), ";\n    border: 1px solid ").concat(dt('dialog.border.color'), ";\n    color: ").concat(dt('dialog.color'), ";\n}\n\n.p-dialog-content {\n    overflow-y: auto;\n    padding: ").concat(dt('dialog.content.padding'), ";\n}\n\n.p-dialog-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-shrink: 0;\n    padding: ").concat(dt('dialog.header.padding'), ";\n}\n\n.p-dialog-title {\n    font-weight: ").concat(dt('dialog.title.font.weight'), ";\n    font-size: ").concat(dt('dialog.title.font.size'), ";\n}\n\n.p-dialog-footer {\n    flex-shrink: 0;\n    padding: ").concat(dt('dialog.footer.padding'), ";\n    display: flex;\n    justify-content: flex-end;\n    gap: ").concat(dt('dialog.footer.gap'), ";\n}\n\n.p-dialog-header-actions {\n    display: flex;\n    align-items: center;\n    gap: ").concat(dt('dialog.header.gap'), ";\n}\n.p-dialog-enter-active {\n    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-dialog-leave-active {\n    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.p-dialog-enter-from,\n.p-dialog-leave-to {\n    opacity: 0;\n    transform: scale(0.7);\n}\n\n.p-dialog-top .p-dialog,\n.p-dialog-bottom .p-dialog,\n.p-dialog-left .p-dialog,\n.p-dialog-right .p-dialog,\n.p-dialog-topleft .p-dialog,\n.p-dialog-topright .p-dialog,\n.p-dialog-bottomleft .p-dialog,\n.p-dialog-bottomright .p-dialog {\n    margin: 0.75rem;\n    transform: translate3d(0px, 0px, 0px);\n}\n\n.p-dialog-top .p-dialog-enter-active,\n.p-dialog-top .p-dialog-leave-active,\n.p-dialog-bottom .p-dialog-enter-active,\n.p-dialog-bottom .p-dialog-leave-active,\n.p-dialog-left .p-dialog-enter-active,\n.p-dialog-left .p-dialog-leave-active,\n.p-dialog-right .p-dialog-enter-active,\n.p-dialog-right .p-dialog-leave-active,\n.p-dialog-topleft .p-dialog-enter-active,\n.p-dialog-topleft .p-dialog-leave-active,\n.p-dialog-topright .p-dialog-enter-active,\n.p-dialog-topright .p-dialog-leave-active,\n.p-dialog-bottomleft .p-dialog-enter-active,\n.p-dialog-bottomleft .p-dialog-leave-active,\n.p-dialog-bottomright .p-dialog-enter-active,\n.p-dialog-bottomright .p-dialog-leave-active {\n    transition: all 0.3s ease-out;\n}\n\n.p-dialog-top .p-dialog-enter-from,\n.p-dialog-top .p-dialog-leave-to {\n    transform: translate3d(0px, -100%, 0px);\n}\n\n.p-dialog-bottom .p-dialog-enter-from,\n.p-dialog-bottom .p-dialog-leave-to {\n    transform: translate3d(0px, 100%, 0px);\n}\n\n.p-dialog-left .p-dialog-enter-from,\n.p-dialog-left .p-dialog-leave-to,\n.p-dialog-topleft .p-dialog-enter-from,\n.p-dialog-topleft .p-dialog-leave-to,\n.p-dialog-bottomleft .p-dialog-enter-from,\n.p-dialog-bottomleft .p-dialog-leave-to {\n    transform: translate3d(-100%, 0px, 0px);\n}\n\n.p-dialog-right .p-dialog-enter-from,\n.p-dialog-right .p-dialog-leave-to,\n.p-dialog-topright .p-dialog-enter-from,\n.p-dialog-topright .p-dialog-leave-to,\n.p-dialog-bottomright .p-dialog-enter-from,\n.p-dialog-bottomright .p-dialog-leave-to {\n    transform: translate3d(100%, 0px, 0px);\n}\n\n.p-dialog-maximized {\n    width: 100vw !important;\n    height: 100vh !important;\n    top: 0px !important;\n    left: 0px !important;\n    max-height: 100%;\n    height: 100%;\n    border-radius: 0;\n}\n\n.p-dialog-maximized .p-dialog-content {\n    flex-grow: 1;\n}\n");
};

/* Position */
var inlineStyles$2 = {
  mask: function mask(_ref2) {
    var position = _ref2.position,
      modal = _ref2.modal;
    return {
      position: 'fixed',
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
      display: 'flex',
      justifyContent: position === 'left' || position === 'topleft' || position === 'bottomleft' ? 'flex-start' : position === 'right' || position === 'topright' || position === 'bottomright' ? 'flex-end' : 'center',
      alignItems: position === 'top' || position === 'topleft' || position === 'topright' ? 'flex-start' : position === 'bottom' || position === 'bottomleft' || position === 'bottomright' ? 'flex-end' : 'center',
      pointerEvents: modal ? 'auto' : 'none'
    };
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    pointerEvents: 'auto'
  }
};
var classes$6 = {
  mask: function mask(_ref3) {
    var props = _ref3.props;
    var positions = ['left', 'right', 'top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright'];
    var pos = positions.find(function (item) {
      return item === props.position;
    });
    return ['p-dialog-mask', {
      'p-overlay-mask p-overlay-mask-enter': props.modal
    }, pos ? "p-dialog-".concat(pos) : ''];
  },
  root: function root(_ref4) {
    var props = _ref4.props,
      instance = _ref4.instance;
    return ['p-dialog p-component', {
      'p-dialog-maximized': props.maximizable && instance.maximized
    }];
  },
  header: 'p-dialog-header',
  title: 'p-dialog-title',
  headerActions: 'p-dialog-header-actions',
  pcMaximizeButton: 'p-dialog-maximize-button',
  pcCloseButton: 'p-dialog-close-button',
  content: 'p-dialog-content',
  footer: 'p-dialog-footer'
};
var DialogStyle = BaseStyle.extend({
  name: 'dialog',
  theme: theme$6,
  classes: classes$6,
  inlineStyles: inlineStyles$2
});

var theme$5 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-badge {\n    display: inline-flex;\n    border-radius: ".concat(dt('badge.border.radius'), ";\n    align-items: center;\n    justify-content: center;\n    padding: ").concat(dt('badge.padding'), ";\n    background: ").concat(dt('badge.primary.background'), ";\n    color: ").concat(dt('badge.primary.color'), ";\n    font-size: ").concat(dt('badge.font.size'), ";\n    font-weight: ").concat(dt('badge.font.weight'), ";\n    min-width: ").concat(dt('badge.min.width'), ";\n    height: ").concat(dt('badge.height'), ";\n}\n\n.p-badge-dot {\n    width: ").concat(dt('badge.dot.size'), ";\n    min-width: ").concat(dt('badge.dot.size'), ";\n    height: ").concat(dt('badge.dot.size'), ";\n    border-radius: 50%;\n    padding: 0;\n}\n\n.p-badge-circle {\n    padding: 0;\n    border-radius: 50%;\n}\n\n.p-badge-secondary {\n    background: ").concat(dt('badge.secondary.background'), ";\n    color: ").concat(dt('badge.secondary.color'), ";\n}\n\n.p-badge-success {\n    background: ").concat(dt('badge.success.background'), ";\n    color: ").concat(dt('badge.success.color'), ";\n}\n\n.p-badge-info {\n    background: ").concat(dt('badge.info.background'), ";\n    color: ").concat(dt('badge.info.color'), ";\n}\n\n.p-badge-warn {\n    background: ").concat(dt('badge.warn.background'), ";\n    color: ").concat(dt('badge.warn.color'), ";\n}\n\n.p-badge-danger {\n    background: ").concat(dt('badge.danger.background'), ";\n    color: ").concat(dt('badge.danger.color'), ";\n}\n\n.p-badge-contrast {\n    background: ").concat(dt('badge.contrast.background'), ";\n    color: ").concat(dt('badge.contrast.color'), ";\n}\n\n.p-badge-sm {\n    font-size: ").concat(dt('badge.sm.font.size'), ";\n    min-width: ").concat(dt('badge.sm.min.width'), ";\n    height: ").concat(dt('badge.sm.height'), ";\n}\n\n.p-badge-lg {\n    font-size: ").concat(dt('badge.lg.font.size'), ";\n    min-width: ").concat(dt('badge.lg.min.width'), ";\n    height: ").concat(dt('badge.lg.height'), ";\n}\n\n.p-badge-xl {\n    font-size: ").concat(dt('badge.xl.font.size'), ";\n    min-width: ").concat(dt('badge.xl.min.width'), ";\n    height: ").concat(dt('badge.xl.height'), ";\n}\n");
};
var classes$5 = {
  root: function root(_ref2) {
    var props = _ref2.props,
      instance = _ref2.instance;
    return ['p-badge p-component', {
      'p-badge-circle': isNotEmpty(props.value) && String(props.value).length === 1,
      'p-badge-dot': isEmpty(props.value) && !instance.$slots["default"],
      'p-badge-sm': props.size === 'small',
      'p-badge-lg': props.size === 'large',
      'p-badge-xl': props.size === 'xlarge',
      'p-badge-info': props.severity === 'info',
      'p-badge-success': props.severity === 'success',
      'p-badge-warn': props.severity === 'warn',
      'p-badge-danger': props.severity === 'danger',
      'p-badge-secondary': props.severity === 'secondary',
      'p-badge-contrast': props.severity === 'contrast'
    }];
  }
};
var BadgeStyle = BaseStyle.extend({
  name: 'badge',
  theme: theme$5,
  classes: classes$5
});

var theme$4 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-avatar {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: ".concat(dt('avatar.width'), ";\n    height: ").concat(dt('avatar.height'), ";\n    font-size: ").concat(dt('avatar.font.size'), ";\n    background: ").concat(dt('avatar.background'), ";\n    border-radius: ").concat(dt('avatar.border.radius'), ";\n}\n\n.p-avatar-image {\n    background: transparent;\n}\n\n.p-avatar-circle {\n    border-radius: 50%;\n}\n\n.p-avatar-circle img {\n    border-radius: 50%;\n}\n\n.p-avatar-icon {\n    font-size: ").concat(dt('avatar.font.size'), ";\n}\n\n.p-avatar img {\n    width: 100%;\n    height: 100%;\n}\n\n.p-avatar-lg {\n    width: ").concat(dt('avatar.lg.width'), ";\n    height: ").concat(dt('avatar.lg.width'), ";\n    font-size: ").concat(dt('avatar.lg.font.size'), ";\n}\n\n.p-avatar-lg .p-avatar-icon {\n    font-size: ").concat(dt('avatar.lg.font.size'), ";\n}\n\n.p-avatar-xl {\n    width: ").concat(dt('avatar.xl.width'), ";\n    height: ").concat(dt('avatar.xl.width'), ";\n    font-size: ").concat(dt('avatar.xl.font.size'), ";\n}\n\n.p-avatar-xl .p-avatar-icon {\n    font-size: ").concat(dt('avatar.xl.font.size'), ";\n}\n\n.p-avatar-group {\n    display: flex;\n    align-items: center;\n}\n\n.p-avatar-group .p-avatar + .p-avatar {\n    margin-left: ").concat(dt('avatar.group.offset'), ";\n}\n\n.p-avatar-group .p-avatar {\n    border: 2px solid ").concat(dt('avatar.group.border.color'), ";\n}\n");
};
var classes$4 = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-avatar p-component', {
      'p-avatar-image': props.image != null,
      'p-avatar-circle': props.shape === 'circle',
      'p-avatar-lg': props.size === 'large',
      'p-avatar-xl': props.size === 'xlarge'
    }];
  },
  label: 'p-avatar-label',
  icon: 'p-avatar-icon'
};
var AvatarStyle = BaseStyle.extend({
  name: 'avatar',
  theme: theme$4,
  classes: classes$4
});

var theme$3 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-menubar {\n    display: flex;\n    align-items: center;\n    background: ".concat(dt('menubar.background'), ";\n    border: 1px solid ").concat(dt('menubar.border.color'), ";\n    border-radius: ").concat(dt('menubar.border.radius'), ";\n    color: ").concat(dt('menubar.color'), ";\n    padding: ").concat(dt('menubar.padding'), ";\n    gap: ").concat(dt('menubar.gap'), ";\n}\n\n.p-menubar-start,\n.p-megamenu-end {\n    display: flex;\n    align-items: center;\n}\n\n.p-menubar-root-list,\n.p-menubar-submenu {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    outline: 0 none;\n}\n\n.p-menubar-root-list {\n    align-items: center;\n    flex-wrap: wrap;\n    gap: ").concat(dt('menubar.gap'), ";\n}\n\n.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {\n    border-radius: ").concat(dt('menubar.base.item.border.radius'), ";\n}\n\n.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {\n    padding: ").concat(dt('menubar.base.item.padding'), ";\n}\n\n.p-menubar-item-content {\n    transition: background ").concat(dt('menubar.transition.duration'), ", color ").concat(dt('menubar.transition.duration'), ";\n    border-radius: ").concat(dt('menubar.item.border.radius'), ";\n    color: ").concat(dt('menubar.item.color'), ";\n}\n\n.p-menubar-item-link {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n    color: inherit;\n    padding: ").concat(dt('menubar.item.padding'), ";\n    gap: ").concat(dt('menubar.item.gap'), ";\n    user-select: none;\n    outline: 0 none;\n}\n\n.p-menubar-item-label {\n    line-height: 1;\n}\n\n.p-menubar-item-icon {\n    color: ").concat(dt('menubar.item.icon.color'), ";\n}\n\n.p-menubar-submenu-icon {\n    color: ").concat(dt('menubar.submenu.icon.color'), ";\n    margin-left: auto;\n    font-size: ").concat(dt('menubar.submenu.icon.size'), ";\n    width: ").concat(dt('menubar.submenu.icon.size'), ";\n    height: ").concat(dt('menubar.submenu.icon.size'), ";\n}\n\n.p-menubar-item.p-focus > .p-menubar-item-content {\n    color: ").concat(dt('menubar.item.focus.color'), ";\n    background: ").concat(dt('menubar.item.focus.background'), ";\n}\n\n.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {\n    color: ").concat(dt('menubar.item.icon.focus.color'), ";\n}\n\n.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {\n    color: ").concat(dt('menubar.submenu.icon.focus.color'), ";\n}\n\n.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {\n    color: ").concat(dt('menubar.item.focus.color'), ";\n    background: ").concat(dt('menubar.item.focus.background'), ";\n}\n\n.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {\n    color: ").concat(dt('menubar.item.icon.focus.color'), ";\n}\n\n.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {\n    color: ").concat(dt('menubar.submenu.icon.focus.color'), ";\n}\n\n.p-menubar-item-active > .p-menubar-item-content {\n    color: ").concat(dt('menubar.item.active.color'), ";\n    background: ").concat(dt('menubar.item.active.background'), ";\n}\n\n.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {\n    color: ").concat(dt('menubar.item.icon.active.color'), ";\n}\n\n.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {\n    color: ").concat(dt('menubar.submenu.icon.active.color'), ";\n}\n\n.p-menubar-submenu {\n    display: none;\n    position: absolute;\n    min-width: 12.5rem;\n    z-index: 1;\n    background: ").concat(dt('menubar.submenu.background'), ";\n    border: 1px solid ").concat(dt('menubar.submenu.border.color'), ";\n    border-radius: ").concat(dt('menubar.border.radius'), ";\n    box-shadow: ").concat(dt('menubar.submenu.shadow'), ";\n    color: ").concat(dt('menubar.submenu.color'), ";\n    flex-direction: column;\n    padding: ").concat(dt('menubar.submenu.padding'), ";\n    gap: ").concat(dt('menubar.submenu.gap'), ";\n}\n\n.p-menubar-submenu .p-menubar-separator {\n    border-top: 1px solid ").concat(dt('menubar.separator.border.color'), ";\n}\n\n.p-menubar-submenu .p-menubar-item {\n    position: relative;\n}\n\n .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {\n    display: block;\n    left: 100%;\n    top: 0;\n}\n\n.p-menubar-end {\n    margin-left: auto;\n    align-self: center;\n}\n\n.p-menubar-button {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    width: ").concat(dt('menubar.mobile.button.size'), ";\n    height: ").concat(dt('menubar.mobile.button.size'), ";\n    position: relative;\n    color: ").concat(dt('menubar.mobile.button.color'), ";\n    border: 0 none;\n    background: transparent;\n    border-radius: ").concat(dt('menubar.mobile.button.border.radius'), ";\n    transition: background ").concat(dt('menubar.transition.duration'), ", color ").concat(dt('menubar.transition.duration'), ", outline-color ").concat(dt('menubar.transition.duration'), ";\n    outline-color: transparent;\n}\n\n.p-menubar-button:hover {\n    color: ").concat(dt('menubar.mobile.button.hover.color'), ";\n    background: ").concat(dt('menubar.mobile.button.hover.background'), ";\n}\n\n.p-menubar-button:focus-visible {\n    box-shadow: ").concat(dt('menubar.mobile.button.focus.ring.shadow'), ";\n    outline: ").concat(dt('menubar.mobile.button.focus.ring.width'), " ").concat(dt('menubar.mobile.button.focus.ring.style'), " ").concat(dt('menubar.mobile.button.focus.ring.color'), ";\n    outline-offset: ").concat(dt('menubar.mobile.button.focus.ring.offset'), ";\n}\n\n.p-menubar-mobile {\n    position: relative;\n}\n\n.p-menubar-mobile .p-menubar-button {\n    display: flex;\n}\n\n.p-menubar-mobile .p-menubar-root-list {\n    position: absolute;\n    display: none;\n    width: 100%;\n    padding: ").concat(dt('menubar.submenu.padding'), ";\n    background: ").concat(dt('menubar.submenu.background'), ";\n    border: 1px solid ").concat(dt('menubar.submenu.border.color'), ";\n    box-shadow: ").concat(dt('menubar.submenu.shadow'), ";\n}\n\n.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {\n    border-radius: ").concat(dt('menubar.item.border.radius'), ";\n}\n\n.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {\n    padding: ").concat(dt('menubar.item.padding'), ";\n}\n\n.p-menubar-mobile-active .p-menubar-root-list {\n    display: flex;\n    flex-direction: column;\n    top: 100%;\n    left: 0;\n    z-index: 1;\n}\n\n.p-menubar-mobile .p-menubar-root-list .p-menubar-item {\n    width: 100%;\n    position: static;\n}\n\n.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {\n    border-top: 1px solid ").concat(dt('menubar.separator.border.color'), ";\n}\n\n.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {\n    margin-left: auto;\n    transition: transform 0.2s;\n}\n\n.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {\n    transform: rotate(-180deg);\n}\n\n.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {\n    transition: transform 0.2s;\n    transform: rotate(90deg);\n}\n\n.p-menubar-mobile  .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {\n    transform: rotate(-90deg);\n}\n\n.p-menubar-mobile .p-menubar-submenu {\n    width: 100%;\n    position: static;\n    box-shadow: none;\n    border: 0 none;\n    padding-left: ").concat(dt('menubar.submenu.mobile.indent'), ";\n}\n");
};
var inlineStyles$1 = {
  submenu: function submenu(_ref2) {
    var instance = _ref2.instance,
      processedItem = _ref2.processedItem;
    return {
      display: instance.isItemActive(processedItem) ? 'flex' : 'none'
    };
  }
};
var classes$3 = {
  root: function root(_ref3) {
    var instance = _ref3.instance;
    return ['p-menubar p-component', {
      'p-menubar-mobile': instance.queryMatches,
      'p-menubar-mobile-active': instance.mobileActive
    }];
  },
  start: 'p-menubar-start',
  button: 'p-menubar-button',
  rootList: 'p-menubar-root-list',
  item: function item(_ref4) {
    var instance = _ref4.instance,
      processedItem = _ref4.processedItem;
    return ['p-menubar-item', {
      'p-menubar-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-menubar-item-content',
  itemLink: 'p-menubar-item-link',
  itemIcon: 'p-menubar-item-icon',
  itemLabel: 'p-menubar-item-label',
  submenuIcon: 'p-menubar-submenu-icon',
  submenu: 'p-menubar-submenu',
  separator: 'p-menubar-separator',
  end: 'p-menubar-end'
};
var MenubarStyle = BaseStyle.extend({
  name: 'menubar',
  theme: theme$3,
  classes: classes$3,
  inlineStyles: inlineStyles$1
});

var theme$2 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-ink {\n    display: block;\n    position: absolute;\n    background: ".concat(dt('ripple.background'), ";\n    border-radius: 100%;\n    transform: scale(0);\n    pointer-events: none;\n}\n\n.p-ink-active {\n    animation: ripple 0.4s linear;\n}\n\n@keyframes ripple {\n    100% {\n        opacity: 0;\n        transform: scale(2.5);\n    }\n}\n");
};
var classes$2 = {
  root: 'p-ink'
};
var RippleStyle = BaseStyle.extend({
  name: 'ripple-directive',
  theme: theme$2,
  classes: classes$2
});

var theme$1 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-menu {\n    background: ".concat(dt('menu.background'), ";\n    color: ").concat(dt('menu.color'), ";\n    border: 1px solid ").concat(dt('menu.border.color'), ";\n    border-radius: ").concat(dt('menu.border.radius'), ";\n    min-width: 12.5rem;\n}\n\n.p-menu-list {\n    margin: 0;\n    padding: ").concat(dt('menu.list.padding'), ";\n    outline: 0 none;\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt('menu.list.gap'), ";\n}\n\n.p-menu-item-content {\n    transition: background ").concat(dt('menu.transition.duration'), ", color ").concat(dt('menu.transition.duration'), ";\n    border-radius: ").concat(dt('menu.item.border.radius'), ";\n    color: ").concat(dt('menu.item.color'), ";\n}\n\n.p-menu-item-link {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n    color: inherit;\n    padding: ").concat(dt('menu.item.padding'), ";\n    gap: ").concat(dt('menu.item.gap'), ";\n    user-select: none;\n    outline: 0 none;\n}\n\n.p-menu-item-label {\n    line-height: 1;\n}\n\n.p-menu-item-icon {\n    color: ").concat(dt('menu.item.icon.color'), ";\n}\n\n.p-menu-item.p-focus .p-menu-item-content {\n    color: ").concat(dt('menu.item.focus.color'), ";\n    background: ").concat(dt('menu.item.focus.background'), ";\n}\n\n.p-menu-item.p-focus .p-menu-item-icon {\n    color: ").concat(dt('menu.item.icon.focus.color'), ";\n}\n\n.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {\n    color: ").concat(dt('menu.item.focus.color'), ";\n    background: ").concat(dt('menu.item.focus.background'), ";\n}\n\n.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {\n    color: ").concat(dt('menu.item.icon.focus.color'), ";\n}\n\n.p-menu-overlay {\n    box-shadow: ").concat(dt('menu.shadow'), ";\n}\n\n.p-menu-submenu-label {\n    background: ").concat(dt('menu.submenu.label.background'), ";\n    padding: ").concat(dt('menu.submenu.label.padding'), ";\n    color: ").concat(dt('menu.submenu.label.color'), ";\n    font-weight: ").concat(dt('menu.submenu.label.font.weight'), ";\n}\n\n.p-menu-separator {\n    border-top: 1px solid ").concat(dt('menu.separator.border.color'), ";\n}\n");
};
var classes$1 = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-menu p-component', {
      'p-menu-overlay': props.popup
    }];
  },
  start: 'p-menu-start',
  list: 'p-menu-list',
  submenuLabel: 'p-menu-submenu-label',
  separator: 'p-menu-separator',
  end: 'p-menu-end',
  item: function item(_ref3) {
    var instance = _ref3.instance;
    return ['p-menu-item', {
      'p-focus': instance.id === instance.focusedOptionId,
      'p-disabled': instance.disabled()
    }];
  },
  itemContent: 'p-menu-item-content',
  itemLink: 'p-menu-item-link',
  itemIcon: 'p-menu-item-icon',
  itemLabel: 'p-menu-item-label'
};
var MenuStyle = BaseStyle.extend({
  name: 'menu',
  theme: theme$1,
  classes: classes$1
});

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-toast {\n    width: ".concat(dt('toast.width'), ";\n    white-space: pre-line;\n    word-break: break-word;\n}\n\n.p-toast-message {\n    margin: 0 0 1rem 0;\n}\n\n.p-toast-message-icon {\n    flex-shrink: 0;\n    font-size: ").concat(dt('toast.icon.size'), ";\n    width: ").concat(dt('toast.icon.size'), ";\n    height: ").concat(dt('toast.icon.size'), ";\n}\n\n.p-toast-message-content {\n    display: flex;\n    align-items: flex-start;\n    padding: ").concat(dt('toast.content.padding'), ";\n    gap: ").concat(dt('toast.content.gap'), ";\n}\n\n.p-toast-message-text {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt('toast.text.gap'), ";\n}\n\n.p-toast-summary {\n    font-weight: ").concat(dt('toast.summary.font.weight'), ";\n    font-size: ").concat(dt('toast.summary.font.size'), ";\n}\n\n.p-toast-detail {\n    font-weight: ").concat(dt('toast.detail.font.weight'), ";\n    font-size: ").concat(dt('toast.detail.font.size'), ";\n}\n\n.p-toast-close-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n    cursor: pointer;\n    background: transparent;\n    transition: background ").concat(dt('toast.transition.duration'), ", color ").concat(dt('toast.transition.duration'), ", outline-color ").concat(dt('toast.transition.duration'), ", box-shadow ").concat(dt('toast.transition.duration'), ";\n    outline-color: transparent;\n    color: inherit;\n    width: ").concat(dt('toast.close.button.width'), ";\n    height: ").concat(dt('toast.close.button.height'), ";\n    border-radius: ").concat(dt('toast.close.button.border.radius'), ";\n    margin: -25% 0 0 0;\n    right: -25%;\n    padding: 0;\n    border: none;\n    user-select: none;\n}\n\n.p-toast-message-info,\n.p-toast-message-success,\n.p-toast-message-warn,\n.p-toast-message-error,\n.p-toast-message-secondary,\n.p-toast-message-contrast {\n    border-width: ").concat(dt('toast.border.width'), ";\n    border-style: solid;\n    backdrop-filter: blur(").concat(dt('toast.blur'), ");\n    border-radius: ").concat(dt('toast.border.radius'), ";\n}\n\n.p-toast-close-icon {\n    font-size: ").concat(dt('toast.close.icon.size'), ";\n    width: ").concat(dt('toast.close.icon.size'), ";\n    height: ").concat(dt('toast.close.icon.size'), ";\n}\n\n.p-toast-close-button:focus-visible {\n    outline-width: ").concat(dt('focus.ring.width'), ";\n    outline-style: ").concat(dt('focus.ring.style'), ";\n    outline-offset: ").concat(dt('focus.ring.offset'), ";\n}\n\n.p-toast-message-info {\n    background: ").concat(dt('toast.info.background'), ";\n    border-color: ").concat(dt('toast.info.border.color'), ";\n    color: ").concat(dt('toast.info.color'), ";\n    box-shadow: ").concat(dt('toast.info.shadow'), ";\n}\n\n.p-toast-message-info .p-toast-detail {\n    color: ").concat(dt('toast.info.detail.color'), ";\n}\n\n.p-toast-message-info .p-toast-close-button:focus-visible {\n    outline-color: ").concat(dt('toast.info.close.button.focus.ring.color'), ";\n    box-shadow: ").concat(dt('toast.info.close.button.focus.ring.shadow'), ";\n}\n\n.p-toast-message-info .p-toast-close-button:hover {\n    background: ").concat(dt('toast.info.close.button.hover.background'), ";\n}\n\n.p-toast-message-success {\n    background: ").concat(dt('toast.success.background'), ";\n    border-color: ").concat(dt('toast.success.border.color'), ";\n    color: ").concat(dt('toast.success.color'), ";\n    box-shadow: ").concat(dt('toast.success.shadow'), ";\n}\n\n.p-toast-message-success .p-toast-detail {\n    color: ").concat(dt('toast.success.detail.color'), ";\n}\n\n.p-toast-message-success .p-toast-close-button:focus-visible {\n    outline-color: ").concat(dt('toast.success.close.button.focus.ring.color'), ";\n    box-shadow: ").concat(dt('toast.success.close.button.focus.ring.shadow'), ";\n}\n\n.p-toast-message-success .p-toast-close-button:hover {\n    background: ").concat(dt('toast.success.close.button.hover.background'), ";\n}\n\n.p-toast-message-warn {\n    background: ").concat(dt('toast.warn.background'), ";\n    border-color: ").concat(dt('toast.warn.border.color'), ";\n    color: ").concat(dt('toast.warn.color'), ";\n    box-shadow: ").concat(dt('toast.warn.shadow'), ";\n}\n\n.p-toast-message-warn .p-toast-detail {\n    color: ").concat(dt('toast.warn.detail.color'), ";\n}\n\n.p-toast-message-warn .p-toast-close-button:focus-visible {\n    outline-color: ").concat(dt('toast.warn.close.button.focus.ring.color'), ";\n    box-shadow: ").concat(dt('toast.warn.close.button.focus.ring.shadow'), ";\n}\n\n.p-toast-message-warn .p-toast-close-button:hover {\n    background: ").concat(dt('toast.warn.close.button.hover.background'), ";\n}\n\n.p-toast-message-error {\n    background: ").concat(dt('toast.error.background'), ";\n    border-color: ").concat(dt('toast.error.border.color'), ";\n    color: ").concat(dt('toast.error.color'), ";\n    box-shadow: ").concat(dt('toast.error.shadow'), ";\n}\n\n.p-toast-message-error .p-toast-detail {\n    color: ").concat(dt('toast.error.detail.color'), ";\n}\n\n.p-toast-message-error .p-toast-close-button:focus-visible {\n    outline-color: ").concat(dt('toast.error.close.button.focus.ring.color'), ";\n    box-shadow: ").concat(dt('toast.error.close.button.focus.ring.shadow'), ";\n}\n\n.p-toast-message-error .p-toast-close-button:hover {\n    background: ").concat(dt('toast.error.close.button.hover.background'), ";\n}\n\n.p-toast-message-secondary {\n    background: ").concat(dt('toast.secondary.background'), ";\n    border-color: ").concat(dt('toast.secondary.border.color'), ";\n    color: ").concat(dt('toast.secondary.color'), ";\n    box-shadow: ").concat(dt('toast.secondary.shadow'), ";\n}\n\n.p-toast-message-secondary .p-toast-detail {\n    color: ").concat(dt('toast.secondary.detail.color'), ";\n}\n\n.p-toast-message-secondary .p-toast-close-button:focus-visible {\n    outline-color: ").concat(dt('toast.secondary.close.button.focus.ring.color'), ";\n    box-shadow: ").concat(dt('toast.secondary.close.button.focus.ring.shadow'), ";\n}\n\n.p-toast-message-secondary .p-toast-close-button:hover {\n    background: ").concat(dt('toast.secondary.close.button.hover.background'), ";\n}\n\n.p-toast-message-contrast {\n    background: ").concat(dt('toast.contrast.background'), ";\n    border-color: ").concat(dt('toast.contrast.border.color'), ";\n    color: ").concat(dt('toast.contrast.color'), ";\n    box-shadow: ").concat(dt('toast.contrast.shadow'), ";\n}\n\n.p-toast-message-contrast .p-toast-detail {\n    color: ").concat(dt('toast.contrast.detail.color'), ";\n}\n\n.p-toast-message-contrast .p-toast-close-button:focus-visible {\n    outline-color: ").concat(dt('toast.contrast.close.button.focus.ring.color'), ";\n    box-shadow: ").concat(dt('toast.contrast.close.button.focus.ring.shadow'), ";\n}\n\n.p-toast-message-contrast .p-toast-close-button:hover {\n    background: ").concat(dt('toast.contrast.close.button.hover.background'), ";\n}\n\n.p-toast-top-center {\n    transform: translateX(-50%);\n}\n\n.p-toast-bottom-center {\n    transform: translateX(-50%);\n}\n\n.p-toast-center {\n    min-width: 20vw;\n    transform: translate(-50%, -50%);\n}\n\n.p-toast-message-enter-from {\n    opacity: 0;\n    transform: translateY(50%);\n}\n\n.p-toast-message-leave-from {\n    max-height: 1000px;\n}\n\n.p-toast .p-toast-message.p-toast-message-leave-to {\n    max-height: 0;\n    opacity: 0;\n    margin-bottom: 0;\n    overflow: hidden;\n}\n\n.p-toast-message-enter-active {\n    transition: transform 0.3s, opacity 0.3s;\n}\n\n.p-toast-message-leave-active {\n    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;\n}\n");
};

// Position
var inlineStyles = {
  root: function root(_ref2) {
    var position = _ref2.position;
    return {
      position: 'fixed',
      top: position === 'top-right' || position === 'top-left' || position === 'top-center' ? '20px' : position === 'center' ? '50%' : null,
      right: (position === 'top-right' || position === 'bottom-right') && '20px',
      bottom: (position === 'bottom-left' || position === 'bottom-right' || position === 'bottom-center') && '20px',
      left: position === 'top-left' || position === 'bottom-left' ? '20px' : position === 'center' || position === 'top-center' || position === 'bottom-center' ? '50%' : null
    };
  }
};
var classes = {
  root: function root(_ref3) {
    var props = _ref3.props;
    return ['p-toast p-component p-toast-' + props.position];
  },
  message: function message(_ref4) {
    var props = _ref4.props;
    return ['p-toast-message', {
      'p-toast-message-info': props.message.severity === 'info' || props.message.severity === undefined,
      'p-toast-message-warn': props.message.severity === 'warn',
      'p-toast-message-error': props.message.severity === 'error',
      'p-toast-message-success': props.message.severity === 'success',
      'p-toast-message-secondary': props.message.severity === 'secondary',
      'p-toast-message-contrast': props.message.severity === 'contrast'
    }];
  },
  messageContent: 'p-toast-message-content',
  messageIcon: function messageIcon(_ref5) {
    var props = _ref5.props;
    return ['p-toast-message-icon', _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, props.infoIcon, props.message.severity === 'info'), props.warnIcon, props.message.severity === 'warn'), props.errorIcon, props.message.severity === 'error'), props.successIcon, props.message.severity === 'success')];
  },
  messageText: 'p-toast-message-text',
  summary: 'p-toast-summary',
  detail: 'p-toast-detail',
  closeButton: 'p-toast-close-button',
  closeIcon: 'p-toast-close-icon'
};
var ToastStyle = BaseStyle.extend({
  name: 'toast',
  theme: theme,
  classes: classes,
  inlineStyles: inlineStyles
});

const runtimeConfig = useRuntimeConfig();
const config = runtimeConfig?.public?.primevue ?? {};
const { options = {} } = config;

const stylesToTop = [].join('');
const styleProps = {
  
};
const styles$2 = [
  ,
  BaseStyle && BaseStyle.getStyleSheet ? BaseStyle.getStyleSheet(undefined, styleProps) : '',ChartStyle && ChartStyle.getStyleSheet ? ChartStyle.getStyleSheet(undefined, styleProps) : '',ButtonStyle && ButtonStyle.getStyleSheet ? ButtonStyle.getStyleSheet(undefined, styleProps) : '',FileUploadStyle && FileUploadStyle.getStyleSheet ? FileUploadStyle.getStyleSheet(undefined, styleProps) : '',ToolbarStyle && ToolbarStyle.getStyleSheet ? ToolbarStyle.getStyleSheet(undefined, styleProps) : '',InputIconStyle && InputIconStyle.getStyleSheet ? InputIconStyle.getStyleSheet(undefined, styleProps) : '',InputTextStyle && InputTextStyle.getStyleSheet ? InputTextStyle.getStyleSheet(undefined, styleProps) : '',IconFieldStyle && IconFieldStyle.getStyleSheet ? IconFieldStyle.getStyleSheet(undefined, styleProps) : '',ColumnStyle && ColumnStyle.getStyleSheet ? ColumnStyle.getStyleSheet(undefined, styleProps) : '',InputNumberStyle && InputNumberStyle.getStyleSheet ? InputNumberStyle.getStyleSheet(undefined, styleProps) : '',RatingStyle && RatingStyle.getStyleSheet ? RatingStyle.getStyleSheet(undefined, styleProps) : '',DataTableStyle && DataTableStyle.getStyleSheet ? DataTableStyle.getStyleSheet(undefined, styleProps) : '',TextareaStyle && TextareaStyle.getStyleSheet ? TextareaStyle.getStyleSheet(undefined, styleProps) : '',DialogStyle && DialogStyle.getStyleSheet ? DialogStyle.getStyleSheet(undefined, styleProps) : '',BadgeStyle && BadgeStyle.getStyleSheet ? BadgeStyle.getStyleSheet(undefined, styleProps) : '',AvatarStyle && AvatarStyle.getStyleSheet ? AvatarStyle.getStyleSheet(undefined, styleProps) : '',MenubarStyle && MenubarStyle.getStyleSheet ? MenubarStyle.getStyleSheet(undefined, styleProps) : '',RippleStyle && RippleStyle.getStyleSheet ? RippleStyle.getStyleSheet(undefined, styleProps) : '',MenuStyle && MenuStyle.getStyleSheet ? MenuStyle.getStyleSheet(undefined, styleProps) : '',ToastStyle && ToastStyle.getStyleSheet ? ToastStyle.getStyleSheet(undefined, styleProps) : ''
].join('');

Theme.setTheme(options?.theme);

const themes = [
    BaseStyle && BaseStyle.getCommonThemeStyleSheet ? BaseStyle.getCommonThemeStyleSheet(undefined, styleProps) : '',
    BaseStyle && BaseStyle.getThemeStyleSheet ? BaseStyle.getThemeStyleSheet(undefined, styleProps) : '',ChartStyle && ChartStyle.getThemeStyleSheet ? ChartStyle.getThemeStyleSheet(undefined, styleProps) : '',ButtonStyle && ButtonStyle.getThemeStyleSheet ? ButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',FileUploadStyle && FileUploadStyle.getThemeStyleSheet ? FileUploadStyle.getThemeStyleSheet(undefined, styleProps) : '',ToolbarStyle && ToolbarStyle.getThemeStyleSheet ? ToolbarStyle.getThemeStyleSheet(undefined, styleProps) : '',InputIconStyle && InputIconStyle.getThemeStyleSheet ? InputIconStyle.getThemeStyleSheet(undefined, styleProps) : '',InputTextStyle && InputTextStyle.getThemeStyleSheet ? InputTextStyle.getThemeStyleSheet(undefined, styleProps) : '',IconFieldStyle && IconFieldStyle.getThemeStyleSheet ? IconFieldStyle.getThemeStyleSheet(undefined, styleProps) : '',ColumnStyle && ColumnStyle.getThemeStyleSheet ? ColumnStyle.getThemeStyleSheet(undefined, styleProps) : '',InputNumberStyle && InputNumberStyle.getThemeStyleSheet ? InputNumberStyle.getThemeStyleSheet(undefined, styleProps) : '',RatingStyle && RatingStyle.getThemeStyleSheet ? RatingStyle.getThemeStyleSheet(undefined, styleProps) : '',DataTableStyle && DataTableStyle.getThemeStyleSheet ? DataTableStyle.getThemeStyleSheet(undefined, styleProps) : '',TextareaStyle && TextareaStyle.getThemeStyleSheet ? TextareaStyle.getThemeStyleSheet(undefined, styleProps) : '',DialogStyle && DialogStyle.getThemeStyleSheet ? DialogStyle.getThemeStyleSheet(undefined, styleProps) : '',BadgeStyle && BadgeStyle.getThemeStyleSheet ? BadgeStyle.getThemeStyleSheet(undefined, styleProps) : '',AvatarStyle && AvatarStyle.getThemeStyleSheet ? AvatarStyle.getThemeStyleSheet(undefined, styleProps) : '',MenubarStyle && MenubarStyle.getThemeStyleSheet ? MenubarStyle.getThemeStyleSheet(undefined, styleProps) : '',RippleStyle && RippleStyle.getThemeStyleSheet ? RippleStyle.getThemeStyleSheet(undefined, styleProps) : '',MenuStyle && MenuStyle.getThemeStyleSheet ? MenuStyle.getThemeStyleSheet(undefined, styleProps) : '',ToastStyle && ToastStyle.getThemeStyleSheet ? ToastStyle.getThemeStyleSheet(undefined, styleProps) : ''
].join('');

const defineNitroPlugin = (def) => def;
const _vlE3K7nAkp = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", (html) => {
    html.head.unshift(stylesToTop);
    html.head.push(styles$2);
    html.head.push(themes);
  });
});

const plugins = [
  _ElvNUBavSN,
_vlE3K7nAkp
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const _lazy_qtgGFQ = () => Promise.resolve().then(function () { return Productslist$1; });
const _lazy_CrOPQf = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/Productslist', handler: _lazy_qtgGFQ, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_CrOPQf, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_CrOPQf, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (d === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (a) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = { "appName": "Nuxt", "version": "", "statusCode": 500, "statusMessage": "Server error", "description": "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.", "stack": "" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return "<!DOCTYPE html><html data-critters-container><head><title>" + messages.statusCode + " - " + messages.statusMessage + " | " + messages.appName + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}h1,p,pre{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.h-auto{height:auto}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.overflow-y-auto{overflow-y:auto}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-black\\/5{background-color:#0000000d}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0 / var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme: dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0 / var(--un-bg-opacity))}.dark\\:bg-white\\/10{background-color:#ffffff1a}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}}@media (min-width: 640px){.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-8xl{font-size:6rem;line-height:1}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();<\/script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">` + messages.statusCode + '</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' + messages.description + '</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' + messages.stack + "</pre></div></body></html>";
};

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const Productslist = defineEventHandler((event) => {
  return [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 }
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 }
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: { rate: 4.7, count: 500 }
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: { rate: 2.1, count: 430 }
    },
    {
      id: 5,
      title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 4.6, count: 400 }
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3.9, count: 70 }
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3, count: 400 }
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 1.9, count: 100 }
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user\u2019s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: { rate: 3.3, count: 203 }
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5\u201D hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: { rate: 2.9, count: 470 }
    },
    {
      id: 11,
      title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      price: 109,
      description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      rating: { rate: 4.8, count: 319 }
    },
    {
      id: 12,
      title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 114,
      description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      rating: { rate: 4.8, count: 400 }
    },
    {
      id: 13,
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      price: 599,
      description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      rating: { rate: 2.9, count: 250 }
    },
    {
      id: 14,
      title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) \u2013 Super Ultrawide Screen QLED ",
      price: 999.99,
      description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      rating: { rate: 2.2, count: 140 }
    },
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      rating: { rate: 2.6, count: 235 }
    },
    {
      id: 16,
      title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price: 29.95,
      description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      rating: { rate: 2.9, count: 340 }
    },
    {
      id: 17,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: 39.99,
      description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      rating: { rate: 3.8, count: 679 }
    },
    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      price: 9.85,
      description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      rating: { rate: 4.7, count: 130 }
    },
    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      rating: { rate: 4.5, count: 146 }
    },
    {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      rating: { rate: 3.6, count: 145 }
    }
  ];
});

const Productslist$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: Productslist
});

const Vue3 = version.startsWith("3");

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = true ? [CapoPlugin({ track: true })] : [];

const renderSSRHeadOptions = {};

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file://C:/projects/vue3-assessment/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file://C:/projects/vue3-assessment/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG);
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload = {
      serverRendered: false
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const ISLAND_SUFFIX_RE = /\.json(\?.*)?$/;
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const PAYLOAD_URL_RE = /\/_payload.json(\?.*)?$/ ;
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = Number.parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const isRenderingIsland = event.path.startsWith("/__nuxt_island");
  const islandContext = isRenderingIsland ? await getIslandContext(event) : void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !isRenderingIsland;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  if (!isRenderingIsland) {
    head.push(appHead, headEntryOptions);
  }
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !isRenderingIsland || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    modules: /* @__PURE__ */ new Set(),
    set _registeredComponents(value) {
      this.modules = value;
    },
    get _registeredComponents() {
      return this.modules;
    },
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = isRenderingIsland ? await renderInlineStyles(ssrContext.modules ?? []) : [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  head.push({ style: inlinedStyles });
  if (!isRenderingIsland || true) {
    const link = [];
    for (const style in styles) {
      const resource = styles[style];
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (!isRenderingIsland || resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file) });
      }
    }
    head.push({ link }, headEntryOptions);
  }
  if (!NO_SCRIPTS && !isRenderingIsland) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts && !isRenderingIsland) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition: "head",
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head, renderSSRHeadOptions);
  const htmlContext = {
    island: isRenderingIsland,
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  if (isRenderingIsland && islandContext) {
    const islandHead = {
      link: [],
      style: []
    };
    for (const tag of await head.resolveTags()) {
      if (tag.tag === "link") {
        islandHead.link.push({ key: "island-link-" + hash(tag.props), ...tag.props });
      } else if (tag.tag === "style" && tag.innerHTML) {
        islandHead.style.push({ key: "island-style-" + hash(tag.innerHTML), innerHTML: tag.innerHTML });
      }
    }
    const islandResponse = {
      id: islandContext.id,
      head: islandHead,
      html: getServerComponentHTML(htmlContext.body),
      components: getClientIslandResponse(ssrContext),
      slots: getSlotIslandResponse(ssrContext)
    };
    await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
    const response2 = {
      body: JSON.stringify(islandResponse, null, 2),
      statusCode: getResponseStatus(event),
      statusMessage: getResponseStatusText(event),
      headers: {
        "content-type": "application/json;charset=utf-8",
        "x-powered-by": "Nuxt"
      }
    };
    return response2;
  }
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "id": opts.id,
    "innerHTML": contents,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(opts.ssrContext.config)}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}
function getServerComponentHTML(body) {
  const match = body[0].match(ROOT_NODE_REGEX);
  return match ? match[1] : body[0];
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=[^;]*;(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const slot in ssrContext.islandContext.slots) {
    response[slot] = {
      ...ssrContext.islandContext.slots[slot],
      fallback: ssrContext.teleports?.[`island-fallback=${slot}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const clientUid in ssrContext.islandContext.components) {
    const html = ssrContext.teleports?.[clientUid] || "";
    response[clientUid] = {
      ...ssrContext.islandContext.components[clientUid],
      html,
      slots: getComponentSlotTeleport(ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, slot] = match;
      if (!slot) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
