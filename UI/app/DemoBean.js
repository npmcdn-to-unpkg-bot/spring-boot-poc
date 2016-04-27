System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DemoBean;
    return {
        setters:[],
        execute: function() {
            DemoBean = (function () {
                function DemoBean(id, num, str, d) {
                    this.id = id;
                    this.num = num;
                    this.str = str;
                    this.d = d;
                }
                return DemoBean;
            }());
            exports_1("DemoBean", DemoBean);
        }
    }
});
//# sourceMappingURL=DemoBean.js.map