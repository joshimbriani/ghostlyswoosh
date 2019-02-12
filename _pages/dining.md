---
name: Index
type: dining
title: Dining
layout: page 
cover: dining.jpg
icon: dining.jpg
permalink: /dining/
---

{% assign diningRides = site.dining | group_by: 'area' %}

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            {% for area in diningRides %}
                <h2 id="{{ currentArea }}-ref">{{area.name}}</h2>
                <div class="container-fluid">
                    <div class="row">
                        {% for dining in area.items %}
                            <div class="col-md-6">
                                <a href="{{ site.baseurl }}{{ dining.url }}"><img src="{{ site.baseurl }}/images/dining/icon/{{ dining.imagePrefix }}.jpg" alt="{{dining.name}}" class="img-fluid" />
                                </a>
                                <h4><a href="{{ site.baseurl }}{{ dining.url }}">{{ dining.name }}</a></h4>
                            </div>
                        {% endfor %}
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
</div>