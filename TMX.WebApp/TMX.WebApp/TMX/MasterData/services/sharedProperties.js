angular
    .module('MasterData')
    .factory('sharedProperties', function () {
            var data =
                {
                    property: 'Master Data'
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