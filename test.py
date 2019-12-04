import markdown
from markdown.extensions import codehilite


with open('./content/articles/Misc/creating-energy-band-diagrams-for-solar-cells-and-led.md') as f:
    data = f.read()

extension_configs= {
        'markdown.extensions.codehilite': {'css_class': 'highlight', 'linenums':'False'},
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {},
    }



html = markdown.markdown(data,extensions =['markdown.extensions.codehilite'],
                         extension_configs = extension_configs)

print(html)
