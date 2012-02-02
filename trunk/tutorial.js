$(function() {

    window.Card = Backbone.Model.extend({
        toString: function() {
            return 'Card: ' + this.get('id');
        }
    });

    window.Cards = Backbone.Collection.extend({
        model: Card,
        localStorage: new Store('cards')
    });

    window.cards = new Cards;





    window.CardView = Backbone.View.extend({

        tagName: 'li',

        template: _.template('<span class="card-name"></span>'),

        events: {},

        initialize: function() {
            this.model.bind('change', this.render, this);
            this.model.bind('destroy', this.remove, this);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });


    window.ProjectView = Backbone.View.extend({

        el: $('#project'),

        initialize: function() {
            this.model.cards.bind('add', this.addOne, this);
            this.model.cards.bind('all', this.render, this);
        },

        render: function() {
            this.$('#project-name').text(this.model.get('name'));
        }
    })

});




















var adios = new Project({
    name: 'Adios'
});

var cards = new Cards;

var projectView = new ProjectView({
    el: $('#project-title')[0],
    model: adios
});