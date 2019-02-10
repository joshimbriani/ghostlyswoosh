---
name: Shows
title: Shows
type: show
layout: page 
cover: shows.jpg
icon: shows.jpg
permalink: /shows/
---

{% assign areaShows = site.shows | group_by: 'area' %}

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            {% for area in areaShows %}
                <h2 id="{{ area.name }}-ref">{{area.name}}</h2>
                <div class="container-fluid">
                    <div class="row">
                        {% for show in area.items %}
                            <div class="col-md-6">
                                <a href="{{ site.baseurl }}{{ show.url }}"><img src="{{ site.baseurl }}/images/shows/icon/{{ show.icon }}" alt="{{show.name}}" class="img-fluid" />
                                </a>
                                <h4><a href="{{ site.baseurl }}{{ show.url }}">{{ ride.name }}</a></h4>
                            </div>
                        {% endfor %}
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
</div>