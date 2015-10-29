/* load all required modules.. */
require(
    [
     	// load required libs
     	'/openmrs/ms/uiframework/resource/openhmis.inventory/scripts/lib/restangular.min.js',
     	'/openmrs/ms/uiframework/resource/openhmis.inventory/scripts/lib/dirPagination.js',
     	
     	/* models */
        '/openmrs/ms/uiframework/resource/openhmis.inventory/scripts/reusable-components/models/generic.model.module.js',
        '/openmrs/ms/uiframework/resource/openhmis.inventory/scripts/reusable-components/models/generic.model.js',
        '/openmrs/ms/uiframework/resource/openhmis.inventory/scripts/institution/models/institution.model.js',
        
        /* reusable components */
        '/openmrs/ms/uiframework/resource/openhmis.inventory/scripts/reusable-components/js/search.box.js',
        '/openmrs/ms/uiframework/resource/openhmis.inventory/scripts/reusable-components/reusable-components.module.js',
        '/openmrs/ms/uiframework/resource/openhmis.inventory/scripts/reusable-components/restful-services/restful-services.module.js',
        '/openmrs/ms/uiframework/resource/openhmis.inventory/scripts/reusable-components/css/css.module.js',
        '/openmrs/ms/uiframework/resource/openhmis.inventory/scripts/reusable-components/restful-services/restful-settings.js',
        '/openmrs/ms/uiframework/resource/openhmis.inventory/scripts/reusable-components/restful-services/restful-service.js',
        '/openmrs/ms/uiframework/resource/openhmis.inventory/scripts/reusable-components/css/css-styles.js',
        '/openmrs/ms/uiframework/resource/openhmis.inventory/scripts/reusable-components/controllers/generic.manage.controller.module.js',
        '/openmrs/ms/uiframework/resource/openhmis.inventory/scripts/reusable-components/controllers/generic.manage.controller.js',
        '/openmrs/ms/uiframework/resource/openhmis.inventory/scripts/reusable-components/pagination/pagination.module.js',
        '/openmrs/ms/uiframework/resource/openhmis.inventory/scripts/reusable-components/pagination/pagination.service.js',
        
        
        /* manage institution components (controllers/filters etc) */
        '/openmrs/ms/uiframework/resource/openhmis.inventory/scripts/manage-institution/manage-institution.module.js',
        '/openmrs/ms/uiframework/resource/openhmis.inventory/scripts/manage-institution/factories/manage-institution-rest.factory.js',
        '/openmrs/ms/uiframework/resource/openhmis.inventory/scripts/manage-institution/controllers/manage-institution.controller.js',
    ],
    function () {
        angular.bootstrap(document, ['manageInstitutionApp']);
    });
