(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{444:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),o=(a(0),a(504)),i=a(508),c=a(509),l={id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},s={id:"version-5.x/getting-started",isDocsHomePage:!1,title:"Getting started",description:"What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation.",source:"@site/versioned_docs/version-5.x/getting-started.md",permalink:"/docs/getting-started",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/getting-started.md",version:"5.x",sidebar_label:"Getting started",sidebar:"version-5.x/docs",next:{title:"Hello React Navigation",permalink:"/docs/hello-react-navigation"}},u=[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Installation",id:"installation",children:[{value:"Installing dependencies into an Expo managed project",id:"installing-dependencies-into-an-expo-managed-project",children:[]},{value:"Installing dependencies into a bare React Native project",id:"installing-dependencies-into-a-bare-react-native-project",children:[]}]}],b={rightToc:u};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"What follows within the ",Object(o.b)("em",{parentName:"p"},"Fundamentals")," section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation."),Object(o.b)("h2",{id:"pre-requisites"},"Pre-requisites"),Object(o.b)("p",null,"If you're already familiar with JavaScript, React and React Native, then you'll be able to get moving with React Navigation quickly! If not, we highly recommend you to gain some basic knowledge first, then come back here when you're done."),Object(o.b)("p",null,"Here are some resources to help you out:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://reactnativeexpress.com/"}),"React Native Express")," (Sections 1 to 4)"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactjs.org/docs/hello-world.html"}),"Main Concepts of React")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactjs.org/docs/hooks-intro.html"}),"React Hooks")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactjs.org/docs/context.html"}),"React Context")," (Advanced)")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"Install the required packages in your React Native project:"),Object(o.b)(i.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install @react-navigation/native\n"))),Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @react-navigation/native\n")))),Object(o.b)("p",null,"React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app. Don't worry too much about this for now, it'll become clear soon enough! To frontload the installation work, let's also install and configure dependencies used by most navigators, then we can move forward with starting to write some code."),Object(o.b)("p",null,"The libraries we will install now are ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler"}),Object(o.b)("inlineCode",{parentName:"a"},"react-native-gesture-handler")),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-reanimated"}),Object(o.b)("inlineCode",{parentName:"a"},"react-native-reanimated")),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-screens"}),Object(o.b)("inlineCode",{parentName:"a"},"react-native-screens"))," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/th3rdwave/react-native-safe-area-context"}),Object(o.b)("inlineCode",{parentName:"a"},"react-native-safe-area-context"))," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-masked-view"}),Object(o.b)("inlineCode",{parentName:"a"},"@react-native-community/masked-view")),". If you already have these libraries installed and at the latest version, you are done here! Otherwise, read on."),Object(o.b)("h3",{id:"installing-dependencies-into-an-expo-managed-project"},"Installing dependencies into an Expo managed project"),Object(o.b)("p",null,"In your project directory, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view\n")),Object(o.b)("p",null,"This will install versions of these libraries that are compatible."),Object(o.b)("p",null,"You can now continue to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/hello-react-navigation"}),'"Hello React Navigation"')," to start writing some code."),Object(o.b)("h3",{id:"installing-dependencies-into-a-bare-react-native-project"},"Installing dependencies into a bare React Native project"),Object(o.b)("p",null,"In your project directory, run:"),Object(o.b)(i.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view\n"))),Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view\n")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: You might get warnings related to peer dependencies after installation. They are usually caused by incorrect version ranges specified in some packages. You can safely ignore most warnings as long as your app builds.")),Object(o.b)("p",null,"From React Native 0.60 and higher, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"}),"linking is automatic"),". So you ",Object(o.b)("strong",{parentName:"p"},"don't need to run")," ",Object(o.b)("inlineCode",{parentName:"p"},"react-native link"),"."),Object(o.b)("p",null,"If you're on a Mac and developing for iOS, you need to install the pods (via ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cocoapods.org/"}),"Cocoapods"),") to complete the linking."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx pod-install ios\n")),Object(o.b)("p",null,"To finalize installation of ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-gesture-handler"),", add the following at the ",Object(o.b)("strong",{parentName:"p"},"top")," (make sure it's at the top and there's nothing else before it) of your entry file, such as ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," or ",Object(o.b)("inlineCode",{parentName:"p"},"App.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import 'react-native-gesture-handler';\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: If you skip this step, your app may crash in production even if it works fine in development.")),Object(o.b)("p",null,"Now, we need to wrap the whole app in ",Object(o.b)("inlineCode",{parentName:"p"},"NavigationContainer"),". Usually you'd do this in your entry file, such as ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," or ",Object(o.b)("inlineCode",{parentName:"p"},"App.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import 'react-native-gesture-handler';\nimport * as React from 'react';\nimport { NavigationContainer } from '@react-navigation/native';\n\nexport default function App() {\n  return (\n    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>\n  );\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: When you use a navigator (such as stack navigator), you'll need to follow the installation instructions of that navigator for any additional dependencies. If you're getting an error \"Unable to resolve module\", you need to install that module in your project.")),Object(o.b)("p",null,"Now you are ready to build and run your app on the device/simulator."),Object(o.b)("p",null,"Continue to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/hello-react-navigation"}),'"Hello React Navigation"')," to start writing some code."))}p.isMDXComponent=!0},504:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(a),d=n,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},505:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},506:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){},isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});t.a=r},507:function(e,t,a){"use strict";var n=a(0),r=a(506);t.a=function(){return Object(n.useContext)(r.a)}},508:function(e,t,a){"use strict";a(25),a(21),a(20);var n=a(0),r=a.n(n),o=a(507),i=a(505),c=a(132),l=a.n(c),s=37,u=39;t.a=function(e){var t=e.block,a=e.children,c=e.defaultValue,b=e.values,p=e.groupId,d=Object(o.a)(),m=d.tabGroupChoices,f=d.setTabGroupChoices,h=Object(n.useState)(c),v=h[0],g=h[1];if(null!=p){var j=m[p];null!=j&&j!==v&&b.some((function(e){return e.value===j}))&&g(j)}var O=function(e){g(e),null!=p&&f(p,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":v===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return O(t)},onClick:function(){return O(t)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===v}))[0]))}},509:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);