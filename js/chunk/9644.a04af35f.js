"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[9644],{59644:function(e,t,o){o.r(t);t.default='<pre><code class="language-html">&lt;ui-switch\n  v-model=&quot;toggle1&quot;\n  input-id=&quot;basic-switch&quot;\n  :true-value=&quot;1&quot;\n  :false-value=&quot;0&quot;\n  @selected=&quot;balmUI.onChange(&#39;toggle1Label&#39;, $event)&quot;\n&gt;\n  {{ toggle1 }}\n&lt;/ui-switch&gt;\n&lt;label for=&quot;basic-switch&quot;&gt;{{ toggle1Label }}&lt;/label&gt;\n\n&lt;ui-switch\n  v-model=&quot;toggle2&quot;\n  input-id=&quot;basic-switch-custom&quot;\n  class=&quot;demo-switch--custom&quot;\n  true-value=&quot;on&quot;\n  false-value=&quot;off&quot;\n  @selected=&quot;balmUI.onChange(&#39;toggle2Label&#39;, $event)&quot;\n&gt;\n  {{ toggle2Label }} (custom color)\n&lt;/ui-switch&gt;\n&lt;label for=&quot;basic-switch-custom&quot;&gt;{{ toggle2 }} (custom color)&lt;/label&gt;\n</code></pre> <pre><code class="language-js">export default {\n  setup() {\n    const balmUI = useEvent();\n\n    return {\n      balmUI\n    };\n  },\n  data() {\n    return {\n      toggle1: false,\n      toggle1Label: 0,\n      toggle2: true,\n      toggle2Label: &#39;on&#39;\n    };\n  }\n};\n</code></pre> <pre><code class="language-scss">@use &#39;sass:color&#39;;\n@use &#39;@material/switch/switch-theme&#39; as switch-theme;\n@use &#39;@material/theme&#39; as theme-color;\n\n.demo-switch--custom {\n  $primary-color: theme-color.$red-500;\n  $_inverse-primary: color.scale($primary-color, $lightness: 75%);\n  $_primary-state-content: color.scale($primary-color, $blackness: 50%);\n\n  @include switch-theme.theme-styles(\n    (\n      selected-focus-handle-color: $_primary-state-content,\n      selected-focus-state-layer-color: $primary-color,\n      selected-focus-track-color: $_inverse-primary,\n      selected-handle-color: $primary-color,\n      selected-hover-handle-color: $_primary-state-content,\n      selected-hover-state-layer-color: $primary-color,\n      selected-hover-track-color: $_inverse-primary,\n      selected-pressed-handle-color: $_primary-state-content,\n      selected-pressed-state-layer-color: $primary-color,\n      selected-pressed-track-color: $_inverse-primary,\n      selected-track-color: $_inverse-primary\n    )\n  );\n}\n</code></pre> '}}]);