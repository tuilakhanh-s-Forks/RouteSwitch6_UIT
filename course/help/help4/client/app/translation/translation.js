(function() {
    'use strict';

    angular
        .module('app.translation', [])
        .controller('Translation', Translation);

    function Translation(dataService) {
        var ctrl = this;
        ctrl.data = [];
        ctrl.textDir = '';

        ctrl.onblurPrev = function() {
            setTimeout(function() {
           // console.log(ctrl.data.contents.length +"::"+((ctrl.pagination.per * ctrl.pagination.page)));
            if(ctrl.data.contents.length == ((ctrl.pagination.per * ctrl.pagination.page))+1){
                window.parent.document.getElementById("overlay-help").getElementsByClassName("overlay-close-button")[0].focus();              
            }
            }, 20);
        },

        ctrl.onblurNext = function() {
            setTimeout(function() {
                if (ctrl.pagination.page > 0) {
                    document.getElementsByClassName("back-page-icon")[0].focus();
                } else {
                    window.parent.document.getElementById("overlay-help").getElementsByClassName("overlay-close-button")[0].focus();
                }
            }, 20);
        },

        ctrl.pagination = {
            per: 1,
            page: 0,
            nextPage: function() {
                ctrl.pagination.page += 1;
            },
            backPage: function() {
                ctrl.pagination.page -= 1;
            }
        };

        getTranslationData();

        function getTranslationData() {
            return dataService.getTranslationData().then(function(response) {
                ctrl.data = response;

                return ctrl.data;
            });
        }
    }
})();