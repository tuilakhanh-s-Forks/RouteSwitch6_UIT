(function(){
    'use strict';

    angular
        .module('app.core', ['ngAria'])
        .factory('dataService', dataService);

    function dataService($http) {
        var dataUrl = 'data/translation.json';

        var dataService = {
            getTranslationData: getTranslationData
        };

        return dataService;

        function getTranslationData() {
            return $http.get(dataUrl)
                        .then(getTranslationDataComplete)
                        .catch(function(error){
                            console.log('Issue retrieving data: ' + error);
                        });

            function getTranslationDataComplete(data) {
                return data.data;
            }
        }
    }
})();