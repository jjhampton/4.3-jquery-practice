this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul class=\"container\">\n</ul>\n";
},"useData":true});
this["JST"]["directories"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <li class=\"directory\">\n    <div class=\"directory-logo\">"
    + ((stack1 = ((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"icon","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "<span>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span></div>\n    <div class=\"directory-value\"><p>"
    + alias3((helpers.getCountTotal || (depth0 && depth0.getCountTotal) || alias1).call(depth0,depth0,{"name":"getCountTotal","hash":{},"data":data}))
    + "</p></div>\n  </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.menu : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  <li class=\"directory\">\n    <div class=\"directory-logo\"><i class=\"fa fa-sign-out\"></i><span>Sign Out</span></div>\n  </li>\n";
},"useData":true});
this["JST"]["subdirectory"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "  <li class=\"subdirectory\">\n    <div class=\"subdirectory-index\">\n      <span>0"
    + alias2((helpers.incrementer || (depth0 && depth0.incrementer) || alias1).call(depth0,(data && data.index),{"name":"incrementer","hash":{},"data":data}))
    + "</span>\n      <span>"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n    </div>\n    <div class=\"subdirectory-value\"><p>"
    + alias2(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"count","hash":{},"data":data}) : helper)))
    + "<p></div>\n  </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ol class=\"subdirectories\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.directory : depth0)) != null ? stack1.subdirectories : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ol>\n";
},"useData":true});