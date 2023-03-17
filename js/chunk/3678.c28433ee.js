"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[3678],{83678:function(e,t,n){n.r(t);t.default='<pre><code class="language-html">&lt;ui-autocomplete\n  v-model=&quot;keywords&quot;\n  outlined\n  :source=&quot;source&quot;\n  placeholder=&quot;Type &#39;a&#39;, then &#39;b&#39;&quot;\n  delay=&quot;500&quot;\n  remote\n  auto-focus\n  @search=&quot;onSearch&quot;\n&gt;&lt;/ui-autocomplete&gt;\n</code></pre> <pre><code class="language-js">export default {\n  data() {\n    return {\n      keywords: &#39;&#39;,\n      source: []\n    };\n  },\n  methods: {\n    async onSearch(keywords) {\n      let response = await this.$http.get(&#39;/api/search&#39;, {\n        params: {\n          text: keywords\n        }\n      });\n      let { data } = response;\n      // mock data\n      this.source = data[keywords] ? data[keywords] : [];\n    }\n  }\n};\n</code></pre> '}}]);