---
name: Areas Index
title: Rides
layout: page
permalink: /areas/
---

{% assign areas = site.areas %}

<div class="container-fluid">
    <div class="row">
        {% for area in areas %}
            <div class="col-md-6">
                <a href="{{ site.baseurl }}{{ area.url }}">
                    <img src="{{ site.baseurl }}/images/areas/icon/{{ area.imagePrefix }}.jpg" alt="{{area.name}}" class="img-fluid" />
                </a>
                <h4><a href="{{ site.baseurl }}{{ area.url }}">{{ area.name }}</a></h4>
            </div>
        {% endfor %}
    </div>
</div>