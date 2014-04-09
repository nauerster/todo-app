module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        htmlhint: {
		    build: {
		        options: {
		            'tag-pair': true,
		            'tagname-lowercase': true,
		            'attr-lowercase': true,
		            'attr-value-double-quotes': true,
		            'doctype-first': true,
		            'spec-char-escape': true,
		            'id-unique': true,
		            'head-script-disabled': true,
		            'style-disabled': true
		        },
		        src: ['app/index.html']
		    }
		},
		less: {
			compile: {
				files: {
          			'app/css/bootstrap.css': 'bower_components/bootstrap/less/bootstrap.less',
          			'app/css/styles.css': 'app/less/styles.less'
       			}
			}
		},
		clean: {
			folder: 'app/js/app.min.js'
		},//clean - deletes files and prevents duplication
		concat: {
			vendor: {
				src: [
						'bower_components/angular/angular.min.js', 
						'bower_components/angular-resource/angular-resource.min.js', 
						'bower_components/angular-ui/angular-ui.min.js',
				],
				dest: 'app/js/vendor.min.js'
			},
			dist: {
				src: [
						'app/js/src/*.js',
				],
				dest: 'app/js/app.js'
			}
		},
		uglify: {
			target: {
				files: {
					'app/js/app.min.js': 'app/js/app.js'
				}
			}

		},
		watch: {
		    html: {
		        files: ['app/index.html'],
		        tasks: ['htmlhint']
		    },
		    js: {
		    	files: ['app/js/src/app.js'],
		    	tasks: ['concat:js', 'uglify']
		    },
		    less:{
		    	files: ['app/less/my-less.less'],
		    	tasks: ['less', 'concat:css']
		    }
		}
    });

    grunt.registerTask('default', ['htmlhint','less', 'concat', 'uglify', 'watch']);

};