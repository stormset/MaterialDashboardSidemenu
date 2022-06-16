from django.conf.urls import include
from django.urls import path, re_path
from django.contrib import admin

import django_js_reverse.views
from rest_framework.routers import DefaultRouter

from common.routes import routes as common_routes

router = DefaultRouter()

routes = common_routes
for route in routes:
    router.register(route['regex'], route['viewset'], basename=route['basename'])

urlpatterns = [
    re_path(r'^trends|profile|applets', include("common.urls"), name="pages"),
    path("admin/", admin.site.urls, name="admin"),
    path("jsreverse/", django_js_reverse.views.urls_js, name="js_reverse"),

    path("api/", include(router.urls), name="api"),
]
