import{_ as n,X as a,Y as s,a2 as t}from"./framework-e053119e.js";const o="/fast-request/img/otherConfig.png",e={},p=t(`<p>控制器上的 url 固定变量可以由配置替换，例如类控制器上 url 写法如下:</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/api/\${api-module}/user&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XxxController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">//code ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>实际的 url 是 <code>/api/base/user</code>，那么可以通过以下配置来替换 <code>\${api-module}</code> 变量</p><p><img src="`+o+'" alt="other config" loading="lazy"></p>',4),c=[p];function l(i,u){return a(),s("div",null,c)}const d=n(e,[["render",l],["__file","otherConfig.html.vue"]]);export{d as default};
