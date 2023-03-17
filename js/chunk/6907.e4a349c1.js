"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[6907],{36907:function(n,t,o){o.r(t);t.default='<pre><code class="language-html">&lt;ui-button raised @click=&quot;open = true&quot;&gt;Show dialog&lt;/ui-button&gt;\n\n&lt;ui-dialog v-model=&quot;open&quot; @confirm=&quot;onConfirm&quot;&gt;\n  &lt;ui-dialog-title&gt;Use Google&#39;s location service?&lt;/ui-dialog-title&gt;\n  &lt;ui-dialog-content&gt;\n    &lt;p&gt;\n      Let Google help apps determine location. This means sending anonymous\n      location data to Google, even when no apps are running.\n    &lt;/p&gt;\n  &lt;/ui-dialog-content&gt;\n  &lt;ui-dialog-actions&gt;&lt;/ui-dialog-actions&gt;\n&lt;/ui-dialog&gt;\n</code></pre> <pre><code class="language-js">export default {\n  data() {\n    return {\n      open: false\n    };\n  },\n  methods: {\n    onConfirm(result) {\n      if (result) {\n        console.log(&#39;ok&#39;);\n      } else {\n        console.log(&#39;cancel&#39;);\n      }\n    }\n  }\n};\n</code></pre> '}}]);