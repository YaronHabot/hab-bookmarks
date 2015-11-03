module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-messages/angular-messages.js',
      'app/components/**/*.js',
      'app/login/*_test.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    //browsers : ['Chrome'],
    browsers: ['PhantomJS'],
    
    hostname : process.env.IP,
    port : process.env.PORT,
    runnerPort : 0,

    plugins : [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],
    //Original            
    // plugins : [
    //         'karma-phantomjs-launcher',
    //         'karma-chrome-launcher',
    //         'karma-firefox-launcher',
    //         'karma-jasmine',
    //         'karma-junit-reporter'
    //         ],
            
    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
