var Card = Backbone.Model.extend({
    toString: function() {
        return 'Card: ' + this.get('id');
    }
});

var Cards = Backbone.Collection.extend({
    model: Card
});

var Project = Backbone.Model.extend({
    toString: function() {
        return 'Project: ' + this.get('name');
    }
});

var Projects = Backbone.Collection.extend({
    model: Project
})