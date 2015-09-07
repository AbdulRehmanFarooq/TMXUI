angular
    .module('Reports')
    .factory('sharedProperties', function () {
            var data =
                {
                    property: 'Reports'
                };
            
            return {
                getProperty: function () {
                    return data.property;
                },
                setProperty: function (property) {
                    data.property = property;
                }
            };
        
    });