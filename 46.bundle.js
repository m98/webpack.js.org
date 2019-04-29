(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{328:function(n,s,e){"use strict";e.r(s),s.default='<p>These options change how modules are resolved. webpack provides reasonable defaults, but it is possible to change the resolving in detail. Have a look at <a href="/concepts/module-resolution">Module Resolution</a> for more explanation of how the resolver works.</p>\n<h2 id="resolve"><code>resolve</code><a href="#resolve" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>object</code></p>\n<p>Configure how modules are resolved. For example, when calling <code>import \'lodash\'</code> in ES2015, the <code>resolve</code> options can change where webpack goes to look for <code>\'lodash\'</code> (see <a href="#resolvemodules"><code>modules</code></a>).</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// configuration options</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="resolvealias"><code>resolve.alias</code><a href="#resolvealias" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>object</code></p>\n<p>Create aliases to <code>import</code> or <code>require</code> certain modules more easily. For example, to alias a bunch of commonly used <code>src/</code> folders:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    alias<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      Utilities<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'src/utilities/\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      Templates<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'src/templates/\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>Now, instead of using relative paths when importing like so:</p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> Utility <span class="token keyword">from</span> <span class="token string">\'../../utilities/utility\'</span><span class="token punctuation">;</span></code></pre>\n<p>you can use the alias:</p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> Utility <span class="token keyword">from</span> <span class="token string">\'Utilities/utility\'</span><span class="token punctuation">;</span></code></pre>\n<p>A trailing <code>$</code> can also be added to the given object\'s keys to signify an exact match:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    alias<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      xyz$<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'path/to/file.js\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>which would yield these results:</p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> Test1 <span class="token keyword">from</span> <span class="token string">\'xyz\'</span><span class="token punctuation">;</span> <span class="token comment">// Exact match, so path/to/file.js is resolved and imported</span>\n<span class="token keyword">import</span> Test2 <span class="token keyword">from</span> <span class="token string">\'xyz/file.js\'</span><span class="token punctuation">;</span> <span class="token comment">// Not an exact match, normal resolution takes place</span></code></pre>\n<p>The following table explains other cases:</p>\n<table>\n<thead>\n<tr>\n<th><code>alias:</code></th>\n<th><code>import \'xyz\'</code></th>\n<th><code>import \'xyz/file.js\'</code></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{}</code><p class="description mobile"><code>/abc/node_modules/xyz/index.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/node_modules/xyz/index.js</code></td>\n<td><code>/abc/node_modules/xyz/file.js</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz: \'/abs/path/to/file.js\' }</code><p class="description mobile"><code>/abs/path/to/file.js</code></p></p></div></td>\n<td class="description desktop"><code>/abs/path/to/file.js</code></td>\n<td>error</td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz$: \'/abs/path/to/file.js\' }</code><p class="description mobile"><code>/abs/path/to/file.js</code></p></p></div></td>\n<td class="description desktop"><code>/abs/path/to/file.js</code></td>\n<td><code>/abc/node_modules/xyz/file.js</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz: \'./dir/file.js\' }</code><p class="description mobile"><code>/abc/dir/file.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/dir/file.js</code></td>\n<td>error</td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz$: \'./dir/file.js\' }</code><p class="description mobile"><code>/abc/dir/file.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/dir/file.js</code></td>\n<td><code>/abc/node_modules/xyz/file.js</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz: \'/some/dir\' }</code><p class="description mobile"><code>/some/dir/index.js</code></p></p></div></td>\n<td class="description desktop"><code>/some/dir/index.js</code></td>\n<td><code>/some/dir/file.js</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz$: \'/some/dir\' }</code><p class="description mobile"><code>/some/dir/index.js</code></p></p></div></td>\n<td class="description desktop"><code>/some/dir/index.js</code></td>\n<td><code>/abc/node_modules/xyz/file.js</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz: \'./dir\' }</code><p class="description mobile"><code>/abc/dir/index.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/dir/index.js</code></td>\n<td><code>/abc/dir/file.js</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz: \'modu\' }</code><p class="description mobile"><code>/abc/node_modules/modu/index.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/node_modules/modu/index.js</code></td>\n<td><code>/abc/node_modules/modu/file.js</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz$: \'modu\' }</code><p class="description mobile"><code>/abc/node_modules/modu/index.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/node_modules/modu/index.js</code></td>\n<td><code>/abc/node_modules/xyz/file.js</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz: \'modu/some/file.js\' }</code><p class="description mobile"><code>/abc/node_modules/modu/some/file.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/node_modules/modu/some/file.js</code></td>\n<td>error</td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz: \'modu/dir\' }</code><p class="description mobile"><code>/abc/node_modules/modu/dir/index.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/node_modules/modu/dir/index.js</code></td>\n<td><code>/abc/node_modules/dir/file.js</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz: \'xyz/dir\' }</code><p class="description mobile"><code>/abc/node_modules/xyz/dir/index.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/node_modules/xyz/dir/index.js</code></td>\n<td><code>/abc/node_modules/xyz/dir/file.js</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz$: \'xyz/dir\' }</code><p class="description mobile"><code>/abc/node_modules/xyz/dir/index.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/node_modules/xyz/dir/index.js</code></td>\n<td><code>/abc/node_modules/xyz/file.js</code></td>\n</tr>\n</tbody>\n</table>\n<p><code>index.js</code> may resolve to another file if defined in the <code>package.json</code>.</p>\n<p><code>/abc/node_modules</code> may resolve in <code>/node_modules</code> too.</p>\n<h3 id="resolvealiasfields"><code>resolve.aliasFields</code><a href="#resolvealiasfields" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>[string]: [\'browser\']</code></p>\n<p>Specify a field, such as <code>browser</code>, to be parsed according to <a href="https://github.com/defunctzombie/package-browser-field-spec">this specification</a>.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    aliasFields<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'browser\'</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="resolvecachewithcontext"><code>resolve.cacheWithContext</code><a href="#resolvecachewithcontext" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>boolean</code> (since webpack 3.1.0)</p>\n<p>If unsafe cache is enabled, includes <code>request.context</code> in the cache key. This option is taken into account by the <a href="https://github.com/webpack/enhanced-resolve/"><code>enhanced-resolve</code></a> module. Since webpack 3.1.0 context in resolve caching is ignored when resolve or resolveLoader plugins are provided. This addresses a performance regression.</p>\n<h3 id="resolvedescriptionfiles"><code>resolve.descriptionFiles</code><a href="#resolvedescriptionfiles" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>[string]: [\'package.json\']</code></p>\n<p>The JSON files to use for descriptions.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    descriptionFiles<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'package.json\'</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="resolveenforceextension"><code>resolve.enforceExtension</code><a href="#resolveenforceextension" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>boolean: false</code></p>\n<p>If <code>true</code>, it will not allow extension-less files. So by default <code>require(\'./foo\')</code> works if <code>./foo</code> has a <code>.js</code> extension, but with this enabled only <code>require(\'./foo.js\')</code> will work.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    enforceExtension<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="resolveenforcemoduleextension"><code>resolve.enforceModuleExtension</code><a href="#resolveenforcemoduleextension" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>boolean: false</code></p>\n<p>Tells webpack whether to require to use an extension for modules (e.g. loaders).</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    enforceModuleExtension<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="resolveextensions"><code>resolve.extensions</code><a href="#resolveextensions" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>[string]: [\'.wasm\', \'.mjs\', \'.js\', \'.json\']</code></p>\n<p>Attempt to resolve these extensions in order.</p>\n<blockquote class="warning">\n<p>If multiple files share the same name but have different extensions, webpack will resolve the one with the extension listed first in the array and skip the rest.</p>\n</blockquote>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    extensions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'.wasm\'</span><span class="token punctuation">,</span> <span class="token string">\'.mjs\'</span><span class="token punctuation">,</span> <span class="token string">\'.js\'</span><span class="token punctuation">,</span> <span class="token string">\'.json\'</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>which is what enables users to leave off the extension when importing:</p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> File <span class="token keyword">from</span> <span class="token string">\'../path/to/file\'</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="warning">\n<p>Using this will <strong>override the default array</strong>, meaning that webpack will no longer try to resolve modules using the default extensions. For modules that are imported with their extension, e.g. <code>import SomeFile from \'./somefile.ext\'</code>, to be properly resolved, a string containing "*" must be included in the array.</p>\n</blockquote>\n<h3 id="resolvemainfields"><code>resolve.mainFields</code><a href="#resolvemainfields" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>[string]</code></p>\n<p>When importing from an npm package, e.g. <code>import * as D3 from \'d3\'</code>, this option will determine which fields in its <code>package.json</code> are checked. The default values will vary based upon the <a href="/concepts/targets"><code>target</code></a> specified in your webpack configuration.</p>\n<p>When the <code>target</code> property is set to <code>webworker</code>, <code>web</code>, or left unspecified:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    mainFields<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'browser\'</span><span class="token punctuation">,</span> <span class="token string">\'module\'</span><span class="token punctuation">,</span> <span class="token string">\'main\'</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>For any other target (including <code>node</code>):</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    mainFields<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'module\'</span><span class="token punctuation">,</span> <span class="token string">\'main\'</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>For example, consider an arbitrary library called <code>upstream</code> with a <code>package.json</code> that contains the following fields:</p>\n<pre><code class="hljs language-json"><span class="token punctuation">{</span>\n  <span class="token property">"browser"</span><span class="token operator">:</span> <span class="token string">"build/upstream.js"</span><span class="token punctuation">,</span>\n  <span class="token property">"module"</span><span class="token operator">:</span> <span class="token string">"index"</span>\n<span class="token punctuation">}</span></code></pre>\n<p>When we <code>import * as Upstream from \'upstream\'</code> this will actually resolve to the file in the <code>browser</code> property. The <code>browser</code> property takes precedence because it\'s the first item in <code>mainFields</code>. Meanwhile, a Node.js application bundled by webpack will first try to resolve using the file in the <code>module</code> field.</p>\n<h3 id="resolvemainfiles"><code>resolve.mainFiles</code><a href="#resolvemainfiles" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>[string]: [\'index\']</code></p>\n<p>The filename to be used while resolving directories.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    mainFiles<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'index\'</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="resolvemodules"><code>resolve.modules</code><a href="#resolvemodules" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>[string]: [\'node_modules\']</code></p>\n<p>Tell webpack what directories should be searched when resolving modules.</p>\n<p>Absolute and relative paths can both be used, but be aware that they will behave a bit differently.</p>\n<p>A relative path will be scanned similarly to how Node scans for <code>node_modules</code>, by looking through the current directory as well as its ancestors (i.e. <code>./node_modules</code>, <code>../node_modules</code>, and on).</p>\n<p>With an absolute path, it will only search in the given directory.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    modules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'node_modules\'</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>If you want to add a directory to search in that takes precedence over <code>node_modules/</code>:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    modules<span class="token punctuation">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'src\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'node_modules\'</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="resolveunsafecache"><code>resolve.unsafeCache</code><a href="#resolveunsafecache" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>regex</code> <code>array</code> <code>boolean: true</code></p>\n<p>Enable aggressive, but <strong>unsafe</strong>, caching of modules. Passing <code>true</code> will cache everything.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    unsafeCache<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>A regular expression, or an array of regular expressions, can be used to test file paths and only cache certain modules. For example, to only cache utilities:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    unsafeCache<span class="token punctuation">:</span> <span class="token regex">/src\\/utilities/</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="warning">\n<p>Changes to cached paths may cause failure in rare cases.</p>\n</blockquote>\n<h3 id="resolveplugins"><code>resolve.plugins</code><a href="#resolveplugins" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><a href="/plugins/"><code>[Plugin]</code></a></p>\n<p>A list of additional resolve plugins which should be applied. It allows plugins such as <a href="https://www.npmjs.com/package/directory-named-webpack-plugin"><code>DirectoryNamedWebpackPlugin</code></a>.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token keyword">new</span> <span class="token class-name">DirectoryNamedWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="resolvesymlinks"><code>resolve.symlinks</code><a href="#resolvesymlinks" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>boolean: true</code></p>\n<p>Whether to resolve symlinks to their symlinked location.</p>\n<p>When enabled, symlinked resources are resolved to their <em>real</em> path, not their symlinked location. Note that this may cause module resolution to fail when using tools that symlink packages (like <code>npm link</code>).</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    symlinks<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="resolvecachepredicate"><code>resolve.cachePredicate</code><a href="#resolvecachepredicate" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function: function (module) { return true; }</code></p>\n<p>A function which decides whether a request should be cached or not. An object is passed to the function with <code>path</code> and <code>request</code> properties. It must return a boolean.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    cachePredicate<span class="token punctuation">:</span> <span class="token punctuation">(</span>module<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token comment">// additional logic</span>\n      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="resolveloader"><code>resolveLoader</code><a href="#resolveloader" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>object</code></p>\n<p>This set of options is identical to the <code>resolve</code> property set above, but is used only to resolve webpack\'s <a href="/concepts/loaders">loader</a> packages. Default:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolveLoader<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    modules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'node_modules\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    extensions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'.js\'</span><span class="token punctuation">,</span> <span class="token string">\'.json\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    mainFields<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'loader\'</span><span class="token punctuation">,</span> <span class="token string">\'main\'</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="tip">\n<p>Note that you can use alias here and other features familiar from resolve. For example <code>{ txt: \'raw-loader\' }</code> would shim <code>txt!templates/demo.txt</code> to use <code>raw-loader</code>.</p>\n</blockquote>\n<h3 id="resolveloadermoduleextensions"><code>resolveLoader.moduleExtensions</code><a href="#resolveloadermoduleextensions" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>[string]</code></p>\n<p>The extensions/suffixes that are used when resolving loaders. Since version two, we <a href="/migrate/3/#automatic-loader-module-name-extension-removed">strongly recommend</a> using the full name, e.g. <code>example-loader</code>, as much as possible for clarity. However, if you really wanted to exclude the <code>-loader</code> bit, i.e. just use <code>example</code>, you can use this option to do so:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolveLoader<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    moduleExtensions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'-loader\'</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n'}}]);