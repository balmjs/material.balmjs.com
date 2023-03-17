"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[1272],{71272:function(t,n,o){o.r(n);n.default='<pre><code class="language-html">&lt;ui-card class=&quot;demo-card demo-card--photo&quot;&gt;\n  &lt;ui-card-content class=&quot;demo-card__primary-action&quot;&gt;\n    &lt;ui-card-media square class=&quot;demo-card__media&quot;&gt;\n      &lt;ui-card-media-content class=&quot;demo-card__media-content--with-title&quot;&gt;\n        &lt;div :class=&quot;[$tt(&#39;subtitle2&#39;), &#39;demo-card__media-title&#39;]&quot;&gt;\n          Vacation Photos\n        &lt;/div&gt;\n      &lt;/ui-card-media-content&gt;\n    &lt;/ui-card-media&gt;\n  &lt;/ui-card-content&gt;\n  &lt;ui-card-actions&gt;\n    &lt;ui-card-icons&gt;\n      &lt;ui-icon-button :toggle=&quot;icon1&quot;&gt;&lt;/ui-icon-button&gt;\n      &lt;ui-icon-button :toggle=&quot;icon2&quot;&gt;&lt;/ui-icon-button&gt;\n      &lt;ui-icon-button icon=&quot;share&quot;&gt;&lt;/ui-icon-button&gt;\n    &lt;/ui-card-icons&gt;\n  &lt;/ui-card-actions&gt;\n&lt;/ui-card&gt;\n</code></pre> <pre><code class="language-js">export default {\n  data() {\n    return {\n      icon1: {\n        on: &#39;favorite&#39;,\n        off: &#39;favorite_border&#39;\n      },\n      icon2: {\n        on: &#39;bookmark&#39;,\n        off: &#39;bookmark_border&#39;\n      }\n    };\n  }\n};\n</code></pre> <pre><code class="language-css">.demo-card--photo {\n  width: 200px;\n}\n\n.demo-card__media {\n  background-image: url(&#39;../images/1-1.jpg&#39;);\n}\n\n.demo-card__media-content--with-title {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n.demo-card__media-title {\n  padding: 8px 16px;\n  background-image: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0) 0%,\n    rgba(0, 0, 0, 0.5) 100%\n  );\n  color: white;\n}\n</code></pre> '}}]);