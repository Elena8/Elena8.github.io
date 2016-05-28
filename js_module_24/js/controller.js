define(
    'controller',
    ['jquery'],
        function() {

            return function Controller(model, view) {
    var self = this;
    
    view.elements.addBtn.on('click', addItem);
    view.elements.listContainer.on('click', '.item__delete', removeItem);
    
    function removeItem () {
    var item = $(this).attr('data-value');
    
    model.removeItem(item);
    view.renderList(model.data);
  }
    
    function addItem() {
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
    }
};
        });