from django.conf.urls.defaults import patterns, include, url
from djangorestframework.views import InstanceModelView, ListOrCreateModelView
from resources import CardResource

urlpatterns = patterns('',
    url(r'^cards/?$', ListOrCreateModelView.as_view(resource=CardResource), name='card_list_or_create_model_view'),
    url(r'^cards/(?P<id>\d+)/?$', InstanceModelView.as_view(resource=CardResource), name='card_instance_model_view'),
)
