(function(){
    'use strict';

    angular
        .module('app.pagination', [])
        .filter('paginationFilter', function() {
            return function (input, per, page) {
                var out = [],
                    _i = 1,
                    _page = page,
                    _per = per;

                var _min = _per * _page;
                var _max = _min + _per;


                angular.forEach(input, function (val) {
                    if (_i > _min && _i <= _max)
                        out.push(val);
                    _i++;
                });

                return out;
            }
        })
})();