"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlogPostItemWrapper;
var react_1 = require("react");
var BlogPostItem_1 = require("@theme-original/BlogPostItem");
function BlogPostItemWrapper(props) {
    return (<>
      <BlogPostItem_1.default {...props}/>
      {/* Giscus comments disabled */}
    </>);
}
