"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[3148],{33148:function(t,n,o){o.r(n);n.default='<pre><code class="language-html">&lt;!-- Using Material Icons --&gt;\n&lt;ui-icon-button v-model=&quot;value1&quot; :toggle=&quot;mdcIcon&quot;&gt; &lt;/ui-icon-button&gt;\n\n&lt;!-- Using Font Awesome --&gt;\n&lt;ui-icon-button v-model=&quot;value2&quot;&gt;\n  &lt;template #default=&quot;{ onClass, offClass }&quot;&gt;\n    &lt;i :class=&quot;[onClass, faIcon.on]&quot;&gt;&lt;/i&gt;\n    &lt;i :class=&quot;[offClass, faIcon.off]&quot;&gt;&lt;/i&gt;\n  &lt;/template&gt;\n&lt;/ui-icon-button&gt;\n\n&lt;!-- Using SVG Icons --&gt;\n&lt;ui-icon-button&gt;\n  &lt;template #default=&quot;{ onClass, offClass }&quot;&gt;\n    &lt;svg\n      xmlns=&quot;http://www.w3.org/2000/svg&quot;\n      width=&quot;24&quot;\n      height=&quot;24&quot;\n      viewBox=&quot;0 0 24 24&quot;\n      :class=&quot;onClass&quot;\n    &gt;\n      &lt;path\n        d=&quot;M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z&quot;\n      /&gt;\n    &lt;/svg&gt;\n    &lt;svg\n      xmlns=&quot;http://www.w3.org/2000/svg&quot;\n      width=&quot;24&quot;\n      height=&quot;24&quot;\n      viewBox=&quot;0 0 24 24&quot;\n      :class=&quot;offClass&quot;\n    &gt;\n      &lt;path\n        d=&quot;M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z&quot;\n      /&gt;\n    &lt;/svg&gt;\n  &lt;/template&gt;\n&lt;/ui-icon-button&gt;\n\n&lt;!-- Using Image Icons --&gt;\n&lt;ui-icon-button&gt;\n  &lt;template #default=&quot;{ onClass, offClass }&quot;&gt;\n    &lt;img src=&quot;/path/to/image1.png&quot; :class=&quot;onClass&quot; /&gt;\n    &lt;img src=&quot;/path/to/image2.png&quot; :class=&quot;offClass&quot; /&gt;\n  &lt;/template&gt;\n&lt;/ui-icon-button&gt;\n\n&lt;!-- Disabled Icons --&gt;\n&lt;ui-icon-button :toggle=&quot;mdcIcon&quot; disabled&gt;&lt;/ui-icon-button&gt;\n</code></pre> <pre><code class="language-js">const mdcIcon = {\n  on: &#39;favorite&#39;,\n  off: &#39;favorite_border&#39;\n};\n\nconst faIcon = {\n  on: &#39;fa fa-star&#39;,\n  off: &#39;fa fa-star-o&#39;\n};\n\nexport default {\n  data() {\n    return {\n      mdcIcon,\n      faIcon,\n      value1: false,\n      value2: true\n    };\n  }\n};\n</code></pre> '}}]);