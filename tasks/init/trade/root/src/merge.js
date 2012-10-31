/**
 * @author {%= author_name %}
 * @date {%= grunt.template.today('yyyy-mm-dd') %}
 * !!cmd:compress=true
 */
/*merge start*/
(function(){
    ImportJavscript = {
        url:function(url){
            document.write('<script type="text/javascript" src="'+url+'"></scr'+'ipt>');
        }
    };
})();
/*merge end*/
ImportJavscript.url('http://style.china.alibaba.com/fdevlib/js/fdev-v4/core/fdev-min.js');
ImportJavscript.url('{%= name.js %}');
