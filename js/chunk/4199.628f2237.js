"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[4199],{4199:function(e,n,t){t.r(n);n.default='<pre><code class="language-html">&lt;ui-tree\n  v-model=&quot;selectedValue&quot;\n  :data=&quot;treeData&quot;\n  :data-format=&quot;dataFormat&quot;\n  :max-level=&quot;3&quot;\n  autoExpandSelected\n&gt;\n  &lt;p&gt;selectedValue: {{ selectedValue }}&lt;/p&gt;\n&lt;/ui-tree&gt;\n</code></pre> <pre><code class="language-js">export default {\n  data() {\n    return {\n      dataFormat: { label: &#39;title&#39;, value: &#39;key&#39; },\n      treeData: [\n        {\n          title: &#39;node1&#39;,\n          key: &#39;1&#39;,\n          children: [\n            {\n              title: &#39;node1-1&#39;,\n              key: &#39;1-1&#39;,\n              children: [\n                {\n                  title: &#39;node1-1-1&#39;,\n                  key: &#39;1-1-1&#39;,\n                  children: [\n                    {\n                      title: &#39;node1-1-1-1&#39;,\n                      key: &#39;1-1-1-1&#39;\n                    }\n                  ]\n                }\n              ]\n            },\n            {\n              title: &#39;node1-2&#39;,\n              key: &#39;1-2&#39;,\n              children: [\n                {\n                  title: &#39;node1-2-1&#39;,\n                  key: &#39;1-2-1&#39;\n                }\n              ]\n            }\n          ]\n        }\n      ],\n      selectedValue: &#39;1-1-1&#39;,\n    };\n  }\n};\n</code></pre> '}}]);