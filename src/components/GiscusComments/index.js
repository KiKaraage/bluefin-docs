"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GiscusComments;
var react_1 = require("react");
var react_2 = require("@giscus/react");
var theme_common_1 = require("@docusaurus/theme-common");
function GiscusComments() {
    var colorMode = (0, theme_common_1.useColorMode)().colorMode;
    return (<div style={{ marginTop: '2rem', marginBottom: '4rem', minHeight: '400px' }}>
      <react_2.default id="comments" repo="ublue-os/bluefin" repoId="R_kgDOJHEu4g" category="Discussions" categoryId="DIC_kwDOJHEu4s4CtFFL" mapping="pathname" strict="0" reactionsEnabled="1" emitMetadata="0" inputPosition="top" theme={colorMode === 'dark' ? 'dark' : 'light'} lang="en" loading="lazy"/>
    </div>);
}
