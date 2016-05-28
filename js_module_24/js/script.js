function Model(data) {
    var self = this;
    self.data = data;// 
    
    self.addItem = function (item) {
        if(item.length === 0) {
            return;
        }
        
        self.data.push(item);
        return self.data;
        
    };
    
    self.removeItem = function (item) {
        var index = self.data.indexOf(item);
        
        if (index === -1) {
            return;
        }
        
        self.data.splice (index, 1);
        return self.data;
    };
    
}

function View(model) {
    var self = this;
    
    function init () {
        var wrapper = tmpl($('#wrapper__template').html());
        
        $('body').append(wrapper);
        self.elements = {
            input: $('.item--value'),
            addBtn: $('.item--add'),
            listContainer: $('.item__list')
        };
        
        self.renderList(model.data); 
    };
    
    self.renderList = function (data) {
        var list = tmpl($('#list__template').html(), {data:data});
        self.elements.listContainer.html(list);
    };
    
    init();
    
}

function Controller(model, view) {
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
}

$(function(){
    var firstToDoList = ['learn java script', 'learn html', 'make coffe'];
    var model = new Model(firstToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);
    
});

