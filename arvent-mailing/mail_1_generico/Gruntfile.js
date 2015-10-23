module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-mailgun');

  grunt.initConfig({
    mailgun: {
      mailer: {
        options: {
          key: 'key-4af35ac067f299bdb837e911c10a10ed',
          sender: 'postmaster@sandboxe00ba7c3f07f412090f1543525730bf2.mailgun.org',
          recipient: 'jordi.tarrida@binaria.com',
          subject: 'ARVent'
        },
        src: ['index.html']
      }
    }
  });

  grunt.registerTask('default',['mailgun']);


};