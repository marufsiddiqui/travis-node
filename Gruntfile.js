module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    jslint : {
    	files : ['test.js'],
      exclude: [
        '**/ignore-*.js',
        'bananas.js'
      ],
      directives: { // example directives
        browser: true,
        unparam: true,
        todo: true,
        predef: [ // array of pre-defined globals
          'jQuery','alert'
        ]
      },
      options: {
        junit: 'out/junit.xml', // write the output to a JUnit XML
        log: 'out/lint.log',
        jslintXml: 'out/jslint_xml.xml',
        errorsOnly: true, // only display errors
        failOnError: false, // defaults to true
        shebang: true, // ignore shebang lines
        checkstyle: 'out/checkstyle.xml' // write a checkstyle-XML
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jslint');

  // Default task(s).
  grunt.registerTask('default', ['jslint']);
  grunt.registerTask('travis', ['jslint']);

};