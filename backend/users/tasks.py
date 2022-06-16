from django.core import management

from greenguide import celery_app


@celery_app.task
def clearsessions():
    management.call_command('clearsessions')
