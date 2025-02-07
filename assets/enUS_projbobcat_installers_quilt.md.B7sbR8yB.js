import{_ as i,o as a,c as n,ag as e}from"./chunks/framework.vItlt36W.js";const d=JSON.parse('{"title":"Quilt 安装器","description":"","frontmatter":{},"headers":[],"relativePath":"enUS/projbobcat/installers/quilt.md","filePath":"enUS/projbobcat/installers/quilt.md"}'),t={name:"enUS/projbobcat/installers/quilt.md"};function l(r,s,p,h,o,k){return a(),n("div",null,s[0]||(s[0]=[e(`<h1 id="quilt-安装器" tabindex="-1">Quilt 安装器 <a class="header-anchor" href="#quilt-安装器" aria-label="Permalink to &quot;Quilt 安装器&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#quilt-安装器">Quilt 安装器</a><ul><li><a href="#resources">Resources</a></li><li><a href="#compatibility-check">Compatibility check</a></li><li><a href="#get-quilt-loader-model">Get Quilt Loader Model</a></li><li><a href="#initialize-the-installer">Initialize the installer</a></li><li><a href="#start-installation">start installation</a></li><li><a href="#report-installation-progress">Report installation progress</a></li></ul></li></ul></nav><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Please note that ProjBobcat only implements the Quilt automated installation process. You still need to implement the search, download, and save process of the Quilt installation package yourself.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The Quilt installer is currently in an experimental stage, and the related API and installation process may undergo significant changes.</p></div><h2 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-label="Permalink to &quot;Resources&quot;">​</a></h2><ul><li><a href="https://quiltmc.org/en/" target="_blank" rel="noreferrer">Quilt Website</a></li><li><a href="https://quiltmc.org/en/install/" target="_blank" rel="noreferrer">Quilt Documentation</a></li><li><a href="https://meta.quiltmc.org/" target="_blank" rel="noreferrer">Quilt Meta API</a></li></ul><h2 id="compatibility-check" tabindex="-1">Compatibility check <a class="header-anchor" href="#compatibility-check" aria-label="Permalink to &quot;Compatibility check&quot;">​</a></h2><p>Before you start installing Quilt, you need to query whether the version of MineCraft you are modifying is supported via the Quilt Meta API.</p><p>First, you need to send an <strong>HTTP GET</strong> request to <a href="https://meta.quiltmc.org/v3/versions/game" target="_blank" rel="noreferrer">https://meta.quiltmc.org/v3/versions/game</a>.</p><p>You will see something similar to the following returned:</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.19.3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;stable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.19.3-rc3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;stable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Here, you need to check whether the game version you are about to install appears in Quilt&#39;s official support list. You need to compare the game version with the <code>version</code> field in the JSON object. **If your game does not appear on the support list, the installation will not continue. **</p><h2 id="get-quilt-loader-model" tabindex="-1">Get Quilt Loader Model <a class="header-anchor" href="#get-quilt-loader-model" aria-label="Permalink to &quot;Get Quilt Loader Model&quot;">​</a></h2><p>Because ProjBobcat&#39;s Quilt installer requires you to provide download information from Quilt when initializing the installer. Therefore, we will briefly describe here how to obtain this information based on a given MineCraft version.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>In this example, we&#39;ll be using Minecraft version 1.19.2 to show you how to get it.</p></div><p>First, you need to send an <strong>HTTP GET</strong> request to <a href="https://meta.quiltmc.org/v3/versions/loader" target="_blank" rel="noreferrer">https://meta.quiltmc.org/v3/versions/loader</a>.</p><p>You will see something similar to the following returned:</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;separator&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;maven&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;org.quiltmc:quilt-loader:0.18.1-beta.25&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.18.1-beta.25&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Quilt Meta API will return a JSON array, and each element in the array is the Loader Artifact we need.</p><h4 id="convert-json-return-to-projbobcat-type" tabindex="-1">Convert JSON return to ProjBobcat type <a class="header-anchor" href="#convert-json-return-to-projbobcat-type" aria-label="Permalink to &quot;Convert JSON return to ProjBobcat type&quot;">​</a></h4><p>If you are using <a href="https://www.newtonsoft.com/json" target="_blank" rel="noreferrer">JSON.NET</a>(Newtonsoft.JSON) in your project. You can use code similar to the following to convert the server response you get into the corresponding ProjBobcat type:</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Requesting data from the Quilt Meta API (example, not actual code)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">..</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> responseJson</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.Content.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ReadAsStringAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Convert JSON response to ProjBobcat type //</span></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> artifacts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> JsonConvert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DeserializeObject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QuiltLoaderModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;(responseJson); </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Get the version the user wants to install (example, not actual code)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> userSelect</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vm.SelectedArtifactIndex;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Get a single Loader Artifact //</span></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> selectedArtifact</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> artifacts[userSelect]; </span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>This <strong>selectedArtifact</strong> is the <code>QuiltLoaderModel</code> required by the Fabric installer.</p><h2 id="initialize-the-installer" tabindex="-1">Initialize the installer <a class="header-anchor" href="#initialize-the-installer" aria-label="Permalink to &quot;Initialize the installer&quot;">​</a></h2><p>Initializing the Quilt installer is very simple. You need to use the <code>selectedArtifact</code> obtained in the previous step to initialize the installer:</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> quiltInstaller</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> QuiltInstaller</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    InheritsFrom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[MC_VERSION_OR_GAME_ID]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    RootPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[GAME_ROOT_PATH]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CustomId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[CUSTOM_INSTALL_GAME_ID]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    LoaderArtifact </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> selectedArtifact</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>In the above code block, please replace these parameters according to your actual situation:</p><table tabindex="0"><thead><tr><th style="text-align:center;">Project</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">[GAME_ROOT_PATH]</td><td style="text-align:center;">The game root directory, usually the path to the .minecraft folder</td></tr><tr><td style="text-align:center;">[CUSTOM_INSTALL_GAME_ID]</td><td style="text-align:center;">Optional, customize the name of the game to be installed</td></tr><tr><td style="text-align:center;">[MC_VERSION_OR_GAME_ID]</td><td style="text-align:center;">The Minecraft original game version inherited by Forge, usually the game version. For example: 1.19.2</td></tr></tbody></table><h2 id="start-installation" tabindex="-1">start installation <a class="header-anchor" href="#start-installation" aria-label="Permalink to &quot;start installation&quot;">​</a></h2><p>After you complete the initialization of the installer, you only need to call the installation method of the Fabric installer to complete the installation.</p><p>In an asynchronous context, use <strong>InstallTaskAsync</strong> to complete the installation:</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> quiltInstaller.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">InstallTaskAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>In a sync context, use <strong>Install</strong> to complete the installation:</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">quiltInstaller.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="report-installation-progress" tabindex="-1">Report installation progress <a class="header-anchor" href="#report-installation-progress" aria-label="Permalink to &quot;Report installation progress&quot;">​</a></h2><p>In some cases, the Quilt installer may take several minutes to complete the installation. Therefore, you may need to report the current progress of the installer to the user in real time. For this purpose, the Quilt installer provides the <strong>StageChangedEventDelegate</strong> event to help you implement task reporting. You simply need to register for the following event <strong>before starting the installation</strong>:</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">quiltInstaller.StageChangedEventDelegate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ReportProgress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(args.Progress, args.CurrentStage);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Among them, <strong>args.Progress</strong> indicates the current percentage progress of the installer. <strong>args.CurrentStage</strong> is a text description of the current progress of the installer.</p>`,38)]))}const u=i(t,[["render",l]]);export{d as __pageData,u as default};
