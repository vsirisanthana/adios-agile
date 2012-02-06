$(function() {

    var cardNum = 0;

    _.templateSettings = {
        interpolate : /\|\|(.+?)\|\|/g
    };

    window.Card = Backbone.Model.extend({
        defaults: {
            name: 'Unnamed Card',
            points: 0
        },
        toString: function() {
            return 'Card: ' + this.get('id');
        }
    });

    window.Cards = Backbone.Collection.extend({
        model: Card,
//        localStorage: new Store('cards')

        url: 'http://localhost:8001/cards'
    });

    window.Project = Backbone.Model.extend({
        defaults: {
            name: 'Unnamed'
        }
    });

    window.CardView = Backbone.View.extend({

        tagName: 'div',

        template: _.template($('.card-template').html()),

        events: {
            'click .card-destroy': 'clear'
        },

        initialize: function() {
            this.model.bind('change', this.render, this);
            this.model.bind('destroy', this.remove, this);

            this.$el.addClass('card');
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        clear: function() {
            this.model.destroy();
        }
    });


    window.ProjectView = Backbone.View.extend({

        events: {
            'click .add-card': 'addCard'
        },

        initialize: function() {
            this.model.on('change', this.render, this);

            this.model.get('cards').on('add', this.addOne, this);
//            this.model.get('cards').on('all', this.render, this);

            this.model.get('cards').fetch();

            this.render();
        },

        render: function() {
            this.$('#project-name').text(this.model.get('name'));

            this.model.get('cards').each(this.addOne);
        },

        addOne: function(card) {
            var cardView = new CardView({model: card});
            $('#cards').append(cardView.render().el);
        },

        addCard: function() {
            cardNum += 1;
            this.model.get('cards').add({name: 'New card' + cardNum});
        }
    });

    window.project = new Project({
        name: 'Adios',
        cards: new Cards()
    });

    window.projectView = new ProjectView({
        el: $('#project'),
        model: project
    })

});


