"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[5587],{55587:function(t,e,i){i.r(e);e.default='<pre><code class="language-html">&lt;ui-list :type=&quot;2&quot; avatar&gt;\n  &lt;template v-for=&quot;(item, index) in items&quot;&gt;\n    &lt;ui-item-divider v-if=&quot;item === &#39;-&#39;&quot; :key=&quot;index&quot;&gt;&lt;/ui-item-divider&gt;\n    &lt;ui-item v-else :key=&quot;index&quot;&gt;\n      &lt;template #before=&quot;{ iconClass }&quot;&gt;\n        &lt;ui-icon :class=&quot;iconClass&quot;&gt;folder&lt;/ui-icon&gt;\n      &lt;/template&gt;\n      &lt;ui-item-text-content&gt;\n        &lt;ui-item-text1&gt;{{ item.text }}&lt;/ui-item-text1&gt;\n        &lt;ui-item-text2&gt;{{ item.subtext }}&lt;/ui-item-text2&gt;\n      &lt;/ui-item-text-content&gt;\n      &lt;ui-item-last-content&gt;\n        &lt;ui-icon&gt;info&lt;/ui-icon&gt;\n      &lt;/ui-item-last-content&gt;\n    &lt;/ui-item&gt;\n  &lt;/template&gt;\n&lt;/ui-list&gt;\n</code></pre> '}}]);