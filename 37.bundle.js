(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{317:function(n,s,a){"use strict";a.r(s),s.default='<p>The entry object is where webpack looks to start building the bundle. The context is an absolute string to the directory that contains the entry files.</p>\n<h2 id="context"><code>context</code><a href="#context" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>string</code></p>\n<p>The base directory, an <strong>absolute path</strong>, for resolving entry points and loaders from configuration.</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  context<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'app\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>By default the current directory is used, but it\'s recommended to pass a value in your configuration. This makes your configuration independent from CWD (current working directory).</p>\n<hr>\n<h2 id="entry"><code>entry</code><a href="#entry" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>string | [string] | object { &#x3C;key>: string | [string] } | (function: () => string | [string] | object { &#x3C;key>: string | [string] })</code></p>\n<p>The point or points to enter the application. At this point the application starts executing. If an array is passed all items will be executed.</p>\n<p>A dynamically loaded module is <strong>not</strong> an entry point.</p>\n<p>Simple rule: one entry point per HTML page. SPA: one entry point, MPA: multiple entry points.</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    home<span class="token punctuation">:</span> <span class="token string">\'./home.js\'</span><span class="token punctuation">,</span>\n    about<span class="token punctuation">:</span> <span class="token string">\'./about.js\'</span><span class="token punctuation">,</span>\n    contact<span class="token punctuation">:</span> <span class="token string">\'./contact.js\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="naming">Naming<a href="#naming" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>If a string or array of strings is passed, the chunk is named <code>main</code>. If an object is passed, each key is the name of a chunk, and the value describes the entry point for the chunk.</p>\n<h3 id="dynamic-entry">Dynamic entry<a href="#dynamic-entry" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>If a function is passed then it will be invoked on every <a href="/api/compiler-hooks/#make">make</a> event.</p>\n<blockquote>\n<p>Note that the make event triggers when webpack starts and for every invalidation when <a href="/configuration/watch/">watching for file changes</a>.</p>\n</blockquote>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">\'./demo\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>or</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'./demo\'</span><span class="token punctuation">,</span> <span class="token string">\'./demo2\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>For example: you can use dynamic entries to get the actual entries from an external source (remote server, file system content or database):</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function">entry</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">fetchPathsFromSomeExternalSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns a promise that will be resolved with something like [\'src/main-layout.js\', \'src/admin-layout.js\']</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>When combining with the <a href="/configuration/output#outputlibrary"><code>output.library</code></a> option: If an array is passed only the last item is exported.</p>\n'}}]);