from django.conf.urls.defaults import patterns, include, url
from django.views.generic import TemplateView

urlpatterns = patterns('',
    url(r'project/?$', TemplateView.as_view(template_name='tutorial.html'), name='tutorial_view'),
)
