var ProjectView = Backbone.View.extend({

    initialize: function() {
        this.model.bind('change', this.render, this);
    },

    render: function() {
        this.$el.text(this.model.get('name'));
        return this;
    }
})