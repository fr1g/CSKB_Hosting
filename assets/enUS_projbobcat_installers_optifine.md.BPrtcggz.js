import{_ as i,o as a,c as n,ag as e}from"./chunks/framework.vItlt36W.js";const c=JSON.parse('{"title":"Optifine Installer","description":"","frontmatter":{},"headers":[],"relativePath":"enUS/projbobcat/installers/optifine.md","filePath":"enUS/projbobcat/installers/optifine.md"}'),t={name:"enUS/projbobcat/installers/optifine.md"};function l(r,s,p,h,o,k){return a(),n("div",null,s[0]||(s[0]=[e(`<h1 id="optifine-installer" tabindex="-1">Optifine Installer <a class="header-anchor" href="#optifine-installer" aria-label="Permalink to &quot;Optifine Installer&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#optifine-installer">Optifine Installer</a><ul><li><a href="#resources">Resources</a></li><li><a href="#get-optifine-download-version-model">Get Optifine Download Version Model</a></li><li><a href="#initialize-the-installer">Initialize the installer</a></li><li><a href="#start-installation">start installation</a></li><li><a href="#report-installation-progress">Report installation progress</a></li></ul></li></ul></nav><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Please note that ProjBobcat only implements the Optifine automated installation process. You still need to implement the search, download, and save process of the Optifine installation package yourself.</p></div><h2 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-label="Permalink to &quot;Resources&quot;">​</a></h2><ul><li><a href="https://bmclapidoc.bangbang93.com/" target="_blank" rel="noreferrer">BMCLAPI Development Documentation</a></li></ul><h2 id="get-optifine-download-version-model" tabindex="-1">Get Optifine Download Version Model <a class="header-anchor" href="#get-optifine-download-version-model" aria-label="Permalink to &quot;Get Optifine Download Version Model&quot;">​</a></h2><p>Because ProjBobcat&#39;s Optifine installer requires you to provide download information from Optifine when initializing the installer. Therefore, we will briefly describe here how to obtain this information based on a given Minecraft version.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>In this example, we&#39;ll be using Minecraft version 1.19.2 to show you how to get it.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Since Optifine officially does not provide public API documentation. Therefore, in this process, we need to use a third-party mirror source to complete data acquisition. Here, we use <a href="https://bmclapidoc.bangbang93.com/" target="_blank" rel="noreferrer">BMCLAPI</a> to obtain relevant version information.</p></div><p>First, you need to send an <strong>HTTP GET</strong> request to <a href="https://bmclapi2.bangbang93.com/optifine/1.19.2" target="_blank" rel="noreferrer">https://bmclapi2.bangbang93.com/optifine/[MC_VERSION]</a>. Replace <code>[MC_VERSION]</code> with the MineCraft version you want to install. Here we will use version 1.19.2.</p><p>You will see something similar to the following returned:</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;6307b8a38a3998ab475d139d&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;mcversion&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.19.2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;patch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;H9&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;HD_U&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;__v&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;filename&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;OptiFine_1.19.2_HD_U_H9.jar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;forge&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Forge 43.1.1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>BMCLAPI will return a JSON array, and each element in the array is the Download Version Model we need.</p><h4 id="convert-json-return-to-projbobcat-type" tabindex="-1">Convert JSON return to ProjBobcat type <a class="header-anchor" href="#convert-json-return-to-projbobcat-type" aria-label="Permalink to &quot;Convert JSON return to ProjBobcat type&quot;">​</a></h4><p>If you are using <a href="https://www.newtonsoft.com/json" target="_blank" rel="noreferrer">JSON.NET</a>(Newtonsoft.JSON) in your project. You can use code similar to the following to convert the server response you get into the corresponding ProjBobcat type:</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Requesting data from BMCLAPI (example, not actual code)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">..</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> responseJson</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.Content.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ReadAsStringAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Convert JSON response to ProjBobcat type //</span></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> versions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> JsonConvert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DeserializeObject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">OptifineDownloadVersionModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;(responseJson); </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Get the version the user wants to install (example, not actual code)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> userSelect</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vm.SelectedIndex;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Get a single Download Version Model //</span></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> selectedVersion</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> versions[userSelect]; </span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Here, <strong>selectedVersion</strong> is the <code>OptifineDownloadVersionModel</code> required by the Optifine installer.</p><h2 id="initialize-the-installer" tabindex="-1">Initialize the installer <a class="header-anchor" href="#initialize-the-installer" aria-label="Permalink to &quot;Initialize the installer&quot;">​</a></h2><p>The way to initialize the Optifine installer is very simple. You first need to prepare the Optifine installation package .jar file. and a Java runtime available. You need to initialize the installer using the <code>selectedVersion</code> obtained in the previous step:</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> optifineInstaller</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OptifineInstaller</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    JavaExecutablePath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[PATH_TO_YOUR_JAVA_RUNTIME]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    OptifineDownloadVersion </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> selectedVersion,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    OptifineJarPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[PATH_TO_YOUR_OPTIFINE_JAR]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    RootPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[GAME_ROOT_PATH]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CustomId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[CUSTOM_INSTALL_GAME_ID]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    InheritsFrom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[MC_VERSION_OR_GAME_ID]&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>In the above code block, please replace these parameters according to your actual situation:</p><table tabindex="0"><thead><tr><th style="text-align:center;">Project</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">[GAME_ROOT_PATH]</td><td style="text-align:center;">The game root directory, usually the path to the .minecraft folder</td></tr><tr><td style="text-align:center;">[CUSTOM_INSTALL_GAME_ID]</td><td style="text-align:center;">Optional, customize the name of the game to be installed</td></tr><tr><td style="text-align:center;">[MC_VERSION_OR_GAME_ID]</td><td style="text-align:center;">The MineCraft original game version inherited by Forge, usually the game version. For example: 1.19.2</td></tr><tr><td style="text-align:center;">[VERSION_LOCATOR_INST]</td><td style="text-align:center;">Game version locator instance, that is, the <strong>VersionLocator</strong> attribute when initializing the game core</td></tr><tr><td style="text-align:center;">[PATH_TO_YOUR_OPTIFINE_JAR]</td><td style="text-align:center;">The path where the Optifine installation package is located</td></tr><tr><td style="text-align:center;">[PATH_TO_YOUR_JAVA_RUNTIME]</td><td style="text-align:center;">The path where Java (javaw.exe) runtime is located</td></tr></tbody></table><h2 id="start-installation" tabindex="-1">start installation <a class="header-anchor" href="#start-installation" aria-label="Permalink to &quot;start installation&quot;">​</a></h2><p>After you complete the initialization of the installer, you only need to call the installation method of the Optifine installer to complete the installation.</p><p>In an asynchronous context, use <strong>InstallTaskAsync</strong> to complete the installation:</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> optifineInstaller.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">InstallTaskAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>In a sync context, use <strong>Install</strong> to complete the installation:</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">optifineInstaller.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="report-installation-progress" tabindex="-1">Report installation progress <a class="header-anchor" href="#report-installation-progress" aria-label="Permalink to &quot;Report installation progress&quot;">​</a></h2><p>In some cases, the Optifine installer may take several minutes to complete the installation. Therefore, you may need to report the current progress of the installer to the user in real time. For this purpose, the Optifine installer provides the <strong>StageChangedEventDelegate</strong> event to help you implement task reporting. You simply need to register for the following event <strong>before starting the installation</strong>:</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">optifineInstaller.StageChangedEventDelegate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ReportProgress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(args.Progress, args.CurrentStage);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Among them, <strong>args.Progress</strong> indicates the current percentage progress of the installer. <strong>args.CurrentStage</strong> is a text description of the current progress of the installer.</p>`,32)]))}const g=i(t,[["render",l]]);export{c as __pageData,g as default};
