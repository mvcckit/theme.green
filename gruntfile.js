module.exports = function(grunt) {
	grunt.initConfig({
   		concat: {
			css: {
				src: [	
               'src/objects/alert.css',
               'src/objects/label.css',
               'src/objects/btn.css',
               'src/components/sect-header.css',
               'src/components/sect-banner.css',                  
               'src/components/btn-outline.css',                  
               'src/trumps/colors.css' 
				],					
				dest: 'builds/theme.full.css'
			}
   		},	
   		replace: {
   			dist: {
   				src: ['builds/theme.full.css'],
               dest: ['builds/theme.full.css'],
               replacements: [
                  {from: "$bg-header",     to: "#014433"},
                  {from: "$bg-banner",     to: "#026C51"},
                  {from: "$bg-label",      to: "#014433"},
                  {from: "$bg-alert",      to: "#D50F04"},                  
                  {from: "$bg-accent",     to: "#F2F2F2"},
                  {from: "$bg-btn-normal", to: "#026C51"},
                  {from: "$bg-btn-hover",  to: "#028060"},
                  {from: "$bg-btn-active", to: "#025842"},
               ]
   			}
   		},
   		cssmin: {
   			css: {
   				src: 'builds/theme.full.css',
   				dest: 'builds/theme.min.css'
   			},
   		}
	});

 	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

 	grunt.registerTask('default', ['concat', 'replace', 'cssmin']);
}