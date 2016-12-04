// Обязательная обёртка
module.exports = function (grunt) {

  // Задачи
  grunt.initConfig({
    // Склеиваем
   /*concat: {
      dist: {
        src: ['styles/css-icon/*.css'  ], // Все CSS-файлы в папке
       
        dest: 'styles/fonts.css'
      }
    },*/
      
    //Минификация
  cssmin:{
      target:{
          files:[{
              expand: true,
              cwd:'styles',
              src:['*.css','!*.min.css'],
              dest:'styles',
              ext:'.min.css'
          }]
      }
  },
  /* uglify: {
    my_target: {
        files:{
            'js/dest/script.min.js':['js/*.js']
        }
    }
   },*/
  uglify: {
      target:{
          files:[{
              expand: true,
              cwd:'js',
              src:['*.js','!*.min.js'],
              dest:'js',
              ext:'.min.js'
          }]
      }
  },
    
      
    sass: {
      dist: {
      files: [{
      expand: true,
      cwd:'styles',
      src:['*.scss'],
      dest: 'styles',
      ext: '.css'
      }]
        
      }
    },
   watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['styles/*.scss'],
      tasks: ['sass'],
    },
   }
  });

  // Загрузка плагинов, установленных с помощью npm install
  //grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // Задача по умолчанию
  grunt.registerTask('default', [/*'concat', */'uglify','sass','cssmin']);
};