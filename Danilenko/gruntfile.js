// Обязательная обёртка
module.exports = function(grunt) {

  // Задачи
  grunt.initConfig({
    // Склеиваем
    concat: {
      dist: {
        src: ['styles/css-fonts/*.css'  ], // Все CSS-файлы в папке
       
        dest: 'styles/dist/fonts.css'
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Задача по умолчанию
  grunt.registerTask('default', ['concat',/*, 'uglify',*/'sass']);
};