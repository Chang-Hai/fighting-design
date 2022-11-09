import{r as c,o as F,c as y,a as l,u as t,i as e,d,e as o}from"./app.bdd9fcb0.js";const C=o('<h2 id="calendar-\u65E5\u5386" tabindex="-1">Calendar \u65E5\u5386 <a class="header-anchor" href="#calendar-\u65E5\u5386" aria-hidden="true">#</a></h2><p>\u6BCF\u5929\u90FD\u6709\u597D\u5FC3\u60C5</p><ul><li><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/calendar" target="_blank" rel="noreferrer">\u6E90\u4EE3\u7801</a></li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/calendar.md" target="_blank" rel="noreferrer">\u6587\u6863\u7F16\u8F91</a></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><p><code>date</code> \u5C5E\u6027\u9700\u8981\u7ED1\u5B9A\u4E00\u4E2A\u65E5\u671F\u5BF9\u8C61</p>',5),i=o(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-calendar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model:date</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> date </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="\u663E\u793A\u519C\u5386" tabindex="-1">\u663E\u793A\u519C\u5386 <a class="header-anchor" href="#\u663E\u793A\u519C\u5386" aria-hidden="true">#</a></h2><p><code>lunar</code> \u53EF\u4EE5\u914D\u7F6E\u663E\u793A\u519C\u5386\u7684\u65E5\u5386</p>`,3),A=o(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-calendar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model:date</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lunar</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> date </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="\u5E26\u6709\u8FB9\u6846" tabindex="-1">\u5E26\u6709\u8FB9\u6846 <a class="header-anchor" href="#\u5E26\u6709\u8FB9\u6846" aria-hidden="true">#</a></h2><p><code>border</code> \u53EF\u4EE5\u914D\u7F6E\u5E26\u6709\u8FB9\u6846\u7684\u65E5\u5386</p>`,3),u=o(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-calendar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model:date</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> border /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> date </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="\u4E0D\u663E\u793A\u9875\u5934" tabindex="-1">\u4E0D\u663E\u793A\u9875\u5934 <a class="header-anchor" href="#\u4E0D\u663E\u793A\u9875\u5934" aria-hidden="true">#</a></h2><p><code>show-header</code> \u53EF\u4EE5\u63A7\u5236\u662F\u5426\u663E\u793A\u5934\u90E8\u64CD\u4F5C\u680F</p>`,3),h=o(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-calendar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model:date</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:show-header</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> date </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="\u5907\u5FD8\u4E8B\u4EF6" tabindex="-1">\u5907\u5FD8\u4E8B\u4EF6 <a class="header-anchor" href="#\u5907\u5FD8\u4E8B\u4EF6" aria-hidden="true">#</a></h2><p><code>memorandum</code> \u5C06\u6307\u5B9A\u65E5\u671F\u6DFB\u52A0\u5907\u5FD8\u4E8B\u4EF6\u9879</p><p><code>border</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5E26\u6709\u8FB9\u6846\u7684\u65E5\u5386</p>`,4),g=o(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-calendar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model:date</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> border </span><span style="color:#C792EA;">:memorandum</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">memorandumList</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> date </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> memorandumList </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">2022-9-21</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4ECA\u5929\u8981\u8003\u8BD5</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4ECA\u5929\u8981\u53BB\u9732\u8425</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u665A\u4E0A\u6709\u996D\u5C40</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4ECA\u5929\u65E9\u70B9\u7761</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">2022-9-27</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4ECA\u5929\u8981\u8003\u8BD5</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4ECA\u5929\u8981\u8003\u8BD5</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4ECA\u5929\u8981\u8003\u8BD5</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:date</code></td><td>\u7ED1\u5B9A\u65E5\u671F</td><td>date</td><td>\u2014\u2014</td><td>new Date</td></tr><tr><td><code>lunar</code></td><td>\u662F\u5426\u663E\u793A\u519C\u5386\u6216\u8282\u65E5\uFF0C\u4EC5\u652F\u6301 <code>1900 ~ 2100</code></td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td><code>show-header</code></td><td>\u662F\u5426\u663E\u793A\u5934\u90E8</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td><code>border</code></td><td>\u662F\u5426\u663E\u793A\u8FB9\u6846</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td><code>border-color</code></td><td>\u81EA\u5B9A\u4E49\u8FB9\u6846\u989C\u8272</td><td>string</td><td>\u2014\u2014</td><td>#eee</td></tr><tr><td><code>day-cell-height</code></td><td>\u65E5\u671F\u5355\u5143\u683C\u9AD8\u5EA6</td><td>string / number</td><td>\u2014\u2014</td><td>85px</td></tr><tr><td><code>week-cell-height</code></td><td>\u661F\u671F\u5355\u5143\u683C\u9AD8\u5EA6</td><td>string / number</td><td>\u2014\u2014</td><td>50px</td></tr><tr><td><code>memorandum</code></td><td>\u5907\u5FD8\u4E8B\u4EF6</td><td>object</td><td>\u2014\u2014</td><td>null</td></tr><tr><td><code>change-switch</code></td><td>\u6708\u4EFD\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03</td><td>Function</td><td>\u2014\u2014</td><td>null</td></tr><tr><td><code>change-date</code></td><td>\u65E5\u671F\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03</td><td>Function</td><td>\u2014\u2014</td><td>null</td></tr></tbody></table></div><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>last-change</code></td><td>\u81EA\u5B9A\u4E49\u4E0A\u4E2A\u6708\u5207\u6362\u6309\u94AE</td></tr><tr><td><code>now-change</code></td><td>\u81EA\u5B9A\u4E49\u4ECA\u5929\u5207\u6362\u6309\u94AE</td></tr><tr><td><code>next-change</code></td><td>\u81EA\u5B9A\u4E49\u4E0B\u4E2A\u6708\u5207\u6362\u6309\u94AE</td></tr></tbody></table></div><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-hidden="true">#</a></h2><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">CalendarInstance</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">CalendarPropsType</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">CalendarMowDataClassListInterface</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">CalendarOptionClickInterface</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">CalendarHandleClickInterface</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">CalendarCallbackInterface</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">CalendarMemorandumContentInterface</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">CalendarMemorandumType</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">CalendarIsMemorandumInterface</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">CalendarOptionInterface</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fighting-design</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,9),m={href:"https://github.com/Tyh2001",target:"_blank"},v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Calendar \u65E5\u5386","slug":"calendar-\u65E5\u5386","link":"#calendar-\u65E5\u5386","children":[]},{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u663E\u793A\u519C\u5386","slug":"\u663E\u793A\u519C\u5386","link":"#\u663E\u793A\u519C\u5386","children":[]},{"level":2,"title":"\u5E26\u6709\u8FB9\u6846","slug":"\u5E26\u6709\u8FB9\u6846","link":"#\u5E26\u6709\u8FB9\u6846","children":[]},{"level":2,"title":"\u4E0D\u663E\u793A\u9875\u5934","slug":"\u4E0D\u663E\u793A\u9875\u5934","link":"#\u4E0D\u663E\u793A\u9875\u5934","children":[]},{"level":2,"title":"\u5907\u5FD8\u4E8B\u4EF6","slug":"\u5907\u5FD8\u4E8B\u4EF6","link":"#\u5907\u5FD8\u4E8B\u4EF6","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/calendar.md","lastUpdated":1667992314000}'),_={name:"components/calendar.md"},T=Object.assign(_,{setup(b){const s=new Date,r={"2022-9-21":[{type:"danger",content:"\u4ECA\u5929\u8981\u8003\u8BD5"},{type:"success",content:"\u4ECA\u5929\u8981\u53BB\u9732\u8425"},{type:"danger",content:"\u665A\u4E0A\u6709\u996D\u5C40"},{type:"danger",content:"\u4ECA\u5929\u65E9\u70B9\u7761"}],"2022-9-27":[{type:"default",content:"\u4ECA\u5929\u8981\u8003\u8BD5"},{type:"danger",content:"\u4ECA\u5929\u8981\u8003\u8BD5"},{type:"danger",content:"\u4ECA\u5929\u8981\u8003\u8BD5"}]};return(E,a)=>{const p=c("f-calendar"),D=c("f-avatar");return F(),y("div",null,[C,l(p,{date:t(s),"onUpdate:date":a[0]||(a[0]=n=>e(s)?s.value=n:null)},null,8,["date"]),i,l(p,{date:t(s),"onUpdate:date":a[1]||(a[1]=n=>e(s)?s.value=n:null),lunar:""},null,8,["date"]),A,l(p,{date:t(s),"onUpdate:date":a[2]||(a[2]=n=>e(s)?s.value=n:null),border:""},null,8,["date"]),u,l(p,{date:t(s),"onUpdate:date":a[3]||(a[3]=n=>e(s)?s.value=n:null),"show-header":!1},null,8,["date"]),h,l(p,{date:t(s),"onUpdate:date":a[4]||(a[4]=n=>e(s)?s.value=n:null),border:"",memorandum:r},null,8,["date"]),g,d("a",m,[l(D,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}}});export{v as __pageData,T as default};
