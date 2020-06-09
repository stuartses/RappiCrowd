from django.contrib import admin
from .models import Countries
from .models import States
from .models import Cities
from .models import EducationLevels
from .models import Currencies
from .models import Docutypes
from .models import Workers
from .models import Investors
from .models import InvestorsPerWorkers


admin.site.register(Countries)
admin.site.register(States)
admin.site.register(Cities)
admin.site.register(EducationLevels)
admin.site.register(Currencies)
admin.site.register(Docutypes)
admin.site.register(Workers)
admin.site.register(Investors)
admin.site.register(InvestorsPerWorkers)
