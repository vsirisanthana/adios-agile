from djangorestframework.resources import ModelResource
from models import Card


class CardResource(ModelResource):
    model = Card
    exclude = ()