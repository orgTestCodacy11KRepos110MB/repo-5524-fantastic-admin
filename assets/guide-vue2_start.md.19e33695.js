import{_ as s,o as a,c as n,d as l}from"./app.d991dbbc.js";const A=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础版","slug":"基础版","link":"#基础版","children":[]},{"level":2,"title":"专业版","slug":"专业版","link":"#专业版","children":[]},{"level":2,"title":"运行","slug":"运行","link":"#运行","children":[]}],"relativePath":"guide-vue2/start.md"}'),e={name:"guide-vue2/start.md"},t=l(`<h1 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-hidden="true">#</a></h1><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>本框架 Vue2 版本目前已停止维护。</p></div><p>阅读开发文档前，请确保手上已经有 Fantastic-admin 源码，因为文档中提及的内容，都是需要在本地项目中编写或修改代码并运行才能呈现的。如果还没有源码，可以通过下面两种方式获取：</p><h2 id="基础版" tabindex="-1">基础版 <a class="header-anchor" href="#基础版" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">分支说明</p><ul><li><code>vue2</code> 框架源码分支，不含示例代码，可直接用于实际开发</li><li><code>vue2-example</code> 演示源码分支，同演示站，含有大量示例代码</li></ul></div><ul><li>手动下载 <ul><li>去 <a href="https://gitee.com/hooray/fantastic-admin" target="_blank" rel="noreferrer">Gitee</a> 下载</li><li>去 <a href="https://github.com/hooray/fantastic-admin" target="_blank" rel="noreferrer">Github</a> 下载</li></ul></li><li>git 克隆</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 从 Gitee 克隆</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 拉取框架源码</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://gitee.com/hooray/fantastic-admin.git</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 拉取演示源码</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue2-example</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://gitee.com/hooray/fantastic-admin.git</span></span>
<span class="line"></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 从 Github 克隆</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 拉取框架源码</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/hooray/fantastic-admin.git</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 拉取演示源码</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue2-example</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://gitee.com/hooray/fantastic-admin.git</span></span>
<span class="line"></span></code></pre></div><h2 id="专业版" tabindex="-1">专业版 <a class="header-anchor" href="#专业版" aria-hidden="true">#</a></h2><p><a href="./../buy.html">去购买</a></p><h2 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-hidden="true">#</a></h2><p>本框架需要你本地安装 <a href="https://nodejs.org/zh-cn/" target="_blank" rel="noreferrer">Node.js</a> 和 <a href="https://git-scm.com/" target="_blank" rel="noreferrer">Git</a> ，同时我们强烈建议你安装并使用 <a href="https://classic.yarnpkg.com/zh-Hans/" target="_blank" rel="noreferrer">Yarn</a> 做为包管理工具。</p><p>做好准备工作后，依次执行下面的命令：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 进入项目目录</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fantastic-admin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 专业版</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fantastic-admin-pro</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装项目依赖（框架使用 yarn 进行依赖包的版本锁定，建议使用 yarn 进行安装）</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 或者</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 运行项目</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">serve</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 或者</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">serve</span></span>
<span class="line"></span></code></pre></div><p>运行成功后，会自动访问页面，默认情况下，地址为 <code>http://localhost:8080</code></p>`,15),p=[t];function o(c,r,i,y,C,d){return a(),n("div",null,p)}const u=s(e,[["render",o]]);export{A as __pageData,u as default};
