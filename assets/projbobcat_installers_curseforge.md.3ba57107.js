import{_ as s,c as a,o as n,a as e}from"./app.1c20d07f.js";const C=JSON.parse('{"title":"CurseForge \u6574\u5408\u5305\u5B89\u88C5\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9E\u7528\u8D44\u6E90","slug":"\u5B9E\u7528\u8D44\u6E90","link":"#\u5B9E\u7528\u8D44\u6E90","children":[]},{"level":2,"title":"\u521D\u59CB\u5316\u5B89\u88C5\u5668","slug":"\u521D\u59CB\u5316\u5B89\u88C5\u5668","link":"#\u521D\u59CB\u5316\u5B89\u88C5\u5668","children":[]},{"level":2,"title":"\u5F00\u59CB\u5B89\u88C5","slug":"\u5F00\u59CB\u5B89\u88C5","link":"#\u5F00\u59CB\u5B89\u88C5","children":[]},{"level":2,"title":"\u62A5\u544A\u5B89\u88C5\u8FDB\u5EA6","slug":"\u62A5\u544A\u5B89\u88C5\u8FDB\u5EA6","link":"#\u62A5\u544A\u5B89\u88C5\u8FDB\u5EA6","children":[]}],"relativePath":"projbobcat/installers/curseforge.md"}'),l={name:"projbobcat/installers/curseforge.md"},r=e(`<h1 id="curseforge-\u6574\u5408\u5305\u5B89\u88C5\u5668" tabindex="-1">CurseForge \u6574\u5408\u5305\u5B89\u88C5\u5668 <a class="header-anchor" href="#curseforge-\u6574\u5408\u5305\u5B89\u88C5\u5668" aria-hidden="true">#</a></h1><nav class="table-of-contents"><ul><li><a href="#curseforge-\u6574\u5408\u5305\u5B89\u88C5\u5668">CurseForge \u6574\u5408\u5305\u5B89\u88C5\u5668</a><ul><li><a href="#\u5B9E\u7528\u8D44\u6E90">\u5B9E\u7528\u8D44\u6E90</a></li><li><a href="#\u521D\u59CB\u5316\u5B89\u88C5\u5668">\u521D\u59CB\u5316\u5B89\u88C5\u5668</a></li><li><a href="#\u5F00\u59CB\u5B89\u88C5">\u5F00\u59CB\u5B89\u88C5</a></li><li><a href="#\u62A5\u544A\u5B89\u88C5\u8FDB\u5EA6">\u62A5\u544A\u5B89\u88C5\u8FDB\u5EA6</a></li></ul></li></ul></nav><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u8BF7\u6CE8\u610F\uFF0CProjBobcat \u4EC5\u5B9E\u73B0\u4E86 CurseForge \u6574\u5408\u5305\u7684\u81EA\u52A8\u5316\u5B89\u88C5\u6D41\u7A0B\uFF0C\u60A8\u4ECD\u7136\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0 CurseForge \u6574\u5408\u5305\u7684\u641C\u7D22\u3001\u4E0B\u8F7D\u3001\u4FDD\u5B58\u6D41\u7A0B\u3002</p></div><h2 id="\u5B9E\u7528\u8D44\u6E90" tabindex="-1">\u5B9E\u7528\u8D44\u6E90 <a class="header-anchor" href="#\u5B9E\u7528\u8D44\u6E90" aria-hidden="true">#</a></h2><ul><li><a href="https://www.curseforge.com/" target="_blank" rel="noreferrer">CurseForge \u5B98\u65B9\u7F51\u7AD9</a></li><li><a href="https://docs.curseforge.com/" target="_blank" rel="noreferrer">CurseForge API</a></li></ul><h2 id="\u521D\u59CB\u5316\u5B89\u88C5\u5668" tabindex="-1">\u521D\u59CB\u5316\u5B89\u88C5\u5668 <a class="header-anchor" href="#\u521D\u59CB\u5316\u5B89\u88C5\u5668" aria-hidden="true">#</a></h2><p>\u521D\u59CB\u5316 CurseForge \u5B89\u88C5\u5668\u7684\u65B9\u5F0F\u975E\u5E38\u7B80\u5355\uFF1A</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">curseForgeInstaller</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CurseForgeInstaller</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    GameId </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[CUSTOM_INSTALL_GAME_ID]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ModPackPath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[PATH_TO_YOUR_MODPACK]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    RootPath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[GAME_ROOT_PATH]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5728\u4E0A\u8FF0\u4EE3\u7801\u5757\u4E2D\uFF0C\u8BF7\u5C06\u8FD9\u4E9B\u53C2\u6570\u6309\u7167\u60A8\u7684\u5B9E\u9645\u60C5\u51B5\u66FF\u6362\uFF1A</p><table><thead><tr><th style="text-align:center;">\u9879\u76EE</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">[GAME_ROOT_PATH]</td><td style="text-align:center;">\u6E38\u620F\u6839\u76EE\u5F55\uFF0C\u901A\u5E38\u4E3A .minecraft \u6587\u4EF6\u5939\u7684\u8DEF\u5F84</td></tr><tr><td style="text-align:center;">[CUSTOM_INSTALL_GAME_ID]</td><td style="text-align:center;">\u53EF\u9009\u9879\uFF0C\u81EA\u5B9A\u4E49\u5373\u5C06\u8981\u5B89\u88C5\u7684\u6E38\u620F\u7684\u540D\u79F0</td></tr><tr><td style="text-align:center;">[PATH_TO_YOUR_MODPACK]</td><td style="text-align:center;">CurseForge \u6574\u5408\u5305\u6240\u5728\u7684\u8DEF\u5F84</td></tr></tbody></table><h2 id="\u5F00\u59CB\u5B89\u88C5" tabindex="-1">\u5F00\u59CB\u5B89\u88C5 <a class="header-anchor" href="#\u5F00\u59CB\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u5728\u60A8\u5B8C\u6210\u5B89\u88C5\u5668\u7684\u521D\u59CB\u5316\u540E\uFF0C\u60A8\u53EA\u9700\u8981\u8C03\u7528 CurseForge \u5B89\u88C5\u5668\u7684\u5B89\u88C5\u65B9\u6CD5\u6765\u5B8C\u6210\u5B89\u88C5\u3002</p><p>\u5728\u5F02\u6B65\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u4F7F\u7528 <strong>InstallTaskAsync</strong> \u6765\u5B8C\u6210\u5B89\u88C5\uFF1A</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">curseForgeInstaller</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">InstallTaskAsync</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5728\u540C\u6B65\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u4F7F\u7528 <strong>Install</strong> \u6765\u5B8C\u6210\u5B89\u88C5\uFF1A</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">curseForgeInstaller</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Install</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u62A5\u544A\u5B89\u88C5\u8FDB\u5EA6" tabindex="-1">\u62A5\u544A\u5B89\u88C5\u8FDB\u5EA6 <a class="header-anchor" href="#\u62A5\u544A\u5B89\u88C5\u8FDB\u5EA6" aria-hidden="true">#</a></h2><p>\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0CCurseForge \u5B89\u88C5\u5668\u53EF\u80FD\u4F1A\u9700\u8981\u6570\u5206\u949F\u7684\u65F6\u95F4\u6765\u5B8C\u6210\u5B89\u88C5\u3002 \u56E0\u6B64\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u5B9E\u65F6\u5411\u7528\u6237\u6C47\u62A5\u5B89\u88C5\u5668\u76EE\u524D\u7684\u8FDB\u5EA6\u3002 \u4E3A\u6B64\uFF0CCurseForge \u5B89\u88C5\u5668\u63D0\u4F9B\u4E86 <strong>StageChangedEventDelegate</strong> \u4E8B\u4EF6\u6765\u5E2E\u52A9\u60A8\u5B9E\u73B0\u4EFB\u52A1\u6C47\u62A5\u3002 \u60A8\u53EA\u9700\u8981\u7B80\u5355\u5730\u5728 <strong>\u5F00\u59CB\u5B89\u88C5\u4E4B\u524D</strong> \u6CE8\u518C\u4E0B\u9762\u7684\u4E8B\u4EF6\uFF1A</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">curseForgeInstaller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">StageChangedEventDelegate </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">_</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">ReportProgress</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Progress</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CurrentStage</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5176\u4E2D\uFF0C <strong>args.Progress</strong> \u6307\u793A\u4E86\u5B89\u88C5\u5668\u5F53\u524D\u7684\u767E\u5206\u6BD4\u8FDB\u5EA6\u3002<strong>args.CurrentStage</strong> \u5219\u662F\u5B89\u88C5\u5668\u5F53\u524D\u8FDB\u5EA6\u7684\u6587\u5B57\u63CF\u8FF0\u3002</p>`,20),p=[r];function t(o,c,i,F,d,D){return n(),a("div",null,p)}const y=s(l,[["render",t]]);export{C as __pageData,y as default};
