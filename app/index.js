'use strict';

const yeoman = require('yeoman-generator');

module.exports=yeoman.generators.Base.extend({
    constructor:function()
    {
        yeoman.generators.Base.apply(this,arguments);

        this.argument("text",{desc:"text to output to the output file",type:String,required:true});
        this.argument("output",{desc:"name of file to write to",type:String,required:true});
    },

    writing:function()
    {
        this.fs.write(this.output,this.text);
    }
});
