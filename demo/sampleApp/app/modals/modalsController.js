new function () {
    
	var sampleApp = new base2.Package(this, {
		name:    'sampleApp',
		imports: 'miruken.mvc',
		exports: 'ModalsController'
	});

	eval(this.imports);

	var ModalsController = Controller.extend(MasterDetail, {
        getSelectedDetail: function(target){
            if(target === Person){
                return new Person({
                    firstName: 'Dalinar',
                    lastName:  'Kholin'
                });
            }
        },
		showWrappedModal: function () {
            ViewRegion(this.context.modal({
            	title: 'Hooray!', 
        		footer: true })
            ).present({
                templateUrl: 'app/modals/wrappedModal.html',
                controller:  'WrappedModalController as vm'
            });
		},
		showWrappedModalWithHeader: function () {
            ViewRegion(this.context.modal({
                title: 'Just a Header',
        		header: true})
            ).present({
                templateUrl: 'app/modals/wrappedModal.html',
                controller:  'WrappedModalController as vm'
            });
		},
		showWrappedModalWithFooter: function () {
            ViewRegion(this.context.modal({ footer: true }))
                .present({
                    templateUrl: 'app/modals/wrappedModal.html',
                    controller:  'WrappedModalController as vm'
                });
		},
		showFullModal: function () {
            ViewRegion(this.context.modal({ wrap: false }))
            	.present({
	                templateUrl: 'app/modals/fullModal.html',
	                controller:  'FullModalController as vm'
	            });
		},
		showSelfClosingModal: function () {
            ViewRegion(this.context.modal({ forceResponse: true }))
            	.present({
	                templateUrl: 'app/modals/selfClosingModal.html',
	                controller:  'SelfClosingModalController as vm'
	            });
		},
        showModalWithButtons: function () {
            ViewRegion(this.context.modal({ 
                title: 'Buttons',
                buttons: [
                    { text: 'Primary', css: 'btn-primary btn-xs'},
                    { text: 'Default', css: 'btn-default btn-sm'},
                    { text: 'Success', css: 'btn-success'},
                    { text: 'Warning', css: 'btn-warning'},
                    { text: 'Danger',  css: 'btn-danger btn-lg'},
                ]})
            ).present({ template: '<p>Demo adding buttons with classes.</p>' }).then(function (result) {
                    alert(format('Result: %1', result));
                });
        },
        showConfirmModal: function () {
            ViewRegion(this.context.modal({ 
                forceResponse: true,
                title: 'Confirm',
                buttons: [
                    'Yes',
                    'No'
                ]})
            ).present({ template: '<p>Are you sure you want to...?</p>' }).then(function (result) {
                alert(format('Result: %1', result));
            });
        },
        showModalReturningInput: function () {
            ViewRegion(this.context.modal({ 
                title: 'Input',
                buttons: [
                    { text: 'Ok', css: 'btn-sm btn-primary' },
                    'Cancel'
                ]})
            ).present({ 
                templateUrl: 'app/modals/modalReturningInput.html',
                controller:  'ModalReturningInputController as vm' }).then(function (result) {
                    if(result == 'Ok'){
                        alert(format('Hello, %1!', result));
                    }
                });
        },
        showModalUsingMasterDetail: function () {
            ViewRegion(this.context.modal({ 
                title: 'Person'
            })).present({ 
                templateUrl: 'app/modals/modalUsingMasterDetail.html',
                controller:  'ModalUsingMasterDetailController as vm' 
            });
        }
	});

	eval(this.exports);
    
}
