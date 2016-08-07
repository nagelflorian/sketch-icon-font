module.exports = function(grunt) {
  var config = {
    shell: {
      exportIcons: {
        command: 'sketchtool export slices icons.sketch --output=output/icons/'
      }
    },
    webfont: {
      icons: {
        src: './output/icons/*.svg',
        dest: './output/fonts/',
        destCss: './output/css/',
        options: {
          font: 'icons',
          fontHeight: 96,
          normalize: false,
          ascent: 84,
          descent: 12,
          destHtml: './output',
          templateOptions: {
            classPrefix: 'icon-'
          }
        }
      }
    }
  }

  var tasks = [
    'shell:exportIcons',
    'webfont:icons'
  ]

  grunt.loadNpmTasks('grunt-shell')
  grunt.loadNpmTasks('grunt-webfont')

  if (grunt.file.exists('aws-keys.json')) {
    config.aws = grunt.file.readJSON('aws-keys.json')
    config.aws_s3 = {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>',
        secretAccessKey: '<%= aws.AWSSecretKey %>',
        region: 'eu-central-1',
        uploadConcurrency: 5
      },
      production: {
        options: {
          bucket: 'sketch-icon-font'
        },
        files: [
          {expand: true, cwd: 'output/css/', src: ['**'], dest: 'css/', action: 'upload'},
          {expand: true, cwd: 'output/fonts/', src: ['**'], dest: 'fonts/', action: 'upload'},
          {expand: true, cwd: 'output/icons/', src: ['**'], dest: 'icons/', action: 'upload'}
        ]
      }
    }
    tasks.push('aws_s3:production')
    grunt.loadNpmTasks('grunt-aws-s3')
  }

  grunt.initConfig(config)
  grunt.registerTask('default', tasks)
}
