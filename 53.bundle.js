(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{335:function(s,n,a){"use strict";a.r(n),n.default='<p>The release process for deploying webpack is actually quite painless. Read through the following steps, so you have a clear understanding of how it\'s done.</p>\n<h2 id="pull-requests">Pull Requests<a href="#pull-requests" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>When merging pull requests into the <code>master</code> branch, select the <em>Create Merge Commit</em> option.</p>\n<h2 id="releasing">Releasing<a href="#releasing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> version patch <span class="token operator">&#x26;&#x26;</span> <span class="token function">git</span> push --follow-tags <span class="token operator">&#x26;&#x26;</span> <span class="token function">npm</span> publish\n<span class="token function">npm</span> version minor <span class="token operator">&#x26;&#x26;</span> <span class="token function">git</span> push --follow-tags <span class="token operator">&#x26;&#x26;</span> <span class="token function">npm</span> publish\n<span class="token function">npm</span> version major <span class="token operator">&#x26;&#x26;</span> <span class="token function">git</span> push --follow-tags <span class="token operator">&#x26;&#x26;</span> <span class="token function">npm</span> publish</code></pre>\n<p><em>This will increment the package version, commits the changes, cuts a <strong>local tag</strong>, push to github &#x26; publish the npm package.</em></p>\n<p>After that go to the github <a href="https://github.com/webpack/webpack/releases">releases page</a> and write a Changelog for the new tag.</p>\n'}}]);