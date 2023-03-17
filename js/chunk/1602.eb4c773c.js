"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[1602],{11602:function(t,e,u){u.r(e);e.default='<pre><code class="language-html">&lt;ui-list role=&quot;group&quot;&gt;\n  &lt;template v-for=&quot;(item, index) in items&quot;&gt;\n    &lt;ui-item-divider v-if=&quot;item === &#39;-&#39;&quot; :key=&quot;index&quot;&gt;&lt;/ui-item-divider&gt;\n    &lt;ui-item v-else :key=&quot;index&quot;&gt;\n      &lt;ui-item-text-content&gt;{{ item.text }}&lt;/ui-item-text-content&gt;\n      &lt;ui-item-last-content&gt;\n        &lt;ui-checkbox\n          v-model=&quot;checkedValues&quot;\n          :value=&quot;item.value&quot;\n          @click.stop\n        &gt;&lt;/ui-checkbox&gt;\n      &lt;/ui-item-last-content&gt;\n    &lt;/ui-item&gt;\n  &lt;/template&gt;\n&lt;/ui-list&gt;\n</code></pre> <pre><code class="language-js">export default {\n  data() {\n    return {\n      checkedValues: []\n    };\n  }\n};\n</code></pre> '}}]);