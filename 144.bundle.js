(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{426:function(n,s,a){"use strict";a.r(s),s.default='<p>The <code>CommonsChunkPlugin</code> is an opt-in feature that creates a separate file (known as a chunk), consisting of common modules shared between multiple entry points.</p>\n<blockquote class="warning">\n<p>The CommonsChunkPlugin has been removed in webpack v4 legato. To learn how chunks are treated in the latest version, check out the <a href="/plugins/split-chunks-plugin/">SplitChunksPlugin</a>.</p>\n</blockquote>\n<p>By separating common modules from bundles, the resulting chunked file can be loaded once initially, and stored in cache for later use. This results in page speed optimizations as the browser can quickly serve the shared code from cache, rather than being forced to load a larger bundle whenever a new page is visited.</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunkPlugin</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n\x3c!-- eslint-skip --\x3e\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> string<span class="token punctuation">,</span> <span class="token comment">// or</span>\n  names<span class="token punctuation">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// The chunk name of the commons chunk. An existing chunk can be selected by passing a name of an existing chunk.</span>\n  <span class="token comment">// If an array of strings is passed this is equal to invoking the plugin multiple times for each chunk name.</span>\n  <span class="token comment">// If omitted and `options.async` or `options.children` is set all chunks are used, otherwise `options.filename`</span>\n  <span class="token comment">// is used as chunk name.</span>\n  <span class="token comment">// When using `options.async` to create common chunks from other async chunks you must specify an entry-point</span>\n  <span class="token comment">// chunk name here instead of omitting the `option.name`.</span>\n\n  filename<span class="token punctuation">:</span> string<span class="token punctuation">,</span>\n  <span class="token comment">// The filename template for the commons chunk. Can contain the same placeholders as `output.filename`.</span>\n  <span class="token comment">// If omitted the original filename is not modified (usually `output.filename` or `output.chunkFilename`).</span>\n  <span class="token comment">// This option is not permitted if you\'re using `options.async` as well, see below for more details.</span>\n\n  minChunks<span class="token punctuation">:</span> number<span class="token operator">|</span><span class="token number">Infinity</span><span class="token operator">|</span><span class="token keyword">function</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> count<span class="token punctuation">)</span> <span class="token operator">=></span> boolean<span class="token punctuation">,</span>\n  <span class="token comment">// The minimum number of chunks which need to contain a module before it\'s moved into the commons chunk.</span>\n  <span class="token comment">// The number must be greater than or equal 2 and lower than or equal to the number of chunks.</span>\n  <span class="token comment">// Passing `Infinity` just creates the commons chunk, but moves no modules into it.</span>\n  <span class="token comment">// By providing a `function` you can add custom logic. (Defaults to the number of chunks)</span>\n\n  chunks<span class="token punctuation">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// Select the source chunks by chunk names. The chunk must be a child of the commons chunk.</span>\n  <span class="token comment">// If omitted all entry chunks are selected.</span>\n\n  children<span class="token punctuation">:</span> boolean<span class="token punctuation">,</span>\n  <span class="token comment">// If `true` all children of the commons chunk are selected</span>\n\n  deepChildren<span class="token punctuation">:</span> boolean<span class="token punctuation">,</span>\n  <span class="token comment">// If `true` all descendants of the commons chunk are selected</span>\n\n  <span class="token keyword">async</span><span class="token punctuation">:</span> boolean<span class="token operator">|</span>string<span class="token punctuation">,</span>\n  <span class="token comment">// If `true` a new async commons chunk is created as child of `options.name` and sibling of `options.chunks`.</span>\n  <span class="token comment">// It is loaded in parallel with `options.chunks`.</span>\n  <span class="token comment">// Instead of using `option.filename`, it is possible to change the name of the output file by providing</span>\n  <span class="token comment">// the desired string here instead of `true`.</span>\n\n  minSize<span class="token punctuation">:</span> number<span class="token punctuation">,</span>\n  <span class="token comment">// Minimum size of all common module before a commons chunk is created.</span>\n<span class="token punctuation">}</span></code></pre>\n<blockquote class="tip">\n<p>The deprecated webpack 1 constructor <code>new webpack.optimize.CommonsChunkPlugin(options, filenameTemplate, selectedChunks, minChunks)</code> is no longer supported. Use a corresponding options object instead.</p>\n</blockquote>\n<h2 id="examples">Examples<a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="commons-chunk-for-entries">Commons chunk for entries<a href="#commons-chunk-for-entries" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Generate an extra chunk, which contains common modules shared between entry points.</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'commons\'</span><span class="token punctuation">,</span>\n  <span class="token comment">// (the commons chunk name)</span>\n\n  filename<span class="token punctuation">:</span> <span class="token string">\'commons.js\'</span><span class="token punctuation">,</span>\n  <span class="token comment">// (the filename of the commons chunk)</span>\n\n  <span class="token comment">// minChunks: 3,</span>\n  <span class="token comment">// (Modules must be shared between 3 entries)</span>\n\n  <span class="token comment">// chunks: ["pageA", "pageB"],</span>\n  <span class="token comment">// (Only use these entries)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>You must load the generated chunk before the entry point:</p>\n<pre><code class="hljs language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>commons.js<span class="token punctuation">"</span></span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>entry.bundle.js<span class="token punctuation">"</span></span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n<h3 id="explicit-vendor-chunk">Explicit vendor chunk<a href="#explicit-vendor-chunk" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Split your code into vendor and application.</p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    vendor<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'jquery\'</span><span class="token punctuation">,</span> <span class="token string">\'other-lib\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    app<span class="token punctuation">:</span> <span class="token string">\'./entry\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      name<span class="token punctuation">:</span> <span class="token string">\'vendor\'</span><span class="token punctuation">,</span>\n      <span class="token comment">// filename: "vendor.js"</span>\n      <span class="token comment">// (Give the chunk a different name)</span>\n\n      minChunks<span class="token punctuation">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>\n      <span class="token comment">// (with more entries, this ensures that no other module</span>\n      <span class="token comment">//  goes into the vendor chunk)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<pre><code class="hljs language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vendor.js<span class="token punctuation">"</span></span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>app.js<span class="token punctuation">"</span></span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n<blockquote class="tip">\n<p>In combination with long term caching you may need to use the <a href="https://github.com/soundcloud/chunk-manifest-webpack-plugin"><code>ChunkManifestWebpackPlugin</code></a> to avoid the vendor chunk changes. You should also use records to ensure stable module ids, e.g. using <code>NamedModulesPlugin</code> or <a href="/plugins/hashed-module-ids-plugin"><code>HashedModuleIdsPlugin</code></a>.</p>\n</blockquote>\n<h3 id="move-common-modules-into-the-parent-chunk">Move common modules into the parent chunk<a href="#move-common-modules-into-the-parent-chunk" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>With <a href="/guides/code-splitting">Code Splitting</a>, multiple child chunks of an entry chunk can have common dependencies. To prevent duplication these can be moved into the parent. This reduces overall size, but does have a negative effect on the initial load time. If it is expected that users will need to download many sibling chunks, i.e. children of the entry chunk, then this should improve load time overall.</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">// names: ["app", "subPageA"]</span>\n  <span class="token comment">// (choose the chunks, or omit for all chunks)</span>\n\n  children<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token comment">// (select all children of chosen chunks)</span>\n\n  <span class="token comment">// minChunks: 3,</span>\n  <span class="token comment">// (3 children must share the module before it\'s moved)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="extra-async-commons-chunk">Extra async commons chunk<a href="#extra-async-commons-chunk" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Similar to the above one, but instead of moving common modules into the parent (which increases initial load time) a new async-loaded additional commons chunk is used. This is automatically downloaded in parallel when the additional chunk is downloaded.</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'app\'</span><span class="token punctuation">,</span>\n  <span class="token comment">// or</span>\n  names<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'app\'</span><span class="token punctuation">,</span> <span class="token string">\'subPageA\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// the name or list of names must match the name or names</span>\n  <span class="token comment">// of the entry points that create the async chunks</span>\n\n  children<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token comment">// (use all children of the chunk)</span>\n\n  <span class="token keyword">async</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token comment">// (create an async commons chunk)</span>\n\n  minChunks<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n  <span class="token comment">// (3 children must share the module before it\'s separated)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="passing-the-minchunks-property-a-function">Passing the <code>minChunks</code> property a function<a href="#passing-the-minchunks-property-a-function" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>You also have the ability to pass the <code>minChunks</code> property a function. This function is called by the <code>CommonsChunkPlugin</code> and calls the function with <code>module</code> and <code>count</code> arguments.</p>\n<p>The <code>module</code> argument represents each module in the chunks you have provided via the <code>name</code>/<code>names</code> property.\n<code>module</code> has the shape of a <a href="https://github.com/webpack/webpack/blob/master/lib/NormalModule.js">NormalModule</a>, which has two particularly useful properties for this use case:</p>\n<ul>\n<li><code>module.context</code>: The directory that stores the file. For example: <code>\'/my_project/node_modules/example-dependency\'</code></li>\n<li><code>module.resource</code>: The name of the file being processed. For example: <code>\'/my_project/node_modules/example-dependency/index.js\'</code></li>\n</ul>\n<p>The <code>count</code> argument represents how many chunks the <code>module</code> is used in.</p>\n<p>This option is useful when you want to have fine-grained control over how the CommonsChunk algorithm determines where modules should be moved to.</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'my-single-lib-chunk\'</span><span class="token punctuation">,</span>\n  filename<span class="token punctuation">:</span> <span class="token string">\'my-single-lib-chunk.js\'</span><span class="token punctuation">,</span>\n  minChunks<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// If module has a path, and inside of the path exists the name "somelib",</span>\n    <span class="token comment">// and it is used in 3 separate chunks/entries, then break it out into</span>\n    <span class="token comment">// a separate chunk with chunk keyname "my-single-lib-chunk", and filename "my-single-lib-chunk.js"</span>\n    <span class="token keyword">return</span> module<span class="token punctuation">.</span>resource <span class="token operator">&#x26;&#x26;</span> <span class="token punctuation">(</span><span class="token regex">/somelib/</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>resource<span class="token punctuation">)</span> <span class="token operator">&#x26;&#x26;</span> count <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>As seen above, this example allows you to move only one lib to a separate file if and only if all conditions are met inside the function.</p>\n<p>This concept may be used to obtain implicit common vendor chunks:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'vendor\'</span><span class="token punctuation">,</span>\n  minChunks<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>module<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// this assumes your vendor imports exist in the node_modules directory</span>\n    <span class="token keyword">return</span> module<span class="token punctuation">.</span>context <span class="token operator">&#x26;&#x26;</span> module<span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">\'node_modules\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>In order to obtain a single CSS file containing your application and vendor CSS, use the following <code>minChunks</code> function together with <a href="/plugins/extract-text-webpack-plugin/"><code>ExtractTextPlugin</code></a>:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'vendor\'</span><span class="token punctuation">,</span>\n  minChunks<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>module<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// This prevents stylesheet resources with the .css or .scss extension</span>\n    <span class="token comment">// from being moved from their original chunk to the vendor chunk</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>resource <span class="token operator">&#x26;&#x26;</span> <span class="token punctuation">(</span><span class="token regex">/^.*\\.(css|scss)$/</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>resource<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> module<span class="token punctuation">.</span>context <span class="token operator">&#x26;&#x26;</span> module<span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">\'node_modules\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="manifest-file">Manifest file<a href="#manifest-file" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To extract the webpack bootstrap logic into a separate file, use the <code>CommonsChunkPlugin</code> on a <code>name</code> which is not defined as <code>entry</code>. Commonly the name <code>manifest</code> is used. See the <a href="/guides/caching">caching guide</a> for details.</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'manifest\'</span><span class="token punctuation">,</span>\n  minChunks<span class="token punctuation">:</span> <span class="token number">Infinity</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="combining-implicit-common-vendor-chunks-and-manifest-file">Combining implicit common vendor chunks and manifest file<a href="#combining-implicit-common-vendor-chunks-and-manifest-file" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Since the <code>vendor</code> and <code>manifest</code> chunk use a different definition for <code>minChunks</code>, you need to invoke the plugin twice:</p>\n<pre><code class="hljs language-javascript"><span class="token punctuation">[</span>\n  <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    name<span class="token punctuation">:</span> <span class="token string">\'vendor\'</span><span class="token punctuation">,</span>\n    minChunks<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>module<span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token keyword">return</span> module<span class="token punctuation">.</span>context <span class="token operator">&#x26;&#x26;</span> module<span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">\'node_modules\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    name<span class="token punctuation">:</span> <span class="token string">\'manifest\'</span><span class="token punctuation">,</span>\n    minChunks<span class="token punctuation">:</span> <span class="token number">Infinity</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span></code></pre>\n<h2 id="more-examples">More Examples<a href="#more-examples" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="https://github.com/webpack/webpack/tree/master/examples/common-chunk-and-vendor-chunk">Common and Vendor Chunks</a></li>\n<li><a href="https://github.com/webpack/webpack/tree/8b888fedfaeaac6bd39168c0952cc19e6c34280a/examples/multiple-commons-chunks">Multiple Common Chunks</a></li>\n<li><a href="https://github.com/webpack/webpack/tree/8b888fedfaeaac6bd39168c0952cc19e6c34280a/examples/multiple-entry-points-commons-chunk-css-bundle">Multiple Entry Points with Commons Chunk</a></li>\n</ul>\n'}}]);